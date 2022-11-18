import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Mainpage from "./components/main/main";
import Footersection from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Footersection />
    </div>
  );
}

export default App;
