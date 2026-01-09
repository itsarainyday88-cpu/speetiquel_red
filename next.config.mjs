/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Optional: useful for static exports or if image optimization quotas are a concern, but Next.js standard is fine too. Let's keep default but maybe allow external logic if needed. Actually standard is fine.
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
