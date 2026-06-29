import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://api.ongbut.edu.vn/api/v1";
const TRUSTED_ORIGIN = "https://ongbut.edu.vn";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const apiPath = path.join("/");
  const search = request.nextUrl.search;
  const url = `${API_BASE}/${apiPath}${search}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Referer": TRUSTED_ORIGIN,
        "Origin": TRUSTED_ORIGIN,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // cache 60s
    });

    const data = await res.json();
    return NextResponse.json(data, {
      status: res.status,
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120" },
    });
  } catch (err) {
    return NextResponse.json(
      { data: [], mess: { code: 0, description: "Proxy error" } },
      { status: 200 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const apiPath = path.join("/");
  const url = `${API_BASE}/${apiPath}`;
  const body = await request.json().catch(() => ({}));

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Referer": TRUSTED_ORIGIN,
        "Origin": TRUSTED_ORIGIN,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { mess: { code: 0, description: "Proxy error" } },
      { status: 200 }
    );
  }
}
