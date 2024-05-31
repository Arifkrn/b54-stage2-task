// use state + conditional rendering
//1. ternari operator => kondisi ? benar : salah
//2. && operator kondisi benar && yang ditampilkan (hanya menampilkan yang benar)
//3. idf else

import { Button } from "@chakra-ui/react";
import { useState } from "react";


export function ShowCard(){

    const [isShowed, setIsShowed] = useState<boolean>(false) 

    
        return(
            <>
            {isShowed ? (

            <>
            <div style={{border: "2px solid block", width :"200px", height : "100px", color: "black", background: "white"}}>
                Card
            </div>
                <Button onClick={() => {
                    setIsShowed(false)
                }}>Hilangkan kartu</Button>
            </>
            ) : (
            <>
                <Button onClick={() => {
                    setIsShowed(true)
                }}>ini</Button>
            </>
            )
            }
                
            </>
        )
    
}