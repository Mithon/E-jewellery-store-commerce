import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Explore from './Pages/Explore/Explore';
import Registred from './Pages/Registred/Registred';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PurchageModal from './Components/PurchageModal/PurchageModal';
import Payment from './Pages/Dashboard/Payment/Payment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/purchagemodal">
              <PurchageModal />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Registred />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
