import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [text, setText] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(text);
    }, 300); // simulate loading

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <>
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
      />
      <div className="preview">
        {text !== preview ? (
          <p className="loading">Loading preview...</p>
        ) : (
          <ReactMarkdown>{preview}</ReactMarkdown>
        )}
      </div>
    </>
  );
}

export default MarkdownEditor;

