import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const saveCode = async () => {
    try {
      await axios.post('http://localhost:5000/save', { code }); // Make sure the URL matches your backend server
      alert('Code saved successfully!');
    } catch (error) {
      console.error('Error saving code:', error);
    }
  };

  const retrieveCode = async () => {
    try {
      const response = await axios.get('http://localhost:5000/retrieve'); // Make sure the URL matches your backend server
      setCode(response.data.code); // Assuming your backend returns the code in the 'code' field
    } catch (error) {
      console.error('Error retrieving code:', error);
    }
  };

  useEffect(() => {
    retrieveCode(); // Fetch code from the server when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={saveCode}>Save Code</button>
      <button onClick={retrieveCode}>Retrieve Code</button>
    </div>
  );
};

export default CodeEditor;
