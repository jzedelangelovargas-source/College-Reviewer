(() => {
  const accountStatus = document.querySelector("#account-status");
  const openAccountButton = document.querySelector("#open-account");
  const signOutButton = document.querySelector("#account-sign-out");
  const accountDialog = document.querySelector("#account-dialog");
  const accountForm = document.querySelector("#account-form");
  const accountEmail = document.querySelector("#account-email");
  const accountPassword = document.querySelector("#account-password");
  const accountMessage = document.querySelector("#account-message");
  const accountSubmitButtons = [...accountForm.querySelectorAll("[data-account-action]")];
  let client;
  let session = null;
  let initialization;
  let syncTimer;

  function setStatus(message) {
    accountStatus.textContent = message;
  }

  function setMessage(message, isError = false) {
    accountMessage.textContent = message;
    accountMessage.className = `account-message${isError ? " is-error" : ""}`;
  }

  function updateAccountControls() {
    const signedIn = Boolean(session);
    accountStatus.textContent = signedIn
      ? `Progress sync on · ${session.user.email}`
      : "Progress is saved in this browser.";
    openAccountButton.hidden = signedIn;
    signOutButton.hidden = !signedIn;
  }

  async function loadProgress() {
    if (!session) return;
    setStatus("Loading your saved progress…");
    const { data, error } = await client
      .from("study_progress")
      .select("progress")
      .eq("user_id", session.user.id)
      .maybeSingle();
    if (error) throw error;
    window.KursoReviewerProgress.merge(data?.progress || {});
    setStatus(`Progress synced · ${session.user.email}`);
  }

  async function handleSession(nextSession) {
    const previousUserId = session?.user.id;
    session = nextSession;
    updateAccountControls();
    if (session && session.user.id !== previousUserId) {
      try {
        await loadProgress();
      } catch (error) {
        setStatus(`Could not load account progress: ${error.message}`);
      }
    }
  }

  async function initialize() {
    try {
      const response = await window.fetch("/api/auth-config", {
        headers: { Accept: "application/json" },
        cache: "no-store"
      });
      if (!response.ok) throw new Error("Account setup is not available on this hosting service.");
      const config = await response.json();
      if (config.configured !== true) {
        setStatus("Sign-up setup is needed; progress remains saved in this browser.");
        return;
      }
      const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
      client = createClient(config.url, config.anonKey);
      client.auth.onAuthStateChange((event, nextSession) => {
        if (event === "INITIAL_SESSION") return;
        session = nextSession;
        updateAccountControls();
        if (session) {
          window.setTimeout(() => {
            loadProgress().catch(error => setStatus(`Could not load account progress: ${error.message}`));
          }, 0);
        }
      });
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      await handleSession(data.session);
      if (!data.session) setStatus("Sign up or sign in to sync quiz progress across devices.");
    } catch (error) {
      setStatus(error instanceof Error
        ? `${error.message} Progress remains saved in this browser.`
        : "Account setup could not be loaded. Progress remains saved in this browser.");
    }
  }

  function initializeOnce() {
    if (!initialization) initialization = initialize();
    return initialization;
  }

  function saveProgress(progress) {
    if (!session || !client) return;
    window.clearTimeout(syncTimer);
    setStatus("Progress changed · syncing to your account…");
    const userId = session.user.id;
    const snapshot = JSON.parse(JSON.stringify(progress));
    syncTimer = window.setTimeout(async () => {
      if (!session || session.user.id !== userId) return;
      try {
        const { error } = await client.from("study_progress").upsert({
          user_id: userId,
          progress: snapshot,
          updated_at: new Date().toISOString()
        }, { onConflict: "user_id" });
        if (error) {
          setStatus(`Progress is saved here, but account sync failed: ${error.message}`);
          return;
        }
        setStatus(`Progress synced · ${session.user.email}`);
      } catch (error) {
        setStatus(`Progress is saved here, but account sync failed: ${error.message}`);
      }
    }, 700);
  }

  openAccountButton.addEventListener("click", async () => {
    setMessage("");
    if (!accountDialog.open) accountDialog.showModal();
    await initializeOnce();
    accountEmail.focus();
  });

  accountForm.addEventListener("submit", async event => {
    event.preventDefault();
    await initializeOnce();
    if (!client) {
      setMessage("Sign-up is not configured yet. Your quiz progress is still saved in this browser.", true);
      return;
    }
    const action = event.submitter?.getAttribute("data-account-action");
    const email = accountEmail.value.trim();
    const password = accountPassword.value;
    accountSubmitButtons.forEach(button => { button.disabled = true; });
    setMessage(action === "signup" ? "Creating your account…" : "Signing in…");
    try {
      const result = action === "signup"
        ? await client.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.href.split("#")[0] }
        })
        : await client.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (result.data.session) {
        await handleSession(result.data.session);
        accountDialog.close();
        setMessage("");
      } else if (action === "signup") {
        setMessage("Check your email to confirm your account, then sign in here.");
      } else {
        setMessage("Sign-in did not return a session. Check your email confirmation and try again.", true);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Account sign-in failed.", true);
    } finally {
      accountSubmitButtons.forEach(button => { button.disabled = false; });
    }
  });

  signOutButton.addEventListener("click", async () => {
    if (!client) return;
    signOutButton.disabled = true;
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      await handleSession(null);
      setStatus("Signed out · progress remains saved in this browser.");
    } catch (error) {
      setStatus(`Could not sign out: ${error.message}`);
    } finally {
      signOutButton.disabled = false;
    }
  });

  window.KursoProgressAccount = { save: saveProgress };
  updateAccountControls();
  initializeOnce();
})();
