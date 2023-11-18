import { FormEvent, useState } from "react";
import Improvement from "../../models/Improvement";
import "./AddImprovementDialog.css";

interface Props {
  structure: Improvement;
  close: () => void;
  addImprovement: (index: number, improvement: Improvement) => void;
  idx: number;
}

const improvementTypes: string[] = [
  "Research Lab",
  "Launchpad",
  "Rocket",
  "Observatory",
];

const AddImprovementDialog = ({ close, addImprovement, idx }: Props) => {
  const [improvement, setImprovement] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // TODO
    const newImprovement: Improvement = { type: improvement, level: 1 };
    addImprovement(idx, newImprovement);
  };

  return (
    <>
      <form className="AddImprovementDialog" onSubmit={submitHandler}>
        <button>add</button>
        <button type="button" onClick={close}>
          close
        </button>
        <label htmlFor="improvements">Pick</label>
        <select
          id="improvements"
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
        >
          <option value="" disabled selected>
            Improve Colony
          </option>
          {improvementTypes.map((type) => {
            return <option value={type}>{type}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default AddImprovementDialog;
