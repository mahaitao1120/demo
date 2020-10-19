module.exports = {
  root: true,

  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/standard'
  ],

  plugins: ['vue', 'prettier'],

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    //强制使用单引号
    "quotes": ['error', 'single'],
    //强制不使用分号结尾
    "semi": ['error', 'never'],
    'prettier/prettier': 'off',
    'no-console': 'off',
    //  'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/order-in-components': 'off',
    'vue/html-self-closing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-quotes': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-unused-components': 'off',
    //  "vue/no-use-v-if-with-v-for": "off",
    'vue/no-v-html': 'off',
    'no-unexpected-multiline': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-template-shadow': 'off',
    'no-undef': 'off',
    'no-constant-condition': 'off',
    'no-case-declarations': 'off',
    'vue/valid-template-root': 'off'
  },
}