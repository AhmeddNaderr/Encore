import * as esbuild from 'esbuild';
await esbuild.build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: 'es2020', outfile: 'public/game.js', legalComments: 'none', logLevel: 'warning' });
console.log('built');
