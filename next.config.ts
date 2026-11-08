import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,
  // basePath also prefixes Next's JS/CSS; assetPrefix is for a separate CDN.
  env: { NEXT_PUBLIC_BASE_PATH: '/portfolio' },
};
export default config;
