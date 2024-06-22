import { Box, Text, Button, Flex, VStack, Avatar } from "@chakra-ui/react"

// interface SuggestProps{
//     title :string,
//     name : string,
//     username : string
    
// }

export function Suggest (){
    return(
        <Box
        p="4"
        borderRadius="10px"
        // borderWidth="1px"
        width="400px"
        height="270px"
        background="#383838"
        ms="10"
        mt="2">
            <VStack align="start">
            <Text mb="2">Suggest</Text>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="start" >
                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' border={"2px solid white"} />
                <VStack gap="1" ms={2} align={"start"}>
                    <Text>Karl marx</Text>
                    <Text color="gray">@karlmarx09</Text>
                </VStack>
                </Flex>
                <Button fontSize="10" height="8" borderColor="gray" variant="ghost" borderWidth="1px" borderRadius="20px" color="gray">followed</Button>
            </Flex>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="start" >
                    <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' border={"2px solid white"} />
                    <VStack gap="1" ms={2} align={"start"}>
                        <Text>james clear</Text>
                        <Text color="gray">@jmsclear</Text>
                    </VStack>
                </Flex>
                <Button fontSize="10" height="8" variant="ghost" borderWidth="1px" borderRadius="20px" color="white">follow</Button>
            </Flex>
            <Flex fontSize="12" width="100%" display="flex" alignItems="center" justifyContent="space-between">
                <Flex align="start" >
                    <Avatar size='sm' name='Ryan Florence' src='https://bit.ly/ryan-florence' border={"2px solid white"} />
                    <VStack gap="1" ms={2} align={"start"}>
                        <Text>david osborn</Text>
                        <Text color="gray">@dvds</Text>
                    </VStack>
                </Flex>
                <Button fontSize="10" height="8" variant="ghost" borderWidth="1px" borderRadius="20px" color="white">follow</Button>
            </Flex>
            </VStack>
        </Box>

    )
}