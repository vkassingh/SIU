import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/AboutSIU";
import AdmissionCriteria from "./pages/Admission/AdmissionCriteria";
import Scholarship from "./pages/Admission/scholarship";
import AdmissionProcess from "./pages/Admission/AdmissionProcess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/about-siu" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="admissions/admission-criteria" element={<AdmissionCriteria/>} /> 
      <Route path="admissions/scholarship" element={<Scholarship />} /> 
      <Route path="admissions/admission-process" element={<AdmissionProcess />} />


    </Routes>
  );
}

export default App;
