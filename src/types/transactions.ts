export interface Transaction {
    id: string,
    accountName: string,
    date: Date,
    description: string,
    amount: string,
    category?: string,
}