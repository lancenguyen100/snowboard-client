import { useState } from "react"

import SnowboardForm from "../shared/SnowboardForm"

const CreateSnowboard = (props) => {
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

    return <SnowboardForm snowboard={ snowboard } handleChange={ handleChange }/>
}


export default CreateSnowboard