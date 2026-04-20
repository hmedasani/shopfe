import React from 'react'
import ProductCard from './product-card';

export interface ProductListProps {
    data: any[];
    title?: string;
    limit?: number;
}

function ProductList({data, title, limit}: ProductListProps) {
  const dataLimit = limit ? data.slice(0, limit) : data;
  return (
    <div>
      {title && <h2 className='h2 h2-bold'>{title}</h2>}
      {dataLimit.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {dataLimit.map((product) => (
              <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  )
}

export default ProductList