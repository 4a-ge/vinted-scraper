import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules", "**/dist", ".idea", ".git", ".cache"],
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
