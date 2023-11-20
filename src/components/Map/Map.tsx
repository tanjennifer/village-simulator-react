import Improvement from "../../models/Improvement";
import Tile from "../Tile/Tile";
import "./Map.css";

interface Props {
  structures: Improvement[];
  addImprovement: (i: number, improvement: Improvement) => void;
  upgradeImprovement: (i: number) => void;
}

const Map = ({ structures, addImprovement, upgradeImprovement }: Props) => {
  return (
    <section className="Map">
      {structures.map((structure, index) => {
        return (
          <Tile
            key={index}
            idx={index}
            structure={structure}
            addImprovement={addImprovement}
            upgradeImprovement={upgradeImprovement}
          />
        );
      })}
    </section>
  );
};

export default Map;
