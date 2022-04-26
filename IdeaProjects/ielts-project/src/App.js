import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from './pages/MainPage'
import Section from './pages/Section'
import Navigation from "./components/Navigation"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import PersonalPage from "./pages/PersonalPage";
import References from "./pages/References";
import TestForm from "./components/TestForm";

library.add(fas)


function App() {

    return (
    <>
      <Router>
          <Navigation />
          <Routes>
              <Route exact path='/' element={<MainPage />} />
              <Route exact path='/listening' element={<Section imgLink = "images/listening.png" sectionName = "Listening" />} />
              <Route exact path='/writing' element={<Section imgLink = "images/writing.png" sectionName = "Writing" />} />
              <Route exact path='/reading' element={<Section imgLink = "images/reading.png" sectionName = "Reading" />} />
              <Route exact path='/speaking' element={<Section imgLink = "images/speaking.png" sectionName = "Speaking" />} />
              <Route exact path='/register' element={<RegistrationPage />} />
              <Route exact path='/signin' element={<LoginPage />} />
              <Route exact path='/userpage' element={<PersonalPage />} />
              <Route exact path="/references/:section" element={<References/>} />
              <Route exact path="/references/:section/:testid" element={<TestForm/>} />
              {/*<Route exact path='/writing/references' element={<References sectionName = "Writing"/>} />*/}
              {/*<Route exact path='/reading/references' element={<References sectionName = "Reading"/>} />*/}
              {/*<Route exact path='/speaking/references' element={<References sectionName = "Speaking"/>} />*/}
          </Routes>
      </Router>
    </>
  );
}

export default App;
