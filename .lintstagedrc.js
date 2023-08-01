module.exports = {
  '**/*.{json,css,scss,md}': ['prettier --write'],
  '**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'git add',
    'jest --bail --findRelatedTests',
  ],
}
