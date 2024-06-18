// import { useContext, useEffect } from "react"
// import { Login } from "../components/login"
import {LoginForm} from "../features/auth-login/components/login"
// import { TransactionContext } from "../context/transaction-context"
import { Box } from "@chakra-ui/react";



function LoginPage(){

    // const state = useContext(TransactionContext);
    // console.log("transactions", state?.transactions);

    // useEffect(() => {
    //     state?.addNewTransaction({
    //         id : 123,
    //         name : "arif",
    //         price : 123, 
    //         qty : 123
    //     });

    // }, [state])

    // const dataLogin = {
    //     title : "Circle",
    //     page : "Login to Circle",
    //     forgot : "forgot password",
    //     login : "Login",
    //     create : " Create account"
    // }
    return(
        <Box>
        {/* <Login
        title = {dataLogin.title}
        page = {dataLogin.page}
        forgot = {dataLogin.forgot}
        login = {dataLogin.login}
        create = {dataLogin.create}/> */}
        {/* {JSON.stringify(state?.addNewTransaction)} */}
        <LoginForm/>
        </Box>
    )
}

export default LoginPage