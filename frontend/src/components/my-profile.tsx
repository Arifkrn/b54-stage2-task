import { Box, Text, VStack, Flex, Button, Avatar } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function Myprofile(){

    const currentUser = useSelector((state: RootState) => state.auth.user);

    return(
        <Flex
        direction={"column"}>
            <Box
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
                    bgColor={"blue"} 
                    bgSize="cover" 
                    height="60px" 
                    position="relative" 
                    borderRadius="10px"
                    
                    >
                        <Avatar src={currentUser.photoProfile} 
                            size={"lg"}
                            position="absolute" 
                            top="20px" 
                            left="5%" 
                            border={"2px solid white"}/>
                        <VStack align="end" mt="30" position="absolute" top="20px" right="5%">
                            <Button mt="4" borderRadius="20px" fontSize="12" height="8" borderWidth="1px" variant="ghost" color="white">edit</Button>
                        </VStack> 
                            
                    </Box>
                    <VStack align="flex-start" spacing="1" mt="10">
                            <Text fontWeight="bold">{currentUser.fullName}</Text>
                            <Text fontSize="12" color="gray">@{currentUser.username}</Text>
                            <Text fontSize="12">{currentUser.bio}</Text>
                            <Flex gap="2" fontSize="12">
                                <Text>200</Text>
                                <Text color="gray">Following</Text>
                                <Text>500</Text>
                                <Text color="gray">Followerssss</Text>
                            </Flex>
                    </VStack>
                                
            </Box>
            
        </Flex>
    )
}