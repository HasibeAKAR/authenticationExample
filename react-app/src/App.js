import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={home} />
            <Route exact path="/" component={signIn} />
            <Route exact path="/signup" component={signUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
