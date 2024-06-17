import { Flex, VStack } from "@chakra-ui/react"
import { Follows } from "../components/follows"
import { Sidebar } from "../components/side-bar"
import { Myprofile } from "../components/my-profile"
import { Suggest } from "../components/suggest"
import { Contactme } from "../components/contact-me"



function FollowsPage(){
    const dataFollows = {
        profile : "https://images.pexels.com/photos/20511332/pexels-photo-20511332/free-photo-of-burung-air-cairan-danau.jpeg?auto=compress&cs=tinysrgb&w=600",
        name : "hololo",
        username : "@hol45",
        article : "my enemy is me"
    }

    const dataMyprofile = {
        sampul : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600",
        picprof : "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-alam-hewan-binatang-fauna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    }

    const dataSuggest = {
        title : "Suggested for you",
        picture : "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
        name : "Karl Marx",
        username : "@karlmarxs",
        following : "following",
        followers : "follow"
    }
    return(
        <Flex fontFamily="Arial" height="100vh" width="100%">
        <Sidebar/>
        <Follows
        profile = {dataFollows.profile}
        name = {dataFollows.name}
        username = {dataFollows.username}
        article = {dataFollows.article}
        />

        
        <VStack>
            <Myprofile
            sampul = {dataMyprofile.sampul}
            picprof = {dataMyprofile.picprof}/>
            <Suggest
            title = {dataSuggest.title}
            picture= {dataSuggest.picture}
            name = {dataSuggest.name}
            username = {dataSuggest.username}/>
            <Contactme/>
        </VStack>
        </Flex>
    )
    
}

export default FollowsPage