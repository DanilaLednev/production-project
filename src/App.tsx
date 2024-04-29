import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './styles/index.scss'

import { MainPageAsync } from './pages/mainPage/MainPage.async'
import { AboutPageAsync } from './pages/aboutPage/AboutPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames( 'app', {}, [theme] ) }>
      <button onClick={ toggleTheme }>TOGGLER</button>
        <Link to="/">MAIN PAGE</Link>
        <Link to="/about">ABOUT PAGE</Link>

    <Suspense fallback={ <div>Loading...</div> }>
      <Routes>
        <Route path={ '/' } element={ <MainPageAsync /> } />
        <Route path={ '/about' } element={ <AboutPageAsync /> } />
      </Routes>
    </Suspense>
    </div>
  )
}
