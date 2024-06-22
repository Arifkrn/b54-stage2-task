import { Box, Heading, Flex, Text, Input, Button, BoxProps, InputGroup, InputRightElement, Link } from "@chakra-ui/react"
import { api } from "../../../libs/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface RegisterFormProps extends BoxProps{}

type RegisterForm = {
    email: string;
    password: string;
}
export function RegisterForm(props: RegisterFormProps){

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [form, setForm] = useState<RegisterForm>({
        email: "",
        password: "",
        
    });
    const toast = useToast()
    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const name = event.target.name;
        const value = event.target.value;
        

        setForm({
            ...form,
            [name] : value
        });
    }

    async function handleSubmit(){
        try{
            
            await api.post("/auth/register", form);
            navigate("/auth/login"); // di halaman coba
            toast({
                title: 'Register Success',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch(error){
            toast({
                title: 'Register Failed',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }
    
    return(
        
            <Flex {...props}
                direction={"column"}
                align={"center"}
                height={"100vh"}
                >
                <Box
                    mt={10}
                    p={10}
                    >
                    <Flex direction={"column"} gap={2} width={300}>
                        <Heading fontWeight={"bold"} color={"green"}>Circle</Heading>
                        <Text fontSize={20} fontWeight={"bold"}>Register account Circle</Text>
                        <Input
                            name="fullName" 
                            placeholder={"full name"} 
                            size={"md"}
                            onChange={handleChange}
                        />
                        <Input
                            name="username" 
                            placeholder={"username"} 
                            size={"md"}
                            onChange={handleChange}
                        />
                        <Input
                            name="email" 
                            placeholder={"email"} 
                            size={"md"}
                            onChange={handleChange}
                        />
                        <InputGroup>
                            <Input
                                name="password" 
                                placeholder={"password"} 
                                size={"md"}
                                type={ show ? "text" : "password"} 
                                onChange={handleChange}
                            />
                            <InputRightElement width="50px">
                                    <Button bg={"gray"} h="20px" size="sm" onClick={handleClick}>
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                            </InputRightElement>
                        </InputGroup>
                        {/* {imagePreview && <Image src={imagePreview} height="200px" />}
                        <Input
                            name="image" 
                            placeholder={"password"} 
                            size={"md"}
                            type="file"
                            onChange={handleChange}
                        /> */}
                        <Button 
                            width={"100%"} 
                            borderRadius="full" 
                            bg="green"
                            onClick={handleSubmit}>
                            Create
                        </Button>
                        <Text>Already have account?
                            <Link href="/auth/login" color="green"> Login</Link>
                        </Text>
                    </Flex>  
                </Box>
            </Flex>
    )
}