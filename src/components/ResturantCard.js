import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, aggregatedDiscountInfoV3 } = resData?.info;
    const { slaString } = resData?.info.sla;

    const conatinsNumber = (offlabel) => {
        var hasNumber = /\d/;
        return offlabel.match(hasNumber) != null;
    }

    const getOffText = (header, subHeader) => {
        return (header + " " + subHeader);
    }

    return (
        <div className="m-4 p-4 w-60 bg-gray-100 rounded-sm break-words hover:scale-95" >
            <div className="relative flex flex-col items-center">
                <img
                    className="resturant-logo rounded-lg"
                    src={CDN_URL + cloudinaryImageId}
                    alt=""
                />
                <div className="absolute bottom-0 mb-2">
                    {aggregatedDiscountInfoV3 != null ? <label className="text-zinc-50 font-extrabold">
                        {getOffText(aggregatedDiscountInfoV3?.header, aggregatedDiscountInfoV3?.subHeader)}
                    </label> : null}
                </div>
            </div>
            <h3 className="font-semibold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>

        </div >
    );
};

// Higher Order Component
// input Restaurant Card => RestaurantCardHighestRated

export const withHighestRatedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-900 p-2 m-2 rounded-lg text-white index z-10">Highest Rated</label>
                <ResturantCard {...props} />
            </div>
        );
    };
}

export default ResturantCard;