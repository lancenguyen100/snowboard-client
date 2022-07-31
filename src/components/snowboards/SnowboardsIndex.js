import { useState, useEffect  } from "react"

import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

import LoadingScreen from "../shared/LoadingScreen"
import { getAllSnowboards } from "../../api/snowboards"


const SnowboardsIndex = (props) => {
    const [snowboards, setSnowboards] = useState(null)

    useEffect(() => {
        // console.log("use effect bombing")
        getAllSnowboards()
            .then(res => setSnowboards(res.data.snowboards))
            .catch(err => console.log(err))
    }, [])

    // If snowboardss haven't been loaded yet, show a loading message
    if (!snowboards) {
        return <LoadingScreen />
    } else if (snowboards.length === 0) {
        return <p>No snowboards yo! Add some now!</p>
    }

    const snowboardCards = snowboards.map(snowboard => (
        <Card>
        <Card.Header>{ snowboard.fullTitle }</Card.Header>
        <Card.Body>
            <Card.Text>
                <Link to={`/snowboards/${snowboard.id}`}>View { snowboard.name }</Link>
            </Card.Text>
        </Card.Body>
        </Card>
    ))


    return (
        <>
            { snowboardCards }
        </>
    )

}


// export the file 
export default SnowboardsIndex