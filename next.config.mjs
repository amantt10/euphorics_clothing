/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: isDevelopment ? undefined : 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
