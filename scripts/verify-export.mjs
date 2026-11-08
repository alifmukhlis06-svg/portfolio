import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const root = resolve('out');
const basePath = '/portfolio';
const routes = ['', 'projects', 'projects/internpilih', 'projects/getinthecar', 'projects/zakat', 'beyond-code'];
for (const route of routes) await stat(resolve(root, route, 'index.html'));
await stat(resolve(root, '.nojekyll'));
const home = await readFile(resolve(root, 'index.html'), 'utf8');
assert.ok(home.includes('hero-title'), 'Export must contain the portfolio, not the README');
assert.ok(!home.includes('Jekyll SEO tag'), 'Jekyll output is not the application');

let references = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.txt')) {
      const parts = relative(root, file).split(sep);
      const segmentStart = parts.findIndex(part => part.startsWith('__next.'));
      if (segmentStart >= 0 && segmentStart < parts.length - 1) {
        const flattened = resolve(root, ...parts.slice(0, segmentStart), parts.slice(segmentStart).join('.'));
        assert.ok((await readFile(file)).equals(await readFile(flattened)), `Missing or mismatched flat RSC segment: ${flattened}`);
      }
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      for (const match of html.matchAll(/(?:src|href)="([^"<>]+)"/g)) {
        const ref = match[1].replaceAll('&amp;', '&');
        if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(ref)) continue;
        const url = new URL(ref, `https://example.test${basePath}/${file.slice(root.length + 1).split(sep).join('/')}`);
        assert.ok(url.pathname.startsWith(`${basePath}/`), `Unprefixed reference in ${file}: ${ref}`);
        let target = resolve(root, decodeURIComponent(url.pathname.slice(basePath.length + 1)));
        assert.ok(target === root || target.startsWith(root + sep), `Invalid path: ${ref}`);
        try {
          if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
          await stat(target);
        } catch {
          throw new Error(`Missing exported target in ${file}: ${ref}`);
        }
        references++;
      }
      // HTML should remain readable before hydration or when JS is unavailable.
      assert.ok(!/style="[^"]*opacity:0(?:;|")/.test(html), `Initially hidden content in ${file}`);
    }
  }
}
await walk(root);
console.log(`Static export verified: ${routes.length} application routes, .nojekyll, and ${references} local asset/navigation references.`);
