import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(res =>{
                if(!res.ok)
                    throw Error();
                return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                let error_msg = err.message;
                if(err.message === "Failed to fetch"){
                    error_msg="Failed to fetch data! Check if the JSON server is running!";
                }
                setIsPending(false);
                setError(error_msg);
            })
    },[url])

    return {data,isPending,error}; 
}

export default useFetch;