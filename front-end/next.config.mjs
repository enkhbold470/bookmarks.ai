/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.instagram.com",
        pathname: "**",
      },
    ],

    unoptimized: true,
  },
};

export default nextConfig;
