import { createAccount } from "@/lib/accounts/createAccount";
import { getAccountByName } from "@/lib/accounts/getAccontByName";
import { Account } from "@/types/accounts";

export async function getOrCreateAccount(
  accountName: string,
  onShowNewAccountForm: (accountName: string) => Promise<number>
): Promise<Account | null> {

  try {
    let account: Account | null = await getAccountByName(accountName);
    if (!account) {
      const startAmount = await onShowNewAccountForm(accountName);
      await createAccount(accountName, startAmount);
      account = await getAccountByName(accountName);
      if (!account) {
        console.error("Failed to create or retrieve account", accountName);
        return account;
      }
      return account;
    }
  } catch (error) {
    console.log("Failed to create or fetch account",error);
    return null;
  }
  return null;
}
