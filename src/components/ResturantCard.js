import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = resData?.info;
    const { slaString } = resData?.info.sla;

    return (
        <div className="m-4 p-4 w-60 bg-gray-100 rounded-sm break-words hover:scale-95">
            <img
                className="resturant-logo rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt=""
            />
            <h3 className="font-semibold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default ResturantCard;