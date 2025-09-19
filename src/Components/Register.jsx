import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Robotics Bootcamp Registration 1.0
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            
          </div>

          {/* Registration Closed Notice */}
          <div className="bg-red-500 text-white rounded-xl p-8 text-center shadow-xl mb-12">
            <h2 className="text-3xl font-bold mb-4">REGISTRATION CLOSED</h2>
            <p className="text-xl">Registration for the Robotics Bootcamp has officially ended.</p>
          </div>

          {/* Commented Out Form Section */}
          {/*
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
          */}

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl p-8 text-center shadow-md border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Contact us at <span className="font-medium text-blue-600">roboticspuc@gmail.com</span> or call <span className="font-medium text-blue-600">01818173025</span>
            </p>
            <div className="bg-blue-50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-gray-600">
                For any inquiries about future bootcamps or programs, please reach out to us.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;