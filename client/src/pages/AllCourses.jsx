import React from 'react';
import Layout from '../components/Layout';
import { GraduationCap } from 'lucide-react';

const allCourses =[
  // Diploma Courses
  {
    category: 'Diploma',
    title: 'D.Pharma (Diploma in Pharmacy)',
    duration: '2 Years',
    eligibility: '10+2 with Physics, Chemistry, Biology/Maths, min. 50%',
    image: 'https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_1280.jpg'
  },
  {
    category: 'Diploma',
    title: 'Diploma in Engineering (Various Branches)',
    duration: '3 Years (after 10th) / 2 Years (after 12th/ITI)',
    eligibility: '10th with 35-45% or 10+2/ITI (PCM)',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

  // Undergraduate Courses
  {
    category: 'Undergraduate',
    title: 'B.Tech - Computer Science Engineering (CSE)',
    duration: '4 Years',
    eligibility: '10+2 with PCM, min. 45%',
    image:  'https://media.istockphoto.com/id/1998660059/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.webp?a=1&b=1&s=612x612&w=0&k=20&c=b38xp_lw0-upEvjodUgwq9NNC8Lw4uDAS-SATyfr1hI=' // Example image for CSE
  },
  {
    category: 'Undergraduate',
    title: 'B.Tech - Electronics & Communication Engineering (ECE)',
    duration: '4 Years',
    eligibility: '10+2 with PCM, min. 45%',
    image: 'https://media.istockphoto.com/id/1705357580/photo/robotic-team-boost-software-machine-ensure-efficiency-troubleshooting-upgrade-for-optimal.webp?a=1&b=1&s=612x612&w=0&k=20&c=iyllNLvGhsg8FpvQ4l55jE4DvK3tQV19G25eOPvbgyE=' // Example image for ME
   },
  {
    category: 'Undergraduate',
    title: 'B.Tech - Mechanical Engineering (ME)',
    duration: '4 Years',
    eligibility: '10+2 with PCM, min. 45%',
    image: 'https://media.istockphoto.com/id/1705357580/photo/robotic-team-boost-software-machine-ensure-efficiency-troubleshooting-upgrade-for-optimal.webp?a=1&b=1&s=612x612&w=0&k=20&c=iyllNLvGhsg8FpvQ4l55jE4DvK3tQV19G25eOPvbgyE=' // Example image for ME
   },
  {
    category: 'Undergraduate',
    title: 'B.Tech - Civil Engineering (CE)',
    duration: '4 Years',
    eligibility: '10+2 with PCM, min. 45%',
    image: 'https://plus.unsplash.com/premium_photo-1661490867606-1ac837f9748e'
  },
  {
    category: 'Undergraduate',
    title: 'Bachelor of Pharmacy (B.Pharma)',
    duration: '4 Years',
    eligibility: '10+2 with PCB/Maths, min. 45%',
    image: 'https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_1280.jpg'
  },
  {
    category: 'Undergraduate',
    title: 'Bachelor of Business Administration (BBA)',
    duration: '3 Years',
    eligibility: '10+2 in any stream, min. 45%',
    image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd'
  },

  // Postgraduate Courses
  {
    category: 'Postgraduate',
    title: 'Master of Technology (M.Tech) - Computer Science & Engineering',
    duration: '2 Years',
    eligibility: 'B.Tech/BE in CSE/IT, min. 60%',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    category: 'Postgraduate',
    title: 'Master of Business Administration (MBA)',
    duration: '2 Years',
    eligibility: "Bachelor's in any stream, min. 50%",
    image: 'https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd'
  },
  {
    category: 'Postgraduate',
    title: 'Master of Computer Applications (MCA)',
    duration: '2 Years',
    eligibility: "Bachelor's with Maths at 10+2 or Grad Level, min. 50%",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const groupCoursesByCategory = (courses) => {
  return courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});
};

const AllCourses = () => {
  const groupedCourses = groupCoursesByCategory(allCourses);

  return (
    <Layout>
      <section className="bg-orange-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12 text-center">
           <span className='border-l-4 border-orange-500 pl-4'  >ALL </span><span className="text-orange-600">COURSES</span>
          </h1>

          {Object.entries(groupedCourses).map(([category, courses]) => (
            <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
  <GraduationCap className="h-8 w-8 text-orange-500" />
  {category} Courses
</h2>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                  >
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-orange-700 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-1"><strong>Duration:</strong> {course.duration}</p>
                      <p className="text-gray-600"><strong>Eligibility:</strong> {course.eligibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </Layout>
  );
};

export default AllCourses;

