const withNx = require('@nrwl/next/plugins/with-nx');
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withNx({
  nx: {
    svgr: true,
  },
  ...withAntdLess({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true, // Because less-loader@5
      },
    },
    cssLoaderOptions: {
      modules: {
        localIdentName:
          process.env.MODE === 'production'
            ? 'spl-[hash:base64:5]'
            : 'spl-[local]__[hash:base64:5]',
      },
    },
    env: {
      NEXT_PUBLIC_SERVER_URL: process.env.NEXTAUTH_URL,
      NEXT_PUBLIC_APP_MODE: process.env.APP_MODE,
    },
    webpack(config, { dev, isServer }) {
      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }

      return config;
    },
    rewrites() {
      return [
        {
          source: '/graphql',
          destination: 'http://localhost:3000/graphql',
        },
      ];
    },
    ...withBundleAnalyzer({}),
  }),
});
