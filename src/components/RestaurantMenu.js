import React, { useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRatingString, costForTwoMessage, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    let { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    if (itemCards == null) ({ itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card);

    const menuCatergories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(menuCatergories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <div className="">
                <p className="font-bold text-lg text-orange-600">{cuisines.join(",")}</p >
            </div>
            <div>
                {
                    menuCatergories.map((category, index) =>
                        // Below is CONTROLLED component because parent is controlling it by passing props
                        <RestaurantCategory
                            key={category.card.card.title}
                            data={category?.card?.card}
                            showItems={index === showIndex}
                            setShowIndex={() => setShowIndex(index)} />)
                }
            </div>
        </ div >
    )
}

export default RestaurantMenu