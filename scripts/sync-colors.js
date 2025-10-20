const fs = require('fs');
const path = require('path');

const IN_PATH = 'src/app/styles/_colors.scss';
const OUT_PATH = 'src/shared/styles/colors.ts';

const scss = fs.readFileSync(IN_PATH, 'utf8');
const rootMatch = scss.match(/:root\s*{([\s\S]*?)}/);

if (!rootMatch) {
    console.error(`:root { ... } not found in \`${IN_PATH}\``);

    process.exit(3);
}

const body = rootMatch[1];
const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
const entries = [];
let m;

function toKey(name) {
    const parts = name.split('-').filter(Boolean);
    let number = '';

    if (parts.length > 1 && /^[0-9]+$/.test(parts[parts.length - 1])) {
        number = parts.pop();
    }

    const words = parts.map((w, i) =>
        i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1),
    );

    return words.join('') + (number ? number : '');
}

while ((m = re.exec(body)) !== null) {
    const name = m[1].trim();

    entries.push({ name, key: toKey(name) });
}

const out = [
    '/** Generated via `utils:sync-colors`. Do not edit manually. */',
    'export const colors = {',
    ...entries.map((e) => `    ${e.key}: 'var(--${e.name})',`),
    '};',
    '',
];

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, out.join('\n'), 'utf8');
