import { Input, Flex, Box, Button, Image, Text, VStack } from "@chakra-ui/react"

interface SearchProps{
    profile : string,
    name : string,
    username : string,
    article : string
}

export function Search({profile, name, username, article}: SearchProps){
    return (
        <Box
        w="700px"
        display="flex"
        flexDirection="column"
        borderWidth="0px 1px"
        borderColor="gray"
        >
            <Flex direction="column" fontSize="12" align="start" margin="20px">
                <Input placeholder="search" mb="6" borderRadius="full" color="none" size="sm"/>
                <Flex gap="0" mb="6" display="flex" alignItems="center" width="100%" justifyContent="space-between">
                    <Flex>
                        <Image boxSize="40px" borderRadius="30" marginRight="3" src={profile} alt="" />
                        <VStack gap="0" fontSize="10px" align="start">
                            <Text fontWeight="bold">{name}</Text>
                            <Text color="gray">{username}</Text>
                            <Text>{article}</Text>
                        </VStack>
                    </Flex>
                    <Button 
                    marginStart="12"
                    fontSize="10" 
                    height="8" 
                    _hover={{bg: "black"}}
                    borderWidth="1px"
                    variant="ghost"
                    color="white"
                    borderRadius="20px"
                    >Follow
                    </Button>
                </Flex>
                <Flex gap="0" mb="6" display="flex" alignItems="center" width="100%" justifyContent="space-between">
                    <Flex>
                        <Image boxSize="40px" borderRadius="30" marginRight="3" src={profile} alt="" />
                        <VStack gap="0" fontSize="10px" align="start">
                            <Text fontWeight="bold">{name}</Text>
                            <Text color="gray">{username}</Text>
                            <Text>{article}</Text>
                        </VStack>
                    </Flex>
                    <Button 
                    marginStart="12"
                    fontSize="10" 
                    height="8" 
                    _hover={{bg: "black"}}
                    borderWidth="1px"
                    variant="ghost"
                    color="white"
                    borderRadius="20px"
                    >Follow
                    </Button>
                </Flex>
            </Flex>

        </Box>
    )
}