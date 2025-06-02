import React from 'react';
import chairmanImg from '../assets/chairman.jpg'; // Ensure this path is correct
import { useInView } from 'react-intersection-observer'; // For scroll animations
import { MessageSquareQuote, Medal } from 'lucide-react'; // For the quote icon and the badge icon

const ChairmanMessage = () => {
  // useInView hook for animation on scroll for the whole card
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  // useInView hook for delayed animation on content
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300, // Small delay for content after card appears
  });

  return (
    <section className="bg-blue-50 bg-opacity-70 py-12 sm:py-20 flex justify-center items-center">
      <div
        ref={cardRef}
        className={`max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden
                    transform transition-all duration-700 ease-out
                    ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Chairman Image Section */}
        <div className="relative">
          <img
            src={chairmanImg}
            alt="Mr. Sunil Singh - Chairman"
            className="w-full h-80 object-cover object-top" // Use object-top to focus on head/shoulders
          />
          {/* Chairman Name and Title Overlay - positioned over the image */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold">Mr. Sunil Singh</h3>
            <p className="text-lg font-semibold text-blue-300">Chairman & Founder, Saroj Educational Group (SEG)</p>
          </div>
           {/* Badge icon on image (adjusted position and icon) */}
           <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
             <Medal className="w-6 h-6" /> {/* Using Lucide Medal icon */}
           </div>
        </div>

        {/* Message Content Section */}
        <div ref={contentRef} className={`p-8 md:p-12 space-y-6 ${contentInView ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}>

          {/* Chairman message heading - adapted for the new layout */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 relative pb-2">
            <span className="border-l-4 border-blue-500 pl-4">CHAIRMAN's <span className="text-blue-500">MESSAGE</span></span>
          </h2>
          <div className="h-1 bg-blue-500 mx-auto w-24 rounded-full"></div> {/* Simple separator line */}

          <div className="text-md leading-relaxed space-y-6">
            <p>
              It gives me immense pleasure to welcome you to the{" "}
              <span className="font-semibold text-blue-800">Saroj Educational Group (SEG)</span>, a beacon of
              knowledge and a nurturing ground for future leaders. Since our inception, SEG has remained steadfast
              in its mission to impart quality education, develop practical skills, and instill a sense of
              responsibility in our students.
            </p>
          </div>

          {/* Quote Section - Adjusted styling */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600 relative overflow-hidden">
            <MessageSquareQuote className="absolute top-4 right-4 text-blue-200 w-12 h-12" /> {/* Lucide icon */}
            <p className="text-xl italic text-blue-800 font-medium leading-relaxed">
              "Education is the key to empowerment, and at SEG, we strive to ignite the spark of curiosity,
              creativity, and courage in every learner."
            </p>
          </div>

          <div className="text-md leading-relaxed">
            <p>
              I firmly believe that education is the key to empowerment, and at SEG, we strive to ignite the spark
              of curiosity, creativity, and courage in every learner. I invite you to be a part of this remarkable
              journey of knowledge, growth, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;