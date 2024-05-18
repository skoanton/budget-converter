import { useBreakOutTransactions } from "@/hooks/useBreakeOutTransactions";
import { Transaction } from "@/types/transactions";
import { useState } from "react";
import Test from "./test";

export default function FileUploader() {
  const [text, setText] = useState<string>("");
  const transactions: Transaction[] = useBreakOutTransactions(text);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const text = event.target.result as string;
          setText(text);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <>
      <form>
        <label htmlFor="file">Choose a file</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </form>

      <section>
        {transactions.map((transaction, index) => {
          return (
            <div key={transaction.id}>
              <h2>Transaction {index + 1}</h2>
              <ul>
                <li>{transaction.accountName}</li>
                <li>{transaction.date.toLocaleDateString()}</li>
                <li>{transaction.amount} kr</li>
                <li>{transaction.description}</li>
                <li>{transaction.category}</li>
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}
