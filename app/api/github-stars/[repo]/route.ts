import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

interface GitHubRepoResponse {
  stargazers_count: number;
}

// One day in seconds: 24 hours * 60 minutes * 60 seconds
const ONE_DAY = 24 * 60 * 60;

const fetchGitHubStars = cache(async (repo: string): Promise<number> => {
  const url = `https://api.github.com/repos/timtbdev/${repo}`;

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };

  const response = await fetch(url, { headers, next: { revalidate: ONE_DAY } });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("GitHub API Error:", errorText);
    throw new Error("GitHub API request failed");
  }

  const data: GitHubRepoResponse = await response.json();
  return data.stargazers_count;
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ repo: string }> },
) {
  const { repo } = await params;

  if (!repo) {
    return NextResponse.json(
      { error: "Repository is required" },
      { status: 400 },
    );
  }

  try {
    const stars = await fetchGitHubStars(repo);
    return NextResponse.json({ stars });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export const config = {
  runtime: "experimental-edge",
};
