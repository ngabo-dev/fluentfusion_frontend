import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [gifFile, setGifFile] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/word/');
        setWords(response.data);
        setFilteredWords(response.data);
      } catch (error) {
        console.error('Failed to fetch words', error);
      }
    };

    fetchWords();
  }, []);

  const handleWordClick = async (word) => {
    setSelectedWord(word);
    try {
      const response = await axios.get(`http://localhost:8000/api/word/${word.id}/`);
      const gifPath = `${response.data.gif_file}`;
      setGifFile(gifPath);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to fetch gif', error);
    }
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    filterWords(searchValue, selectedLetter);
  };

  const handleLetterChange = (event) => {
    const letter = event.target.value;
    setSelectedLetter(letter);
    filterWords(searchTerm, letter);
  };

  const filterWords = (searchValue, letter) => {
    let filtered = words;

    if (letter) {
      filtered = filtered.filter((word) => word.word.toLowerCase().startsWith(letter.toLowerCase()));
    }

    if (searchValue) {
      filtered = filtered.filter((word) =>
        word.word.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredWords(filtered);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Word List</h1>
      
      <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <select
          style={{ padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem' }}
          value={selectedLetter}
          onChange={handleLetterChange}
        >
          <option value="">All Letters</option>
          {alphabet.map((letter) => (
            <option key={letter} value={letter}>
              {letter}
            </option>
          ))}
        </select>
        <input
          type="text"
          style={{ padding: '0.5rem', border: '1px solid #D1D5DB',width:'50', borderRadius: '0.5rem', flexGrow: 1 }}
          placeholder="Search words..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
        {filteredWords.map((word) => (
          <div
            key={word.id}
            style={{
              padding: '0.5rem',
              border: '1px solid #D1D5DB',
              borderRadius: '0.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onClick={() => handleWordClick(word)}
          >
            {word.word}
          </div>
        ))}
      </div>

      {isModalOpen && selectedWord && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 50,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            width: '100%',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{selectedWord.word}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ color: '#6B7280', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>
            <p style={{ marginBottom: '1rem' }}>{selectedWord.description}</p>
            {gifFile ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={gifFile}
                  alt={selectedWord.word}
                  style={{ borderRadius: '0.5rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ) : (
              <p style={{ textAlign: 'center' }}>Loading GIF...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
