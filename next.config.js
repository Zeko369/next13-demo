/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  compiler: { styledComponents: true },
};

module.exports = nextConfig;
