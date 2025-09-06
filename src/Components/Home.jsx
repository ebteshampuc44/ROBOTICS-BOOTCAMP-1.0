import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Home = () => {
  // State for FAQ accordion
  const [openQuestion, setOpenQuestion] = useState(null);
  
  // Toggle FAQ answer visibility
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Fallback images from Unsplash that are more reliable
  const fallbackImages = {
    week1: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    week2: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    week3: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    week4: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    week5: 'https://images.unsplash.com/photo-1581092160607-ee223103e4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    week6: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  };

  // FAQ data
  const faqData = [
    {
      question: " What is Robotics Bootcamp 1.0?",
      answer: "Robotics Bootcamp 1.0, hosted by the Premier University Robotics Club, is a practical learning program designed to teach participants how to learn, build, and showcase robotics projects. It covers hardware, software, and artificial intelligence. The bootcamp is suitable for both beginners and advanced learners, with hands-on workshops and collaborative projects."
    },
    {
      question: " Who can participate in the bootcamp?",
      answer: "Students from EEE and CSE departments at Premier University or other institutions can join. Anyone with an interest in Robotics, IoT, and AI who has basic programming knowledge is also welcome."
    },
   
    {
      question: " What will I learn in the bootcamp?",
      answer: "Participants will learn robotics from the basics to advanced levels. You will work with Arduino, ESP32, Raspberry Pi, IoT, and Machine Learning. You will also learn how to build IoT applications that connect with mobile and web platforms. The sessions focus on developing projects that combine hardware, software, and AI, starting from simple prototypes to advanced systems."
    },
    {
      question: " When and where is the bootcamp held?",
      answer: "The bootcamp schedule and campus venue will be announced after registration. Please check our website and social media pages for updates on dates and locations."
    },
    {
      question: " Is there a registration fee?",
      answer: "Yes, the registration fees are listed in the Payment & Kit section. Different rates apply for club committee, club members, RAS members, non-club members, and foreign participants."
    },
 
    {
      question: " How can I contact the organizers for more information?",
      answer: "You can reach us at:\n• Phone: 01818173025\n• Email: roboticspuc@gmail.com\n\nYou can also use the contact form on our website or follow our social media pages for updates."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <HeroSection />

      {/* Why Robotics Bootcamp Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-[#1E3A8A]">Why Join Our Robotics Bootcamp? </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take a leap from basics to advanced applications in Robotics, IoT, and AI in just 6 weeks!  
            Learn by building real projects that seamlessly connect hardware, software, and intelligence.  
            Gain hands-on experience, showcase your creations, and transform your skills into real-world solutions.
          </p>
          <div className="flex justify-center mt-8">
           
          </div>
        </div>
      </section>

      {/* Combined Program Schedule and Program Outcome Section */}
<section className="py-16 -mt-10 px-4 md:px-8 lg:px-16 bg-white">


        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Program Schedule Section - Left Side */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl  font-extrabold mb-4 text-[#1E3A8A]">Program Schedule</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Our well-structured program is designed to give you the best learning experience
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Duration */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Duration</h3>
                  <p className="text-gray-600">6 Weeks (6 Sessions)</p>
                </div>
                
                {/* Frequency */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Frequency</h3>
                  <p className="text-gray-600">1 session per week </p>
                </div>
                
                {/* Time */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Time</h3>
                  <p className="text-gray-600">05:00 PM – 07:00 PM<br />(15-minute break included)</p>
                </div>
                
                {/* Format */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Format</h3>
                  <p className="text-gray-600">Hands-on workshops with project-based learning</p>
               
                </div>
              </div>
            </div>

            {/* Blue Divider Line */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2"></div>
            </div>

            {/* Program Outcome Section - Right Side */}
          <div className="lg:w-1/2">
  <h2 className="text-4xl font-extrabold mb-4 text-[#1E3A8A]">Program Outcome</h2>
  <p className="text-lg text-gray-600 mb-8 max-w-3xl">
    By the end of the Bootcamp, participants will:
  </p>

  <div className="space-y-6">
    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Gain strong foundations in Robotics & IoT</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Be able to design & implement Arduino & ESP32 projects</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Build IoT including APIs with web & mobile App</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Explore Raspberry Pi & Machine Learning</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 01118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Showcase a complete robotics project</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 01118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1 text-gray-800">Receive Certificate, Best Award & Internship Chances</h3>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Bootcamp Timeline Section - Enhanced */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-center text-[#1E3A8A]">Bootcamp Timeline </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            6-week intensive program takes you from fundamentals to advanced robotics applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="https://i.ibb.co.com/JMctHnH/Generated-Image-September-03-2025-12-34-AM.jpg" 
                  alt="Robotics Fundamentals" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week1;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Arduino Programming & Integration</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Introduction to Arduino IDE hardware connections and project development.</p>
               
              </div>
            </div>
            
            {/* Card 2 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="https://i.ibb.co.com/b5xxGXpS/Generated-Image-September-05-2025-10-27-PM-jpeg.jpg" 
                  alt="Sensor Integration" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week2;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors duration-300">ESP32 & IoT Applications</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Learn ESP32 setup, cloud connectivity, and real-time IoT monitoring and control.</p>
             
              </div>
            </div>
            
            {/* Card 3 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="https://i.ibb.co.com/sphc1ZHj/Generated-Image-September-05-2025-8-33-PM-jpeg.jpg" 
                  alt="Actuators & Motion" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week3;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">IoT App & Web Development</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Basics of mobile apps, APIs, and dashboards for real-time monitoring.</p>
             
              </div>
            </div>
            
            {/* Card 4 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="     https://i.ibb.co.com/B2zmysD6/Generated-Image-September-03-2025-12-45-AM.jpg        " 
                  alt="IoT Connectivity" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week4;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 4</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Project Planning, Troubleshooting & Execution</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Work on structured project development, problem-solving, and guided implementation.</p>
                
              </div>
            </div>
            
            {/* Card 5 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src=" https://i.ibb.co.com/WW9GJsNQ/Generated-Image-September-03-2025-12-44-AM.jpg" 
                  alt="AI Implementation" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week5;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 5</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors duration-300">Raspberry Pi & Machine Learning</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Hands-on with Raspberry Pi, Python programming, and implementing ML models in robotics.</p>
               
              </div>
            </div>
            
            {/* Card 6 - Enhanced */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src="https://i.ibb.co.com/21RFc53y/Generated-Image-September-03-2025-12-46-AM.jpg" 
                  alt="Capstone Project" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 transform-gpu"
                  onError={(e) => {
                    e.target.src = fallbackImages.week6;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full transform-gpu transition-transform duration-300 group-hover:scale-105">Week 6</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Project Showcase, Awards & Closing Ceremony</h3>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">Present final projects and conclude with awards, recognition, and certification.</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fee and FAQ Section - Side by Side */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
      
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Registration Fee Section - Left Side */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#1E3A8A] text-center">Registration Fee</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-800">Club Committee</span>
                    <span className="text-lg font-bold text-blue-600">900 BDT</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-800">Club Member</span>
                    <span className="text-lg font-bold text-blue-600">900 BDT</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-800">IEEE RAS Member</span>
                    <span className="text-lg font-bold text-blue-600">900 BDT</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-800">Non-Club Member</span>
                    <span className="text-lg font-bold text-blue-600">1,000 BDT</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-lg font-medium text-gray-800">Foreign Participant</span>
                    <span className="text-lg font-bold text-blue-600">1,200 BDT</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">What's Included?</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Hands-on Project Kits for practical learning

                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                     Souvenir Pack with essentials and goodies

                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    Certificate of Completion for all participants

                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                 Refreshments in Every Session to keep you active
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section - Right Side */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-[#1E3A8A] text-center">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openQuestion === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l极7 7-7-7"></path>
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 text-gray-600 whitespace-pre-line">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Mobile Responsive */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#1E3A8A] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 px-2">Ready to Start Your Robotics Journey?</h2>
       
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#1E3A8A] font-semibold shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-base sm:text-lg">
              Register Now
            </button>
            <Link to="/curriculum" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-md hover:bg-white hover:text-[#1E3A8A] hover:scale-105 transition-all duration-300 text-base sm:text-lg">
                Detailed Curriculum
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Add custom CSS for smooth transitions */}
      <style jsx>{`
        .transition-all {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .max-h-0 {
          max-height: 0;
        }
        .max-h-96 {
          max-height: 24rem; /* Adjust this value based on your content */
        }
      `}</style>
    </div>
  );
};

export default Home;