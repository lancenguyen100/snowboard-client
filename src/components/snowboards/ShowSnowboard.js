// this will allow us to see our parameters
import { useParams } from "react-router-dom"

import { useState, useEffect } from "react"

import LoadingScreen from "../shared/LoadingScreen"
import { getOneSnowboard } from "../../api/snowboards"
// We need to get the snowboard's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowSnowboard = (props) => {
    const [snowboard, setSnowboard] = useState(null)

    // destructuring to get the id value from our route parameters
    const { id } = useParams()

    useEffect(() => {
        getOneSnowboard(id)
            .then(res => setSnowboard(res.data.snowboard))
            .catch()
    }, [])

    if (!snowboard) {
        return <LoadingScreen />
    }
    // console.log("params in the house!", params)
    return <p>Show the snowboard details! { id }</p>
}



export default ShowSnowboard