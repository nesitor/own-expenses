export interface Movement {
    id: string,
    concept: string,
    amount: number,
    category: Category,
    account: Account
}

export interface Category {
    id: number,
    name: string,
}

export const defaultCategories: Category[] = [
    {id: 0, name: 'Spend'},
    {id: 1, name: 'Income'}
]

export interface Account {
    id: number,
    name: string,
}

export const defaultAccounts: Account[] = [
    {id: 0, name: 'Bank N26'},
    {id: 2, name: 'Bank BBVA'},
    {id: 3, name: 'CRO Card'}
]
