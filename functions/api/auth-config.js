function jsonResponse(body) {
  return Response.json(body, {
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export async function onRequestGet({ env }) {
  const url = typeof env.SUPABASE_URL === "string" ? env.SUPABASE_URL.trim() : "";
  const anonKey = typeof env.SUPABASE_ANON_KEY === "string" ? env.SUPABASE_ANON_KEY.trim() : "";
  let validUrl = false;
  try {
    validUrl = new URL(url).protocol === "https:";
  } catch {
    validUrl = false;
  }
  return jsonResponse({
    configured: validUrl && anonKey.length > 0,
    url: validUrl ? url.replace(/\/+$/, "") : "",
    anonKey: validUrl ? anonKey : ""
  });
}
