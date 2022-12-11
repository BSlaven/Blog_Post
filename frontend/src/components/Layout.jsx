import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {

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