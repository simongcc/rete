/**
 * export final object with name `Rete` by loading src into it by using babel
 * 
 * eg. Rete.Engine
 * 
 * eg. Rete.default, because in src/index.ts, putting all member objects into `default` without giving a name
 *
 */
export default {
    input: 'src/index.ts',
    name: 'Rete',
    babelPresets: [
        require('@babel/preset-typescript')
    ],
    extensions: ['.js', '.ts']
}