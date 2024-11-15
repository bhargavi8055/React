import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";


const RestaurentMenu = ()=>{

    const {id} = useParams();

    const resInfo = useRestaurentMenu(id);

   if(resInfo===null){
       return <Shimmer />
   }
   const {name,cuisines,costForTwoMessage}=resInfo?.cards[2].card.card.info;
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
   console.log("categories",categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
            {
                categories.map((c=>(
                    <RestaurentCategory  data = {c?.card?.card}/>
                )))
            }
            
            
        </div>
    )
}
export default RestaurentMenu;