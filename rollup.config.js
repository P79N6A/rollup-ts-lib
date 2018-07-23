import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
    {
        input: pkg.rollup.src,
        output: {
            name: pkg.rollup.umdName,
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    {
        input: pkg.rollup.src,
        external: [],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }
];
