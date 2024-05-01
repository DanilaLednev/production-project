
import { Link } from 'react-router-dom'

import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'



export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames( 'app', {}, [theme] ) }>
      <button onClick={ toggleTheme }>TOGGLER</button>
        <Link to="/">MAIN PAGE</Link>
        <Link to="/about">ABOUT PAGE</Link>
        <AppRouter />
    </div>
  )
}
