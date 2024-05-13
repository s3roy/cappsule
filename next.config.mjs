const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Set up an alias for the 'src' directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // Return the updated config
    return config;
  },
};

export default nextConfig;
