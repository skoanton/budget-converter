export interface Transaction {
    id: string,
    accountName: string,
    date: Date,
    description: string,
    amount: string,
    category?: string,
}

export type Category = {
    id: string,
    name: string,
    description: string
}