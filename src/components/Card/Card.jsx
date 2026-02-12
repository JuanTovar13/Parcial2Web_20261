import { useState } from 'react';

export const Card = ({ title }) => {
  const [sumTotal, setSumTotal] = useState(0); //Hook useState
  console.log(sumTotal);

  // let sumTotal = 0;
  // console.log(sumTotal);

  // const sumar = () => {
  //   sumTotal + 1;
  // };

  const sumar = () => {
    setSumTotal(sumTotal + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{sumTotal}</p>
      <button onClick={sumar}>Sumar</button>
    </>
  );
};
