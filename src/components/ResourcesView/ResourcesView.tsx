import ResourceLine from "../ResourceLine/ResourceLine";
import "./ResourcesView.css";

const ResourcesView = () => {
  return (
    <div className="ResourcesView">
      <ResourceLine icon={} type="Star Dust" amount={0} />
      <ResourceLine icon={} type="Oxygen" amount={0} />
      <ResourceLine icon={} type="Alien Food" amount={0} />
      <ResourceLine icon={} type="Alien" amount={0} />
      <ResourceLine icon={} type="Gloopie" amount={0} />
    </div>
  );
};

export default ResourcesView;
