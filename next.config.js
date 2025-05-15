// Disable telemetry during the build
const { execSync } = require('child_process');
try {
  execSync('npx next telemetry disable');
} catch (error) {
  console.error('Failed to disable telemetry:', error);
}

module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  generateEtags: false,
  // Disable tracing
  experimental: {
    instrumentationHook: false,
    logging: {
      level: 'silent'
    }
  },
  // Headers cannot be used with output: export
  /*
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    },
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
  */
};
