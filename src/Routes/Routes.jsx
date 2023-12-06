import { Link } from "react-router-dom"
const Routes = () => {
  return (
    <div>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/ItemDetails">Item Details</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    </div>
  )
}

export default Routes