import { FC, JSX } from "react";

interface Props {
  text: string;
  query: string;
}

const HighlightMatches: FC<Props> = ({ text, query }) => {
  if (!query.trim()) return text;

  const searchWords = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length >= 3);
  if (searchWords.length === 0) return text;

  const tokens = text.split(/(\s+|[.,!?;])/g);

  return tokens.map((token, i) => {
    const tokenLower = token.trim().toLowerCase();
    if (!tokenLower) return token;

    let highlightedToken: JSX.Element | string = token;
    let shouldHighlight = false;

    searchWords.forEach((searchWord) => {
      const exactIndex = tokenLower.indexOf(searchWord);
      if (exactIndex !== -1) {
        shouldHighlight = true;
        if (token.length > searchWord.length) {
          const prefix = token.slice(0, exactIndex);
          const match = token.slice(exactIndex, exactIndex + searchWord.length);
          const suffix = token.slice(exactIndex + searchWord.length);
          highlightedToken = (
            <>
              {prefix}
              <mark className="rounded bg-blue-500 px-0.5 text-white">
                {match}
              </mark>
              {suffix}
            </>
          );
        }
        return;
      }

      for (let i = 0; i <= tokenLower.length - searchWord.length; i++) {
        const substring = tokenLower.slice(i, i + searchWord.length);
        if (levenshtein(substring, searchWord) <= 1) {
          shouldHighlight = true;
          const prefix = token.slice(0, i);
          const match = token.slice(i, i + searchWord.length);
          const suffix = token.slice(i + searchWord.length);
          highlightedToken = (
            <>
              {prefix}
              <mark className="rounded bg-blue-500 px-0.5 text-white">
                {match}
              </mark>
              {suffix}
            </>
          );
          return;
        }
      }
    });

    return shouldHighlight ? (
      typeof highlightedToken === "string" ? (
        <mark key={i} className="rounded bg-blue-500 px-0.5 text-white">
          {token}
        </mark>
      ) : (
        <span key={i}>{highlightedToken}</span>
      )
    ) : (
      token
    );
  });
};

export default HighlightMatches;
