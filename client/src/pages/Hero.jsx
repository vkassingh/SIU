import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bg1.png';
import { CheckCircle, Briefcase, GraduationCap } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
      },
    },
  };

  // International university themed background
  const universityBackground = (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Gradient background with academic colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>

      {/* Abstract academic symbols */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {/* Globe-like arcs */}
        <circle cx="20%" cy="30%" r="80" stroke="#2563eb" strokeWidth="2" fill="none" />
        <circle cx="60%" cy="50%" r="100" stroke="#3b82f6" strokeWidth="2" fill="none" />

        {/* Open book shape */}
        <path d="M300,300 q30,-20 60,0 q30,20 60,0" stroke="#1e40af" strokeWidth="2" fill="none" />
        <path d="M300,300 q30,20 60,0 q30,-20 60,0" stroke="#1e40af" strokeWidth="2" fill="none" />

        {/* Graduation cap icon outline */}
        <polygon points="700,200 750,230 800,200 750,170" stroke="#1d4ed8" strokeWidth="2" fill="none" />
        <line x1="750" y1="230" x2="750" y2="250" stroke="#1d4ed8" strokeWidth="2" />

        {/* Abstract map grid */}
        <rect x="5%" y="80%" width="90%" height="10" fill="#1e3a8a" opacity="0.05" />
        <text x="70%" y="95%" fontFamily="Georgia" fontSize="14" fill="#1e3a8a" opacity="0.3">
          Global Learning, Local Impact
        </text>
      </svg>
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex items-center"
    >
      {universityBackground}

      <motion.div
        className="container px-4 sm:px-6 mx-auto py-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col lg:flex-row items-start">
          {/* LEFT - TEXT CONTENT */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-1 rounded-full text-md mb-4" variants={itemVariants}>
              🎓 Global Excellence in Higher Education
            </motion.div>

            {/* Heading */}
            <motion.h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight" whileHover={{ scale: 1.02 }}>
              WELCOME TO<br />
              <span className="text-blue-700">SIU</span>
            </motion.h1>

            {/* Description */}
            <motion.p className="mt-4 text-lg sm:text-xl text-gray-700" variants={itemVariants}>
              Empowering future global leaders through world-class academics and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
              <Link to="/courses/AllCourses">
                <motion.button
                  className="px-6 py-2 sm:px-8 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses
                </motion.button>
              </Link>
              <Link to="/contact-us">
                <motion.button
                  className="px-6 py-2 sm:px-8 sm:py-2 border border-blue-700 text-blue-700 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" variants={itemVariants}>
              {[
                { value: '25+', label: 'Courses' },
                { value: '1500+', label: 'Students' },
                { value: '50+', label: 'Faculty' },
                { value: '100%', label: 'Placement' }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-white p-3 rounded-lg shadow-md text-center border border-gray-200"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div className="mt-6 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-700" variants={itemVariants}>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600" size={18} />
                AICTE Approved
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="text-indigo-500" size={18} />
                Global Partnerships
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-blue-800" size={18} />
                100% Placement
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div 
            className="lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 lg:pr-8 lg:pb-0 mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.img
                src={heroImage}
                alt="University Admission"
                className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className="absolute -top-6 -left-6 bg-blue-700 p-2 rounded-xl shadow-lg z-30 text-white"
                variants={floatingVariants}
                animate="float"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
                  <p className="font-bold text-xs">Admissions Open</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
