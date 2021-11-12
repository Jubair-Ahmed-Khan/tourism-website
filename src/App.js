import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import Packages from './Pages/Packages/Packages';
import Destinations from './Pages/Destination/Destinations';
import AddPackage from './Pages/AddPackage/AddPackage';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageBookings from './Pages/ManageBookings/ManageBookings';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/packages/add">
              <AddPackage></AddPackage>
            </Route>
            <PrivateRoute path="/packages/:packageId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="/destination">
              <Destinations></Destinations>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/mybookings">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/managebookings">
              <ManageBookings></ManageBookings>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
