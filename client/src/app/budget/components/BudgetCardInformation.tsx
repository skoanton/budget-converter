import { getMonthlyExpense } from "@/lib/categories/getMonthlyExpense";
import { Category } from "@/types/categories";
import { useEffect, useState } from "react";

type BudgetCardInformationProps = {
  category: Category;
  date: Date[];
};

export default function BudgetCardInformation({
  category,
  date,
}: BudgetCardInformationProps) {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const fetchedAmount = await getMonthlyExpense(category, date);

        if (fetchedAmount) {
          setTotalAmount(fetchedAmount.total_amount);
        } else {
          console.log("fetched amount is empty bitch");
        }
      } catch (error) {
        console.error("could not fetch total amount in useeffect", error);
      }
    };
    fetchTotalAmount();
  }, [date]);

  const spentAmount = Math.round(Math.abs(totalAmount));
  const budgetDif = Math.round(Math.abs(totalAmount)) - category.budget;
  console.log("Total spent:", totalAmount);

  return (
    <>
      <p className="font-bold">
        Spent:{" "}
        <span className="font-normal">
          {" "}
          {Math.round(Math.abs(spentAmount))}/{category.budget} kr
        </span>
      </p>
      <p className="font-bold">
        Budget difference:{" "}
        <span
          className={`${
            budgetDif > 0 ? "text-red-500" : "text-green-500"
          } font normal`}
        >
          {Math.abs(budgetDif)} kr
        </span>
      </p>
    </>
  );
}
