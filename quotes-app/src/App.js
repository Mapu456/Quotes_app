import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Layout from "./components/session/Layout"
import {useSelector} from "react-redux"
import {useEffect} from "react"

function App() {
  
  const persistedState = useSelector((state) => state.userSessionReducer)
  useEffect(() => {
    console.log(persistedState)
    console.log( window.innerWidth)
  }, [window.innerWidth])
  return (<div className="app"><Layout /></div>);
}

export default App;
