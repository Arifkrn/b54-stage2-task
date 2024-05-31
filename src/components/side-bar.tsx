import { Box, VStack, Text, Button} from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

interface SidebarProps {
    logo : string,
    home :string,
    search : string,
    follows : string,
    profile : string,
    logout : string
}

export function Sidebar ({logo, home, search, follows, profile, logout} : SidebarProps){

    return(
        // <Flex>
        <Box
        left="0"
        top="0"
        mt="0"
        w="350px"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        >
            <VStack ps="6" align="start" spacing="2">
                    <Text fontSize="5xl" color="green" fontWeight="bold" >{logo}</Text>
                    <Button color="white" leftIcon={<FaHome />} variant="ghost" _hover={{bg : "black"}}>{home}</Button>
                    <Button color="white" leftIcon={<FaSearch />} variant="ghost" _hover={{bg : "black"}}>{search}</Button>
                    <Button color="white" leftIcon={<FaRegHeart />} variant="ghost" _hover={{bg : "black"}}>{follows}</Button>
                    <Button color="white" leftIcon={<CgProfile />} variant="ghost" _hover={{bg : "black"}} >{profile}</Button>
                    <Button bg="green" color="white" padding="5" borderRadius="40" w="230px">Create Post</Button>
            </VStack>        
                    <Button color="white" m="6" leftIcon={<CiLogout/>} _hover={{bg : "black"}} justifyContent="flex-start" mb="4" variant="ghost" >{logout}</Button>
                
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
