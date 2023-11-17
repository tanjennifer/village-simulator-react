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
      <p className="icon">{icon}</p>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default ResourceLine;
