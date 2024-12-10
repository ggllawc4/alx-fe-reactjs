import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import UserCard from './UserCard';

const Search = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null); // Clear previous state
    try {
      const userData = await fetchUserData(username); // Fetch data from API
      setUser(userData); // Set user data on success
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">GitHub User Search</h2>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} /> {/* Pass handler to SearchBar */}
      </div>
      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
      {user && <UserCard user={user} />} {/* Display user info */}
    </div>
  );
};

export default Search;