
import { Myprofile } from "../components/my-profile";
import { Sidebar } from "../components/side-bar";
import { Flex } from "@chakra-ui/react"
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";
import { Thread } from "../components/Thread";
import { Header } from "../components/header";



const HomePage = () => {
    const dataHeader = {
        mypicture : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
    }

    const dataThread = [{
        profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name : "Arif Kurniawan",
        username : "@arifk12",
        time : "4h",
        article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
        likes : 42,
        comments : "3 replies",
        pictures : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name : "Fardhan",
        username : "@fard",
        time : "4h",
        article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
        likes : 42,
        comments : "3 replies",
        
    },
    {
        profile : "https://images.pexels.com/photos/18454473/pexels-photo-18454473/free-photo-of-kota-tengara-penunjuk-penanda.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name : "Ardiansyah",
        username : "@aard",
        time : "4h",
        article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
        likes : 42,
        comments : "3 replies",
        
    },
    {
        profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name : "sahrian",
        username : "@ryan",
        time : "4h",
        article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
        likes : 42,
        comments : "3 replies",
        
    }]

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


    return (
        <Flex flexDir={"row"} width={"100%"}>
            {/* sidebar */}
            <Sidebar/>
            <Flex flexDir={"column"}>

                {/* Header */}
                <Header
                mypicture = {dataHeader.mypicture}/>

                {/* Thread */}
                {dataThread.map((item, index) => (
                    <Thread key={index} data={item} />
                ))}

            </Flex>
            <Flex flexDir={"column"}>
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

export default HomePage