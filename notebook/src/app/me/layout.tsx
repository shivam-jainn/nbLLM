import React from 'react'
import SideNav from '@/components/SideNav'
import { Toaster } from '@/components/ui/toaster'

export default function layout({children}:{
  children: React.ReactNode
}) {
  return (
    <section className='h-screen w-screen flex'>
    <div className='w-1/5'>
      <SideNav />
    </div>
    <div className='w-4/5'>
    {children}
    </div>
    <Toaster />

    </section>
  )
}
