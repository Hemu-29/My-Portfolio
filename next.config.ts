import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "My-Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
};

export default nextConfig;
