import React from 'react'
import Brand from '../Brand'
import TopNav from '../nav/topnav'
import Menu from '../menu'
import SearchAll from '../search/search-all'


function Header() {
  return (
    <header className='flex justify-between border-b p-4'>
        <Brand />
        <div className="flex flex-row flex-1 gap-4 px-4">
          <SearchAll />
          <div className="hidden md:block">
          <TopNav />
          </div>
        </div>
        <Menu />
    </header>
  )
}

export default Header