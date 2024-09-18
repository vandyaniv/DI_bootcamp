import pluginNode from 'eslint-plugin-node';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      node: pluginNode,
    },
    rules: {
      'node/no-missing-require': 'off',
    },
  },
];
