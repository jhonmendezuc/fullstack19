import ArryFunComp from "./ArrowFunComp.jsx";

const carita = "😀";

const Vineta = () => {
  return (
    <>
      <b>{carita} </b>
    </>
  );
};

function ComponenteFuncion() {
  return (
    <>
      <h4> Mi primer componente de funcion</h4>
      <ul>
        <li>
          <Vineta />
          item 1
        </li>
        <li>
          <Vineta />
          item 2
        </li>
        <li>
          <Vineta />
          item 3
        </li>
      </ul>
      <hr />
      <ArryFunComp />
    </>
  );
}

export default ComponenteFuncion;
