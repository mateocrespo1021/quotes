import styled from "@emotion/styled";
import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import data from "./quotes.json";

const QuoteContainer = styled.div`
  background-color: ${(props) => props.color && props.color};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  width: 25rem;
  padding: 1rem;
  margin: 2rem auto;
  background-color: #378137;
  border: none;
  transition: all 300ms;
  &:hover {
    background-color: #32a032;
  }
`;

function App() {
  //Destructuring de data
  const { quotes } = data;
  //Estados para el num ramdom ,la cita y el color
  const [numQuote, setNumQuote] = useState(0);
  const [quote, setQuote] = useState(quotes[numQuote]);
  const [color, setColor] = useState("#D8BFD8");
  //Arreglo de colores
  const colorsQuote = [
    "#CD5C5C",
    "#E9967A",
    "#DB7093",
    "#FF4500",
    "#FF8C00",
    "#663399",
    "#6A5ACD",
  ];
  //Funcion de numero ramdom
  const numRandom = (max) => Math.floor(Math.random() * max);

  //Funcion cuando cambio
  const changeQuote = () => {
    setNumQuote(numRandom(quotes.length));
    setQuote(quotes[numQuote]);
    setColor(colorsQuote[numRandom(colorsQuote.length)]);
  };
  return (
    <QuoteContainer className="App" color={color}>
      <QuoteBox quoteObj={quote} color={color}></QuoteBox>
      <Button onClick={changeQuote}>Change</Button>
    </QuoteContainer>
  );
}

export default App;
