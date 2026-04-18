import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Home",
}

function HomePage() {
  return (
    <div>
      <Button>Hello Button</Button>
    </div>
  )
}

export default HomePage