import React from "react";
import ReactMarkdown from "react-markdown";
import classNames from "../utils/classNames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface MarkdownProps {
  className?: string;
  children: any;
}

const Markdown: React.FC<MarkdownProps> = ({
  className,
  children,
}: MarkdownProps) => {
  const styles = className ? className : "";

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={okaidia}
          customStyle={{ overflow: "hidden" }}
          language={match[1]}
          PreTag="div"
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  // Slice away underlined text
  let text = "";

  if (typeof children === "string") {
    text = children.replace("<u>", "");
    text = text.replace("</u>", "");
  }

  return (
    <ReactMarkdown
      components={components}
      className={classNames("markdown", styles)}
    >
      {text}
    </ReactMarkdown>
  );
};

export default Markdown;
