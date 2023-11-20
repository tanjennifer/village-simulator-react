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

  // const hardcodedImprovement: Improvement = {
  //   type: "Research Lab",
  //   level: 1,
  //   benefit: { resourceType: "alien", amountGained: 5 },
  //   cost: [
  //     { resourceType: "starDust", amountRequired: 5 },
  //     { resourceType: "oxygen", amountRequired: 5 },
  //     { resourceType: "alienFood", amountRequired: 5 },
  //     { resourceType: "gloopie", amountRequired: 1 },
  //   ],
  // };

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

        // add benefit to recourses:

        return copyOfPrev;
      });

      setResources((prev) => {
        const copyOfResources = { ...prev };
        copyOfResources[
          improvement.benefit.resourceType as keyof typeof resources
        ] += improvement.benefit.amountGained;

        // subtracting recourses needed to add improvement:
        improvement.cost.forEach((costItem) => {
          const resourceTypeKey =
            costItem.resourceType as keyof typeof resources;
          copyOfResources[resourceTypeKey] -= costItem.amountRequired;
        });

        return copyOfResources;
      });
    } else {
    }
  };

  const upgradeImprovement = (index: number): void => {
    const improvement = structures[index];

    let canUpgrade = true;

    improvement.cost.forEach((costItem) => {
      const resourceTypeKey = costItem.resourceType as keyof typeof resources;
      if (
        resources[resourceTypeKey] <
        costItem.amountRequired * improvement.level
      ) {
        canUpgrade = false;
      }
    });
    if (canUpgrade) {
      setStructures((prev) => {
        const copyOfStructures = [...prev.slice(0)];
        const copyOfImprovement = { ...copyOfStructures[index] };

        copyOfImprovement.level++;
        console.log("testing!!");

        copyOfStructures[index] = {
          ...copyOfStructures[index],
          level: copyOfStructures[index].level + 1,
        };

        console.log(copyOfStructures);

        return copyOfStructures;
      });

      setResources((prev) => {
        const copyOfResources = { ...prev };
        copyOfResources[
          improvement.benefit.resourceType as keyof typeof resources
        ] += improvement.benefit.amountGained;

        improvement.cost.forEach((costItem) => {
          const resourceTypeKey =
            costItem.resourceType as keyof typeof resources;
          copyOfResources[resourceTypeKey] -=
            costItem.amountRequired * improvement.level;
        });
        return copyOfResources;
      });
    } else {
      console.log("not enough resources to upgrade");
    }
  };

  const downgradeImprovement = (index: number): void => {
    let canDowngrade = false;
    const improvement = structures[index];

    if (improvement.level > 1) {
      canDowngrade = true;
    }
    if (canDowngrade) {
      setStructures((prev) => {
        const copyOfStructures = [...prev.slice(0)];
        const copyOfImprovement = { ...copyOfStructures[index] };

        copyOfImprovement.level--;
        console.log("testing!!");

        copyOfStructures[index] = {
          ...copyOfStructures[index],
          level: copyOfStructures[index].level - 1,
        };

        console.log(copyOfStructures);

        return copyOfStructures;
      });
      setResources((prev) => {
        const copyOfResources = { ...prev };
        copyOfResources[
          improvement.benefit.resourceType as keyof typeof resources
        ] -= improvement.benefit.amountGained;

        improvement.cost.forEach((costItem) => {
          const resourceTypeKey =
            costItem.resourceType as keyof typeof resources;
          copyOfResources[resourceTypeKey] +=
            costItem.amountRequired * (improvement.level - 1);
        });
        return copyOfResources;
      });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Space Colony</h1>
      </header>
      <main>
        <ResourcesView resources={resources} />
        <Map
          structures={structures}
          addImprovement={addImprovement}
          upgradeImprovement={upgradeImprovement}
          downgradeImprovement={downgradeImprovement}
        />
      </main>
    </div>
  );
}

export default App;
