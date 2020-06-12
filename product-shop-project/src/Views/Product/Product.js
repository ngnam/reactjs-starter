import React from 'react';
import Config from '../../Const/Config';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import useAxiosGet from '../../Hooks/httpMakeRequests';
import ProductCard from './ProductCard';

const Product = () => {
  const { id } = useParams();
  const url = `${Config.API_ENDPOINT}product/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = <p>There was a error please refresh or try again later.</p>;
  }

  if (product.loading) {
    content = <Loading />;
  }

  if (product.data) {
    content = (
      <div>
        <ProductCard product={product.data} />
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Product;
