import './App.css';
import Registration from './Components/Registration/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/categories'


//hghg
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
          <Login/>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
