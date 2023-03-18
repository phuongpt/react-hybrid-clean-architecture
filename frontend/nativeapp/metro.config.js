/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const thirdPartyPath = path.resolve(__dirname + '/../core');  // Path of your local module

const thirdParty = {
  'core': thirdPartyPath,
};

const watchFolders = [thirdPartyPath];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    thirdParty
  },
  watchFolders,
};