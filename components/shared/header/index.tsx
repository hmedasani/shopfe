import React from 'react'
import Brand from '../nav/Brand'
import TopNav from '../nav/topnav'
import UserNav from '../nav/usernav'
import ThemeToggle from './theme-toggle'
import TopSearch from '../search/topsearch'

function Header() {
  return (
    <header className='flex justify-between border-b p-4'>
        <Brand />
        <div className="flex flex-row flex-1 gap-4 px-4">
          <TopSearch />
          <TopNav />
        </div>
          <ThemeToggle />
        <UserNav />
    </header>
  )
}

export default Header