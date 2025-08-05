import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [renderedMarkdown, setRenderedMarkdown] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderedMarkdown(markdown);
    }, 0);
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your Markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{renderedMarkdown}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;
