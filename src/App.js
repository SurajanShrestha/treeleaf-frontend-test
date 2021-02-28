/*TO THE PERSON READING MY CODE: "HOPE YOU HAVE A GOOD DAY, FEEL FREE TO GIVE A FEEDBACK :)" */

import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Profiles from './Profiles';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profiles" exact>
            <Profiles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
