
export async function GET() {
  return Response.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
}