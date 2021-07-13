import "./assets/css/global.css";
import Header from "./components/header/Header";
import { Container } from "./components/partials/Container";
import { Social, SocialItem, SocialLink } from "./components/sticky/Social";
import { _social } from "./components/sticky/data/_social";
import { navigation } from "./components/header/data/navigation";
import Introduction from "./components/header/Introduction";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navigation, StickyNav } from "./components/sticky/Navigation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  const displaySocial = () => {
    return _social.map((item, index) => (
      <SocialItem>
        <SocialLink>{item.logo}</SocialLink>
      </SocialItem>
    ));
  };

  const displayNavigation = () => {
    return navigation.map((item, index) => (
      <StickyNav>
        <Link
          to={item.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1100}
          className="stickyNavLink"
          activeClass="stickyNavActive"
        >
          0{item.id}
        </Link>
      </StickyNav>
    ));
  };

  return (
    <>
      <Header />
      <Container display="block" ref={(el) => (el = containerRef)}>
        <Social>{displaySocial()}</Social>
        <Navigation>{displayNavigation()}</Navigation>
        <Introduction />
        <About />
        <Experiences />
        <Works />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
