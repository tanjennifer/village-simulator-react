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
  "Oxygen Concentrator",
];

const AddImprovementDialog = ({ close, addImprovement, idx }: Props) => {
  const [improvement, setImprovement] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const newImprovement: Improvement = {
      type: improvement,
      level: 1,
      benefit: { resourceType: "alien", amountGained: 5 },
      cost: [
        { resourceType: "starDust", amountRequired: 5 },
        { resourceType: "oxygen", amountRequired: 5 },
        { resourceType: "alienFood", amountRequired: 5 },
        { resourceType: "gloopie", amountRequired: 1 },
      ],
    };
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
        {improvement === "Research Lab" && (
          <div>
            <p>Benefit: 5 Aliens</p>
            <p>Cost: 5 Star Dust, 5 Oxygen, 5 Alien Food, 1 Gloopie </p>
          </div>
        )}
        {improvement === "Launchpad" && (
          <div>
            <p>Benefit: 5 Gloopies </p>
            <p>Cost: 1 Alien, 2 Oxygen, 2 Alien Food </p>
          </div>
        )}
        {improvement === "Rocket" && (
          <div>
            <p>Benefit: 10 Alien Food</p>
            <p>Cost: 1 Alien, 2 Star Dust </p>
          </div>
        )}
        {improvement === "Observatory" && (
          <div>
            <p>Benefit: 10 Star Dust</p>
            <p>Cost: 1 Alien </p>
          </div>
        )}
        {improvement === "Oxygen Concentrator" && (
          <div>
            <p>Benefit: 10 Oxygen</p>
            <p>Cost: 1 Alien, 2 Alien Food</p>
          </div>
        )}
      </form>
    </>
  );
};

export default AddImprovementDialog;
