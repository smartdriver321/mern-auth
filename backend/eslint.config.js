import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			'no-undef': 'error',
			'no-unused-vars': 'error',
			'no-duplicate-imports': 'warn',
			'require-await': 'warn',
		},
	},
]
