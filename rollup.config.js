import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const plugins = [
    resolve(),
    commonjs(),
    typescript(),
];

export default [
    {
        input: pkg.rollup.src,
        plugins,
        output: {
            name: pkg.rollup.umdName,
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
        },
    },
    {
        input: pkg.rollup.src,
        plugins,
        external: [],
        output: [
            { file: pkg.main, format: 'cjs', sourcemap: true },
            { file: pkg.module, format: 'es', sourcemap: true }
        ],
    }
];
