import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from './components/Home';
import Login from "./components/Login";
import LoginClassCom from "./components/LoginClassCom";
import LifecycleMethods from './components/LifecycleMethods';
import Hooks from "./components/Hooks";
import HookuseReducer from "./components/HookuseReducer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="centerWrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/login" component={Login} />
            <Route path="/loginClassCom" component={LoginClassCom} />
            <Route path="/lifecycleMethods" component={LifecycleMethods} />
            <Route path="/hookuseReducer" component={HookuseReducer} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
