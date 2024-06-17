import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Image } from "@chakra-ui/react";
// import { SET_USER } from "../redux/slices/auth";
// import {ChildComponent} from "../components/coba"


const CobaPage = () => {
    // const data = [
    //     {
    //         title : "Home",
    //         picture : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         post : "post",
    //         profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //         name : "Arif Kurniawan",
    //         username : "@arifk12",
    //         time : "4h",
    //         article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
    //         likes : 42,
    //         comments : "3 replies",
    //         pictures : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    //     },
    //     {
    //         title : "Home",
    //         picture : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         post : "post",
    //         profile : "https://images.pexels.com/photos/4051667/pexels-photo-4051667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //         name : "ANTON",
    //         username : "@arifk12",
    //         time : "4h",
    //         article : "ini adalah sebuah contoh adalah orang yang menjadi sebuah panutan bagi suatu bangsa dan juga negara",
    //         likes : 42,
    //         comments : "3 replies",
    //     }
    // ];
    const currentUser = useSelector((state: RootState) => state.auth.user);
    

    return (
        <>
        <div>
            <h1>bio: {currentUser.bio}</h1>
            <h1>email: {currentUser.email}</h1>
            <h1>fullName: {currentUser.fullName}</h1>
            <h1>username: {currentUser.username}</h1>
            <Image src={currentUser.photoProfile} width={"100px"} height={"100px"} />

        </div>
        
        </>
    )
        // <div>
        //     <h1>Parent Component</h1>
        //     {data.map((item, index) => (
        //         <ChildComponent key={index} data={item} />
        //     ))}
        // </div>


};

export default CobaPage;