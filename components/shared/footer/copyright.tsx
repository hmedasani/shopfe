import { APP_TITLE } from '@/lib/constants'
import React from 'react'

function Copyright() {
  return (
    <div>&copy; {new Date().getFullYear()} {APP_TITLE}. All rights reserved.</div>
  )
}

export default Copyright