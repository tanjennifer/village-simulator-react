import Improvement from "../../models/Improvement";
import Tile from "../Tile/Tile";
import "./Map.css";

interface Props {
  structures: Improvement[];
}

const Map = ({ structures }: Props) => {
  return (
    <section className="Map">
      {structures.map((structure, index) => {
        return <Tile key={index} structure={structure} />;
      })}
    </section>
  );
};

export default Map;
