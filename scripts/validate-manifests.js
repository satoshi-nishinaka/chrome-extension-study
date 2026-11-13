const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const readManifest = (browser) => {
  const root = path.join(projectRoot, 'dist', browser);
  const manifestPath = path.join(root, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const referencedFiles = [
    manifest.action.default_popup,
    manifest.action.default_icon,
    ...Object.values(manifest.icons),
    ...manifest.content_scripts.flatMap((contentScript) => [
      ...contentScript.js,
      ...(contentScript.css ?? []),
    ]),
  ];

  for (const referencedFile of referencedFiles) {
    assert(
      fs.existsSync(path.join(root, referencedFile)),
      `${browser}: ${referencedFile} が成果物にありません`
    );
  }

  return manifest;
};

const chromeManifest = readManifest('chrome');
assert(
  chromeManifest.background.service_worker === 'js/background.js',
  'chrome: service_worker の設定が不正です'
);
assert(
  chromeManifest.background.scripts === undefined,
  'chrome: background.scripts を含めないでください'
);

const firefoxManifest = readManifest('firefox');
assert(
  firefoxManifest.background.scripts?.includes('js/background.js'),
  'firefox: background.scripts の設定が不正です'
);
assert(
  firefoxManifest.background.service_worker === undefined,
  'firefox: service_worker を含めないでください'
);
assert(
  firefoxManifest.browser_specific_settings?.gecko?.id,
  'firefox: Add-on ID がありません'
);

console.log('Chrome / Firefox manifest validation passed.');
