import AccountView from "@/components/AccountView/AccountView";
import { getAccounts } from "@/lib/getAccounts";

export default async function page() {
  const accounts = await getAccounts();

  if (accounts) {
    return <AccountView accounts={accounts} />;
  }
}
