/*

2) un bottone che se lo premi nasconde del contenuto 
( scegli tu il contenuto, può essere anche una semplice stringa ). 
Se il contenuto è nascosto il bottone deve cambiare testo al suo interno, 
e deve esserci scritto "show" e al posto di nascondere mostra il contenuto 
precedentemente nascosto. Se il contenuto invece è già displayto il testo del bottone sarà "hide" 

4) un microform con 3 input:  Nome, età, sesso. Possibilità all'utente di poter cambiare uno di questi valori
 e displayarne il valore. */

import { render } from "@testing-library/react";
import { React, useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { HideAndSeek } from "./components/HideButton";
import "./App.css";

const Text = () => <div>I will disappear, true Magic</div>;

function App() {
  const [counter, setCounter] = useState(0);
  const [hideText, setHideText] = useState(true);

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

  //const onClick = () => setHideText(false); ----> corretto per l'hide

  /*const onClick = () => {
    if ((hideText = true)) {
      setHideText = true;
    } else if ((hideText = false)) {
      setHideText = false;
    }
  }; primo tentativo*/

  /*const onClick = () => setHideText(false);
  const disappearText = () => {
    if ((setHideText = false)) {
      onclick = "show me";
    }
  }; secondo tentativo */

  const onClick = () => setHideText(false);

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
      <button onClick={onClick}>Hide Me</button>
      {hideText ? <Text /> : null}
    </div>
  );
}

export default App;
