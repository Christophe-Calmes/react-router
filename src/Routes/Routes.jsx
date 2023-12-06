import { Link, useNavigate } from "react-router-dom"
const randId = Math.floor(Math.random()*10);
//const randId = 1;
const Routes = () => {
    const navigate = useNavigate();
    const handleClick = (GoTo) => {
        navigate(GoTo);
      };
      const handleClickID = (GoTo, param) => {
        const dataURL = { state: {id: param}};
        navigate(GoTo, dataURL);
      };

  return (
    <div>
        <ul><li>Link method</li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
        <ul>
            <li>useNavigate method</li>
            <li><button onClick={() => handleClick('/Home')}>Home</button></li>
            <li><button onClick={() => handleClickID(`/ItemDetails/${randId}`, randId )}>Item details id {randId} </button></li>
            <li><button onClick={() => handleClick('/Contact')}>Contact</button></li>
            <li><button onClick={() => handleClick('/About')}>About</button></li>
        </ul>
    </div>
  )
}

export default Routes