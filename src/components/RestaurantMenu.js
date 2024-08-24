import React from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, avgRatingString, costForTwoMessage, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

    let { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    if (itemCards == null) ({ itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card);

    return (
        <div className="res-menus">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3 >
            <p>{avgRatingString} {"(" + totalRatingsString + ")"} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        {"Rs. "}{item.card.info.price / 100 || item.card.info.deafultPrice / 100}
                    </li>)
                )}
            </ul>
        </ div >
    )
}

export default RestaurantMenu