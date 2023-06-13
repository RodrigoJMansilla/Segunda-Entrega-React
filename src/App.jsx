import style from "./App.module.css";
import { useState } from "react";
import { ItemListContainer } from "./components/common/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Navbar contador={counter} />
      <main>
        <ItemListContainer saludo="Bienvenido! esto es una prop de prueba" />
        <h2 className={style.heading2}>
          Botones para jugar con el counter del carrito:
        </h2>
        <div className={style.contBotones}>
          <button className={style.botones} onClick={() => setCounter(counter + 1)}>Sumar</button>
          <button className={style.botones} onClick={() => setCounter(counter - 1)}>Restar</button>
        </div>
      </main>
    </>
  );
}

export default App;
