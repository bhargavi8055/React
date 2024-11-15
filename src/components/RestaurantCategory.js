import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data,show,showItems})=>{
    //Here RestaurentCategory Component manages state by itself it is not controlled by other component - so it is known as UnControlled Components
    // const [showItemsFlag,setShowItemsFlag] = useState(false);
    
    return (
        <div>
           <div className="shadow-lg w-6/12 bg-gray-50 p-4 mx-auto my-2 hover:cursor-pointer" 
           onClick={()=>{
            //    setShowItemsFlag(!showItemsFlag)
            showItems();

           }}>
               <div className="flex justify-between">
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {show && <ItemList items={data.itemCards} />}
               
           </div>
         

        </div>
    )
}
export default RestaurentCategory;