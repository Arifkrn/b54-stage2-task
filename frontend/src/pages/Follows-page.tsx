import { Flex } from "@chakra-ui/react"
import { Follows } from "../components/follows"
import { Sidebar } from "../components/side-bar"
import { Myprofile } from "../components/my-profile"
import { Suggest } from "../components/suggest"
import { Contactme } from "../components/contact-me"



function FollowsPage(){

    // const dataMyprofile = {
    //     sampul : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600",
    //     picprof : "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-alam-hewan-binatang-fauna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // }

    // const dataSuggest = {
    //     title : "Suggested for you",
    //     picture : "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    //     name : "Karl Marx",
    //     username : "@karlmarxs",
    //     following : "following",
    //     followers : "follow"
    // }
    return(
        <Flex fontFamily="Arial" height="100vh" width="100%">
            <Sidebar/>
            <Follows/>
            <Flex flexDir={"column"} borderWidth={"0px 0px 1px 1px"} w={"480px"} h={"100vh"} borderColor={"gray"}>
                    <Myprofile/>
                    <Suggest/>
                    <Contactme/>
            </Flex>
        </Flex>
    )
    
}

export default FollowsPage