import { Box, Text, VStack, Image, Flex, Button } from "@chakra-ui/react"

interface MyprofProps{
    myprof : string,
    sampul : string,
    picprof : string,
    editprof : string,
    name : string,
    username : string,
    bio : string,
    following : string,
    followers : string
}

export function Myprofile({myprof, sampul, picprof, editprof, name, username, bio, following, followers} : MyprofProps){
    return(
        <Box
        // borderWidth="1px"
        ms="10"
        mt="2"
        color="white"
        height="270px" 
        width="400px" 
        borderRadius="10px"
        // alignContent="start"
        bg="#383838"
        p ="2"
        
        >
            <VStack align="start" p="2">
            <Text fontWeight="bold">{myprof}</Text>
                <Box
                bgPosition="center" 
                color="white" 
                width="100%" 
                mt="10px" 
                bgImage={sampul} 
                bgSize="cover" 
                height="60px" 
                position="relative" 
                borderRadius="10px"
                >
                    <Image src={picprof} 
                        borderRadius="full"
                        boxSize="80px" 
                        position="absolute" 
                        top="20px" 
                        left="5%"/>
                    <VStack align="end" mt="30" position="absolute" top="20px" right="5%">
                        <Button mt="4" borderRadius="20px" fontSize="12" height="8" borderWidth="1px" variant="ghost" color="white">{editprof}</Button>
                    </VStack> 
                        
                </Box>
                <VStack align="flex-start" spacing="1" mt="10">
                        <Text fontWeight="bold">{name}</Text>
                        <Text fontSize="12" color="gray">{username}</Text>
                        <Text fontSize="12">{bio}</Text>
                        <Flex gap="2" fontSize="12">
                            <Text>{following}</Text>
                            <Text color="gray">Following</Text>
                            <Text>{followers}</Text>
                            <Text color="gray">Followers</Text>
                        </Flex>
                </VStack>
                
            </VStack>
        </Box>
    )
}