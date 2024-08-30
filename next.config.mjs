/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wolverine-portfolio.s3.amazonaws.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
