import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will add more routes later */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
