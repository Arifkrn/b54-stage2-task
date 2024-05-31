
import { Myprofile } from "../components/my-profile";
import { Sidebar } from "../components/side-bar";
import { Flex, VStack } from "@chakra-ui/react"
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";
import { Thread } from "../components/Thread";
import { Header } from "../components/header";



function HomePage(){
    const dataHeader = {
        title : "Home",
        picture : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
        post : "post"
    }
    const dataThread = {
        profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name : "Arif Kurniawan",
        username : "@arifk12",
        time : "4h",
        article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
        likes : 42,
        comments : "3 replies",
        pictures : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }

    const dataSidebar = {
        logo : "circle",
        home : "Home",
        search : "Search",
        follows : "Follows",
        profile : "Profile",
        logout : "Logout"
    }

    const dataMyprofile = {
        Myprof : "My Profile",
        sampul : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600",
        picprof : "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-alam-hewan-binatang-fauna.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        editprof : "Edit profil",
        name : "Koceng Oren",
        username : "@kochengOren99",
        bio : "Saya adalah kucing ras terkuat di bumi",
        following : "300",
        followers : "1000"

    }

    const dataSuggest = {
        title : "Suggested for you",
        picture : "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
        name : "Karl Marx",
        username : "@karlmarxs",
        following : "following",
        followers : "follow"
    }

    const dataContact = {
        myname : "Arif Kurniawan"
    }

    return (
        
        
            <Flex fontFamily="Arial" height="100vh" width="100%">
                
                    
                        <Sidebar
                        logo = {dataSidebar.logo}
                        home = {dataSidebar.home}
                        search = {dataSidebar.search}
                        follows = {dataSidebar.follows}
                        profile = {dataSidebar.profile} 
                        logout = {dataSidebar.logout}
                        />
                        <Flex direction="column">
                        <Header
                        title = {dataHeader.title}
                        picture = {dataHeader.picture}
                        post = {dataHeader.post}/>
                        <Thread
                        profile = {dataThread.profile}
                        name = {dataThread.name}
                        username = {dataThread.username}
                        time = {dataThread.time}
                        article = {dataThread.article}
                        likes = {dataThread.likes}
                        comments = {dataThread.comments}
                        pictures = {dataThread.pictures}/>
                        </Flex>
                        <VStack>
                            <Myprofile
                            myprof = {dataMyprofile.Myprof}
                            sampul = {dataMyprofile.sampul}
                            picprof = {dataMyprofile.picprof}
                            editprof = {dataMyprofile.editprof}
                            name = {dataMyprofile.name}
                            username = {dataMyprofile.username}
                            bio = {dataMyprofile.bio}
                            following = {dataMyprofile.following}
                            followers = {dataMyprofile.followers} />
                            <Suggest
                            title = {dataSuggest.title}
                            picture= {dataSuggest.picture}
                            name = {dataSuggest.name}
                            username = {dataSuggest.username}
                            following = {dataSuggest.following}
                            followers= {dataSuggest.followers}/>
                            <Contactme
                            myname={dataContact.myname}/>
                        </VStack>
                    
               
            </Flex>
        
    )
}

export default HomePage