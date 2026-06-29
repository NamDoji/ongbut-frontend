const EXTERNAL_API = "https://api.ongbut.edu.vn/api/v1";
const TRUSTED_ORIGIN = "https://ongbut.edu.vn";

/**
 * Server-side: call external API directly with trusted Referer header
 * Client-side: call /api/proxy (same-origin, avoids CORS 403)
 */
function getApiBase(): string {
  if (typeof window === "undefined") {
    // SSR on Vercel — relative URLs don't work, use full external URL
    return EXTERNAL_API;
  }
  // Browser — use proxy route to avoid CORS 403
  return process.env.NEXT_PUBLIC_API_BASE_URL || "/api/proxy";
}

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const isServer = typeof window === "undefined";
  const base = getApiBase();
  const url = `${base}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // On server: add trusted Referer so backend accepts the request
        ...(isServer
          ? { Referer: TRUSTED_ORIGIN, Origin: TRUSTED_ORIGIN }
          : {}),
        ...(options?.headers || {}),
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      // Return empty response instead of throwing — prevents SSR crash
      return { data: [], mess: { code: 0, description: `HTTP ${res.status}` } } as T;
    }

    return res.json() as Promise<T>;
  } catch {
    // Network error — return safe empty fallback, never throw during SSR
    return { data: [], mess: { code: 0, description: "Network error" } } as T;
  }
}
