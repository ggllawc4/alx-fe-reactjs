import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
          <Search />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;