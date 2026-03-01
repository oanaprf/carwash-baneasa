import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/carwash-baneasa",
  assetPrefix: "/carwash-baneasa",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
