import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Регистрируем трансформеры от Tokens Studio
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens.json'], // Путь к JSON, который пушит Figma
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
      }]
    },
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/ts/',
      files: [{
        destination: 'tokens.ts',
        format: 'javascript/es6',
      }]
    }
  }
});

await sd.buildAllPlatforms();