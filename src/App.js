import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    
`;



function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Landingpage />
        
      </Container>
     
      <Container>
        <Service/>
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>

    </>
      
     
    
  );
}

export default App;
