
import './App.css';
import {Navigation} from './components/navigation';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {Matter} from './components/Matter/Matter';
import {Register} from './components/Register/Register';
import { Finance } from './components/Finance';





function App() {
  return (
    <BrowserRouter>
     <div className="container">
     <h3 className="m-3 d-left justify-content-center">ESPRIT</h3>
     <h5 className="m-3 d-flex justify-content-center">Gestion Scolaire</h5>
      <Navigation/>
    
    
     <Switch>
    
      <Route path='/register' component={Register} exact/>
       <Route path='/matter' component={Matter} />
       <Route path='/finance' component={Finance} />
  

     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
/* 
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/