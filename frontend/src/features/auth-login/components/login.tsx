import { Box, Heading, Flex, Text, Input, Button, Link, BoxProps, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useLoginForm } from "../hooks/use-login-from"
import React from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface LoginFormProps extends BoxProps{}

export function LoginForm(props: LoginFormProps){
    const { handleSubmit, onSubmit, register, errors } = useLoginForm()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex {...props}
                direction={"column"}
                align={"center"}
                height={"100vh"}
                >
                <Box
                    mt={10}
                    p={10}
                    >
                    <Flex direction={"column"} gap={2}>
                        <Heading fontWeight={"bold"} color={"green"}>Circle</Heading>
                        <Text fontSize={20} fontWeight={"bold"}>Create account Circle</Text>
                        <Input
                            placeholder="username or email"
                            size="md"
                            type="email"
                            {...register("email")}
                        />
                        <Text color="red">{errors.email?.message}</Text>
                        <InputGroup>
                            <Input
                                placeholder="password"
                                size="md"
                                type={show ? 'text' : 'password'}
                                {...register("password")}
                            />
                            <InputRightElement width="50px">
                                <Button bg={"gray"} h="20px" size="sm" onClick={handleClick}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text color="red">{errors.password?.message}</Text>
                        
                        {/* {imagePreview && <Image src={imagePreview} height="200px" />}
                        <Input
                            name="image" 
                            placeholder={"password"} 
                            size={"md"}
                            type="file"
                            onChange={handleChange}
                        /> */}
                        <Flex justify="flex-end">
                            <Link>forgot password?</Link>
                        </Flex>
                        <Button
                            isDisabled={!!(errors.email?.message || errors.password?.message)}
                            type="submit" 
                            width={"100%"} 
                            borderRadius="full" 
                            bg="green">
                            login
                        </Button>
                        <Text>Don't have an account yet? 
                            <Link href="/auth/register" color="green"> create account</Link>
                        </Text>
                    </Flex>  
                </Box>
            </Flex>
        </form>
        
    )
}