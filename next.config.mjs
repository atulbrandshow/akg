/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['csip-image.blr1.digitaloceanspaces.com'],
  },
  transpilePackages: ['swiper'],
};

export default nextConfig;
