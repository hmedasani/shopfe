import { APP_TITLE } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brand() {
  return (
    <Link href="/" className='text-xl font-bold flex flex-row items-center text-yellow-600'>
        {/* <Image src={"images/logo.svg"} alt={`${APP_TITLE}`} width={32} height={32} priority={true} /> */}
        <span className='hidden md:block'>{APP_TITLE}</span>
    </Link>
  )
}

export default Brand