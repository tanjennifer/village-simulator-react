import { useState } from "react";
import Improvement from "../../models/Improvement";
import "./AddImprovementDialog.css";

interface Props {
  structure: Improvement;
  close: () => void;
  addImprovement: (index: number, improvement: Improvement) => void;
}

const improvementTypes: string[] = [
  "Research Lab",
  "Launchpad",
  "Rocket",
  "Observatory",
];

const AddImprovementDialog = ({ close, addImprovement }: Props) => {
  const [improvement, setImprovement] = useState("");
  return (
    <>
      <form className="AddImprovementDialog">
        {/* <button onClick={() => addImprovement()}>add</button> */}
        <button type="button" onClick={close}>
          close
        </button>
        <label htmlFor="improvements">Pick</label>
        <select
          id="improvements"
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
        >
          {improvementTypes.map((type) => {
            return <option value={type}>{type}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default AddImprovementDialog;
