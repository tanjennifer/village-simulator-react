import Benefit from "./Benefit";
import CostItem from "./CostItem";

export default interface Improvement {
  type: string;
  level: number;
  benefit: Benefit;
  cost: CostItem[]; // Array of CostItem
}
