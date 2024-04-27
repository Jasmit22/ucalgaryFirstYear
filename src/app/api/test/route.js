export async function GET() {
  //   const res = await fetch("");
  //   const data = await res.json();
  const data = {
    message: "localhost:3000/api/test",
  };

  const returnData = { data, message: "localhost:3000/api/test" };

  return Response.json({ returnData });
}
