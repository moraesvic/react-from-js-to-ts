import { Counter } from "./components/Counter/Counter";
import { Instructions } from "./components/Instructions/Instructions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React: from JS to Typescript</h1>
      </header>
      <main>
        <Counter />
        <hr />
        <Instructions />
      </main>
    </div>
  );
}

export default App;
