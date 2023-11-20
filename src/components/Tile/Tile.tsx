import { useState } from "react";
import Improvement from "../../models/Improvement";
import "./Tile.css";
import AddImprovementDialog from "../AddImprovementDialog/AddImprovementDialog";
import EditImprovementDialog from "../EditImprovementDialog/EditImprovementDialog";

interface Props {
  structure: Improvement;
  addImprovement: (index: number, improvement: Improvement) => void;
  idx: number;
  upgradeImprovement: (i: number) => void;
}

const Tile = ({
  structure,
  addImprovement,
  idx,
  upgradeImprovement,
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

  // close add/edit dialog (callback prop):

  return (
    <>
      <div className="Tile" onClick={clickHandler}>
        {structure ? `${structure.type} - Level ${structure.level}` : "Empty"}
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
