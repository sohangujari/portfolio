import Navbar from "./components/Navbar";
import Circle from "./components/Circle";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Circle />
      <Intro id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Footer />
    </div>
  )
}

export default App