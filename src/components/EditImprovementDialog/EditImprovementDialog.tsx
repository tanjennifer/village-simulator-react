import Improvement from "../../models/Improvement";
import "./EditImprovementDialog.css";

interface Props {
  structure: Improvement;
  close: () => void;
  upgradeImprovement: () => void;
  downgradeImprovement: () => void;
}

const EditImprovementDialog = ({
  structure,
  close,
  upgradeImprovement,
  downgradeImprovement,
}: Props) => {
  return (
    <div className="EditImprovementDialog">
      <p>Type: {structure ? structure.type : ""}</p>
      <p>Level: {structure ? structure.level : ""}</p>
      {structure.type === "Research Lab" && (
        <div>
          <p>Benefit: {5 * structure.level} Aliens</p>
          <p>
            Cost: {5 * structure.level} Star Dust, {5 * structure.level} Oxygen,{" "}
            {5 * structure.level} Alien Food, {1 * structure.level} Gloopie
          </p>
        </div>
      )}
      {structure.type === "Launchpad" && (
        <div>
          <p>Benefit: {5 * structure.level} Gloopies </p>
          <p>
            Cost: {1 * structure.level} Alien, {2 * structure.level} Oxygen,{" "}
            {2 * structure.level} Alien Food{" "}
          </p>
        </div>
      )}
      {structure.type === "Rocket" && (
        <div>
          <p>Benefit: {10 * structure.level} Alien Food</p>
          <p>
            Cost: {1 * structure.level} Alien, {2 * structure.level} Star Dust{" "}
          </p>
        </div>
      )}
      {structure.type === "Observatory" && (
        <div>
          <p>Benefit: {10 * structure.level} Star Dust</p>
          <p>Cost: {1 * structure.level} Alien </p>
        </div>
      )}
      {structure.type === "Oxygen Concentrator" && (
        <div>
          <p>Benefit: {10 * structure.level} Oxygen</p>
          <p>
            Cost: {1 * structure.level} Alien, {2 * structure.level} Alien Food
          </p>
        </div>
      )}
      <div className="btn-container">
        <button onClick={close}>close</button>
        <button onClick={upgradeImprovement}>upgrade</button>
        <button onClick={downgradeImprovement}>downgrade</button>
      </div>
    </div>
  );
};

export default EditImprovementDialog;
