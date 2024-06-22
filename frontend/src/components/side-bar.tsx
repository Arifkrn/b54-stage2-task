import { Box, VStack, Text, Button, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, Input, ModalFooter, useDisclosure} from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import React from 'react';


export function Sidebar (){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return(
        // <Flex>
        <Box
        w="350px"
        height={"100vh"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        borderWidth={"0px 1px 1px 0px"}
        borderColor={"gray"}
        >
            <VStack ps="6" align="start" spacing="2">
                <Text fontSize="5xl" color="green" fontWeight="bold" >Circle</Text>
                <Link href="/home">
                    <Button color="white" leftIcon={<FaHome />} variant="ghost" _hover={{bg : "black"}} >home</Button>
                </Link>
                <Link href="/search">
                    <Button color="white" leftIcon={<FaSearch />} variant="ghost" _hover={{bg : "black"}} >search</Button>
                </Link>
                <Link href="/follows">
                    <Button color="white" leftIcon={<FaRegHeart />} variant="ghost" _hover={{bg : "black"}} >follows</Button>
                </Link>
                <Link href="/myprofile">
                    <Button color="white" leftIcon={<CgProfile />} variant="ghost" _hover={{bg : "black"}} >profile</Button>
                </Link>
                <Link>
                    <Button onClick={onOpen} bg="green" color="white" padding="5" borderRadius="40" w="230px">Create Post</Button>
                </Link>
            </VStack>        
            <Link  href="/auth/login">
                <Button color="white" m="6" leftIcon={<CiLogout/>} _hover={{bg : "black"}} justifyContent="flex-start" mb="4" variant="ghost" >logout</Button>
            </Link>

            {/* modal */}
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                
            >
                <ModalOverlay />
                <ModalContent bg={"black"}>
                <ModalHeader>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody mb={20}>
                    <FormControl>
                    <Input ref={initialRef} placeholder="what is happen?"/>
                    </FormControl>
                </ModalBody>

                <ModalFooter justifyContent={"space-between"}>
                    <Input type="file" w={100} size={"xs"} bg={"white"}/>
                    <Button colorScheme='blue' mr={3} size={"xs"}>Post</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

        
    // </Flex>
    )
}

// Sidebar.js

// import { Box, VStack, Text, Link } from '@chakra-ui/react';

// export function Sidebar() {
//   return (
//     <Box
//       as="nav"
//       pos="fixed"
//       left="0"
//       top="0"
//       w="250px"
//       h="100vh"
//       bg="gray.800"
//       color="white"
//       p="5"
//     >
//       <VStack align="start" spacing="4">
//         <Text fontSize="2xl" fontWeight="bold">Logo</Text>
//         <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="2" borderRadius="md">Home</Link>
//         <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="2" borderRadius="md">About</Link>
//         <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="2" borderRadius="md">Services</Link>
//         <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="2" borderRadius="md">Contact</Link>
//       </VStack>
//     </Box>
//   );
// }

// export default Sidebar;
