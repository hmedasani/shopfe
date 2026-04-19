import { Button } from '@/components/ui/button'
import { delay } from '@/utils'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Home",
}

async function HomePage() {

  await delay(2000);

  return (
    <div>
      <Button>Hello Button</Button>
    </div>
  )
}

export default HomePage