import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Flex, Image, VStack, Button } from "@chakra-ui/react"
import { useState } from "react"


interface FollowsProps{
    profile : string,
    name : string,
    username : string,
    article : string
}
 


export const Follows = ({profile, name, username, article}: FollowsProps) => {
    
    const [isChange, setIsChange] = useState<boolean>(false)
    return(
        <>
            <Box
            w="700px"
            display="flex"
            flexDirection="column"
            borderWidth="0px 1px"
            borderColor="gray"
            p="4"
            >
        
            <Tabs>
                <TabList>
                    <Tab w="350px">Followers</Tab>
                    <Tab w="350px">Following</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex gap="3" mb="6" display="flex" alignItems="center" width="100%" justifyContent="space-between">
                            <Flex>
                                <Image boxSize="40px" borderRadius="30" marginRight="3" src={profile} alt="" />
                                <VStack gap="0" fontSize="10px" align="start">
                                    <Text fontWeight="bold">{name}</Text>
                                    <Text color="gray">{username}</Text>
                                    <Text>{article}</Text>
                                </VStack>
                            </Flex>

                            {isChange ? (
                                <Button onClick={() =>{
                                    setIsChange(false)
                                }}marginStart="12" 
                                fontSize="10" 
                                height="8" 
                                color="gray" 
                                borderColor="gray" 
                                variant="ghost" 
                                _hover={{bg: "black"}}
                                borderWidth="1px"
                                borderRadius="20px"
                                >Followed
                                </Button>
                            ) : (

                                <Button onClick={() =>{
                                    setIsChange(true)
                                }} marginStart="12"
                                fontSize="10" 
                                height="8" 
                                _hover={{bg: "black"}}
                                borderWidth="1px"
                                variant="ghost"
                                color="white"
                                borderRadius="20px"
                                >Follow
                                </Button>
                            )}

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
                        <Flex gap="0" mb="6" display="flex" alignItems="center" width="100%" justifyContent="space-between">
                            <Flex>
                                <Image boxSize="40px" borderRadius="30" marginRight="3" src={profile} alt="" />
                                <VStack gap="0" fontSize="10px" align="start">
                                    <Text fontWeight="bold">{name}</Text>
                                    <Text color="gray">{username}</Text>
                                    <Text>{article}</Text>
                                </VStack>
                            </Flex>
                            <Button marginStart="12" 
                            fontSize="10" 
                            height="8" 
                            color="gray" 
                            borderColor="gray" 
                            variant="ghost" 
                            _hover={{bg: "black"}}
                            borderWidth="1px"
                            borderRadius="20px"
                            >Followed
                            </Button>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                    <Flex gap="3" mb="6" display="flex" alignItems="center" width="100%" justifyContent="space-between">
                            <Flex>
                                <Image boxSize="40px" borderRadius="30" marginRight="3" src="https://images.pexels.com/photos/4067761/pexels-photo-4067761.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <VStack gap="0" fontSize="10px" align="start">
                                    <Text fontWeight="bold">{name}</Text>
                                    <Text color="gray">{username}</Text>
                                    <Text>{article}</Text>
                                </VStack>
                            </Flex>

                            {isChange ? (
                                <Button onClick={() =>{
                                    setIsChange(false)
                                }} marginStart="12"
                                fontSize="10" 
                                height="8" 
                                _hover={{bg: "black"}}
                                borderWidth="1px"
                                variant="ghost"
                                color="white"
                                borderRadius="20px"
                                >Follow
                                </Button>

                            ) : (
                                <Button onClick={() =>{
                                    setIsChange(true)
                                }}marginStart="12" 
                                fontSize="10" 
                                height="8" 
                                color="gray" 
                                borderColor="gray" 
                                variant="ghost" 
                                _hover={{bg: "black"}}
                                borderWidth="1px"
                                borderRadius="20px"
                                >Followed
                                </Button>
                            )}

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
                            <Button marginStart="12" 
                            fontSize="10" 
                            height="8" 
                            color="gray" 
                            borderColor="gray" 
                            variant="ghost" 
                            _hover={{bg: "black"}}
                            borderWidth="1px"
                            borderRadius="20px"
                            >Followed
                            </Button>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
                    
        </>
    )
}