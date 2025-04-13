import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import FinishedProjects from "./pages/Projects/FinishedProjects";
import OngoingProjects from "./pages/Projects/OngoingProjects";
import RestorationProjects from "./pages/Projects/RestorationProjects";
import ErrorPage from "./pages/Error/ErrorPage";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import Careers from "./pages/Careers/Careers";
import CareersLayout from "./pages/Careers/CareersLayout";
import Sponsors from "./components/Sponsors/Sponsors";
import AboutConco from "./components/AboutPageComponents/SectionOneAboutConco/AboutConco";
import OurValue from "./components/AboutPageComponents/SectionFourOurValue/OurValue";
import Certificates from "./components/AboutPageComponents/SectionFiveCertificates/Certificates"
import Licences from "./components/AboutPageComponents/SectionSixLicences/Licences"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} >
        <Route path="about-us" element={<AboutConco />} />
        <Route
          path="sponsors"
          element={<Sponsors />}
        />
        <Route
          path="why-us"
          element={<OurValue />}
        />
        <Route
          path="certificates"
          element={<Certificates />}
        />
        <Route
          path="licences"
          element={<Licences />}
        />
      </Route>
      <Route path="projects" element={<Projects />}>
        <Route
          path="/projects/finished-projects"
          element={<FinishedProjects />}
        />
        <Route
          path="/projects/ongoing-projects"
          element={<OngoingProjects />}
        />
        <Route
          path="/projects/restoration-projects"
          element={<RestorationProjects />}
        />
      </Route>
      <Route path="vacancy" element={<CareersLayout />}>
        <Route index element={<Careers />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ScrollTopButton />
    </div>
  );
}

export default App;
