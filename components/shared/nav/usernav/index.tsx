import React from 'react'
import {ShoppingCart, User} from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function UserNav() {
  return (
    <nav className='flex flex-row gap-2'>
        <Button asChild variant='ghost' size='sm'>
            <Link href="/cart">
                <ShoppingCart /> Cart
            </Link>
        </Button>
        <Button asChild variant='ghost' size='sm'>
            <Link href="/login">
                <User /> Login
            </Link>
        </Button>
    </nav>
  )
}

export default UserNav