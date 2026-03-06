import { useEffect, useState } from 'react';

export const Card = () => {
  const [contador, setContador] = useState(0);
  const [otroContador, setOtroContador] = useState(0);
  const [numPoke, setNumPoke] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     //Petición al backend por endpoint (API)
  //     //Esto se ejecuta una unica vez al montarse el componente
  //     const getData = async () => {
  //       try {
  //         await fetch('https://pokeapi.co/api/v2/pokemon')
  //           .then((res) => res.json())
  //           .then((pokes) => setData(pokes.results));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getData();
  //   }, []);

  //   useEffect(() => {
  //     //PETICION
  //     console.log('Contador cambio');
  //     //Esto se ejecuta cada vez que la dependencias cambien
  //   }, [contador]);

  const getPokes = async () => {
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numPoke}`)
        .then((res) => res.json())
        .then((pokes) => setData(pokes.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${numPoke !== undefined ? numPoke : null}`
        )
          .then((res) => res.json())
          .then((pokes) => setData(pokes.results));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [numPoke]);

  return (
    <>
      {/* {error ?? <p>{error}</p>} */}
      {/* {error ? <p>{error}</p> : <p>No hay error</p>} */}
      {/* {data.length < 2 && <p>Hay un solo pokemon</p>} */}
      <input
        placeholder="Numero de pokemons"
        onChange={(e) => setNumPoke(e.target.value)}
      />
      <button onClick={() => getPokes()}>Obtener pokemons</button>
      <div>
        {data.map((poke, index) => (
          <h1 key={index}>{poke.name}</h1>
        ))}
      </div>
    </>
  );
};
