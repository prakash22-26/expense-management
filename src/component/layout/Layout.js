import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Header/>
      <div className='content'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
