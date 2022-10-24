import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  console.log('Layout component rendered')
  
  return (
    <>
      <Header />
      <main className='App container'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout