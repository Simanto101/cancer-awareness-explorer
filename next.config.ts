import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? "/cancer-awareness-explorer" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["*.monkeycode-ai.live"],
};

export default nextConfig;
