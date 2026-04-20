import React from 'react'
import {cn} from '@/lib/utils'

interface ProductPriceProps {
    value: number;
    className?: string;
    currency: string;
}

function ProductPrice({value, className, currency}: ProductPriceProps) {
  const stringValue = value.toFixed(2);
  //get the Int/Float
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn('text-2xl font-bold', className)}>
      <span className="text-xs align-super text-muted-foreground">{currency}</span>
      <span className="text-lg">{intValue}</span>
      <span className="text-sm align-super text-muted-foreground">.{floatValue}</span>
    </p>
  )

   
}

export default ProductPrice