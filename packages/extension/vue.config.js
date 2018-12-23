module.exports = {
  pages: {
    'standalone/standalone': {
      entry: 'src/standalone/standalone.js',
      filename: 'index.html',
      title: 'New Tab',
    },
  },
  pluginOptions: {
    browserExtension: {
      registry: undefined,
      components: {
        background: true,
        standalone: true,
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: false,
      componentOptions: {
        background: {
          entry: 'src/background.js',
        },
      },
    },
  },
};