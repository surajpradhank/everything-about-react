import React from "react";
import { MENU_ITEM_URL } from "../utils/constant";

const MenuItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 flex flex-between"
                >
                    <div className="text-left w-9/12">
                        <div className="py-2 flex flex-col font-bold">
                            <span>{item.card.info.name}</span>
                            <span>
                                {" "}
                                ₹{" "}
                                {item.card.info.finalPrice
                                    ? item.card.info.finalPrice / 100
                                    : item.card.info.price / 100}
                            </span>
                        </div>
                        <p className="text-m opacity-75">{item.card.info.description}</p>
                    </div>
                    <div className="py-2 my-2 w-3/12 relative">
                        <div className="absolute bottom-0 mx-auto left-0 right-6">
                            <button className="p-2 bg-white shadow-lg text-green-500 font-extrabold rounded-lg w-20">ADD</button>
                        </div><img
                            src={MENU_ITEM_URL + item.card.info.imageId}
                            className="rounded-lg w-40 h-36"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItemList;
