import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Register Early to Secure Your Seat
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Confirm your registration by completing the form
            </p>
          </div>

          {/* Placeholder for Form */}
          <div className="rounded-xl bg-yellow-50 p-12 text-center border-2 border-dashed border-yellow-400 mb-12">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Form Coming Soon
            </h2>
            <p className="text-yellow-700 mb-2">
              This registration form will be available soon. Stay tuned!
            </p>
            <p className="text-red-600 font-medium">
              The form will be live from 11th of this month.
            </p>
          </div>

          {/* Embedded Google Form (commented for now) */}
{/*           
          <div className="rounded-xl overflow-hidden mb-12">
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
          */}

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
