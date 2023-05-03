import { createRequestHandler } from "rakkasjs";
import {
  HydrationBoundary,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { uneval } from "devalue";
import React from "react";

export default createRequestHandler({
  createPageHooks() {
    let queries = Object.create(null);

    return {
      wrapApp(app) {
        const [queryClient] = React.useState(() => new QueryClient())
        
        return (
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={app.props}>
            {app}
            </HydrationBoundary>
          </QueryClientProvider>
        );
      },

      emitToDocumentHead() {
        return `<script>$TQD=Object.create(null);$TQS=data=>Object.assign($TQD,data);</script>`;
      },

      emitBeforeSsrChunk() {
        if (Object.keys(queries).length === 0) return "";

        // Emit a script that calls the global $TQS function with the
        // newly fetched query data.

        const queriesString = uneval(queries);
        queries = Object.create(null);
        return `<script>$TQS(${queriesString})</script>`;
      },
    };
  },
});
