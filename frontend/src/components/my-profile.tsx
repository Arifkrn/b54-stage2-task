import { Box, Text, VStack, Image, Flex, Button } from "@chakra-ui/react"

interface MyprofProps{
    sampul : string,
    picprof : string,

}

export function Myprofile({sampul, picprof} : MyprofProps){
    return(
        <Flex
        direction={"column"}>
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
            <Text fontWeight="bold">My profile</Text>
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
                        <Button mt="4" borderRadius="20px" fontSize="12" height="8" borderWidth="1px" variant="ghost" color="white">edit</Button>
                    </VStack> 
                        
                </Box>
                <VStack align="flex-start" spacing="1" mt="10">
                        <Text fontWeight="bold">Koceng Oren</Text>
                        <Text fontSize="12" color="gray">@kocengoren90</Text>
                        <Text fontSize="12">saya adalah ras kucing terkuat di bumi</Text>
                        <Flex gap="2" fontSize="12">
                            <Text>200</Text>
                            <Text color="gray">Following</Text>
                            <Text>500</Text>
                            <Text color="gray">Followers</Text>
                        </Flex>
                </VStack>
                
            
        </Box>
        </Flex>
    )
}