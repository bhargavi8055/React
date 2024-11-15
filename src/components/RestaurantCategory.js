import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data})=>{
    const [showItems,setShowItems] = useState(false);
    
    return (
        <div>
           <div className="shadow-lg w-6/12 bg-gray-50 p-4 mx-auto my-2" onClick={()=>{
               setShowItems(!showItems)
           }}>
               <div className="flex justify-between">
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
               
           </div>
         

        </div>
    )
}
export default RestaurentCategory;