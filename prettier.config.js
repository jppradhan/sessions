module.exports = {
  printWidth: 100,
  useTabs: false,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  overrides: [
    {
      files: '*.jsx',
      options: {
        trailingComma: 'all'
      }
    }
  ]
};