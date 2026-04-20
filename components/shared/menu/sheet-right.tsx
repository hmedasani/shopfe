"client"
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { EllipsisVertical, MenuIcon } from 'lucide-react'
import ThemeToggle from '../theme-toggle'
import UserNav from '../nav/usernav'
import TopNav from '../nav/topnav'

function SheetRight() {
  return (
    <Sheet>
        <SheetTrigger className='align-middle'>
            <span className='p-2 rounded-md bg-gray-200 dark:bg-gray-700'>
                <EllipsisVertical size={20} />
            </span>
        </SheetTrigger>
        <SheetContent side='right' className='w-64'>
            <SheetHeader>
                <div className='flex items-center gap-2'>
                    <MenuIcon size={20} />
                    <span className='text-lg font-semibold'>Menu</span>
                </div>
            </SheetHeader>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-row border-b border-t flex-end pt-6 pb-4 px-2">
                    <ThemeToggle />
                    <UserNav />
                </div>
                <TopNav />
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default SheetRight