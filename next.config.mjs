/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true, 
        optimizeServerReact: true, // Server component optimization
      },
};

export default nextConfig;
