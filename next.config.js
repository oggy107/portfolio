/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "dev.to",
            },
            {
                protocol: "https",
                hostname: "*.dev.to",
            },
        ],
    },
    experimental: {
        serverMinification: false,
    },
};

module.exports = nextConfig;
