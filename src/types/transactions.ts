export interface Transaction {
    id: string,
    account: string,
    date: Date,
    description: string,
    amount: number,
    category?: string,
}

export type Category = {
    id: string,
    name: string,
    description: string
}