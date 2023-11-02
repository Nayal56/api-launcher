import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript'; // Add this line for JSON support
import './CodeEditor.css';

const CodeEditorComponent = () => {
  const [code, setCode] = useState('{\n  "key": "value"\n}'); // Initialize with sample JSON

  return (
    <div className="code-editor-container">
      <CodeMirror
        value={code}
        options={{
          mode: 'application/json', // Use JSON mode
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
};

export default CodeEditorComponent;
