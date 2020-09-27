module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "test", // a utility folder
    __dirname, // the root directory
  ],
};
