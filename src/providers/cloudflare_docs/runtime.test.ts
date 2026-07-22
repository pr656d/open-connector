import { describe, expect, it } from "vitest";
import { getPagesToWorkersMigrationGuide, searchCloudflareDocumentation } from "./runtime.ts";

describe("Cloudflare Docs runtime", () => {
  describe("searchCloudflareDocumentation", () => {
    it("rejects empty or missing query parameter", async () => {
      await expect(searchCloudflareDocumentation({}, {})).rejects.toThrow("query parameter is required");
      await expect(searchCloudflareDocumentation({ query: "   " }, {})).rejects.toThrow("query parameter is required");
    });
  });

  describe("getPagesToWorkersMigrationGuide", () => {
    it("is defined as a function", () => {
      expect(typeof getPagesToWorkersMigrationGuide).toBe("function");
    });
  });
});
