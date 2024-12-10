import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/api';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setError(null);
    setUser(null);
    try {
      const userData = await fetchGitHubUser(username);
      setUser(userData);
    } catch (err) {
      setError('User not found. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <Header />
      <main className="container mx-auto p-4 text-center">
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {user && <UserCard user={user} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;