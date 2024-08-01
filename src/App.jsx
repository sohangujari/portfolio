import Navbar from "./components/Navbar";
import Circle from "./components/Circle";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Circle />
      <Intro id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Footer />
    </div>
  )
}

export default App