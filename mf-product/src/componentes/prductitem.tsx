import React from 'react';
import { Product } from '../types/types';

type ProductProps = {
  product: Product;
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-item">
      <h4>{product.id}</h4>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;