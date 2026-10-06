import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";

import { CMS_TAG } from "@/lib/cms";

function matches(given, expected) {
  const a = Buffer.from(String(given ?? ""));
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

// Called by the CMS after every change. Drops everything fetched from the CMS
// so the next visitor gets fresh pages.
export async function POST(request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || !matches(request.headers.get("x-revalidate-secret"), secret))
    return Response.json({ revalidated: false }, { status: 401 });

  revalidateTag(CMS_TAG, { expire: 0 });
  return Response.json({ revalidated: true });
}
