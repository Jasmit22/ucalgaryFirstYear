export async function GET() {
  const data = {
    message: "localhost:3000/api/",
  };

  return Response.json({ data });
}
