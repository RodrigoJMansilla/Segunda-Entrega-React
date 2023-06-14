
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../common/cartWidget/CartWidget"
import styles from "./Navbar.module.css"

export const Navbar = ({contador}) => {
  return (
    <nav className={styles.navbar}>
        <div style={{display: "flex", justifyContent:"flex-start", gap: "60px"}}>
          <Link to="/">
            <h3 className={styles.logo}>Logo</h3>
          </Link>
            
          <div className={styles.contenedorBotones}>
              <Link to="/"><button className={styles.botones}>Todos</button></Link>
              <Link to="/category/birome"><button className={styles.botones}>Birome</button></Link>
              <Link to="/category/grabado"><button className={styles.botones}>Grabado</button></Link>
              <Link to="/category/grafito"><button className={styles.botones}>Grafito</button></Link>
              <Link to="/category/oleo"><button className={styles.botones}>Oleo</button></Link>
              <Link to="/category/pastel"><button className={styles.botones}>Pastel</button></Link>
          </div>
        </div>
        <Link to="/carrito">
          <CartWidget contador={contador}/>
        </Link>
        
    </nav>
  )
}


