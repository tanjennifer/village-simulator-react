import { useState } from "react";
import Improvement from "../../models/Improvement";
import "./Tile.css";
import AddImprovementDialog from "../AddImprovementDialog/AddImprovementDialog";
import EditImprovementDialog from "../EditImprovementDialog/EditImprovementDialog";
import star from "../../assets/stardust.png";
import oxygen from "../../assets/oxygen.png";
import food from "../../assets/alienfood.png";
import alien from "../../assets/alien.png";
import gloopie from "../../assets/gloopie.png";

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
      return alien;
    } else if (improvement.type === "Observatory") {
      return star;
    } else if (improvement.type === "Launchpad") {
      return gloopie;
    } else if (improvement.type === "Rocket") {
      return food;
    } else if (improvement.type === "Oxygen Concentrator") {
      return oxygen;
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
