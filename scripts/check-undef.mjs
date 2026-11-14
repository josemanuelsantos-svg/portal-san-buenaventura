import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const SRC_DIR = path.resolve(process.cwd(), 'src');

const GLOBALS = new Set([
  'window', 'document', 'navigator', 'localStorage', 'sessionStorage',
  'console', 'alert', 'confirm', 'prompt', 'fetch', 'URL', 'URLSearchParams',
  'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'requestAnimationFrame',
  'Math', 'Date', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean',
  'Set', 'Map', 'WeakSet', 'WeakMap', 'Promise', 'Symbol', 'RegExp', 'Error',
  'TypeError', 'ReferenceError', 'parseInt', 'parseFloat', 'isNaN', 'isFinite',
  'encodeURIComponent', 'decodeURIComponent', 'encodeURI', 'decodeURI',
  'Intl', 'CustomEvent', 'Event', 'KeyboardEvent', 'HTMLElement', 'Blob', 'File',
  'FileReader', 'ClipboardItem', 'Audio', 'Image', 'Notification', 'SpeechSynthesisUtterance',
  'speechSynthesis', 'React', 'undefined', 'Infinity', 'NaN', 'globalThis',
  'AudioContext', 'webkitAudioContext', 'crypto', 'performance', 'history', 'location',
  'screen', 'matchMedia', 'ResizeObserver', 'IntersectionObserver', 'AbortController',
  'TextEncoder', 'TextDecoder', 'caches'
]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(js|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(SRC_DIR);
let errorCount = 0;

for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx']
    });
  } catch (err) {
    console.error(`[SYNTAX ERROR] ${path.relative(process.cwd(), file)}: ${err.message}`);
    errorCount++;
    continue;
  }

  const reported = new Set();
  traverse(ast, {
    ReferencedIdentifier(nodePath) {
      const { name } = nodePath.node;
      if (GLOBALS.has(name)) return;
      if (nodePath.scope.hasBinding(name)) return;
      // Ignore JSX intrinsic lowercase tags like <div>, <span>, etc.
      if (
        nodePath.parentPath.isJSXOpeningElement() &&
        nodePath.parentPath.node.name === nodePath.node &&
        /^[a-z]/.test(name)
      ) {
        return;
      }
      if (
        nodePath.parentPath.isJSXClosingElement() &&
        nodePath.parentPath.node.name === nodePath.node &&
        /^[a-z]/.test(name)
      ) {
        return;
      }
      const loc = nodePath.node.loc?.start;
      const key = `${name}:${loc?.line ?? 0}`;
      if (reported.has(key)) return;
      reported.add(key);
      console.error(
        `[NO-UNDEF] ${path.relative(process.cwd(), file)}:${loc?.line ?? '?'}:${loc?.column ?? '?'} -> '${name}' no está definido ni importado`
      );
      errorCount++;
    }
  });
}

if (errorCount > 0) {
  console.error(`\nSe encontraron ${errorCount} error(es).`);
  process.exit(1);
}

console.log(`check-undef: ${files.length} archivos verificados sin referencias indefinidas.`);
