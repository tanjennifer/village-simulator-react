import Improvement from "../../models/Improvement";
import "./EditImprovementDialog.css";

interface Props {
  structure: Improvement;
  close: () => void;
}

const EditImprovementDialog = ({ structure, close }: Props) => {
  return (
    <div className="EditImprovementDialog">
      <p>Type: {structure ? structure.type : ""}</p>
      <p>Level: {structure ? structure.level : ""}</p>
      <div className="btn-container">
        <button onClick={close}>close</button>
        <button>upgrade</button>
        <button>downgrade</button>
      </div>
    </div>
  );
};

export default EditImprovementDialog;
