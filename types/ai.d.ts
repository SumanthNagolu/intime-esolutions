declare module 'ai' {
  type CompletionHandler = (completion: string) => void | Promise<void>;

  type FinalHandler = (
    final: unknown
  ) => void | Promise<void>;

  type StreamCallbacks = {
    onCompletion?: CompletionHandler;
    onFinal?: FinalHandler;
  };

  export function OpenAIStream(
    response: AsyncIterable<unknown>,
    callbacks?: StreamCallbacks
  ): ReadableStream<Uint8Array>;

  export class StreamingTextResponse extends Response {
    constructor(body: ReadableStream<Uint8Array>, init?: ResponseInit);
  }
}

