import { NextResponse } from "next/server";
import { locations } from "./marketplace";

function normalizeForCompare(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function middleware(req) {
  const url = req.nextUrl.clone();
  const p = url.pathname;

  // Redirect API sitemap requests to metadata sitemap
  try {
    if (p === "/api/sitemap" || p === "/api/sitemap/" || p.startsWith("/api/sitemap/")) {
      url.pathname = "/sitemap.xml";
      return NextResponse.redirect(url, 307);
    }
  } catch (err) {
    // ignore and continue
  }

  // Normalize /in/<slug> requests to canonical hyphenated slugs
  try {
    if (p === "/in" || p.startsWith("/in/")) {
      const slugPart = p.replace(/^\/in\/?/, "").replace(/\/$/, "");
      // if no slug, continue
      if (!slugPart) return NextResponse.next();

      let slugDecoded = slugPart;
      try {
        slugDecoded = decodeURIComponent(slugPart.replace(/\+/g, ' '));
      } catch (e) {
        // fallback to raw
        slugDecoded = slugPart;
      }

      const normalizedIncoming = normalizeForCompare(slugDecoded);

      // Find best match from locations list
      let matched = null;
      for (const loc of Array.isArray(locations) ? locations : []) {
        if (normalizeForCompare(loc) === normalizedIncoming) {
          matched = loc;
          break;
        }
      }

      const finalBase = matched || slugDecoded;
      const canonicalSlug = normalizeForCompare(finalBase).replace(/\s+/g, '-');

      // If incoming path is not canonical, redirect to canonical
      if (p !== `/in/${canonicalSlug}`) {
        url.pathname = `/in/${canonicalSlug}`;
        return NextResponse.redirect(url, 307);
      }
    }
  } catch (err) {
    // ignore and continue
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/sitemap.xml", "/in/:path*"],
};
