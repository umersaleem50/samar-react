import "./App.css";
import Hero from "./Components/Stateful/Hero/Hero";
import Features from "./Components/Stateless/Features/Features";
import Navbar from "./Components/Stateless/Navbar/Navbar";
import Section from "./Components/Stateless/Section/Section";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Section>
          <Features />
        </Section>
      </header>
    </div>
  );
}

export default App;
