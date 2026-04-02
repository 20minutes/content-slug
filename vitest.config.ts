import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['tests/**'],
      reporter: ['html', 'text-summary'],
      reportsDirectory: './coverage',
    },
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
})
