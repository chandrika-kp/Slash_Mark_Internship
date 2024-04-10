import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, language, onChange }) => {
  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
  }

  return (
    <>
      <div className="code-editor">
        <Editor
          language={language}
          theme="vs-dark"
          value={code}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </div>
    </>

  );
}

export default CodeEditor;
