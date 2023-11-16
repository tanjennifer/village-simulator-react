import ResourceLine from "../ResourceLine/ResourceLine";
import "./ResourcesView.css";

const ResourcesView = () => {
  return (
    <div className="ResourcesView">
      <ResourceLine icon={"star"} type="Star Dust" amount={0} />
      <ResourceLine icon={"ox"} type="Oxygen" amount={0} />
      <ResourceLine icon={"food"} type="Alien Food" amount={0} />
      <ResourceLine icon={"al"} type="Alien" amount={0} />
      <ResourceLine icon={"glop"} type="Gloopie" amount={0} />
    </div>
  );
};

export default ResourcesView;
