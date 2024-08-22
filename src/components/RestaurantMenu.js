import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])

    const { resId } = useParams();

    const fetchMenu = async () => {

        const data = await fetch(MENU_URL + resId);
        console.log(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);

    };

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