import ResourceLine from "../ResourceLine/ResourceLine";
import "./ResourcesView.css";
import star from "../../assets/stardust.png"
import oxygen from "../../assets/oxygen.png"
import food from "../../assets/alienfood.png"
import alien from "../../assets/alien.png"
import gloopie from "../../assets/gloopie.png"


const ResourcesView = () => {
  return (
    <div className="ResourcesView">
      <ResourceLine icon={star} type="Star Dust" amount={0} />
      <ResourceLine icon={oxygen} type="Oxygen" amount={0} />
      <ResourceLine icon={food} type="Alien Food" amount={0} />
      <ResourceLine icon={alien} type="Alien" amount={0} />
      <ResourceLine icon={gloopie} type="Gloopie" amount={0} />
    </div>
  );
};

export default ResourcesView;
