import "./ResourceLine.css";

interface Props {
  icon: string;
  type: string;
  amount: number;
}

const ResourceLine = ({ icon, type, amount }: Props) => {
  return (
    <div className="ResourceLine">
      <div className="type">{type}</div>
      <div className="iconAmount">
        <p className="icon">{icon}</p>
        <p className="amount">{amount}</p>
      </div>
    </div>
  );
};

export default ResourceLine;
