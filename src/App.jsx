import style from "./App.module.css";
import { useState } from "react";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductCardDetail } from "./components/common/productCardDetail/ProductCardDetail";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { products } from "./productsMock";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Navbar contador={counter} />
      <main>
        <ItemListContainer />
        <ItemDetailContainer/>
        
      </main>
    </>
  );
}

export default App;
