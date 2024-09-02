import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VocabularyList = () => {
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedVocabulary, setSelectedVocabulary] = useState(null); // Store the clicked vocabulary
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // For search functionality
  const [selectedLetter, setSelectedLetter] = useState(''); // For filtering by letter

  // Fetch vocabularies from API
  useEffect(() => {
    const fetchVocabularies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/vocabularies/');
        setVocabularies(response.data);
      } catch (error) {
        setError('Error fetching vocabularies');
        console.error('Error fetching vocabularies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabularies();
  }, []);

  // Handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedLetter(''); // Reset letter filter if search is active
  };

  // Handle selecting a letter from the dropdown
  const handleLetterChange = (e) => {
    setSelectedLetter(e.target.value);
    setSearchQuery(''); // Reset search query if letter filter is active
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedVocabulary(null);
  };

  // Filter vocabularies based on search or selected letter
  const filteredVocabularies = vocabularies.filter((vocabulary) => {
    const matchesSearch = vocabulary.word.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLetter = selectedLetter ? vocabulary.word.startsWith(selectedLetter) : true;
    return matchesSearch && matchesLetter;
  });

  if (loading) {
    return <p>Loading vocabularies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-teal-500 to-90% ...">
      <h2 className="text-3xl mt-10 font-bold mb-6">Vocabulary List</h2>

      {/* Search Bar */}
<div className=' grid grid-cols-2 gap-4'>
<input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search words..."
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Select Letter Dropdown */}
      <select
        value={selectedLetter}
        onChange={handleLetterChange}
        className="p-2 mb-4 border border-gray-300 w-40 rounded"
      >
        <option value="">Select a letter</option>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
        <option value="">All</option>
      </select>
</div>

      {/* Vocabulary List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filteredVocabularies.length > 0 ? (
          filteredVocabularies.map((vocabulary) => (
            <div
              key={vocabulary.id}
              className="cursor-pointer"
              onClick={() => setSelectedVocabulary(vocabulary)}
            >
              <h4 className="text-lg font-normal text-white">{vocabulary.word}</h4>
            </div>
          ))
        ) : (
          <p>No vocabulary items available.</p>
        )}
      </div>

      {/* Modal for showing vocabulary details */}
      {selectedVocabulary && (
        <div
          className="fixed inset-0 bg-gray-600 mt-20 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the modal content
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedVocabulary.word}</h3>
            <p className="mb-4">
              <strong>Definition:</strong> {selectedVocabulary.definition}
            </p>
            <p className="mb-4">
              <strong>Example Sentence:</strong> {selectedVocabulary.example_sentence || 'No example sentence available.'}
            </p>
            {selectedVocabulary.gif_file && (
              <img
                src={selectedVocabulary.gif_file}
                alt={selectedVocabulary.word}
                className="w-full h-full mb-4"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyList;
