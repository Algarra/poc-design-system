import { dirname, join } from 'path';
import { StorybookConfig } from '@storybook/web-components-vite';
import { PluginOption } from 'vite';

const config: StorybookConfig = {
  stories: ['../libs/**/src/**/*.stories.ts'],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@chromatic-com/storybook',
  ],

  framework: '@storybook/web-components-vite',

  viteFinal: async (config) => {
    let plugins: PluginOption[] = [];
    if (config.plugins) {
      plugins = [...config.plugins];
    }
    return {
      ...config,
      plugins: [...plugins],
    };
  },

  docs: {},
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
