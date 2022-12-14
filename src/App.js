import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
