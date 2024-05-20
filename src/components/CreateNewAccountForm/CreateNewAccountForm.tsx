import React, { useState } from "react";

type CreateNewAccountModalProps = {
  onSubmit: (amount: number) => void;
  accountName: string;
};

export default function CreateNewAccountModal({
  onSubmit,
  accountName,
}: CreateNewAccountModalProps) {
  const [startAmount, setStartAmount] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(Number(startAmount));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>A new account found with name {accountName}</h2>

        <label htmlFor="">Start amount</label>
        <input
          type="number"
          name="amount"
          onChange={(e) => setStartAmount(e.currentTarget.value)}
          required
        />
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}
