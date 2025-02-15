import { Link} from "react-router-dom"
import './styles/index.scss';
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";



const App = () => {
  
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div className={classNames('app-container', {}, [])}>
        <Header />
        <AppRouter />
      </div>
    </div> 
  )
}

export default App