import { useState } from "react";
import "./App.css";
import Improvement from "./models/Improvement";
import ResourcesView from "./components/ResourcesView/ResourcesView";
import Map from "./components/Map/Map";

function App() {
  const [structures, setStructures] = useState<Improvement[]>(
    new Array(25).fill(null)
  );
  // Add state for starting resources
  // both ResourceView and Map need this
  const [resources, setResources] = useState({
    starDust: 5,
    oxygen: 5,
    alienFood: 5,
    gloopie: 1,
    alien: 0,
  });

  const hardcodedImprovement: Improvement = {
    type: "Research Lab",
    level: 1,
    benefit: { resourceType: "alien", amountGained: 5 },
    cost: [
      { resourceType: "starDust", amountRequired: 5 },
      { resourceType: "oxygen", amountRequired: 5 },
      { resourceType: "alienFood", amountRequired: 5 },
      { resourceType: "gloopie", amountRequired: 1 },
    ],
  };

  structures[0] = hardcodedImprovement;
  structures[10] = hardcodedImprovement;

  // functions --------------------------------------------------

  const addImprovement = (index: number, improvement: Improvement): void => {
    let canAdd = true;

    improvement.cost.forEach((costItem) => {
      const resourceTypeKey = costItem.resourceType as keyof typeof resources;
      if (resources[resourceTypeKey] < costItem.amountRequired) {
        canAdd = false;
      }
    });

    if (canAdd) {
      setStructures((prev) => {
        // make a copy
        const copyOfPrev = [...prev.slice(0)];
        // modify copy
        copyOfPrev[index] = improvement;
        // return that copy

        // subtracting recourses needed to add improvement:
        improvement.cost.forEach((costItem) => {
          const resourceTypeKey =
            costItem.resourceType as keyof typeof resources;
          resources[resourceTypeKey] -= costItem.amountRequired;
        });

        // add benefit to recourses:
        setResources((prev) => {
          const copyOfResources = { ...prev };
          copyOfResources[
            improvement.benefit.resourceType as keyof typeof resources
          ] += improvement.benefit.amountGained;

          return copyOfResources;
        });

        return copyOfPrev;
      });
    } else {
    }
  };

  const upgradeImprovemnt = (index: number): void => {
    // set state first
    // Clone the previous structures array
    // Get the improvement to upgrade
    // Define the cost of upgrade
    // Check if there are enough resources for the upgrade
    // Upgrade the improvement level
    // Deduct the cost from resources
  };

  return (
    <div className="App">
      <header>
        <h1>Space Colony</h1>
      </header>
      <main>
        <ResourcesView resources={resources} />
        <Map structures={structures} addImprovement={addImprovement} />
      </main>
    </div>
  );
}

export default App;
