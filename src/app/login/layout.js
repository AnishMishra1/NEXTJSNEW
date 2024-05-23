"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Layout = ({children}) => {
  const pathName = usePathname()
  return (
    <div>
    {pathName !== '/login/logincollege' ? <ul>
    <li><Link href='/login/logincollege'>college</Link></li>
      <li><Link href='/login/loginstudent'>student</Link></li>
      <li><Link href='/login'>login</Link></li>
    </ul>
    :
    <ul><Link href='/'>welcome home</Link></ul>
    }
    <h1>common layout for login</h1>
    
    {children}
    </div>
  )
}

export default Layout