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
import { useRef, useState, useEffect } from "react";

import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  let containerRef = useRef(null);
  let id = useRef(null);

  const loaderStyle = css`
    display: block;
    margin: 0 auto;
    color: #64ffda;
    margin-top: 3rem;
  `;

  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(4);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) clear();
  }, [timer]);

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
      {preloader ? (
        <div className="preloader">
          <h2>Imane Sihi</h2>
          <h4>Interior Designer</h4>
          <PropagateLoader
            css={loaderStyle}
            loading={true}
            size={10}
            color={"#64ffda"}
          />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
