import type { ProviderDefinition } from "../../core/types.ts";

import { lovableActions } from "./actions.ts";

const service = "lovable";

export const provider: ProviderDefinition = {
  service,
  displayName: "Lovable",
  categories: ["AI", "Developer Tools"],
  authTypes: ["api_key"],
  auth: [
    {
      type: "api_key",
      label: "API Key",
      placeholder: "lov_...",
      description:
        "Lovable API key used with the Lovable-API-Key header. You can generate an API key in your Lovable settings.",
    },
  ],
  homepageUrl: "https://lovable.dev",
  actions: lovableActions,
};
