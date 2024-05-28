import { DocumentReference } from 'firebase/firestore';
import { Account } from './accountType';
import { Category } from './categories';
export type Transaction = {
    id: string,
    account: DocumentReference<Account>,
    date: Date,
    type: "income" | "expense",
    description: string,
    amount: number,
    category: DocumentReference<Category>,
}

