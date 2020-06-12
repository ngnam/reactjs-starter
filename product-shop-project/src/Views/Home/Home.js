import React from 'react';
import Loading from '../../Components/Loading';
import Config from '../../Const/Config';
import ProductCard from '../Product/ProductCard';
import useAxiosGet from '../../Hooks/httpMakeRequests';

const Home = () => {
  const url = `${Config.API_ENDPOINT}product?page=1&limit=10`;
  
  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was a error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loading />;
  }

  if (products.data) {
    content = products.data.map((product) => {
      return (
        <div key={product.id}>
            <ProductCard product={product} isView="true" />
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>

      <div>{content}</div>
    </div>
  );
};

export default Home;
