
import { Myprofile } from "../components/my-profile";
import { Sidebar } from "../components/side-bar";
import { Button, Flex, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react"
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";
import { ThreadCard } from "../features/home/components/thread";
import { useHomePage } from "../hooks/use-home-page";
import { FaSearch } from "react-icons/fa";

function HomePage() {

    const {
        threads,
        register,
        handleSubmit,
        onSubmit
    } = useHomePage()    

    // const dataMyprofile = {
    //     sampul : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600",
    //     picprof : "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-alam-hewan-binatang-fauna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // }
    // const dataSuggest = {
    //     title : "Suggested for you",
    //     name : "Karl Marx",
    //     username : "@karlmarxs",
    // }


    return (
        <Flex flexDir={"row"} width={"100%"}>
            {/* sidebar */}
            <Sidebar/>
            <Flex flexDir={"column"} padding={2} w={"700px"}>

                {/* Header */}
                <Heading size={"lg"}>Home</Heading>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap={1} borderBottom={"1px"} pb={8} pt={2}>
                    <InputGroup size={"sm"}>
                    <InputLeftAddon  bg={"green"}><FaSearch /></InputLeftAddon>
                        <Input {...register("content")} placeholder="What is happening?!" w={"500px"} borderRadius="full" color="none" size="sm"/>
                    <InputRightAddon><Input type="file"  {...register("image")} width={20} size={"sm"}/></InputRightAddon>
                    </InputGroup>
                    
                    <Button marginEnd={0} type="submit" size={"sm"} bg={"green"} color={"white"}>post</Button>
                </Flex>
                </form>
                {/* Thread */}
                {threads?.map((thread) => <ThreadCard thread={thread} />)}
                

            </Flex>
            <Flex flexDir={"column"} borderWidth={"0px 0px 1px 1px"} w={"480px"} h={"100vh"} borderColor={"gray"}>
                    <Myprofile/>
                    <Suggest/>
                    <Contactme/>
            </Flex>
                    
               
        </Flex>
        
    )
}

export default HomePage