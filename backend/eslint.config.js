import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			'no-undef': 'error',
			'no-unused-vars': 'error',
			'require-await': 'warn',
			'no-confusing-arrow': 'warn',
			'no-duplicate-imports': 'warn',
		},
	},
]
