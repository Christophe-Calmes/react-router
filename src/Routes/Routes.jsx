import { Link, useNavigate } from "react-router-dom"
const randId = Math.floor(Math.random()*10);
const dataItem = [{id: 10, name: 'Bernard'}, 
{id: 18, name: 'Bianca'},
{id: 75, name: 'Belle'},]
const Routes = () => {
    const navigate = useNavigate();
    const handleClick = (GoTo) => {
        navigate(GoTo);
      };
      const handleClickID = (GoTo, param) => {
        const dataURL = { state: param};
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
            {
            dataItem.map((element)=>(
                <li key={element}><button onClick={() => handleClickID(`/ItemDetails/${element.id}`, element )}>Item details for {element.name} </button></li>
            ))
            }
           
            
            <li><button onClick={() => handleClick('/Contact')}>Contact</button></li>
            <li><button onClick={() => handleClick('/About')}>About</button></li>
        </ul>
    </div>
  )
}

export default Routes