import { Box, Text, Image, Flex, Button, BoxProps } from "@chakra-ui/react"
import { FaRegHeart } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import { ThreadEntity } from "../entities/thread";


interface ThreadProps extends BoxProps {
    thread: ThreadEntity
}

export function ThreadCard ({thread}: ThreadProps) {
    return(
        
        <Box
        w="700px"
        display="flex"
        flexDirection="column"
        borderWidth="0px 1px 1px 0px"
        borderColor="gray"
        >
            <Flex direction="column" fontSize="12" align="start">
                <Box w="100%" p="4" >
                    <Flex gap="4">
                        <Image boxSize="40px" borderRadius="30" pos="absolute" src="" alt="" />
                        <Text ps="12" fontWeight="bold">Arif Kurniawan</Text>
                        <Text color="gray">@arifk</Text>
                        <Text color="gray">4h</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{thread.content}</Text>
                    <Image marginStart="12" marginTop="4" src={thread.image} height={"100px"} />
                    <Flex gap="1" ps="12">
                        <Button size="sm" color="gray" variant="ghost" leftIcon={<FaRegHeart/>} _hover={{bg : "black"}}>
                            <Text>23</Text>
                        </Button>
                        <Button size="sm" color="gray" variant="ghost" leftIcon={<LiaComment/>} _hover={{bg : "black"}}>
                            <Text>3</Text>
                        </Button>
                    </Flex>
                </Box>
                    
            </Flex>
        </Box>
        
    )
}