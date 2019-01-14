import Header from './Head'
import Navbar from './Navbar'
export default  (props) => (
	<div>
		<Header/>
		<Navbar/>
		{props.children}
	
	</div>
)