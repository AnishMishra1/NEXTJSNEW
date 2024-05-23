import Link from 'next/link';
import React from 'react'

const Login = () => {
  return (
    <div>
    <h1>Login page</h1>
    <Link href="/login/logincollege">go to home</Link>
    <Link href='/login/loginstudent'>got to about</Link>
    
    </div>
    
  )
}

export default Login;