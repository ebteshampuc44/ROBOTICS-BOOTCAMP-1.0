import React from 'react';

const DetailedCurriculum = () => {
  const curriculumData = [
    {
      day: "Day 1",
      title: "Opening Ceremony & Robotics Fundamentals",
      objective: "Introduce participants to robotics history, concepts, and interaction with environments.",
      outcomes: [
        "Understand basic robotics concepts and importance.",
        "Learn about components (sensors, actuators, controllers).",
        "Explore industrial applications."
      ],
      projects: ["LED Blinking", "Sensor Data Display (LCD)", "Keypad Interfacing"],
      emoji: "🔧",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 2",
      title: "Arduino IDE & Arduino Projects",
      objective: "Hands-on microcontroller programming with Arduino.",
      outcomes: [
        "Install & use Arduino IDE.",
        "Learn electronics & circuit integration.",
        "Control sensors, motors, LEDs."
      ],
      projects: ["Bluetooth RC Car", "Servo Control", "Obstacle Avoidance Robot Car"],
      emoji: "🚗",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 3",
      title: "ESP32 & IoT Applications",
      objective: "Explore IoT concepts with ESP32.",
      outcomes: [
        "Setup ESP32 with sensors/actuators.",
        "Send/receive data via cloud.",
        "Explore IoT applications."
      ],
      projects: ["IoT Weather Monitoring", "Home Automation (Using Relay)"],
      emoji: "🌐",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 4",
      title: "IoT App & Web Development",
      objective: "Build apps and web dashboards to connect IoT systems.",
      outcomes: [
        "Basics of Flutter app development.",
        "Basics of API & PHP dashboard.",
        "Real-time IoT monitoring & control."
      ],
      projects: ["IoT App (Flutter)", "API Development", "Web Dashboard (PHP)"],
      emoji: "📲",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 5",
      title: "Project Planning and Execution",
      objective: "Develop and execute a project proposal under trainer supervision, focusing on problem-solving in robotics/IoT.",
      outcomes: [
        "Create a detailed project proposal.",
        "Execute the proposed project with guidance from trainers.",
        "Identify and solve practical problems in robotics/IoT systems."
      ],
      projects: ["Project Proposal Development", "Supervised Project Implementation"],
      emoji: "📝",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 6",
      title: "Raspberry Pi & Machine Learning",
      objective: "Introduce advanced robotics & AI/ML with Raspberry Pi.",
      outcomes: [
        "Setup Raspberry Pi.",
        "Learn Python for robotics.",
        "Use ML dataset (Iris) and gesture-based control."
      ],
      projects: ["Raspberry Pi ML (Iris Dataset)", "Hand Gesture Control"],
      emoji: "🤖",
      image: "https://images.unsplash.com/photo-1581092160607-ee223103e4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      day: "Day 7",
      title: "Project Showcase & Closing Ceremony",
      objective: "Demonstrate learnings with final project presentations and conclude the bootcamp with a closing ceremony.",
      outcomes: [
        "Present projects with innovation.",
        "Receive feedback from mentors.",
        "Certification & awards ceremony."
      ],
      projects: ["Final Project Showcase (Group/Individual)"],
      emoji: "🎤",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
           6 Days Detailed Curriculum
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey from robotics fundamentals to advanced Al integration
          </p>
        </div>

        {/* Opening Ceremony Card */}
        <div className="bg-gradient-to-b from-[#2C4CA7] to-[#4A6ED1] rounded-xl shadow-lg p-8 mb-16 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Opening Ceremony</h2>
            <p className="text-lg mb-2">September 10, 2025 | 9:00 AM</p>
            <p className="text-lg">Main Auditorium, Premier University</p>
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold py-1 px-3 rounded-lg text-sm">
                  {day.day}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{day.emoji}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-1">Objective</h4>
                  <p className="text-gray-600">{day.objective}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Learning Outcomes</h4>
                  <ul className="text-gray-600 space-y-1">
                    {day.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Hands-on Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {day.projects.map((project, i) => (
                      <span key={i} className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
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
        <div className="bg-gray-100 rounded-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Robotics Bootcamp 1.0 Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <img src="https://i.ibb.co.com/Y7JLGmK7/package-cube-box-for-delivery.png" alt="Programming" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Programming Wing</h3>
              <p className="text-gray-600">Focus on algorithms, data structures, and competitive programming</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <img src="https://i.ibb.co.com/rKQgbDQg/party.png" alt="Microcontroller" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Microcontroller Projects</h3>
              <p className="text-gray-600">Hardware integration and embedded systems development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                <img src="https://i.ibb.co.com/sknQpHZ/meeting.png" alt="Software Development" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
              <p className="text-gray-600">Full-stack development and software engineering practices</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join the Bootcamp?</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
            Register Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default DetailedCurriculum;