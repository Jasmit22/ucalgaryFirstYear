import axios from "axios";

/*
 * EXAMPLE USAGE:
 * http://localhost:3000/api/transit/get-route?fromPlace=51.081244860182046,%20-114.00623692976038&toPlace=51.08257975812788,%20-114.1356959741007
 */

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fromPlace = searchParams.get("fromPlace");
  const toPlace = searchParams.get("toPlace");
  const apiKey = process.env.TRANSIT_API_KEY;

  if (!fromPlace || !toPlace) {
    return new Response(
      JSON.stringify({
        message: "Missing required query parameters: fromPlace and toPlace",
      }),
      {
        status: 400,
      }
    );
  }

  const url = "https://external.transitapp.com/v3/otp/plan";

  try {
    const response = await axios.get(url, {
      params: {
        fromPlace,
        toPlace,
      },
      headers: {
        apiKey: apiKey,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching transit data:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
