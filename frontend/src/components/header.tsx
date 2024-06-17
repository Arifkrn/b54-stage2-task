import { Flex, Image, Button, Box, VStack, Input, Heading } from "@chakra-ui/react"
import { CiImageOn } from "react-icons/ci";

interface HeaderProps{
    mypicture : string
}

export function Header({mypicture} : HeaderProps){
    return (
        <Box
        borderWidth="0px 1px 1px 1px"
        borderColor="gray"
        w="700px"
        color="white"
        >
            <VStack align="start" m="20px">
                <Heading fontSize="20px" fontWeight="bold">Home</Heading>
                <Flex align="start" width="96%" gap="2">
                    <Image src={mypicture} borderRadius="full" boxSize="40px"/>
                    <Input placeholder="What is happening?!" border="none" borderRadius="full" color="none" size="sm"/>
                    <CiImageOn size="40px" color="green" />
                    <Button size="sm" borderRadius="full" w="70px" color="white" bg="green">post</Button>
                </Flex>
            </VStack>
        </Box>
    )
}