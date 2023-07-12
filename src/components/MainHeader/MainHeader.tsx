import React from 'react'
import Navigation from './Navigation'
import style from './MainHeader.module.css'

const MainHeader:React.FC<{isAuthenticated:boolean}> = (props) => {
  return (
    <header className={style['main-header']}>
      <h1>Login</h1>
      <Navigation isLoggedIn={props.isAuthenticated} />
    </header>
  )
}

export default MainHeader
