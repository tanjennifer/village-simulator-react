import Improvement from "../../models/Improvement";
import "./AddImprovementDialog.css";

interface Props {
  structure: Improvement;
  close: () => void;
}

const AddImprovementDialog = ({ structure, close }: Props) => {
  return (
    <>
      <div className="AddImprovementDialog">
        <button>add</button>
        <button onClick={close}>close</button>
      </div>
    </>
  );
};

export default AddImprovementDialog;
