/**
 * Verify release version alignment between package.json and CHANGELOG head.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const packagePath = path.join(root, 'package.json');
const changelogPath = path.join(root, 'CHANGELOG.md');

function fail(message) {
    console.error(`[verify-release-version] ${message}`);

    process.exit(1);
}

function readPackageVersion() {
    const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const version = String(package.version ?? '').trim();

    if (!version) {
        fail('package.json version is empty');
    }

    return version;
}

function readChangelogHeadVersion() {
    const content = fs.readFileSync(changelogPath, 'utf8');
    const match = content.match(/^##\s+\[([0-9]+\.[0-9]+\.[0-9]+)\]/m);

    if (!match) {
        fail('CHANGELOG.md: no version section found (expected ## [X.Y.Z] - ...)');
    }

    return match[1];
}

function main() {
    const packageVersion = readPackageVersion();
    const changelogVersion = readChangelogHeadVersion();

    if (packageVersion !== changelogVersion) {
        fail(`package.json (${packageVersion}) !== CHANGELOG head (${changelogVersion})`);
    }

    console.log(
        `[verify-release-version] ok: package.json=${packageVersion}, CHANGELOG=${changelogVersion}`,
    );
}

main();
