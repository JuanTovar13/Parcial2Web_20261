import { useNavigate, useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <h1>ProductDetail</h1>
      <p>Product ID: {id}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
