const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./jest.tsconfig");

module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "jest.tsconfig.json",
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
