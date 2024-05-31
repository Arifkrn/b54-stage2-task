import { Link, Button, Text, Input, Box, Flex, Stack} from "@chakra-ui/react"

interface LoginProps {
    title : string,
    page : string,
    forgot : string,
    login : string,
    create : string
}
export function Login({title, page, forgot, login, create} : LoginProps){
    return(
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
                placeholder="username or email" 
                size='md' 
            />
            <Input 
                placeholder="password" 
                size='md' 
            />
            <Flex justify="flex-end">
            <Link>{forgot}</Link>
            </Flex>
            <Button 
                width="100%" 
                borderRadius="full" 
                bg="green">
                {login}
            </Button>
            <Text>Don't have an account yet? 
                <Link color="green">{create}</Link>
            </Text>
            </Stack>  
        </Box>
        </Flex>
    )
}