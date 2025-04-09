'use client'

import Link from 'next/link'

import { leckerliOne } from '@/lib/fonts'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <Link href='/'>
      <h1 className={cn('text-primary text-4xl', leckerliOne.className)}>
        Carveo
      </h1>
    </Link>
  )
}

export default Logo
