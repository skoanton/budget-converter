import { DocumentReference } from 'firebase/firestore';
import { Account } from './accountType';
export type Transaction = {
    id: string,
    account: DocumentReference<Account>,
    date: Date,
    type: "income" | "expense",
    description: string,
    amount: number,
    category: DocumentReference<Category>,
}

export type Category = {
    id: string,
    name: string,
    description: string,
    spentAmount: number,
    budgetLimit:  number,
}
