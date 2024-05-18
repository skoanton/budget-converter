import { useBreakOutTransactions } from "@/hooks/useBreakeOutTransactions";
import { Transaction } from "@/types/transactions";
import { useState } from "react";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const text = event.target.result as string;
          const parsedTransactions = useBreakOutTransactions(text);
          setTransaction(parsedTransactions);
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
        <ul>
          {transaction.map((transaction, index) => {
            return (
              <>
                <h2>Transaction {index + 1}</h2>
                <ul key={transaction.id}>
                  <li>{transaction.accountName}</li>
                  <li>{transaction.date.toLocaleDateString()}</li>
                  <li>{transaction.amount} kr</li>
                  <li>{transaction.description}</li>
                </ul>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}
