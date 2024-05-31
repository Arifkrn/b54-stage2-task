import { TransactionProvider } from "./context/transaction-context";

export function Providers({children} : {children : React.ReactNode}){
    return(
        <TransactionProvider>
            {children}
        </TransactionProvider>
    )
}