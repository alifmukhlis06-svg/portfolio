// next/link handles basePath automatically; plain public asset URLs need it too.
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/') || path.startsWith('//') || !basePath || path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}
