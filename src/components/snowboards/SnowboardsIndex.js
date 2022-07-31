import { useState, useEffect  } from "react"

import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

import LoadingScreen from "../shared/LoadingScreen"
import { getAllSnowboards } from "../../api/snowboards"
import messages from "../shared/AutoDismissAlert/messages"

// SnowboardsIndex should make a request to the api
// To get all snowboards
// Display them when the request has been received

// style for our card container
const cardContainerStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"

}

const SnowboardsIndex = (props) => {
    const [snowboards, setSnowboards] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert} = props

    useEffect(() => {
        // console.log("use effect bombing")
        getAllSnowboards()
            .then(res => setSnowboards(res.data.snowboards))
            .catch(err => {
                msgAlert({
                    heading: "Error Getting Snowboards",
                    messages: messages.getSnowboardsFailure,
                    variant: "danger",
                 })
                 setError(true)
           })
    }, [])

    if (error) {
        return <p>Error fetching snowboards!</p>
    }

    // If snowboardss haven't been loaded yet, show a loading message
    if (!snowboards) {
        return <LoadingScreen />
    } else if (snowboards.length === 0) {
        return <p>No snowboards yo! Add some now!</p>
    }

    const snowboardCards = snowboards.map(snowboard => (
        <Card style={{ width: "30%", margin: 6 }} key={ snowboard.id }>
        <Card.Header>{ snowboard.fullTitle }</Card.Header>
        <Card.Body>
            <Card.Text>
                <Link to={`/snowboards/${snowboard.id}`}>View { snowboard.brand }</Link>
            </Card.Text>
        </Card.Body>
        </Card>
    ))


    return (
        <div style={ cardContainerStyle }>
            { snowboardCards }
        </div>
    )

}


// export the file 
export default SnowboardsIndex