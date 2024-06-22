import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Avatar, Box, Button, Editable, EditableInput, EditablePreview, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Sidebar } from "../components/side-bar";
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";
// import { SET_USER } from "../redux/slices/auth";
// import {ChildComponent} from "../components/coba"


const MyProfilePage = () => {
    
    const currentUser = useSelector((state: RootState) => state.auth.user);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Flex flexDir={"row"} width={"100%"}>
            <Sidebar/>
            <Box w={"700px"} >
                <Heading m={2}>{currentUser.fullName}</Heading>
                <Box
                bgPosition="center" 
                color="white" 
                m={2} 
                mb={"30px"} 
                bgColor={"teal"} 
                bgSize="cover" 
                height="100px" 
                position="relative" 
                borderRadius="10px">
                    <Avatar 
                    size={"lg"}
                    position="absolute" 
                    top="65px" 
                    left="5%" 
                    border={"2px solid white"}
                    mb={"50px"}
                    src={currentUser.photoProfile} />
                    <VStack 
                    align="end" 
                    mt="20" 
                    position="absolute" 
                    top="20px" 
                    right="5%">
                        <Button  
                        borderRadius="20px"
                        mt={2} 
                        height="8" 
                        borderWidth="1px" 
                        variant="ghost" 
                        color="white"
                        onClick={onOpen}>
                            Edit Profile
                        </Button>
                    </VStack>
                </Box>
                <Box p={2}>
                    <Text fontWeight={"bold"} fontSize={20}>{currentUser.fullName}</Text>
                    <Text fontSize={12} color={"gray"}>@{currentUser.username}</Text>
                    <Text fontSize={14}>{currentUser.bio}</Text>
                    <Flex gap="2" fontSize="12">
                            <Text>200</Text>
                            <Text color="gray">Following</Text>
                            <Text>500</Text>
                            <Text color="gray">Followers</Text>
                    </Flex>
                </Box>
                <Tabs>
                    <TabList>
                        <Tab w="350px">Allposts</Tab>
                        <Tab w="350px">Media</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex gap="4">
                                <Image boxSize="40px" borderRadius="30" pos="absolute" src="" alt="" />
                                <Text ps="12" fontWeight="bold"></Text>
                                <Text color="gray"></Text>
                                <Text color="gray"></Text>
                            </Flex>
                            <Text marginStart="12" fontSize="12"></Text>
                            <Image marginStart="12" marginTop="4" src="" height={"100px"} />
                            <Flex gap="1" ps="12">
                                <Button size="sm" color="gray" variant="ghost"  _hover={{bg : "black"}}>
                                    <Text>23</Text>
                                </Button>
                                <Button  size="sm" color="gray" variant="ghost"  _hover={{bg : "black"}}>
                                    <Text>3</Text>
                                </Button>
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex direction={"column"}>
                                <Image />
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Flex direction="column" borderWidth={"0px 0px 1px 1px"} width="480px" borderColor={"gray"}>
                     
                    <Suggest/>
                    <Contactme/>
            </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editable color={"white"} borderColor={"white"}  defaultValue={currentUser.fullName}>
            <EditablePreview borderColor={"white"} />
            <EditableInput borderColor={"white"} />
            </Editable>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
        // <div>
        //     <h1>Parent Component</h1>
        //     {data.map((item, index) => (
        //         <ChildComponent key={index} data={item} />
        //     ))}
        // </div>


};

export default MyProfilePage;