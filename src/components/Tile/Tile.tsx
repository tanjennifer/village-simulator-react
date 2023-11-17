import { useState } from "react";
import Improvement from "../../models/Improvement";
import "./Tile.css";
import AddImprovementDialog from "../AddImprovementDialog/AddImprovementDialog";
import EditImprovementDialog from "../EditImprovementDialog/EditImprovementDialog";

interface Props {
  structure: Improvement;
}

const Tile = ({ structure }: Props) => {
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
          structure={structure}
          close={() => {
            setShowAddForm(false);
          }}
        />
      )}
      {showEditForm && <EditImprovementDialog structure={structure} />}
    </>
  );
};

export default Tile;
