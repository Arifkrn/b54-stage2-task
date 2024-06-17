import { createContext, useState } from "react"

interface Transaction {
    id : number,
    name : string,
    price : number,
    qty : number
}

type TransctionContextType = {
    transactions : Transaction[],
    addNewTransaction: (transaction : Transaction) => void
}

export const TransactionContext = createContext<TransctionContextType | null>(null);

export const TransactionProvider = ({children} : {children : React.ReactNode}) => {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    const addNewTransaction = (newTransaction : Transaction) => {

        setTransaction((prev) => [...prev, newTransaction])
    }

    return (
        <TransactionContext.Provider value={{transactions, addNewTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}