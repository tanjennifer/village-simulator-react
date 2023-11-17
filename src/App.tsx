import { useState } from "react";
import "./App.css";
import Improvement from "./models/Improvement";
import ResourcesView from "./components/ResourcesView/ResourcesView";
import Map from "./components/Map/Map";

function App() {
  const [structures, setStructures] = useState<Improvement[]>(
    new Array(25).fill(null)
  );

  const hardcodedImprovement: Improvement = {
    type: "Research Lab",
    level: 3,
  };

  structures[0] = hardcodedImprovement;
  structures[10] = hardcodedImprovement;

  // functions --------------------------------------------------

  const addImprovement = (index: number, improvement: Improvement): void => {
    setStructures((prev) => {
      // make a copy
      const copyOfPrev = [...prev.slice(0)];
      // modify copy
      copyOfPrev[index] = improvement;
      // return that copy
      return copyOfPrev;
    });
  };


  const upgradeImprovemnt = (index: number): void => {};

  return (
    <div className="App">
      <header>
        <h1>Space Colony</h1>
      </header>
      <main>
        <ResourcesView />
        <Map structures={structures} addImprovement={addImprovement} />
      </main>
    </div>
  );
}

export default App;
