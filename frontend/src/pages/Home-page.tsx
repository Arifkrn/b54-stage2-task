
import { Myprofile } from "../components/my-profile";
import { Sidebar } from "../components/side-bar";
import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { Suggest } from "../components/suggest";
import { Contactme } from "../components/contact-me";
import { ThreadCard } from "../features/home/components/thread";
import { api } from "../libs/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateThreadDTO } from "../features/home/types/thread";
import { createThreadSchema } from "../features/home/validators/thread";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ThreadEntity } from "../features/home/entities/thread";
import { AxiosError } from "axios";

function HomePage() {

    const { data: threads, refetch } = useQuery<ThreadEntity[]>({queryKey: ["threads"], queryFn: getThreads })

    const {register, handleSubmit} = useForm<CreateThreadDTO>({
        mode: "onSubmit",
        resolver: zodResolver(createThreadSchema),
    });
    
    async function getThreads(){
        const response = await api.get("/threads", {
            headers:{
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        return response.data;
    }

    const { mutateAsync } = useMutation<ThreadEntity, AxiosError, CreateThreadDTO>({
        mutationFn: (newThread) => {
            const formData = new FormData()
            formData.append("content", newThread.content);
            formData.append("image", newThread.image[0]);
            return api.post("/threads", formData);
        },
    });

    const onSubmit: SubmitHandler<CreateThreadDTO> = async (data)  =>{
        try{
            await mutateAsync(data);
            refetch();
        }catch(error){
            console.log(error);
        }
    };

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
                <Heading>Home</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("content")} placeholder="What is happening?!" borderRadius="full" color="none" size="sm"/>
                    <Input type="file"  {...register("image")}/>
                    <Button type="submit">post</Button>
                </form>
                {/* Thread */}
                {threads?.map((thread) => <ThreadCard thread={thread} />)}

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