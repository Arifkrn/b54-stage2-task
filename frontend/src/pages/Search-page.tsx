import { Box, Heading, Input, Flex, Button, Text, InputGroup, InputLeftAddon, Avatar, VStack } from "@chakra-ui/react";
// import { Search } from "../components/search"
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Contactme } from "../components/contact-me";
import { Myprofile } from "../components/my-profile";
import { Sidebar } from "../components/side-bar";
import { Suggest } from "../components/suggest";
import { UserSearch } from "../features/search/types/search";
import { api } from "../libs/api";
import { FaSearch } from "react-icons/fa";


function SearchPage(){

    const [searchInput, setSearchInput] = useState<string>("");
    const [debouncedSearchInput] = useDebounce(searchInput, 400);
    const [searchData, setSearchData] = useState<UserSearch[]>([]);

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setSearchInput(e.target.value);
    }

    async function getData() {
        const response = await api.get(`/users?search=${debouncedSearchInput}`);
        console.log(response)
        setSearchData(response.data);
    }

    useEffect(() => {
        getData();
    }, [debouncedSearchInput]);

    
    return(
        <Flex fontFamily="Arial" height="100vh" width="100%">
            <Sidebar/>
            <Box w={"700px"} padding={2}>
                <Heading>Search</Heading>
                <InputGroup size={"sm"}>
                    <InputLeftAddon color={"black"}><FaSearch /></InputLeftAddon>
                    <Input onChange={handleChange} borderRadius={"full"} />
                </InputGroup>
                {searchData.map((user) => (
                <Box display={"flex"} mb={"10px"} gap={2} mt={"20px"} justifyContent={"space-between"}>
                    <Flex align={"start"}>
                        <Avatar
                        src={user.photoProfile}
                        width={"30px"}
                        height={"30px"}
                        borderRadius={"100%"}
                        border={"2px solid white"}
                        />
                        <VStack gap={1}>
                            <Text fontWeight={"bold"}>{user.fullName}</Text>
                            <Text mt={"0px"} color={"gray"}>
                                @{user?.username}
                            </Text>
                            <Text mt={"0px"}>{user.bio}</Text>
                        </VStack>
                    </Flex>
                    <Button
                        backgroundColor={"transparent"}
                        border={"2px solid white"}
                        color={"white"}
                        >
                        <Text>Follow</Text>
                    </Button>
                </Box>
                ))}
            </Box>
            
            <Flex direction="column" borderWidth={"0px 0px 1px 1px"} width="480px" borderColor={"gray"}>     
                <Myprofile/>
                <Suggest/>
                <Contactme/>
            </Flex>
        </Flex>
    )
}

export default SearchPage