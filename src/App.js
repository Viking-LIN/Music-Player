import React from 'react';

import  './App.css'
import  Header from'./layout/header'
import  SideBar from'./layout/side'
import  Main from'./layout/main'
import  Footer from'./layout/footer'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {

  return (
    <Router>
        <div className="App"> 
          <Header />
          <SideBar />
          <Main />
          <Footer />
        </div>
    </Router>
    
  );
}

export default App;
