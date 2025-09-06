import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const glowRef = useRef(null);
  const glowRef2 = useRef(null);
  const glowRef3 = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos2 = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos3 = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

    mouse.current = { x: e.clientX, y: e.clientY };
  };

  // Smooth glow animation effect
  useEffect(() => {
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      pos2.current.x += (mouse.current.x - pos2.current.x) * 0.05;
      pos2.current.y += (mouse.current.y - pos2.current.y) * 0.05;

      pos3.current.x += (mouse.current.x - pos3.current.x) * 0.12;
      pos3.current.y += (mouse.current.y - pos3.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.left = `${pos.current.x}px`;
        glowRef.current.style.top = `${pos.current.y}px`;
      }

      if (glowRef2.current) {
        glowRef2.current.style.left = `${pos2.current.x}px`;
        glowRef2.current.style.top = `${pos2.current.y}px`;
      }

      if (glowRef3.current) {
        glowRef3.current.style.left = `${pos3.current.x}px`;
        glowRef3.current.style.top = `${pos3.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Tilt effect for video card
  const calculateTilt = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;

    return { tiltX, tiltY };
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-b from-[#2C4CA7] to-[#4A6ED1] text-white 
                 min-h-screen flex items-center overflow-hidden"
    >
      {/* Smooth Mouse Glow Followers */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-60 h-60 sm:w-80 sm:h-80 bg-[#87CEEB] opacity-15 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={glowRef2}
        className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 bg-white opacity-5 blur-4xl rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={glowRef3}
        className="pointer-events-none absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#2C4CA7] opacity-20 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 top-[-64px]">
        <img
          src="https://i.ibb.co/ynGDFnc5/cartoon-ai-robot-scene.jpg"
          alt="Background Mesh"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-white"></div>
        <motion.div
          className="absolute inset-0 bg-[length:50px_50px] bg-grid-blue-300"
          animate={{
            backgroundPosition: [0, 0, "50px 50px", 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 
                      grid md:grid-cols-2 gap-8 sm:gap-12 items-center pt-8 md:pt-0">
        
        {/* Left Video */}
        <motion.div
          className={`flex justify-center ${isMobile ? "order-1" : "order-2 md:order-1"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
            <motion.div
              className="rounded-lg border-2 border-[#87CEEB] shadow-xl overflow-hidden w-full"
              whileHover={{ scale: 1.02 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                if (!isMobile) {
                  const { tiltX, tiltY } = calculateTilt(e, e.currentTarget);
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                }
              }}
            >
              {/* Video instead of image */}
              <video
                src="/videos/PUCRC.mp4"
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>

            {/* Video Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-[#87CEEB] opacity-0 rounded-lg blur-xl -z-10"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className={`${isMobile ? "order-2 text-center" : "order-1 md:order-2 text-left"}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className={`mb-4 ${isMobile ? "text-center" : "text-left -ml-5"} text-base sm:text-lg md:text-xl text-gray-200`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PREMIER UNIVERSITY ROBOTICS CLUB{" "}
            <span className="text-[#87CEEB]">Presents</span>
          </motion.div>

          <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${isMobile ? "text-center" : "text-left -ml-5"}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ROBOTICS
            </motion.div>
            <motion.div
              className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-white to-[#87CEEB]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              BOOTCAMP 1.0
            </motion.div>
          </div>

          <motion.p
            className={`mb-6 sm:mb-8 text-sm sm:text-base md:text-lg ${isMobile ? "text-center" : "text-left -ml-5"} text-gray-300 max-w-lg ${isMobile ? "mx-auto" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Unleash Your Inner Innovator by Learning, Building, and Showcasing
            Projects that Fuse Hardware, Software, and Intelligence from
            Beginner to Advanced!
          </motion.p>

          {/* Features */}
          <motion.div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 ${isMobile ? "justify-center" : "-ml-5"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {[
              { icon: "🤖", text: "Empower Robotic Innovation" },
              { icon: "💻", text: "Code Tomorrow’s Tech" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${isMobile ? "justify-center text-center" : "text-center sm:text-left flex flex-col sm:flex-row items-center gap-3"}`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <p className="text-sm sm:text-base">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlight Button */}
          <motion.div
            className={`bg-[#87CEEB] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 
                       rounded-md inline-block shadow-md cursor-pointer relative overflow-hidden 
                       text-sm sm:text-base md:text-lg ${isMobile ? "mx-auto block text-center" : ""}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(135, 206, 235, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              whileHover={{
                opacity: 0.2,
                transition: { duration: 0.3 },
              }}
            />
            Explore BOOTCAMP 1.0
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
