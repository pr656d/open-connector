import type { ProviderDefinition } from "../../core/types.ts";

import { cloudflareDocsActions } from "./actions.ts";

const service = "cloudflare_docs";

export const provider: ProviderDefinition = {
  service,
  displayName: "Cloudflare Docs",
  categories: ["Developer Tools", "AI"],
  authTypes: ["no_auth"],
  auth: [{ type: "no_auth" }],
  homepageUrl: "https://developers.cloudflare.com",
  actions: cloudflareDocsActions,
};
