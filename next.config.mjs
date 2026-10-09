// Product content and images come from the CMS. Its address is read once,
// here, when the site is built.
const cms = process.env.CMS_URL ? new URL(process.env.CMS_URL) : null;
const cmsIsLocal =
  cms && ["localhost", "127.0.0.1", "[::1]"].includes(cms.hostname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bake the address into the server code at build time, so the deployed site
  // works wherever the host only provides it during the build (as Netlify
  // does for values in netlify.toml).
  env: cms ? { CMS_URL: cms.origin } : {},
  images: {
    remotePatterns: cms ? [new URL("/api/images/**", cms)] : [],
    // next/image refuses to fetch from private addresses by default. That is
    // the right default in production; it only needs lifting when the CMS
    // runs on this machine during development.
    dangerouslyAllowLocalIP: Boolean(cmsIsLocal),
  },
};

export default nextConfig;
