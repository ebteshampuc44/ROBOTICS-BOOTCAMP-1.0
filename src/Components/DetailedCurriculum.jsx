import React from 'react';

const DetailedCurriculum = () => {
  const curriculumData = [
    {
      day: "Session 1",
      title: "Arduino Programming & Integration",
      objective: "Provide hands-on experience with Arduino IDE and integrate sensors, actuators, and control hardware components effectively.",
      outcomes: [
        "Install & use Arduino IDE",
        "Learn electronics & circuit integration",
        "Control Sensors, Servo, Display"
      ],
      projects: [ "Object detect & Measure distance using sensor", "Keypad Interfacing & Password System"],
      emoji: "♾️",
      image: "https://i.ibb.co.com/zhmqVqnK/week-1-detailed-curriculam-jpeg.jpg"
    },
    {
      day: "Session 2",
      title: "ESP32 & IoT Applications",
      objective: "Learn ESP32 and core IoT concepts, focusing on device connectivity and Cloud communication using Wi-Fi.",
      outcomes: [
        "Setup ESP32 with sensors/actuators",
        "Send/receive data via cloud",
        "Explore IoT applications"
      ],
      projects: ["Garden Monitoring", "Smart Home Automation (Using Relay)", "Real-time Data Logging"],
      emoji: "🌐",
      image: "https://i.ibb.co.com/8gCJWKBD/week-2-detailed-curriculam-jpeg.jpg"
    },
    {
      day: "Session 3",
      title: "IoT App & Web Development",
      objective: "Design and Develop mobile apps, APIs & web dashboards for real-time monitoring and control from Locahost.",
      outcomes: [
        "Basics of Flutter app development",
        "Basics of API & PHP dashboard",
        "Real-time IoT monitoring & control",
        "HTTP, MQTT protocol understanding"
      ],
      projects: ["IoT App (Flutter)", "API Development", "Web Dashboard (PHP)"],
      emoji: "📲",
      image: "https://i.ibb.co.com/8L941ntm/week-3-detailed-curriculam-jpeg.jpg"
    },
    {
      day: "Session 4",
      title: "Project Planning, Troubleshooting and Execution",
      objective: "Build structured project planning and supervised implementation, emphasizing problem-solving.",
      outcomes: [
        "Create a detailed project proposal",
        "Execute the proposed project with guidance from trainers",
        "Identify & solve problems in project"
      ],
      projects: ["Supervised Project Implementation"],
      emoji: "📝",
      image: "https://i.ibb.co.com/qYhPryX2/week-4-detailed-curriculam-jpeg.jpg"
    },
    {
      day: "Session 5",
      title: "Raspberry Pi & Machine Learning",
      objective: "Introduce advanced robotics & Apply Machine Learning Model with Raspberry Pi.",
      outcomes: [
        "Setup Raspberry Pi",
        "Learn Python for robotics",
        "Data Preprocessing & Model Training",
        "Forcast data using ML Model"
      ],
      projects: ["Autonomous Robots", "Predict Weather using ML Model"],
      emoji: "🤖",
      image: "https://i.ibb.co.com/Tf40yVy/week-5-detailed-curriculam-jpeg.jpg"
    },
    {
      day: "Session 6",
      title: "Project Showcase, Awards & Closing Ceremony",
      objective: "Demonstrate learnings with final project presentations and conclude the bootcamp with a closing ceremony.",
      outcomes: [
        "Present projects with innovation",
        "Receive feedback from mentors",
        "Certification & Awards ceremony"
      ],
      projects: ["Final Project Showcase (Group/Individual)"],
      emoji: "🎤",
      image: "https://i.ibb.co.com/FLpDKmk4/week-6-detailed-curriculam-jpeg.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl mb-4">
            6 Days Detailed Curriculum
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey from robotics fundamentals to advanced Al integration
          </p>
        </div>

        {/* Opening Ceremony Card */}
        <div className="bg-gradient-to-b from-[#2C4CA7] to-[#4A6ED1] rounded-xl shadow-lg p-8 mb-16 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Opening Ceremony</h2>
            <p className="text-base mb-2">Time : To be announced soon</p>
            <p className="text-base">Location : Hazari Lane Premises, Premier University</p>
          </div>
        </div>

        {/* Curriculum Cards (Day 1 - Day 7) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {curriculumData.map((day, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover  transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold py-1 px-3 rounded-lg text-xs">
                  {day.day}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{day.emoji}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Objective</h4>
                  <p className="text-sm text-gray-600 font-bold">{day.objective}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Learning Outcomes</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {day.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Hands-on Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {day.projects.map((project, i) => (
                      <span key={i} className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Club Wings Section */}
        <div className="bg-gray-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Robotics Bootcamp 1.0 Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <img src="https://i.ibb.co.com/wr6cLc1Z/energy-system.png" alt="Programming" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Project</h3>
              <p className="text-sm text-gray-600">Innovative, impactful project with excellent execution and teamwork</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <img src="https://i.ibb.co.com/VW657GRg/innovation.png" alt="Microcontroller" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Problem Solving</h3>
              <p className="text-sm text-gray-600">Creative solutions with logical troubleshooting and optimization</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                <img src="https://i.ibb.co.com/C5wrxYN8/developer.png" alt="Software Development" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Programmer</h3>
              <p className="text-sm text-gray-600">Efficient coding with strong algorithms and data structures</p>
            </div>
          </div>
        </div>

    

      </div>
    </div>
  );
};

export default DetailedCurriculum;