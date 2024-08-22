import React from "react";
import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import resturantList from "../utils/mockdata"
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]); // for mock data use resturantList from above import
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(SWIGGY_URL)
        const json = await data.json();

        const datapath = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setlistOfRestaurant(datapath);
        setFilteredRestaurant(datapath);
    };

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" placeholder="Enter the restaurant name" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {

                        const searchedResturant = listOfRestaurant.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(searchedResturant);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    setlistOfRestaurant(listOfRestaurant.filter(x => x.info.avgRatingString >= 4.5))
                }}>Top Rated resturant</button>

                <button className="filter-btn-clear" onClick={() => {
                    setFilteredRestaurant(listOfRestaurant)
                    setSearchText("");
                }}>Clear Filter</button>

            </div>
            <div className="resturant-container">
                {
                    filteredRestaurant.map((resturant) =>
                        <Link key={resturant.info.id} to={"/restaurants/" + resturant.info.id}><ResturantCard resData={resturant} /></Link>
                    )
                }
            </div>
        </div>
    )
};

export default Body;