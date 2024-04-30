import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './styles/index.scss'


import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/mainPage'
import { AboutPage } from 'pages/aboutPage'



export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames( 'app', {}, [theme] ) }>
      <button onClick={ toggleTheme }>TOGGLER</button>
        <Link to="/">MAIN PAGE</Link>
        <Link to="/about">ABOUT PAGE</Link>

    <Suspense fallback={ <div>Loading...</div> }>
      <Routes>
        <Route path={ '/' } element={ <MainPage /> } />
        <Route path={ '/about' } element={ <AboutPage /> } />
      </Routes>
    </Suspense>
    </div>
  )
}
