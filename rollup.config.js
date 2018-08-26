import packageJson from './package.json'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    name: 'ChakraPlugin',
    file: packageJson.main,
    format: 'umd',
    sourcemap: true,
    globals: { '@chakrajs/plugin-interface': 'Plugin' }
  },
  external: [ '@chakrajs/plugin-interface' ],
  plugins: [
    json(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['env', { modules: false }], 'stage-3'],
      plugins: ['external-helpers']
    }),
    uglify()
  ]
}
