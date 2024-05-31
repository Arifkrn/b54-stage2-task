import { Box, Text, Image, Flex } from "@chakra-ui/react"
import { TbPointFilled } from "react-icons/tb";
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
    pictures : string
}

export function Thread({profile, name, username, time, article, likes, comments, pictures} : ThreadProps) {
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
                        <Image boxSize="40px" borderRadius="30" pos="absolute" src={profile} alt="" />
                        <Text ps="12" fontWeight="bold">{name}</Text>
                        <Text color="gray">{username}</Text>
                        <TbPointFilled color="gray"/>
                        <Text color="gray">{time}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{article}</Text>
                    <Flex gap="1" ps="12" color="gray">
                        <FaRegHeart/>
                        <Text me="6">{likes}</Text>
                        <LiaComment/>
                        <Text>{comments}</Text>
                    </Flex>
                </Box>
                <Box borderBottomWidth="1px" borderColor="gray" w="100%" p="4">
                    <Flex gap="2">
                        <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                        <Text ps="12" fontWeight="bold">{name}</Text>
                        <Text color="gray">{username}</Text>
                        <TbPointFilled color="gray"/>
                        <Text color="gray">{time}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{article}</Text>
                    <Flex gap="1" ps="12" color="gray">
                        <FaRegHeart/>
                        <Text me="6">{likes}</Text>
                        <LiaComment/>
                        <Text>{comments}</Text>
                    </Flex>
                </Box>
                <Box borderBottomWidth="1px" borderColor="gray" w="100%" p="4">
                    <Flex gap="2">
                        <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                        <Text ps="12" fontWeight="bold">{name}</Text>
                        <Text color="gray">{username}</Text>
                        <TbPointFilled color="gray"/>
                        <Text color="gray">{time}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{article}</Text>
                    
                        <Image marginStart="12"  src={pictures} boxSize="150px"/>
                    
                    <Flex gap="1" ps="12" color="gray">
                        <FaRegHeart/>
                        <Text me="6">{likes}</Text>
                        {/* <Button leftIcon={<BiLike/>} size="sm"><Text me="6">{likes}</Text></Button> */}
                        <LiaComment/>
                        <Text>{comments}</Text>
                    </Flex>
                </Box>
                <Box borderBottomWidth="1px" borderColor="gray" w="100%" p="4">
                    <Flex gap="2">
                        <Image width="10" height="10" borderRadius="30" pos="absolute" src={profile} alt="" />
                        <Text ps="12" fontWeight="bold">{name}</Text>
                        <Text color="gray">{username}</Text>
                        <TbPointFilled color="gray"/>
                        <Text color="gray">{time}</Text>
                    </Flex>
                    <Text marginStart="12" fontSize="12">{article}</Text>
                    
                        <Image marginStart="12"  src={pictures} boxSize="150px"/>
                    
                    <Flex gap="1" ps="12" color="gray">
                        <FaRegHeart/>
                        <Text me="6">{likes}</Text>
                        {/* <Button leftIcon={<BiLike/>} size="sm"><Text me="6">{likes}</Text></Button> */}
                        <LiaComment/>
                        <Text>{comments}</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        
    )
}