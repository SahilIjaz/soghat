import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["m.media-amazon.com", "newdilpasand.com"], // <-- whitelist this domain
  },
};

export default nextConfig;
