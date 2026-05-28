#!/usr/bin/env node
import prompts from 'prompts';
import tiged from 'tiged';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import colors from 'colors';

colors.setTheme({
  info: 'cyan',
  success: 'green',
  meta: 'grey',
  error: 'red',
});

const TEMPLATES = {
  html: 'aksellsor/aksell-ui-template-html',
  astro: 'aksellsor/aksell-ui-template-astro',
};

const response = await prompts(
  [
    {
      type: 'text',
      name: 'name',
      message: 'Project name',
      validate: (v) => (v.trim().length > 0 ? true : 'Name required'),
    },
    {
      type: 'select',
      name: 'template',
      message: 'Template',
      choices: [
        { title: 'HTML  — zero-build, CDN styles', value: 'html' },
        { title: 'Astro — full Astro + @aksell/ui', value: 'astro' },
      ],
    },
  ],
  {
    onCancel: () => {
      console.log('\nCancelled.'.meta);
      process.exit(0);
    },
  }
);

const { name, template } = response;
if (!name || !template) process.exit(0);
const dest = join(process.cwd(), name);

console.log(`\nScaffolding ${name.info} from ${template.meta} template...`);

const emitter = tiged(TEMPLATES[template], { disableCache: true });

try {
  await emitter.clone(dest);
} catch (err) {
  console.error(`\nFailed to fetch template: ${err.message}`.error);
  process.exit(1);
}

// Replace {{project-name}} placeholders
const filesToPatch =
  template === 'html'
    ? ['package.json', 'index.html', 'README.md']
    : ['package.json', 'src/pages/index.astro', 'README.md'];

for (const file of filesToPatch) {
  const filePath = join(dest, file);
  try {
    const content = readFileSync(filePath, 'utf8');
    writeFileSync(filePath, content.replaceAll('{{project-name}}', name));
  } catch {
    // file may not exist in all templates — skip silently
  }
}

console.log(`\n${'Done!'.success} Project created in ${('./' + name).info}\n`);

if (template === 'html') {
  console.log('Next steps:'.meta);
  console.log(`  cd ${name}`);
  console.log(`  open index.html`);
} else {
  console.log('Next steps:'.meta);
  console.log(`  cd ${name}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
}

console.log('');
