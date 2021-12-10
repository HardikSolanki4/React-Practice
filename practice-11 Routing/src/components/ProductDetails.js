import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product Details {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
