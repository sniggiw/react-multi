// dev.js
import { execSync } from 'child_process';

const project = process.argv[2];

if (!project) {
    console.error('Please specify a project: pnpm run dev projectName');
    process.exit(1);
}

const command = `cross-env PROJECT=${project} vite`;

execSync(command, { stdio: 'inherit' });
