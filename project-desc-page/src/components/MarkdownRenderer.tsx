import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose lg:prose-xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-red-600 text-xs">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-blue-600 text-xs">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-green-600 text-xs">{children}</h3>
          ),
          p: ({ children }) => <p className="text-white text-xs">{children}</p>,
          li: ({ children }) => (
            <li className="text-white text-xs">{children}</li>
          ),
          img: ({ node, ...props }) => (
            <img className="my-4" alt={props.alt} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
