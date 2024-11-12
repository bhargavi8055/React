import { CDN_URL } from "../utils/constants";
const RestaurentCard= (props)=>{
    const {resData} =props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId}=resData.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt="res-img" className="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};
export default RestaurentCard;