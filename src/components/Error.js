import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    return (
        <div>
            <h1>Oops something went wrong</h1>
            <h2>{err.data} : {err.statusText}</h2>
        </div>
    )
}

export default Error