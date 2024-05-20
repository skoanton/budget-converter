import { Account } from "@/types/account";

type AccountViewProps = {
  accounts: Account[];
};

export default function AccountView({ accounts }: AccountViewProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {accounts.map((account) => {
        return (
          <div
            key={account.id}
            className="border flex justify-center items-center flex-col gap-2"
          >
            <h2 className="text-xl font-bold">{account.name.toUpperCase()}</h2>
            <p className="italic">Amount: {account.amount} kr</p>
          </div>
        );
      })}
    </div>
  );
}
