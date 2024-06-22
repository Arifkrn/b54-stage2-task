import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function ResetPasswordPage(){

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return(
        <Flex
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
                        <Text fontSize={20} fontWeight={"bold"}>Reset Password</Text>
                        <InputGroup>
                            <Input
                                name="password" 
                                placeholder={"new password"} 
                                size={"md"}
                                type={ show ? "text" : "password"} 
                                
                            />
                            <InputRightElement width="50px">
                                    <Button bg={"gray"} h="20px" size="sm" onClick={handleClick}>
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup>
                            <Input
                                name="password" 
                                placeholder={"confirm new password"} 
                                size={"md"}
                                type={ show ? "text" : "password"} 
                                
                            />
                            <InputRightElement width="50px">
                                    <Button bg={"gray"} h="20px" size="sm" onClick={handleClick}>
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button 
                            width={"100%"} 
                            borderRadius="full" 
                            bg="green">
                            Create New Password
                        </Button>
                    </Flex>  
                </Box>
            </Flex>
    )
}

export default ResetPasswordPage;