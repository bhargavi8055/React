import { CDN_URL } from "../utils/constants";
const RestaurentCard= (props)=>{
    const {resData} =props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=resData.info;
    return (
        <div className="m-4 p-4 w-[230px] rounded-lg hover:bg-gray-300">
            <img alt="res-img" className="res-logo rounded-lg"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};
export default RestaurentCard;