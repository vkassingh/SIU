import React from 'react';
import { BookOpen, Cpu } from 'lucide-react';

const AiLearningSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1F1300] to-[#1F1300] border-y-5 border-blue-300 text-white py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        
        {/* Left Icon and Title */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Cpu className="text-blue-500" size={28} />
          <h2 className="text-lg sm:text-xl font-semibold text-blue-500 uppercase">
            A.I Enabled Learning
          </h2>
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center">
          <p className="text-sm sm:text-base">
            Empowering our students with the latest AI tools and
             technology to shape the future of Technology and Management.
          </p>
        </div>

        {/* Right Icon */}
        <div className="flex-shrink-0">
          <BookOpen className="text-blue-500" size={24} />
        </div>
      </div>
    </section>
  );
};

export default AiLearningSection;
