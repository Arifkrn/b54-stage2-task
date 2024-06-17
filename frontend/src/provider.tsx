import { TransactionProvider } from "./context/transaction-context";
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({children} : {children : React.ReactNode}){

    const theme = extendTheme({
        styles : {
          global : {
            body : {
              bg : "#242424",
              color : "white"
            }
          }
        }
      })

    return(
        <ReduxProvider store={store}>
            <TransactionProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
            </TransactionProvider>
        </ReduxProvider>
        
    )
}