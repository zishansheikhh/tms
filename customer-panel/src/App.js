import { Routes, Route } from "react-router-dom";
import LandingPage from './routes/landing-page.component';
import ContactPage from './routes/contact.component'
import AllCourses from "./routes/AllCourses.component.jsx";
import Workshops from "./routes/workshops.component";
import AcademyPage from "./routes/academypage.component";
import AboutMe from "./routes/about-me.component";

// 3rd party library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

// Css
import './App.css';


library.add(fas, fab, far)

function App() {
  return (
    <Routes>
      {/* Common */}
      {/* <Route path="/mainlogo" element={<mainLogo />}/> */}

      {/* Pages */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="/tms-courses" element={<AllCourses />}/>
      <Route path="/workshops" element={<Workshops />}/>
      <Route path="/tms-academy" element={<AcademyPage />}/>
      <Route path="/about-me" element={<AboutMe />}/>
      <Route path="/contact-me" element={<ContactPage />}/>
    </Routes>
  );
}

export default App;