const TopNavbar = () => {
  return (
    <nav className=" hidden md:flex bg-[#214A9A] text-white py-3 px-4 md:px-8 shadow-md"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' }}>
      <div className="max-w-7xl mx-auto flex justify-end items-center text-sm font-inter">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="" className="px-3 py-1  ">
              Apply Now
            </a>
          </li>

          <span className="text-gray-400">|</span>

          <li>
            <a href="/current-students" className="px-3 py-1">
              Admission Helpline: +91 9513731275
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
