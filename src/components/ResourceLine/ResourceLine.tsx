import "./ResourceLine.css";

interface Props {
  icon: string;
  type: string;
  amount: number;
}

const ResourceLine = ({ icon, type, amount }: Props) => {
  return (
    <div className="ResourceLine">
      <p className="type">{type}</p>
      <div className="iconContainer">
        <img src={icon} className="icon"></img>
      </div>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default ResourceLine;
