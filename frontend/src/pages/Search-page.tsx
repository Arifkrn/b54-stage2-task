import { Flex } from "@chakra-ui/react"
import { Search } from "../components/search"
import { Sidebar } from "../components/side-bar"
import { Myprofile } from "../components/my-profile";
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";

function SearchPage(){
    const dataSearch = {
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
    }
    return(
        <Flex fontFamily="Arial" height="100vh" width="100%">
            <Sidebar/>
            <Search
            profile = {dataSearch.profile}
            name = {dataSearch.name}
            username = {dataSearch.username}
            article = {dataSearch.article}/>
            <Flex direction="column">
                    {/* Myprofile */}
                    <Myprofile
                    sampul = {dataMyprofile.sampul}
                    picprof = {dataMyprofile.picprof}/>

                    <Suggest
                    title = {dataSuggest.title}
                    picture= {dataSuggest.picture}
                    name = {dataSuggest.name}
                    username = {dataSuggest.username}/>
                    <Contactme/>
            </Flex>
        </Flex>
    )
}

export default SearchPage