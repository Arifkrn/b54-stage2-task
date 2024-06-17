import { Box } from "@chakra-ui/react"
// import { Register } from "../components/register"
// import { useEffect, useState } from "react"
// import { api } from "../libs/api"
// import { UserrrProfile } from "../exercises/contoh"
import { RegisterForm } from "../features/auth/components/register"

function RegisterPage(){
    // type Post = {
    //     userId : number;
    //     id : number;
    //     title : string;
    //     body : string

    // }

    // const [posts, setPosts] = useState<Post[]>([])

    // async function getPosts(){
    //     const response = await api.get("/");
    //     // console.log(response.data)
    //     setPosts(response.data)
    // }

    // useEffect(() => {
    //     getPosts();
    // }, [])


    // const dataRegister ={

    //     title : "Circle",
    //     page : "Create account Circle",
    //     register : "Create",
    //     login : " login"
    // }

    return (
        <Box>
            {/* <Register
            title = {dataRegister.title}
            page = {dataRegister.page}
            register = {dataRegister.register}
            login = {dataRegister.login}
            /> */}
            {/* {posts.map(value => {
                return(
                    <Box borderBottom="1px">
                        <Text>{value.id}</Text>
                        <Text>{value.title}</Text>
                        <Text>{value.body}</Text>
                        <Text>{value.userId}</Text>
                    </Box>
                )
            })} */}

            {/* <UserrrProfile/> */}
            <RegisterForm/>
        </Box>
        
        
    )
}

export default RegisterPage

