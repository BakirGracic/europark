import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'no-console': 'error',
			'no-alert': 'error',
			'react-hooks/exhaustive-deps': 'off',
			'react/no-multi-comp': 'error',
			'react/no-unstable-nested-components': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-wrapper-object-types': 'off',
			'@typescript-eslint/no-require-imports': 'off'
		}
	}
];

export default eslintConfig;
