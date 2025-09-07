import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto"> {/* Increased width */}
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Register early to secure your seat
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             Confirm your registration by completing the form
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className=" rounded-xl  overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSenwBIDGiKbwaAchkMxufnU1cUFXCliK-p8mynzTC1T8BHGPA/viewform?embedded=true" 
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
          <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Need Help With Registration?
            </h2>
            <p className="text-gray-700 mb-4">
              Contact us at <span className="font-medium">roboticspuc@gmail.com</span> or call <span className="font-medium">01818173025</span>
            </p>
            <p className="text-gray-600 text-sm">
              Please make sure to complete all required fields in the form. After submission, you'll receive a confirmation email.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
