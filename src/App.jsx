import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app_main-content">
              <Navbar />
              <Routes>
                <Route exact path='/' Component={About} />
                <Route path='/resume' Component={Resume} />
                <Route path='/projects' Component={Projects} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;