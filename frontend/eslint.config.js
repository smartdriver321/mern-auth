import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'no-undef': 'error',
			'no-unused-vars': 'error',
			'no-duplicate-imports': 'warn',
			'require-await': 'warn',
			'react/prop-types': 'off',
		},
	},
]
