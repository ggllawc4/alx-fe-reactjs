import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Input value
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Clear previous errors
    setUser(null); // Clear previous user data
    setLoading(true); // Set loading state

    // Fetch user data from API
    fetchUserData(username)
      .then((userData) => {
        setUser(userData); // Set user data
      })
      .catch(() => {
        setError("Looks like we cant find the user"); // Handle error
      })
      .finally(() => {
        setLoading(false); // End loading state
      });
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Capture input value
          className="border rounded p-2 w-2/3"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Loading state */}
      {error && <p className="text-red-500">{error}</p>} {/* Error state */}
      {user && (
        <div className="border p-4 rounded shadow text-center max-w-sm mx-auto">
          <img
            src={user.avatar_url} // User avatar
            alt={user.login} // User login
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h2 className="text-lg font-bold mt-2">{user.login}</h2> {/* User login */}
          <a
            href={user.html_url} // Link to GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;