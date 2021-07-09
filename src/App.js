import "./assets/css/global.css";
import Header from "./components/header/Header";
import { Container } from "./components/partials/Container";
import { Social, SocialItem, SocialLink } from "./components/sticky/Social";
import { _social } from "./components/sticky/data/_social";

function App() {
  const displaySocial = () => {
    return _social.map((item, index) => (
      <SocialItem>
        <SocialLink>{item.logo}</SocialLink>
      </SocialItem>
    ));
  };

  return (
    <>
      <Container display="block">
        <Header />
        <Social>{displaySocial()}</Social>
      </Container>
    </>
  );
}

export default App;
