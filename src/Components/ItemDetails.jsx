import BackToHome from "./BackToHome"
import BackToHomeUseNavigate from "./BackToHomeUseNavigate"
const ItemDetails = () => {
  return (
    <div>
      <h1>ItemDetails</h1>
      <section>
        <article>
          <h2>Link Method</h2>
          <BackToHome/>
        </article>
        <article>
          <h2>useNavigate Method</h2>
          <BackToHomeUseNavigate/>
        </article>
      </section>
    </div>
  )
}

export default ItemDetails