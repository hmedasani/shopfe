import React from 'react'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

import sampleData from '@/db/sample-data'
import ProductList from '@/components/shared/product/product-list'


export const metadata: Metadata = {
  title: "Home",
}

async function HomePage() {

  console.log(sampleData);

  return (
    <div className='p-4'>
      <ProductList data={sampleData.products} title="Featured Products" limit={4} />
    </div>
  )
}

export default HomePage
