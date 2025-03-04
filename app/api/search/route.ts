import { getPostsBySearchQuery } from "@/lib/search";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  const searchResults = await getPostsBySearchQuery(query);

  if (searchResults.length === 0) {
    return NextResponse.json({ message: "No results found" }, { status: 404 });
  }

  return NextResponse.json(searchResults, { status: 200 });
}
