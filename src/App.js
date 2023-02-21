import "./App.css";
import Hero from "./Components/Stateful/Hero/Hero";
import Navbar from "./Components/Stateless/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
