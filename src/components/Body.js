import React from "react";
import { useState, useEffect, useContext } from "react";
import ResturantCard, { withHighestRatedLabel } from "./ResturantCard";
import resturantList from "../utils/mockdata"
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import Footer from "../components/Footer";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]); // for mock data use resturantList from above import
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardHighestRated = withHighestRatedLabel(ResturantCard);

    // setUserName is comming from app.js and in body we are chaning the user name in body
    const { loggedInUser, setUserName } = useContext(UserContext);

    console.log(listOfRestaurant);
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
                <div className="flex">
                    <div className="search m-4 p-4">
                        <input className="input-box" placeholder="Search for resturant..." type="text" value={searchText} onChange={(e) => {
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

                    <div className="m-2 p-4 flex items-center">
                        <label className="mx-2 font-semibold text-lg ">User Name</label>
                        <input type="text" className="input-box" placeholder="Enter name"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant) =>
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                {
                                    restaurant.info.avgRating >= 4.6 ? (<RestaurantCardHighestRated resData={restaurant} />) : (<ResturantCard resData={restaurant} />)
                                }
                            </Link>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Body;