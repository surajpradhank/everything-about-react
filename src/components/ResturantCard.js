import React from "react";
import { CDN_URL } from "../utils/constant";


const ResturantCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = resData?.info;
    const { slaString } = resData?.info.sla;
    //  console.log("card " + resData?.info?.id);
    return (
        <div className="resturant-card">
            <img
                className="resturant-logo"
                src={CDN_URL + cloudinaryImageId}
                alt=""
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default ResturantCard;