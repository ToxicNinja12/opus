// Product images are served by the CMS and optimised by next/image.
const cms = process.env.CMS_URL ? new URL(process.env.CMS_URL) : null;
const cmsIsLocal =
  cms && ["localhost", "127.0.0.1", "[::1]"].includes(cms.hostname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: cms ? [new URL("/api/images/**", cms)] : [],
    // next/image refuses to fetch from private addresses by default. That is
    // the right default in production; it only needs lifting when the CMS
    // runs on this machine during development.
    dangerouslyAllowLocalIP: Boolean(cmsIsLocal),
  },
};

export default nextConfig;
