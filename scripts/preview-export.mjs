import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('out');
const port = Number(process.env.PORT || 3100);
const basePath = '/portfolio';
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/' || pathname === basePath) {
      response.writeHead(302, { Location: `${basePath}/` });
      response.end();
      return;
    }
    if (!pathname.startsWith(`${basePath}/`)) throw new Error('Outside base path');
    let file = resolve(root, pathname.slice(basePath.length + 1));
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Outside export');
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(301, { Location: `${pathname}/` });
        response.end();
        return;
      }
      file = resolve(file, 'index.html');
    }
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(await readFile(resolve(root, '404.html')).catch(() => 'Not found'));
  }
}).listen(port, '127.0.0.1', () => console.log(`Static export preview: http://127.0.0.1:${port}${basePath}/`));
