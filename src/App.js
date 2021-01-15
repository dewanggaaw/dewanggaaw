import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homescreen/Home";
import About from "./Pages/Aboutscreen/About";
import Exp from "./Pages/Experiences/Exp";
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <About />
      <Exp /> */}
    </div>
  );
}

export default App;
