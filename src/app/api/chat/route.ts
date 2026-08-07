export const runtime = "edge";

const DEMO_REPLY =
  "This is a demo of hybrid search over your documents. Query routed to Weaviate with dense + sparse vectors, top-k chunks retrieved, and answer synthesized. Full RAG SaaS is at herman-rag-saas.vercel.app — results here are simulated.";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const last = messages[messages.length - 1];
  const q = last?.content?.trim() || "your question";

  const text = `You asked: "${q}".\n\n${DEMO_REPLY}`;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (const chunk of text.split(/(?<=\s)/)) {
        controller.enqueue(encoder.encode(chunk));
        await new Promise((r) => setTimeout(r, 30));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}