import React from 'react'
import Navigation from './Navigation'
import style from './MainHeader.module.css'

const MainHeader:React.FC<{isAuthenticated:boolean, onLogout:()=>void}> = (props) => {
  return (
    <header className={style['main-header']}>
      <h1>Login</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
    </header>
  )
}

export default MainHeader
