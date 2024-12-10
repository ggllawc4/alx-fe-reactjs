import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService'; // Import the API function

const Search = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Async function for handling search
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Clear previous errors
    setUsers([]); // Clear previous results
    setLoading(true); // Set loading state

    try {
      const query = username.trim() ? `user:${username}` : ''; // Build query
      const result = await fetchAdvancedUsers(query); // Await API call
      setUsers(result.items); // Set the users from the API response
    } catch (err) {
      setError("Looks like we cant find the user"); // Handle error
    } finally {
      setLoading(false); // Clear loading state
    }
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 w-2/3"
        />

        <input
          type="text"
          placeholder="Enter location..."
          value={location} // Controlled input for location
          onChange={(e) => setLocation(e.target.value)} // Update location state
          className="border rounded p-2 w-2/3"
        />
        
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      
      {loading && <p>Loading...</p>}

      
      {error && <p className="text-red-500">{error}</p>}

      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mx-auto"
            />

            <h2 className="text-lg font-bold mt-2">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 inline-block"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;