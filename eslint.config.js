import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';

const unusedVarsRule = [
	'error',
	{
		args: 'all',
		argsIgnorePattern: '^_',
		caughtErrors: 'all',
		caughtErrorsIgnorePattern: '^_',
	},
];

export default [
	{
		ignores: ['dist/**', '.astro/**'],
	},
	js.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				Response: 'readonly',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': unusedVarsRule,
		},
	},
	{
		files: ['**/*.astro'],
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': unusedVarsRule,
		},
	},
	{
		files: ['**/*.{js,mjs,ts,astro}'],
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/semi': ['error', 'always'],
		},
	},
];
