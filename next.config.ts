import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Configuration pour Docker avec output standalone
  output: 'standalone',
};

export default nextConfig;
