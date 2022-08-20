import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      enabled: true,
      all: true,
      reporter: ["text", "lcov", "cobertura"],
      include: ["src/handlers"],
    },
    setupFiles: "dotenv/config",
  },
});
