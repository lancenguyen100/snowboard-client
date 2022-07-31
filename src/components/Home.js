import SnowboardsIndex from "./snowboards/SnowboardsIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>View Snowboards!</h2>
			<SnowboardsIndex  msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
