import { Box, VStack, Flex, Text } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface Contactprops {
    myname : string
}

export function Contactme({myname} : Contactprops){
    return(
        <Box
        ms="10"
        mt="2" 
        width="400px"
        height = "50px"
        borderRadius="10px"
        bg="#383838"
        p="2"
        >
            <VStack align="start" fontSize="12" gap="1">
                <Flex gap="4">
                    <Text>Developed By <strong>{myname}</strong></Text>
                    <Flex gap="2">
                    <FaGithub size="15"/>
                    <FaLinkedin size="15"/>
                    <FaFacebook size="15"/>
                    <FaInstagram size="15"/>
                    </Flex>
                </Flex>
                <Text fontSize="10" color="gray">Powered By Dumbways Indonesia #1Coding Bootcamp</Text>
            </VStack>
        </Box>
    )
}