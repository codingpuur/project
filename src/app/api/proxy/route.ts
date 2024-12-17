import axios from "axios";
import { NextRequest } from "next/server.js";



export async function GET(request: NextRequest) {
    try {
        // HTTP request to external URL
        const response = await axios.get("http://159.89.167.56/api/historical-data/?symbol=copper");
        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        // console.error("Error in proxy route:", error.message);
        return new Response(
            JSON.stringify({ error: "Failed to fetch data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
