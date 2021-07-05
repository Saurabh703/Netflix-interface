import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import index from './pages/index';
import Login from "./pages/Login"
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/login" component={Login} />
        <Route path="/choose-plan" component={ChoosePlan} />
      </Switch>
    </Router>
  );
}

export default App;
