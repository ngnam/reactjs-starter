import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  let content = null;

  if (props.isView) {
    content = (
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
        to={`/product/${props.product.id}`}
      >
        View
      </Link>
    );
  } else {
    content = (
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center">
        Add To Cart
      </div>
    );
  }

  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/product/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.images[0]?.imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.product.name}</div>
        <div className="font-bold text-xl mb-3">$ {props.product.price}</div>
        <p className="text-gray-700 text-base mb-2">
          {props.product.description}
        </p>
        {content}
      </div>
    </div>
  );
};

export default ProductCard;
