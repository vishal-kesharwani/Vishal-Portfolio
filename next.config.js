const baseConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
};

module.exports =
  process.env.NODE_ENV === "production"
    ? {
        ...baseConfig,
        trailingSlash: true,
        generateEtags: false,
        output: "export",
        distDir: "out",
      }
    : baseConfig;
