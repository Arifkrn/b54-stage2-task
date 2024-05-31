import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react"

interface SuggestProps{
    title :string,
    picture : string,
    name : string,
    username : string,
    following : string,
    followers : string
}

export function Suggest ({title,picture, name, username, following, followers} : SuggestProps){
    return(
        <Box
        p="4"
        borderRadius="10px"
        // borderWidth="1px"
        width="400px"
        height="270px"
        background="#383838"
        ms="10"
        mt="2">
            <VStack align="start">
            <Text mb="2">{title}</Text>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="center" >
                <Image 
                src={picture}
                boxSize="40px"
                borderRadius="full"
                marginRight="3"
                />
                <VStack gap="1">
                <Text>{name}</Text>
                <Text color="gray">{username}</Text>
                </VStack>
                </Flex>
                <Button fontSize="10" height="8" borderColor="gray" variant="ghost" borderWidth="1px" borderRadius="20px" color="gray">{following}</Button>
            </Flex>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="center" >
                <Image 
                src={picture}
                boxSize="40px"
                borderRadius="full"
                marginRight="3"
                />
                <VStack gap="1">
                    <Text>{name}</Text>
                    <Text color="gray">{username}</Text>
                </VStack>
                </Flex>
                <Button fontSize="10" height="8" variant="ghost" borderWidth="1px" borderRadius="20px" color="white">{followers}</Button>
            </Flex>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="center" >
                <Image 
                src={picture}
                boxSize="40px"
                borderRadius="full"
                marginRight="3"
                />
                <VStack gap="1">
                <Text>{name}</Text>
                <Text color="gray">{username}</Text>
                </VStack>
                </Flex>
                <Button fontSize="10" height="8" variant="ghost" borderWidth="1px" borderRadius="20px" color="white">{followers}</Button>
            </Flex>
            </VStack>
        </Box>

    )
}