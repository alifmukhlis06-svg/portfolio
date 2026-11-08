import { copyFile, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

// Next.js 16 can retain Windows separators in exported RSC segment filenames.
// Supply the flat names requested by the client without modifying Next itself.
// https://github.com/vercel/next.js/issues/85374
const root = resolve('out');
let normalized = 0;

async function copySegments(directory, destination, prefix) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = resolve(directory, entry.name);
    if (entry.isDirectory()) await copySegments(file, destination, `${prefix}.${entry.name}`);
    else if (entry.name.endsWith('.txt')) {
      const target = resolve(destination, `${prefix}.${entry.name}`);
      const existing = await readFile(target).catch(error => {
        if (error.code !== 'ENOENT') throw error;
        return null;
      });
      if (existing && !existing.equals(await readFile(file))) throw new Error(`Conflicting exported segment: ${target}`);
      if (!existing) { await copyFile(file, target); normalized++; }
    }
  }
}

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === '_next') continue;
    const child = resolve(directory, entry.name);
    if (entry.name.startsWith('__next.')) await copySegments(child, directory, entry.name);
    else await walk(child);
  }
}
await walk(root);
console.log(`Static export finalized: ${normalized} Windows RSC segment filenames normalized.`);
