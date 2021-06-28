import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import Detail from './Components/Detail';

function App() {
  return (
    <div className="app">
     <Router>
     <Header/>
       <Switch>
        <Route path="/detail">
           <Detail/>
         </Route>
         <Route exact path="/">
           <Login/>
         </Route>
         <Route path="/home">
           <Home/>
         </Route>      
       </Switch>
     </Router>
    </div>
  );
}

export default App;
