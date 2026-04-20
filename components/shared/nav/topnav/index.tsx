import Link from 'next/link'
import React from 'react'
import FormatNavList from '../format-navlist'
import { topNav } from '@/lib/static-data/english/navlist'

function TopNav() {
  return (
    <nav className='flex flex-col md:flex-row gap-4 px-4 py-2'>
        {FormatNavList(topNav, "capitalize text-sm font-medium")}
    </nav>
  )
}

export default TopNav