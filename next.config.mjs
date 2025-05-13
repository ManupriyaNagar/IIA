

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // This generates folders with index.html inside them
  experimental: {
  
  },
};

export default nextConfig;