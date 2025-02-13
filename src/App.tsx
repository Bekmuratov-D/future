import { Link, Route, Routes } from "react-router-dom"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { ErrorPageAsync } from "./pages/Error/ErrorPage.async"
import { Suspense} from "react"
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/error'}>Error</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPageAsync />}/>
            <Route path={'/error'} element={<ErrorPageAsync />}/>
          </Routes>
        </Suspense>
        <button onClick={toggleTheme}>{theme}</button>
    </div>
  )
}

export default App