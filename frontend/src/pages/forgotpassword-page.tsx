import { Box, Button, Flex, Heading, Input, Link, Text } from "@chakra-ui/react";


function ForgotPasswordPage (){
    
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
                        <Text fontSize={20} fontWeight={"bold"}>Forgot Password</Text>
                        <Input
                            name="email" 
                            placeholder={"email"} 
                            size={"md"}
                        />
                        <Button 
                            width={"100%"} 
                            borderRadius="full" 
                            bg="green">
                            Send Intruction
                        </Button>
                        <Text>Already have account?
                            <Link href="/auth/login" color="green"> Login</Link>
                        </Text>
                    </Flex>  
                </Box>
            </Flex>
    )
}

export default ForgotPasswordPage;