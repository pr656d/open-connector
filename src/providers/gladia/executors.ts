import type { CredentialValidators } from "../../core/types.ts";

import { validateGladiaCredential } from "./runtime.ts";

export { executors } from "./runtime.ts";

export const credentialValidators: CredentialValidators = {
  async apiKey(input, { fetcher, signal }) {
    return validateGladiaCredential(input, fetcher, signal);
  },
};
