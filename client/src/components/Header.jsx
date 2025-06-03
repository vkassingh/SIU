import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg"; // background image
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    subItems: [
      { title: "About SIU", path: "/about/about-siu" },
      { title: "Core Values", path: "/about/core-values" },
      { title: "Vision & Mission", path: "/about/vision-mission" },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    subItems: [
      { title: "Programs", path: "/academics/programs" },
      { title: "Exam Calendar", path: "/academics/exam-calendar" },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    subItems: [
      { title: "Admission Criteria", path: "/admissions/admission-criteria" },
      { title: "Admission Process", path: "/admissions/admission-process" },
      { title: "Scholarship", path: "/admissions/scholarship" },
    ],
  },
  {
    title: "Student Life",
    path: "/student-life",
    subItems: [
      { title: "Hostel Facilities", path: "/student-life/hostel" },
      { title: "Sports", path: "/student-life/sports" },
    ],
  },
  {
    title: "Research",
    path: "/research",
    subItems: [
      { title: "Research and Development Cell", path: "/research/RnD-cell" },
      { title: "Innovation Centre", path: "/research/innovation-center" },
    ],
  },
  { title: "Contact Us", path: "/contact-us" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const menuRef = useRef(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img src={logo} alt="SSITM logo" className="h-12 w-auto" />
            </Link>

            <ul
              className="hidden md:flex space-x-6 text-md items-center"
              ref={menuRef}
            >
              {navItems.map((item, index) => (
                <li key={item.path} className="relative group">
                  {item.subItems ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setOpenSubmenu(index)}
                        onFocus={() => setOpenSubmenu(index)}
                        className="flex items-center text-gray-700 px-2 py-1 relative
                                   before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                   before:bg-orange-500 before:transition-all before:duration-300
                                   hover:before:w-full"
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                            openSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 ${
                          openSubmenu === index
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                        onMouseEnter={() => setOpenSubmenu(index)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {item.subItems.map((subItem) =>
                          subItem.target ? (
                            <a
                              key={subItem.path}
                              href={subItem.path}
                              target={subItem.target}
                              rel={subItem.rel}
                              className="block px-4 py-2 text-gray-700 relative
                                         before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                         before:bg-orange-500 before:transition-all before:duration-300
                                         hover:before:w-full"
                              onClick={closeAllMenus}
                            >
                              {subItem.title}
                            </a>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-700 relative
                                         before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                         before:bg-orange-500 before:transition-all before:duration-300
                                         hover:before:w-full"
                              onClick={closeAllMenus}
                            >
                              {subItem.title}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 px-2 py-1 relative
                                 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                 before:bg-orange-500 before:transition-all before:duration-300
                                 hover:before:w-full"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div
            className={`md:hidden ${
              mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <ul className="pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <li key={item.path}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex items-center justify-between w-full px-3 py-3 hover:bg-gray-50"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`${
                          openSubmenu === index ? "max-h-96" : "max-h-0"
                        } overflow-hidden`}
                      >
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              {subItem.target ? (
                                <a
                                  href={subItem.path}
                                  target={subItem.target}
                                  rel={subItem.rel}
                                  className="block px-3 py-3 hover:bg-gray-50 relative
                                             before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                             before:bg-orange-500 before:transition-all before:duration-300
                                             hover:before:w-full"
                                  onClick={closeAllMenus}
                                >
                                  {subItem.title}
                                </a>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-3 py-3 hover:bg-gray-50 relative
                                             before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                             before:bg-orange-500 before:transition-all before:duration-300
                                             hover:before:w-full"
                                  onClick={closeAllMenus}
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-3 hover:bg-gray-50 relative
                                   before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                                   before:bg-orange-500 before:transition-all before:duration-300
                                   hover:before:w-full"
                      onClick={closeAllMenus}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
