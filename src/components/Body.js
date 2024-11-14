import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
// import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{

    const [listOfRestaurents,setListOfRestaurents]= useState([]);
    const [filteredRestaurents,setFilteredRestaurents]= useState([]);
    const [searchText,setSearchText] =useState("");

    const onlineStatus = useOnlineStatus();
    console.log("Body render")
    useEffect(()=>{
        console.log("useEffect")
        fetchData();
    },[]);

    const fetchData= async() =>{
        // https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus===false) return <div><h1>Looks like You are offline !!!!!</h1></div>
    return listOfRestaurents.length===0?<Shimmer />:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        let filteredList= listOfRestaurents.filter((res)=> {
                              return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        }                           
                        );
                        setFilteredRestaurents(filteredList)
                    }}>Search</button>
                    
                </div>
                <button className="filter-btn" onClick={()=>{
                        let filteredList = listOfRestaurents.filter((restaurent)=>restaurent.info.avgRating>4.5);
                        console.log(filteredList)
                        setListOfRestaurents(filteredList)
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurents.map((restaurent)=>
                       <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id}> <RestaurentCard resData={restaurent} /></Link>
                    )
                }              
                
                
            </div>
        </div>
    )
};
export default Body;
