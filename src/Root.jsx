import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;