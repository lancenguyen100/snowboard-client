import { Form, Button, Container } from "react-bootstrap"


const SnowboardForm = (props) => {
    const { snowboard, handleChange, heading } = props

 return (
     <Container className="justify-content-center">
        <h3>{heading}</h3>
        <Form>
            <Form.Label htmlFor="brand">Brand</Form.Label>
            <Form.Control
                placeholder="What is the snowboard brand?"
                name="brand"
                id="brand"
                value={ snowboard.brand }
                onChange= { handleChange }
             />
             <Form.Label htmlFor="type">Type</Form.Label>
             <Form.Control
                placeholder="What type of snowboard is this?"
                name="type"
                id="type"
                value={ snowboard.type }
                onChange= { handleChange }
             />
             <Form.Label htmlFor="color">Color</Form.Label>
             <Form.Control
                placeholder="What is the snowboard color?"
                name="color"
                id="color"
                value={ snowboard.color }
                onChange= { handleChange }
             />
             <Form.Label htmlFor="size">Size</Form.Label>
             <Form.Control
                placeholder="What is the snowboard size?"
                type= "number"
                name="size"
                id="size"
                value={ snowboard.size }
                onChange= { handleChange }
             />
             <Button type="submit">Submit</Button>
        </Form>
     </Container>
    )
}


export default SnowboardForm