/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ['react-github-calendar', 'react-activity-calendar'],
};

export default nextConfig;
