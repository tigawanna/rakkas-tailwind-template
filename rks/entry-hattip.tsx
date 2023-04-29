import { createRequestHandler } from "rakkasjs";
// import { cookie } from "@hattip/cookie";

export default createRequestHandler({
  middleware: {
    // HatTip middleware to be injected

    // before the page routes handler.
    // beforePages: [cookie()],
    beforePages: [],
    // HatTip middleware to be injected

    // after the page routes handler but
    // before the API routes handler
    beforeApiRoutes: [],
    // HatTip middleware to be injected
    // after the API routes handler but
    // before the 404 handler
    beforeNotFound: [],
  },

  createPageHooks(requestContext) {
    return {
      emitBeforeSsrChunk() {
        // Return a string to emit into React's
        // SSR stream just before React emits a
        // chunk of the page.
        return "";
      },

      emitToDocumentHead() {
        // Return a string to emit some HTML into the
        // document's head.
        return "";
      },

      extendPageContext(pageContext) {
        // Add properties to the page context,
        // especially to pageContext.locals.
        // Extensions added here will only be
        // available on the server-side.
      },

      wrapApp(app) {
        // Wrap the Rakkas application in some provider
        // component (only on the server).
        return app;
      },

      wrapSsrStream(stream) {
        const { readable, writable } = new TransformStream({
          transform(chunk, controller) {
            // You can transform the chunks of the
            // React SSR stream here.
            controller.enqueue(chunk);
          },
        });

        // stream.pipeThrough(writable);

        return readable;
      },
    };
  },
});
