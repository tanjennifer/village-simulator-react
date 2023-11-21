import { useState } from "react";
import Improvement from "../../models/Improvement";
import "./Tile.css";
import AddImprovementDialog from "../AddImprovementDialog/AddImprovementDialog";
import EditImprovementDialog from "../EditImprovementDialog/EditImprovementDialog";
import lab from "../../assets/lab.png";
import launchpad from "../../assets/launchpad.png";
import observatory from "../../assets/observatory.png";
import oxygencon from "../../assets/oxygen-con.png";
import rocket from "../../assets/rocket.png";

interface Props {
  structure: Improvement;
  addImprovement: (index: number, improvement: Improvement) => void;
  idx: number;
  upgradeImprovement: (i: number) => void;
  downgradeImprovement: (i: number) => void;
}

const Tile = ({
  structure,
  addImprovement,
  idx,
  upgradeImprovement,
  downgradeImprovement,
}: Props) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  // functions ------------------------------

  // click handler
  const clickHandler = () => {
    if (structure) {
      setShowEditForm(true);
    } else {
      setShowAddForm(true);
    }
  };

  const getIcon = (improvement: Improvement): string => {
    if (improvement.type === "Research Lab") {
      return lab;
    } else if (improvement.type === "Observatory") {
      return observatory;
    } else if (improvement.type === "Launchpad") {
      return launchpad;
    } else if (improvement.type === "Rocket") {
      return rocket;
    } else if (improvement.type === "Oxygen Concentrator") {
      return oxygencon;
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="Tile" onClick={clickHandler}>
        {structure && (
          <img className="improvementIcon" src={getIcon(structure)} />
        )}
      </div>
      {showAddForm && (
        <AddImprovementDialog
          idx={idx}
          addImprovement={addImprovement}
          structure={structure}
          close={() => {
            setShowAddForm(false);
          }}
        />
      )}
      {showEditForm && (
        <EditImprovementDialog
          upgradeImprovement={() => upgradeImprovement(idx)}
          downgradeImprovement={() => downgradeImprovement(idx)}
          structure={structure}
          close={() => {
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
};

export default Tile;
