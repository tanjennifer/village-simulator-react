import { useState } from "react";
import "./App.css";
import Improvement from "./models/Improvement";
import ResourcesView from "./components/ResourcesView/ResourcesView";
import Map from "./components/Map/Map";

function App() {
  const [structures, setStructures] = useState<Improvement[]>(
    new Array(25).fill(null)
  );
  // const [selectedTile, setSelectedTile] = useState(null);

  // functions --------------------------------------------------

  // handleTileClick:
  const handleTileClick = (index: number) => {
    const selectedTile = structures[index];
  };

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
