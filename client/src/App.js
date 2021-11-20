import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Landing from './Screens/landing';
import Logins from './Screens/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' component={Logins}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
