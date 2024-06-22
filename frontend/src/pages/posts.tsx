import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

export default function PostPage(){

    const [ ,setData] = useState()
    const [counter, setCounter] = useState<number>(0)
    async function getData(){
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            setData(response.data);
        } catch (error: unknown){
            if(axios.isAxiosError(error)) {
                console.log("gagal mengambil data")
            }
        }
    }


    useEffect(() => {
        // componen Didmount = yg pertama kalai dijalankan ketika di render
        getData();

        return() => {
            //component willUnmount
        }
    }, []); //componen diupdate

    console.log("aa")
    return(
        <>  
            <h1>{counter}</h1>
            <Button onClick={() => setCounter((prev) => prev + 1)}>tambah</Button>
        </>
        
    )
}