import { APP_TITLE } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brand() {
  return (
    <Link href="/" className='text-xl font-bold flex flex-row items-center gap-1'>
        <span className='text-yellow-600'>LSF</span>
        <span className='hidden md:block'>{APP_TITLE}</span>
    </Link>
  )
}

export default Brand