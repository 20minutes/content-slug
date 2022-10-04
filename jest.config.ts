import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!tests/*'],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text-summary'],
  // because TS generate some files in `.build` and jest might take them without that option
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
}
export default config
