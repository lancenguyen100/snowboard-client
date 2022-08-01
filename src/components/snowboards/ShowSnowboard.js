// useParams will allow us to see our parameters
// useState will allow us to navigate to a specific page
import { useParams, useNavigate } from "react-router-dom"

import { useState, useEffect } from "react"

import { Card, Container } from "react-bootstrap"

import LoadingScreen from "../shared/LoadingScreen"
import { getOneSnowboard } from "../../api/snowboards"
import messages from "../shared/AutoDismissAlert/messages"

// We need to get the snowboard's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowSnowboard = (props) => {
    const [snowboard, setSnowboard] = useState(null)

    // destructuring to get the id value from our route parameters
    const { id } = useParams()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to
    const navigate = useNavigate

    const { msgAlert } = props

    useEffect(() => {
        getOneSnowboard(id)
            .then(res => setSnowboard(res.data.snowboard))
            .catch(err => {
                msgAlert({
                    heading: "Error showing snowboard",
                    messages: messages.getSnowboardsFailure,
                    variant: "danger"
                })
                navigate("/")
                // navigate back to the home page if there's an error fetching
            })
    }, [])

    if (!snowboard) {
        return <LoadingScreen />
    }
    // console.log("params in the house!", params)
    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{ snowboard.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div><small>Type: { snowboard.type }</small></div>
                    <div><small>Color: { snowboard.color }</small></div>
                    <div><small>Size: { snowboard.size }</small></div>
                    </Card.Text>
                 </Card.Body>
            </Card>
        </Container>
    )
}



export default ShowSnowboard