module.exports = {
  setupFilesAfterEnv: ['./config/jestSetup.js'],
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFiles: ['jest-webextension-mock'],
  testPathIgnorePatterns: ['/node_modules/', '/build', '/coverage'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    'src/*.{js,jsx}',
    '!src/libs/**',
    '!src/assets/**',
    '!src/_locales/**',
    '!src/**/*test.{js,jsx}',
    '!src/*test.{js,jsx}',
    '!node_modules/**',
    '!build/**',
    '!coverage/**',
  ],
};
