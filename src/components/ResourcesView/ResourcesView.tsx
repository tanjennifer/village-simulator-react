import ResourceLine from "../ResourceLine/ResourceLine";
import "./ResourcesView.css";

const ResourcesView = () => {
  return (
    <div className="ResourcesView">
      <ResourceLine icon={"icon-star"} type="Star Dust" amount={0} />
      <ResourceLine icon={"icon-ox"} type="Oxygen" amount={0} />
      <ResourceLine icon={"icon-food"} type="Alien Food" amount={0} />
      <ResourceLine icon={"icon-ali"} type="Alien" amount={0} />
      <ResourceLine icon={"icon-glop"} type="Gloopie" amount={0} />
    </div>
  );
};

export default ResourcesView;
