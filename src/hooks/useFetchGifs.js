import { useState, useEffect } from "react";
import { funcionFetchGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fillData = async () => {
        const responseGifs = await funcionFetchGifs(category);
        console.log(responseGifs)
        setData(responseGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        fillData()
    }, []) 


    return ({
        images: data,
        isLoading:isLoading
    })
}
