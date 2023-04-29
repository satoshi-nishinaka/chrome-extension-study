import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.ts.?$': 'ts-jest',
  },
  transformIgnorePatterns: [],
};

export default config;
