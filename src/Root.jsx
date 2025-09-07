import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Root = () => {
  const location = useLocation();


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;