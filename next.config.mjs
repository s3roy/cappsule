import path from 'path';

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
