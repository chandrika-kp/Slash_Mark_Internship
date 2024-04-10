import React, { useState } from 'react';
import './App.css';
import CodeEditor from './CodeEditor';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  }

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code,language }), // Send code to the backend
      });
      if (response.ok) {
        const result = await response.text(); // Get the result from the response
        console.log('Result from server:', result);
        setOutput(`Output: ${result}`); 
      } else {
        throw new Error('Failed to execute code');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput(`Error: ${error.message}`); // Display error message to the user
    }
  }

  return (
    <div className="App">
      <h1>Online Code Editor</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        {/* <option value="html">HTML</option> */}
        <option value="python">Python</option>
      </select>
      <div>
        <div>
          <CodeEditor code={code} language={language} onChange={handleCodeChange} />
          <button onClick={handleSubmit}>Run Code</button>
        </div>
        <div className="output">{output}</div>
      </div>
    </div>
  );
}

export default App;
