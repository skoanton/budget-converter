import DateForm from "./DateForm";

type SortBudgetProps = {
  onSetDate: (date: Date[]) => void;
};

export default function SortBudget({ onSetDate }: SortBudgetProps) {
  return <DateForm onSetDate={onSetDate} />;
}
