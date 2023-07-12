import React from 'react'
import Navigation from './Navigation'
import style from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={style['main-header']}>
      <h1>Login</h1>
      <Navigation/>
    </header>
  )
}

export default MainHeader
