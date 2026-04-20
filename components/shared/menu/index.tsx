"client"
import React from 'react'
import ThemeToggle from '../theme-toggle'
import UserNav from '../nav/usernav'
import SheetRight from './sheet-right'

function Menu() {
  return (
    <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex w-full max-w-xs gap-1'>
            <ThemeToggle />
            <UserNav />
        </nav>
        <nav className='flex md:hidden w-full max-w-xs gap-1'>
            <SheetRight />
        </nav>
    </div>
  )
}

export default Menu