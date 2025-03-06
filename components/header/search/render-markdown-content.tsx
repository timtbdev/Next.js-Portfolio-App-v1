import React, { FC, JSX } from "react";

interface Props {
  content: string;
}

const RenderMarkdownContent: FC<Props> = ({ content }) => {
  const patterns = [
    {
      regex: /```(?:.*\n)?([\s\S]*?)```/g,
      render: (_: string, code: string) => (
        <code className="rounded bg-gray-300 px-1.5 py-0.5 font-mono whitespace-pre-wrap text-black">
          {code.trim()}
        </code>
      ),
    },
    {
      regex: /`([^`]+)`/g,
      render: (_: string, code: string) => (
        <code className="rounded bg-gray-300 px-1.5 py-0.5 font-mono text-black">
          {code}
        </code>
      ),
    },
    {
      regex: /\[([^\]]+)\]\(([^)]+)\)/g,
      render: (_: string, text: string, href: string) => (
        <span className="inline font-medium text-black underline underline-offset-4">
          {text}
        </span>
      ),
    },
    {
      regex: /\*\*([^*]+)\*\*/g,
      render: (_: string, text: string) => (
        <b className="font-semibold text-black">{text}</b>
      ),
    },
    {
      regex: /(?<=\s)_([^_]+)_(?=\s)/g,
      render: (_: string, text: string) => (
        <i className="text-black italic">{text}</i>
      ),
    },
  ];

  let elements: (string | JSX.Element)[] = [content];

  patterns.forEach(({ regex, render }) => {
    elements = elements
      .map((element) => {
        if (typeof element !== "string") return element;

        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(element)) !== null) {
          if (match.index > lastIndex) {
            parts.push(element.slice(lastIndex, match.index));
          }

          // @ts-expect-error tuple err
          parts.push(render(...match));
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < element.length) {
          parts.push(element.slice(lastIndex));
        }

        return parts;
      })
      .flat();
  });

  return elements;
};

export default RenderMarkdownContent;
