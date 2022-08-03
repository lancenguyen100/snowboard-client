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

    // console.log("this is snowboard in createSnowboard", snowboard)

    const handleChange = (e) => {
        setSnowboard(prevSnowboard => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log("this is the input type", e.target.type)

            if (e.target.type === "number") {
                // this is looking at the input type, and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }
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
    

 return (
    <SnowboardForm 
         snowboard={ snowboard } 
         handleChange={ handleChange } 
         heading="Add a new snowboard!"
     />
    )
}


export default CreateSnowboard