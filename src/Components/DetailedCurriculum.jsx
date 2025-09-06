import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            6 Days Detailed Curriculum
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A comprehensive journey from robotics fundamentals to advanced AI integration
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {curriculumData.map((day, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{day.emoji}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{day.day}: {day.title}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Objective:</h4>
                  <p className="text-sm text-gray-600">{day.objective}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Session Outcomes:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    {day.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {day.projects.map((project, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}

      </div>
    </div>
  );
};

export default DetailedCurriculum;