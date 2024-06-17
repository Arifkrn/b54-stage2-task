import { Box, Text, Image, Flex, Button } from "@chakra-ui/react"
import { FaRegHeart } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";


interface ThreadProps {
    profile : string,
    name : string,
    username : string,
    time : string,
    article : string,
    likes : number,
    comments : string,
    pictures? : string
}
interface ThreadComponentProps {
    data: ThreadProps;
}

export const Thread = ({data}: ThreadComponentProps) => {
    return(
        
        <Box
        w="700px"
        display="flex"
        flexDirection="column"
        borderWidth="0px 1px"
        borderColor="gray"
        >
            <Flex direction="column" fontSize="12" align="start">
                <Box borderBottomWidth="1px" borderColor="gray" w="100%" p="4">
                    <Flex gap="2">
                        <Image boxSize="40px" borderRadius="30" pos="absolute" src={data.profile} alt="" />
                        <Text ps="12" fontWeight="bold">{data.name}</Text>
                        <Text color="gray">{data.username}</Text>
                        <Text color="gray">{data.time}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{data.article}</Text>
                    <Flex gap="1" ps="12">
                        <Button size="sm" color="gray" variant="ghost" leftIcon={<FaRegHeart/>} _hover={{bg : "black"}}>
                            <Text>{data.likes}</Text>
                        </Button>
                        <Button size="sm" color="gray" variant="ghost" leftIcon={<LiaComment/>} _hover={{bg : "black"}}>
                            <Text>{data.comments}</Text>
                        </Button>
                    </Flex>
                    <Image marginStart="12"  src={data.pictures} width="200px"/>
                </Box>
                    
            </Flex>
        </Box>
        
    )
}