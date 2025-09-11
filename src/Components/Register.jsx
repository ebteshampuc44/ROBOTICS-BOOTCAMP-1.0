import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
   

    
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Robotics Bootcamp Registration
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the form below to secure your spot in our upcoming bootcamp
            </p>
          </div>

       

          {/* Embedded Google Form */}
          <div className="rounded-xl overflow-hidden shadow-xl mb-12 border-2 border-blue-100">
            <iframe 
              src="https://forms.gle/kaUEvYVYAdGopSLY7" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="block w-full"
              title="Robotics Bootcamp Registration Form"
            >
              Loading…
            </iframe>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl p-8 text-center shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Help With Registration?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Contact us at <span className="font-medium text-blue-600">roboticspuc@gmail.com</span> or call <span className="font-medium text-blue-600">01818173025</span>
            </p>
            <div className="bg-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-gray-600">
                Please make sure to complete all required fields in the form. After submission, you'll receive a confirmation email within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </main>

  
     
    </div>
  );
};

export default Register;