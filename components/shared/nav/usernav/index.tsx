import React from 'react'
import {ShoppingCart, User} from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { userNav } from '@/lib/static/english/navlist'

function UserNav() {

    const {cart, login} = userNav;

  return (
    <nav className='flex flex-row gap-2'>

        <Button asChild variant='ghost' size='sm'>
            <Link href={cart.href}>
                <ShoppingCart /> {cart.label}
            </Link>
        </Button>
        <Button asChild size='sm'>
            <Link href={login.href}>
                <User /> {login.label}
            </Link>
        </Button>
    </nav>
  )
}

export default UserNav