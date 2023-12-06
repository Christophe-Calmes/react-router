import { useNavigate } from "react-router-dom";
const BackToHomeUseNavigate = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/Home");
    };
  
    return (
      <div>
        <button onClick={handleClick}>Go to Home</button>
      </div>
    );
}

export default BackToHomeUseNavigate