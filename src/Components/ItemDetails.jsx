import BackToHome from "./BackToHome"
import BackToHomeUseNavigate from "./BackToHomeUseNavigate"
import Error_Page from '../Error_page';
import { useLocation } from "react-router-dom"
const ItemDetails = () => {
  const location = useLocation();
  let security = false;
  let id = null;
  if (location.state != null) {
    security = true;
    id = location.state.id;
  }
  return (
    <div>
      {security ? (
        <div>
          <section>
          <h1>ItemDetails--- {id}</h1>
          <article>
            <p>Name of item : {location.state.name}</p>
          </article>
          </section>
          

          <section>
            <article>
              <h2>Link Method</h2>
              <BackToHome />
            </article>
            <article>
              <h2>useNavigate Method</h2>
              <BackToHomeUseNavigate />
            </article>
          </section>
        </div>
      ) : (
        <div>
          <Error_Page />
        </div>
      )}
    </div>
  );
}

export default ItemDetails