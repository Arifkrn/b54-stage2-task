import { Box, Text, Image, Flex, Button, BoxProps, ScaleFade, useDisclosure, Input } from "@chakra-ui/react"
import { FaRegHeart } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import { ThreadEntity } from "../entities/thread";


interface ThreadProps extends BoxProps {
    thread: ThreadEntity
}

export function ThreadCard ({thread}: ThreadProps) {
    const { isOpen, onToggle } = useDisclosure()
    
    return(
        
        <Box
        w="690px"
        display="flex"
        flexDirection="column"
        borderBottomWidth="1px"
        borderColor="gray"
        >
            <Flex direction="column" fontSize="12" align="start">
                <Box w="100%" p="4" >
                    <Flex gap="4">
                        <Image boxSize="40px" borderRadius="30" pos="absolute" src={thread.user.photoProfile} alt="" />
                        <Text ps="12" fontWeight="bold">{thread?.user?.fullName}</Text>
                        <Text color="gray">@{thread?.user?.username}</Text>
                        <Text color="gray">{thread?.createdAt.toLocaleString()}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{thread.content}</Text>
                    <Image marginStart="12" marginTop="4" src={thread.image} height={"100px"} />
                    <Flex gap="1" ps="12">
                        <Button size="sm" color="gray" variant="ghost" leftIcon={<FaRegHeart/>} _hover={{bg : "black"}}>
                            <Text>23</Text>
                        </Button>
                        <Button onClick={onToggle} size="sm" color="gray" variant="ghost" leftIcon={<LiaComment/>} _hover={{bg : "black"}}>
                            <Text>3</Text>
                        </Button>
                    </Flex>
                    <ScaleFade in={isOpen}>
                        <Box
                        mt="2"
                        rounded='md'
                        shadow='md'
                        display={"flex"}
                        gap={1}
                        >
                        <Input size={"xs"} placeholder="type your reply"/>
                        <Input type="file" w={100} size={"xs"} bg={"white"}/>
                        <Button size={"xs"}>Post</Button>
                        </Box>
                    </ScaleFade>
                </Box>
                    
            </Flex>
        </Box>
        
    )
}