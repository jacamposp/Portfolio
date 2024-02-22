import NavBar from "./Navigation/Navbar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Services from "./Services/Services";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";

export default function Index() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
    </>
  );
}
