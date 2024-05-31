import { Flex, Box, Stack, Text, Button, Input, Link } from "@chakra-ui/react"


interface RegisterProps{
    title : string,
    page : string,
    register : string,
    login : string
}

export function Register({title, page, register, login} : RegisterProps){
    return (
        <Flex
    direction="column"
    align="center"
    justify="center"
    height="100vh">
    <Box
        width="360px"
        m="auto"
        mt="100px"
        p="6"
        >
            <Stack gap="2">
            <Text fontSize="30" fontWeight="bold" color="green">{title}</Text>
            <Text fontSize="20" fontWeight="bold">{page}</Text>
            <Input 
                placeholder="Full name" 
                size='md' 
            />
            <Input 
                placeholder="Email" 
                size='md' 
            />
            <Input 
                placeholder="password" 
                size='md' 
            />

            <Button 
                width="100%" 
                borderRadius="full" 
                bg="green">
                {register}
            </Button>
            <Text>Already have account? 
                <Link color="green">{login}</Link>
            </Text>
            </Stack>  
        </Box>
        </Flex>
    )
}