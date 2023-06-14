import styles from "./ProductCard.module.css"

export const ProductCard = ({elemento}) => {
  return (
    <div key={elemento.id} class={styles.card}>
        <img class={styles.imgCard} src={elemento.img} alt={elemento.title} />
        <div class={styles.segCont}>
            <h4 class={styles.tituloCard}>{elemento.title}</h4>
            <div class={styles.miniCont}>
                <p class={styles.precioCard}>
                    Precio: ${elemento.price}
                </p>
                
                <p class={styles.precioCard}>
                    Stock: {elemento.stock}
                </p>
            </div>
            <button class={styles.btnCard}>Ver Detalle</button>
        </div>  
    </div>
  )
}
