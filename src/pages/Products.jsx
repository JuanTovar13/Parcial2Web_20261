import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 112312,
    name: 'Zapatos',
    price: 300,
  },
  {
    id: 231321,
    name: 'Camisa',
    price: 300,
  },
];

export const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => navigate(`/products/${product.id}`)}>
              Ir al detalle
            </button>
          </div>
        );
      })}
    </>
  );
};
