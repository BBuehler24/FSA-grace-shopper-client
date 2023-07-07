import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Kids.css';
const Kids = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/products`
        );
        const data = await response.json();

        if (data.success) {
          console.log('Data fetched successfully');
        }

        const kidsProducts = data.data.filter(
          (product) => product.category === 'kids'
        );
        setProducts(kidsProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container product-grid'>
      {products.map((product) => (
        <div
          onClick={() => navigate(`/products/${product.id}`)}
          className='product-card'
          key={product.id}
        >
          <div className='product-card' key={product.id}>
            <h1>{product.name}</h1>

            <p className='price'>{product.price}</p>
            <p className='category'>{product.category}</p>
            <img src={product.images[0].url} className='image' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kids;
