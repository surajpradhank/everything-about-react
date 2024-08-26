import React, { useEffect, useState } from "react";
import { GITHUB_API_URL } from "../utils/constant";

const User = () => {

    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const data = await fetch(GITHUB_API_URL)
        const json = await data.json();
        setUserData(json);
    }

    const { name, location, avatar_url } = userData;

    return userData.length == 0 ? null : (
        <div className="user-card py-5">
            <img src={avatar_url} alt="" style={{ width: "150px" }} />
            <h2 className="pt-4 font-semibold">Name: {name}</h2>
            <h3>Location: {location}</h3>
        </div>
    )
}

export default User;