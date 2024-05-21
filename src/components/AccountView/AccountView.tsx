import { Account } from "@/types/accountType";

type AccountViewProps = {
  accounts: Account[];
};

export default function AccountView({ accounts }: AccountViewProps) {
  console.log(accounts);
  return (
    <div className="grid grid-cols-4 gap-2">
      {accounts.map((account) => {
        return (
          <div
            key={account.id}
            className="border flex justify-center items-center flex-col gap-2"
          >
            <h2 className="text-xl font-bold">{account.name}</h2>
            <p className="italic">Amount: {account.balance} kr</p>
          </div>
        );
      })}
    </div>
  );
}
