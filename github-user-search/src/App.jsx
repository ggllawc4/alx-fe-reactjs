import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <Search />
      </main>
      <Footer />
    </div>
  );
};

export default App;