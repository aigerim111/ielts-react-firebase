import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from './pages/MainPage'
import Listening from './pages/Listening'
import Writing from './pages/Writing'
import Speaking from './pages/Speaking'
import Reading from './pages/Reading'
import Navigation from "./components/Navigation"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

library.add(fas)


function App() {

    return (
    <>
      <Router>
          <Navigation />
          <Routes>
              <Route exact path='/' element={<MainPage />} />
              <Route exact path='/listening' element={<Listening />} />
              <Route path='/writing' exact element={Writing} />
              <Route path='/reading' exact element={Reading} />
              <Route path='/speaking' exact element={Speaking} />
              <Route exact path='/register' element={<RegistrationPage />} />
              <Route exact path='/signin' element={<LoginPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
