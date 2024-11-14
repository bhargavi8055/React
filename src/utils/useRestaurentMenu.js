import { useEffect, useState } from "react"
import { json } from "react-router";
import { MENU_API } from "./constants";


const useRestaurentMenu = (resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_API+resId+"&cata");
        const json = await data.json();
        setResInfo(json.data);
    }
    console.log("in custom hook",resInfo)
    return resInfo;

}

export default useRestaurentMenu;