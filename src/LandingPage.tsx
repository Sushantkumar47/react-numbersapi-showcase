import { useEffect, useState } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  const [fact, setFact] = useState("Loading a cool fact...");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
  setLoading(true);
  try {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=http://numbersapi.com/random/trivia?ts=${Date.now()}`
    );
    const text = await res.text();
    setFact(text);
  } catch (e) {
    setFact("Oops! Couldn't load a fact.");
  }
  setLoading(false);
};

  useEffect(() => {
    getFact();
  }, []);

  return (
   <div className="landing-container">
  <h1 className="title">
    <span className="icon">🔢</span> Welcome to Numberverse
  </h1>
  <p className="subtitle">Explore quirky and surprising facts about numbers every day.</p>

  <div className="fact-box">
    <p className="fact-text">{fact}</p>
    <button className="refresh-btn" onClick={getFact} disabled={loading}>
      {loading ? "Loading..." : "🔁 Get Another Fact"}
    </button>
  </div>

</div>
  );
}
