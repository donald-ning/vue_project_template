module.exports = {
  extends: [
    'stylelint-config-standard', // 'fistylelint#Wh14
    'stylelint-config-html/vue', // IF vue * template H#1
    'stylelint-config-standard-scss', // M#stylelint scsshlift
    'stylelint-config-recommended-vue/scss', // Ali vue f scss
    'stylelint-config-recess-order', // Mistylelint cssat 5r hitt,
    'stylelint-config-prettier', // Ifstylelint filprettier#%
  ],
  overrides: [
    {
      files: ['**/* (scss|css|vue|html) '],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*. (html|vue) '],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   *  null=>
   * always =›
   */
  rules: {
    'value-keyword-case': null, // # css PW# v-bind, TR#
    'no-descending-specificity': null, // 11И 5Ш
    'function-url-quotes': 'always', // EntH URL M75 "always&WE5
    'no-empty-source': null, // *4120
    'selector-class-pattern': null, // ХИД027KКА
    'property-no-unknown': null, // MiKAn#t (true 不允许)
    'block-opening-brace-space-before': 'always',
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], //
      },
    ],
  },
}
