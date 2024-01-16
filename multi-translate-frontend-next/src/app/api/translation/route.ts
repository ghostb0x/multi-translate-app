import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const url = 'https://google-translator9.p.rapidapi.com/v2';

type InnerText = Record<"translatedText", string>
type APIResponse = Record<"data", Record<"translations", InnerText[]>>

export async function GET(request: NextRequest) {

    const query = request.nextUrl.searchParams;

    // Ensure the API key is defined to avoid possible null overload error
    const apiKey = process.env.RAPID_API_KEY;
    if (!apiKey) {
        console.error('RAPID_API_KEY is not defined.');
        return new NextResponse(JSON.stringify({ error: 'Server configuration error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
        },
        body: JSON.stringify({
            q: query.get('q'),
            source: query.get('source'),
            target: query.get('target'),
            format: 'text',
        }),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json() as APIResponse;
        return new NextResponse(JSON.stringify(data), {
            status: response.status,
            statusText: response.statusText,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: 'An error occurred' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}