import { useState } from "react";
import "./App.css";
import Improvement from "./models/Improvement";
import ResourcesView from "./components/ResourcesView/ResourcesView";
import Map from "./components/Map/Map";

function App() {
  const [structures, setStructures] = useState<Improvement[]>(
    new Array(25).fill(null)
  );

  return (
    <div className="App">
      <header>
        <h1>Space Colony</h1>
      </header>
      <main>
        <ResourcesView />
        <Map structures={structures} />
      </main>
    </div>
  );
}

export default App;
