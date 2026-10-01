import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  const searchWord = async () => {
    if (!word) return;
    try {
      const response = await fetch(`http://localhost:8080/api/define/${word}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>📖 Mini Dictionary</h1>

      <input
        type="text"
        placeholder="Type a word (apple, banana, cat...)"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={searchWord}
        style={{ padding: "8px 16px", marginLeft: "8px" }}
      >
        Search
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          {result.error ? (
            <p style={{ color: "red" }}>{result.error}</p>
          ) : (
            <>
              <h2>{result.word}</h2>
              <p>{result.definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
