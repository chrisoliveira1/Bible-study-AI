'use client';

import React, { useState, useEffect } from 'react';
import './styles/globals.css';

export default function Home() {
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [insights, setInsights] = useState<any>(null);

  const suggestions = [
    'John 3:16', 'Psalm 23:1', 'Romans 8:28', 'Philippians 4:13', 'Genesis 1:1',
    'Proverbs 3:5', 'Jeremiah 29:11', 'Isaiah 41:10', 'Matthew 6:33', 'Hebrews 11:1',
    '2 Timothy 1:7', '1 Corinthians 13:4-5', 'Matthew 28:19-20', 'James 1:2-3', 'John 14:6',
    'Romans 12:2', 'Ephesians 2:8-9', 'Galatians 5:22-23', 'Matthew 11:28', 'Joshua 1:9',
    'Romans 5:8', 'Psalm 46:1', '1 Peter 5:7', '1 John 1:9', 'Isaiah 40:31',
    'Colossians 3:23', 'Psalm 118:24', 'Matthew 5:14', 'Luke 6:31', 'Romans 10:9',
    'Proverbs 22:6', 'John 10:10', 'Psalm 19:14', 'Philippians 4:6-7', 'Isaiah 53:5',
    '1 Corinthians 10:13', 'Proverbs 3:6', 'Romans 6:23', 'Psalm 34:18', 'Matthew 5:16',
    'John 1:1', 'Ephesians 6:11', 'Hebrews 13:8', 'James 5:16', 'John 8:32',
    'Acts 1:8', 'Colossians 3:2', 'Isaiah 26:3', 'Revelation 21:4', 'Romans 15:13'
  ];

  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);

  // ✅ Hydration-safe randomization
  useEffect(() => {
    setCurrentSuggestionIndex(Math.floor(Math.random() * suggestions.length));
  }, []);

  const handleSuggestionClick = () => {
    setVerse(suggestions[currentSuggestionIndex]);
  };

  const handleRefreshSuggestion = () => {
    setCurrentSuggestionIndex((prev) => (prev + 1) % suggestions.length);
  };

  const handleSubmit = async () => {
    if (!verse.trim()) return;
    setLoading(true);
    setError('');
    setInsights(null);

    try {
      const response = await fetch('/api/getInsights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verse }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect to the server.');
      }

      const data = await response.json();
      setInsights(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1 className="title">📖 Want to learn more about a passage?</h1>
      <p className="subtitle">Enter a verse, and get rich historical, linguistic, and theological insights.</p>

      <div className="input-row">
        <input
          className="input"
          placeholder="e.g. John 1:1"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
        />
        <button className="button" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading your insights...' : 'Get Insights'}
        </button>
      </div>

      <div className="suggestion-row">
        <span className="suggestion-text">Need a suggestion?</span>
        <button className="suggestion-pill" onClick={handleSuggestionClick}>
          {suggestions[currentSuggestionIndex]}
        </button>
        <button className="refresh-button" onClick={handleRefreshSuggestion}>🔄</button>
      </div>

      {error && <p className="error">{error}</p>}

      {insights && (
        <div className="insights">
          {insights.fullVerse && (
            <p className="verse-line">
              <em>{insights.fullVerse}</em>
            </p>
          )}

          {insights.context && (
            <div className="insight-section">
              <h3 className="section-title">Context in this book</h3>
              <p className="section-body">{insights.context}</p>
            </div>
          )}

          {insights.theology && (
            <div className="insight-section">
              <h3 className="section-title">Theological Depth</h3>
              <p className="section-body">{insights.theology}</p>
            </div>
          )}

          {insights.language && (
            <div className="insight-section">
              <h3 className="section-title">Original Language Insight</h3>
              <p className="section-body">{insights.language}</p>
            </div>
          )}

          {insights.impact && (
            <div className="insight-section">
              <h3 className="section-title">Why It’s Impactful</h3>
              <p className="section-body">{insights.impact}</p>
            </div>
          )}

          {insights.history && (
            <div className="insight-section">
              <h3 className="section-title">Historical Echoes</h3>
              <p className="section-body">{insights.history}</p>
            </div>
          )}

          {insights.relevance && (
            <div className="insight-section">
              <h3 className="section-title">Enduring Relevance</h3>
              <p className="section-body">{insights.relevance}</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
