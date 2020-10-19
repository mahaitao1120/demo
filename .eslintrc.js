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
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-useless-escape': 0,
		'no-tabs': 0,
		'indent': 0,
		'object-curly-spacing': 0,
		'space-before-function-paren': 0
    },
  }