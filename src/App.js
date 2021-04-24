import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Signup" component={Signup} />
        {/* <Route exact path="/Signin" component={Signin} /> */}
        {/* <Route exact path="/" component={Dashboard} /> */}
        <Route exact path="/" component={Signin} />
        <Route exact path="/Dashboard" component={Dashboard} />


      </Switch>

    </div>
  );
}

export default App;
