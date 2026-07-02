import type { ResolvedCredential } from "../core/types.ts";

import { describe, expect, it } from "vitest";
import { resolveMailgunApiBaseUrl } from "./mailgun/runtime.ts";
import { resolveMakeZoneUrl } from "./make/runtime.ts";

describe("provider credential URL guards", () => {
  it("restricts Mailgun API base URLs to official hosts", () => {
    expect(resolveMailgunApiBaseUrl(undefined)).toBe("https://api.mailgun.net");
    expect(resolveMailgunApiBaseUrl("https://api.eu.mailgun.net/v3")).toBe("https://api.eu.mailgun.net");

    expect(() => resolveMailgunApiBaseUrl("https://example.com")).toThrow("apiBaseUrl must be");
    expect(() => resolveMailgunApiBaseUrl("https://api.mailgun.net:444")).toThrow(
      "apiBaseUrl must not include credentials, port, query, or hash",
    );
  });

  it("restricts Make zone URLs to official make.com hosts", () => {
    expect(resolveMakeZoneUrl(makeCredential(undefined))).toBe("https://eu1.make.com");
    expect(resolveMakeZoneUrl(makeCredential("https://us1.make.com/org/123"))).toBe("https://us1.make.com");

    expect(() => resolveMakeZoneUrl(makeCredential("https://example.com"))).toThrow(
      "Make zoneUrl must use an official make.com host",
    );
    expect(() => resolveMakeZoneUrl(makeCredential("https://127.0.0.1"))).toThrow(
      "Make zoneUrl must use an official make.com host",
    );
    expect(() => resolveMakeZoneUrl(makeCredential("https://eu1.make.com:444"))).toThrow(
      "Make zoneUrl must not include credentials, port, query, or hash",
    );
  });
});

function makeCredential(zoneUrl: string | undefined): Extract<ResolvedCredential, { authType: "api_key" }> {
  return {
    authType: "api_key",
    apiKey: "test-api-key",
    values: zoneUrl === undefined ? {} : { zoneUrl },
    profile: {
      accountId: "test",
      displayName: "Test",
      grantedScopes: [],
    },
    metadata: {},
  };
}
