import React from 'react';
import Layout from '../../components/Layout';

const ScholarshipPage = () => {
  return (
    <Layout>
      <div className="bg-[#F3F8FF] py-20 px-4 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-gray-900">SCHOLARSHIP </span>
              <span className="text-blue-600">PROGRAM</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Empowering students through recognition, encouragement, and accessible opportunities.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card: Introduction */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">About the Program</h3>
              <p className="text-gray-600 text-xl">
                Saroj International University (SIU) offers generous scholarship opportunities to recognize and reward academic excellence among its students.
              </p>
            </div>

            {/* Card: Criteria */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Scholarship Criteria</h3>
              <p className="text-gray-600 text-xl">
                The program is merit-based and awarded based on academic performance in previous qualifying examinations.
              </p>
            </div>

            {/* Card: Percentage-Based Discounts */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Percentage-Based Discounts</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-xl">
                <li>90–100% marks: <strong>75%</strong> tuition fee discount</li>
                <li>70–90% marks: <strong>50%</strong> tuition fee discount</li>
                <li>55–70% marks: <strong>25%</strong> tuition fee discount</li>
              </ul>
            </div>

            {/* Card: Recognition */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Recognition of Achievement</h3>
              <p className="text-gray-600 text-xl">
                Scholarships honor the dedication of students who excel academically while easing financial burdens.
              </p>
            </div>

            {/* Card: Encouragement */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Encouragement for Excellence</h3>
              <p className="text-gray-600 text-xl">
                These incentives are designed to motivate students to reach their academic potential.
              </p>
            </div>

            {/* Card: Accessibility */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Accessible Opportunities</h3>
              <p className="text-gray-600 text-xl">
                SIU ensures students from all financial backgrounds can access quality education.
              </p>
            </div>

            {/* Card: Support */}
            <div className="bg-white shadow-xl rounded-xl p-6">
              <h3 className="text-blue-600 font-semibold text-2xl mb-2">Continued Support</h3>
              <p className="text-gray-600 text-xl">
                SIU remains committed to supporting its students throughout their academic journey.
              </p>
            </div>

            {/* Card: Closing Statement */}
            <div className="bg-white shadow-xl rounded-xl p-6 md:col-span-2 xl:col-span-3">
              <p className="font-medium text-gray-800 text-xl">
                The scholarship program at Saroj International University reflects a commitment to recognizing talent, fostering excellence, and making education accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScholarshipPage;
