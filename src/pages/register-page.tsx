import { Box, Text } from "@chakra-ui/react"
import { Register } from "../components/register"
import { useEffect, useState } from "react"
import { api } from "../libs/api"


function RegisterPage(){
    type Post = {
        userId : number;
        id : number;
        title : string;
        body : string

    }

    const [posts, setPosts] = useState<Post[]>([])

    async function getPosts(){
        const response = await api.get("/posts")
        setPosts(response.data)
    }

    useEffect(() => {
        getPosts();
    }, [])

    const dataRegister ={

        title : "Circle",
        page : "Create account Circle",
        register : "Create",
        login : " login"
    }

    return (
        <Box bg="white" color="black">
            <Register
            title = {dataRegister.title}
            page = {dataRegister.page}
            register = {dataRegister.register}
            login = {dataRegister.login}
            />
            {posts.map(value => {
                return(
                    <Box borderBottom="1px">
                        <Text>{value.title}</Text>
                        <Text>{value.body}</Text>
                    </Box>
                )
            })}
        </Box>
        
    )
}

export default RegisterPage

