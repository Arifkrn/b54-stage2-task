import { useCallback, useState } from "react"

export function MyForm2(){

    // const inputNameRef = useRef<HTMLInputElement>(null)

    // const handleSubmit = useCallback((event : React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     if(inputNameRef.current?.value)
    //     alert(inputNameRef.current?.value)
    // }, []);
    

    // return(
    //     <form onSubmit={(e) => handleSubmit(e) }>
    //         <input type="text" 
    //         ref={inputNameRef}/>

    //         <button type="submit">Submit</button>
    //     </form>
    // )

    const [count, setCount] = useState<number>(0)

    const add = useCallback(() =>{
        setCount(count + 1);
    },[count]);

    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>tambah</button>
        </>
    )
}