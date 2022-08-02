import { useState } from "react"

import SnowboardForm from "../shared/SnowboardForm"

const CreateSnowboard = (props) => {
    console.log ("these are the props in CS\n", props)
    const [snowboard, setSnowboard] = useState({
        brand: "",
        type: "",
        color: "",
        size: ""
    })

    const handleChange = (e) => {
        setSnowboard(prevSnowboard => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedSnowboard = {
                [updatedName]: updatedValue
            }
            return {
                ...prevSnowboard,
                ...updatedSnowboard
            }
        })
    }

    // add a handleSubmit function here that makes an api request, and handles the response
    

    return <SnowboardForm snowboard={ snowboard } handleChange={ handleChange }/>
}


export default CreateSnowboard