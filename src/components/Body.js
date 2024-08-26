import React from "react";
import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import resturantList from "../utils/mockdata"
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import Footer from "../components/Footer";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]); // for mock data use resturantList from above import
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>OMG, You are offline !!!! Please be online , We are looking for you.</h1>
    }

    const fetchData = async () => {

        const data = await fetch(SWIGGY_URL)
        const json = await data.json();

        const datapath = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setlistOfRestaurant(datapath);
        setFilteredRestaurant(datapath);
    };

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <>
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input className=" placeholder:italic placeholder:text-slate-400 bg-white w-80  h-10 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1" placeholder="Search for resturant..." type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                        <button className="bg-blue-400 hover:bg-blue-700 text-white font-medium px-4 py-2 m-2 rounded-lg" onClick={() => {
                            const searchedResturant = listOfRestaurant.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(searchedResturant);
                        }}>Search</button>
                    </div>
                    <div className="search m-2 p-4 flex items-center">
                        <button className="bg-gray-500 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg" onClick={() => {
                            setFilteredRestaurant(listOfRestaurant.filter(x => x.info.avgRatingString >= 4.5))
                        }}>Top Rated resturant</button>
                    </div>
                    <div className="search m-2 p-4 flex items-center">
                        <button className="bg-gray-500 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg" onClick={() => {
                            setFilteredRestaurant(listOfRestaurant)
                            setSearchText("");
                        }}>Clear Filter</button>
                    </div>

                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurant.map((resturant) =>
                            <Link key={resturant.info.id} to={"/restaurants/" + resturant.info.id}><ResturantCard resData={resturant} /></Link>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Body;