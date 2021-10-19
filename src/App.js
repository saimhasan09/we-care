import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Pages/Services/Services';
import './App.css';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import NotFound from './Pages/NotFound/NotFound';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import DocDetails from './Pages/DocDetails/DocDetails';
import BookingForm from './Pages/BookingForm/BookingForm';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Ourteam from './Pages/OurTeam/Ourteam';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/bookingform">
              <BookingForm></BookingForm>
            </PrivateRoute>
            <PrivateRoute path="/docDetails">
              <DocDetails></DocDetails>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
