import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/services/Services";
import StudentProfile from "./components/services/StudentProfile/StudentProfile";
import Financial from "./components/services/Financial/Financial";
import Visa from "./components/services/Visa/Visa";
import Admission from "./components/services/Admission/Admission";
import Scholarship from "./components/services/Scholarship/Scholarship";
import Departure from "./components/services/Departure/Departure";
import TopHeader from "./components/shared/Header/TopHeader";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="studentProfile" element={<StudentProfile />} />
          <Route path="financial" element={<Financial />} />
          <Route path="visa" element={<Visa />} />
          <Route path="admission" element={<Admission />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="departure" element={<Departure />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
