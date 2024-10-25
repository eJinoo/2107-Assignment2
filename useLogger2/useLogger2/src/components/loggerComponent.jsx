import React, { useState, useEffect } from "react";
import useLogger from "../hooks/useLogger";  // Import the useLogger hook

function LoggerComponent() {
  const [scopeInput, setScopeInput] = useState(""); // State for the custom scope input
  const [logType, setLogType] = useState("log"); // Default to 'log'
  const [message, setMessage] = useState("");
  const [logs, setLogs] = useState([]); // State to keep all logs

  const handleLog = () => {
    useLogger(logType, scopeInput, message)
    //setLogs((prevLogs) => [...prevLogs, logMessage]);
    setMessage(""); // Clear message input after logging
  };

  return (
    <div style={{ padding: '20px', border: '1px solid black', width: '400px' }}>
    {/* Scope Text Input */}
    <div>
      <label htmlFor="scopeInput">Scope (Custom): </label>
      <input
        id="scopeInput"
        type="text"
        value={scopeInput}
        onChange={(e) => setScopeInput(e.target.value)}
        placeholder="Enter scope"
      />
    </div>

    {/* Log Type Dropdown */}
    <div style={{ marginTop: '10px' }}>
      <label htmlFor="logType">Select Log Type: </label>
      <select
        id="logType"
        value={logType}
        onChange={(e) => setLogType(e.target.value)}
      >
        <option value="log">Log</option>
        <option value="warn">Warn</option>
        <option value="error">Error</option>
        <option value="debug">Debug</option>
      </select>
    </div>

    {/* Message Input */}
    <div style={{ marginTop: '10px' }}>
      <label htmlFor="message">Message: </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
    </div>

    {/* Log Button */}
    <div style={{ marginTop: '10px' }}>
      <button onClick={handleLog}>Log Message</button>
    </div>

    {/* Console Output: Displaying all logs */}
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black', height: '150px', overflowY: 'scroll' }}>
      <strong>Console Output:</strong>
      {logs.length > 0 ? (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      ) : (
        <p>No logs yet</p>
      )}
    </div>
  </div>
  );
}

export default LoggerComponent;