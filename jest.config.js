module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
  },
  setupFiles: ['./jest/setup.js', 'jest-date-mock'],
};
