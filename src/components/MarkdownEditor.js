import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your markdown here..."
      />
      <div className="preview">
        {preview ? <ReactMarkdown>{preview}</ReactMarkdown> : <p className="loading">Loading preview...</p>}
      </div>
    </div>
  );
}

export default MarkdownEditor;
