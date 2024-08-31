import React, { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 ">

                {/* Accordian Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data.itemCards.length}) </span>
                    <span>{showItems && "🔼"} {!showItems && "🔽"}</span>
                </div>

                {/* Accordian Body */}
                {showItems && <MenuItemList items={data?.itemCards} />}
            </div>
        </div>
    )
};

export default RestaurantCategory