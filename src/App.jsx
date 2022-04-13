/*1) un componente display che ti servirà per mostrare il risultato dei vari task elencati sotto.
  Mi aspetto UN solo componente display usato svariate volte ( riutilizzabilità )

2) un bottone che se lo premi nasconde del contenuto 
( scegli tu il contenuto, può essere anche una semplice stringa ). 
Se il contenuto è nascosto il bottone deve cambiare testo al suo interno, 
e deve esserci scritto "show" e al posto di nascondere mostra il contenuto 
precedentemente nascosto. Se il contenuto invece è già displayto il testo del bottone sarà "hide" 

3) un contatore con un tasto più e un tasto meno, dove alla pressione un numero viene incrementato o diminuito

4) un microform con 3 input:  Nome, età, sesso. Possibilità all'utente di poter cambiare uno di questi valori
 e displayarne il valore. */

import { render } from "@testing-library/react";
import { React, useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Display myCounter={counter} />

      <Button
        className="btn-container"
        btnText={"+"}
        onClick={() => increase(counter)}
      />
      <Button
        className="btn-container"
        btnText={"-"}
        onClick={() => decrease(counter)}
      />
      <Button
        className="reset"
        btnText={"reset"}
        onClick={() => reset(counter)}
      />
    </div>
  );
}

export default App;
