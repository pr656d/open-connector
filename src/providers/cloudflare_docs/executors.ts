import type { ExecutionContext, ProviderExecutors } from "../../core/types.ts";
import type { CloudflareDocsActionContext } from "./runtime.ts";

import { defineProviderExecutors } from "../provider-runtime.ts";
import { cloudflareDocsActionHandlers } from "./runtime.ts";

const service = "cloudflare_docs";

export const executors: ProviderExecutors = defineProviderExecutors<CloudflareDocsActionContext>({
  service,
  handlers: cloudflareDocsActionHandlers,
  createContext(context: ExecutionContext, fetcher: typeof fetch): CloudflareDocsActionContext {
    return {
      fetcher,
      signal: context.signal,
    };
  },
});
