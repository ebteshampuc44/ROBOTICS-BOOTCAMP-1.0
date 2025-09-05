import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Organization Info */}
        <div className="lg:col-span-2 space-y-4 flex flex-col">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img 
                src="https://i.ibb.co.com/XfYht2cw/Whats-App-Image-2024-02-08-at-14-52-49-22e8eefa-removebg-preview.png" 
                alt="Premier University Robotics Club Logo" 
                className="h-28 w-28 object-contain"
              />
            </div>
            <h3 className="font-bold text-xl text-white">PREMIER UNIVERSITY ROBOTICS CLUB</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Fostering innovation and technological excellence through robotics education, research, and competitive participation.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Academic Building #4, 44 Hazari Lane, Kotwali, Chittagong
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              roboticspuc@gmail.com
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href="https://robotics.puc.ac.bd/" className="hover:text-blue-400 transition-colors">robotics.puc.ac.bd</a>
            </p>
          </div>
        </div>
        
        {/* Connect With Us */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">Connect With Us</h4>
          <p className="text-sm mb-4">Follow us on social media to stay updated with our latest activities and events.</p>
          
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/pucroboticsclub" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/pucroboticsclub/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://robotics.puc.ac.bd/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors" aria-label="Website">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
            <a href="mailto:roboticspuc@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://maps.app.goo.gl/ofwQLEvE72vtLojD6" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors" aria-label="Location">
              <span className="text-lg" role="img" aria-label="Map">🗺️</span>
            </a>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 Premier University Robotics Club. All rights reserved.</p>
          <div className="flex items-center mt-3 md:mt-0">
            <span className="text-sm text-gray-500 mr-2">Developed with</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-500 ml-1">by 
              <a href="https://www.facebook.com/ebtesham.chowdhury/" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-blue-400 transition-colors">Ebtesham</a> 
              &nbsp;&&nbsp;
              <a href="https://www.facebook.com/minhaj.hassan25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Minhaj</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;