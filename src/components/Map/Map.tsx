import Improvement from "../../models/Improvement";
import "./Map.css";

interface Props {
  structures: Improvement[];
}

const Map = ({ structures }: Props) => {
  return <div className="Map">Map works</div>;
};

export default Map;
