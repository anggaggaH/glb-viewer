module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'linebreak-style': 0,
		'no-console': 'warn',
		'no-debugger': 'warn',
		'max-len': ['error', 180],
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'object-curly-newline': ['error', { multiline: true }],
		'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
		'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
		'react/no-unknown-property': ['error', { ignore: ['css', 'snapshot', 'sx'] }],
		'max-classes-per-file': ['error', { ignoreExpressions: true, max: 3 }],
		'prefer-destructuring': 'off',
		'react/destructuring-assignment': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'object-curly-newline': 'off',
	},
};
