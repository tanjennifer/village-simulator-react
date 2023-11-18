import ResourceLine from "../ResourceLine/ResourceLine";
import "./ResourcesView.css";
import star from "../../assets/stardust.png";
import oxygen from "../../assets/oxygen.png";
import food from "../../assets/alienfood.png";
import alien from "../../assets/alien.png";
import gloopie from "../../assets/gloopie.png";
import Resources from "../../models/Resources";

interface Props {
  resources: Resources;
}

const ResourcesView = ({ resources }: Props) => {
  return (
    <div className="ResourcesView">
      <ResourceLine icon={star} type="Star Dust" amount={resources.starDust} />
      <ResourceLine icon={oxygen} type="Oxygen" amount={resources.oxygen} />
      <ResourceLine
        icon={food}
        type="Alien Food"
        amount={resources.alienFood}
      />
      <ResourceLine icon={alien} type="Alien" amount={resources.alien} />
      <ResourceLine icon={gloopie} type="Gloopie" amount={resources.gloopie} />
    </div>
  );
};

export default ResourcesView;
