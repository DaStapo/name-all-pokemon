const fsPromises = require('fs').promises;
const { minify } = require('terser');
const JavaScriptObfuscator = require('javascript-obfuscator');


async function start() {
  await bundleFiles();
  await minifyAndObfuscateBundle();
}

async function bundleFiles() {
  try {
    const filesToConcatenate = ['pokemon.js', 'quiz.js', 'front.js'];
    const concatenatedContents = [];

    for (const file of filesToConcatenate) {
      const filePath = `./js/${file}`;
      const fileContent = await fsPromises.readFile(filePath, 'utf-8');
      concatenatedContents.push(fileContent);
    }

    const bundleContent = concatenatedContents.join('\n');
    const bundlePath = './bundles/bundle.js';

    await fsPromises.mkdir('./bundles', { recursive: true });
    await fsPromises.writeFile(bundlePath, bundleContent, 'utf-8');

    console.log('Bundle created successfully at', bundlePath);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function minifyAndObfuscateBundle() {
  try {
    const bundlePath = './bundles/bundle.js';
    const bundleContent = await fsPromises.readFile(bundlePath, 'utf-8');

    // Minify the code first
    const minifiedBundle = await minify(bundleContent, {
      mangle: true, // Obfuscate variable and function names
      compress: true, // Remove whitespace and optimize code
    });

    // Obfuscate the code using javascript-obfuscator
    const obfuscationResult = JavaScriptObfuscator.obfuscate(minifiedBundle.code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.5,
      numbersToExpressions: false,
      simplify: true,
      shuffleStringArray: true,
      splitStrings: false,
      stringArray: false,
      stringArrayEncoding: ['base64'], // Use 'base64' encoding
    });

    // Overwrite the original bundle.js with the obfuscated code
    await fsPromises.writeFile(bundlePath, obfuscationResult.getObfuscatedCode(), 'utf-8');

    console.log('Bundle minified and obfuscated successfully at', bundlePath);
  } catch (error) {
    console.error('Error:', error);
  }
}

start();
