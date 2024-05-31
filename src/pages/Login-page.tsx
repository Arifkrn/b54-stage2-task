import { useContext, useEffect } from "react"
import { Login } from "../components/login"
import { TransactionContext } from "../context/transaction-context"



function LoginPage(){

    const state = useContext(TransactionContext);
    console.log("transactions", state?.transactions);

    useEffect(() => {
        state?.addNewTransaction({
            id : 123,
            name : "arif",
            price : 123, 
            qty : 123
        });

    }, [])

    const dataLogin = {
        title : "Circle",
        page : "Login to Circle",
        forgot : "forgot password",
        login : "Login",
        create : " Create account"
    }

    return(
        <>
        <Login
        title = {dataLogin.title}
        page = {dataLogin.page}
        forgot = {dataLogin.forgot}
        login = {dataLogin.login}
        create = {dataLogin.create}/>
        {JSON.stringify(state?.addNewTransaction)}
        </>
    )
}

export default LoginPage