import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ProductPrice from './product-price';

export interface ProductCardProps {
    name: string;
    slug: string;
    category: string;
    description: string;
    images: string[];
    currency: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner: string;
}

function ProductCard({product}: {product: ProductCardProps}) {
  return (
    <Card className='w-full max-w-sm p-0'>
        <CardHeader className='p-0 items-center'>
            <Link href={`/products/${product.slug}`} className='text-lg font-semibold flex items-center justify-center relative w-full h-48 overflow-hidden rounded-t-md'>
                <Image src={product.images[0]} alt={product.name} priority={true} fill />
            </Link>
        </CardHeader>
        <CardContent className='p-4 grid gap-4'>
            <div className="text-xs">{product.brand}</div>
            <Link href={`/products/${product.slug}`} className='text-lg font-semibold hover:underline'>
                <h2 className="text-sm font-medium">
                    {product.name}
                </h2>
            </Link>
            <div className="flex-between gap-4">
                <span className="text-sm text-gray-500">{product.rating} stars</span>
                {product.stock > 0 ? (
                    <ProductPrice value={product.price} currency={product.currency} />
                ) : (
                    <span className="text-sm text-red-500">Out of Stock</span>
                )}
            </div>
        </CardContent>
    </Card>
  )
}

export default ProductCard