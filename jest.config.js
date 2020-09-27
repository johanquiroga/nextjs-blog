module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  globals: {
    "ts-jest": {
      tsConfig: "jest.tsconfig.json",
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "test", // a utility folder
    __dirname, // the root directory
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
