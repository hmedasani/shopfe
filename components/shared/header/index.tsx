import React from 'react'
import Brand from '../nav/Brand'
import TopNav from '../nav/topnav'
import UserNav from '../nav/usernav'

function Header() {
  return (
    <header className='flex justify-between border-b p-4'>
        <Brand />
        <TopNav />
        <UserNav />
    </header>
  )
}

export default Header