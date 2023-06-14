import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import { ProductCardDetail } from "../../common/productCardDetail/ProductCardDetail";


export const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      {productSelected.stock > 0 ? (
        <ProductCardDetail elemento={productSelected} />
      ) : <h3>No hay stock</h3>}
    </>
  );
};


