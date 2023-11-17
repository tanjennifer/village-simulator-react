import Improvement from "../../models/Improvement";
import "./EditImprovementDialog.css";

interface Props {
  structure: Improvement;
}

const EditImprovementDialog = ({ structure }: Props) => {
  return (
    <div className="EditImprovementDialog">
      <p>Type: {structure ? structure.type : ""}</p>
      <p>Level: {structure ? structure.level : ""}</p>
    </div>
  );
};

export default EditImprovementDialog;
