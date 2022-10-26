import React from 'react';
import { Route } from "react-router-dom"
import Empresa from './pages/Empresas/Empresa';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';


function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/empresas" component={Empresa} />
      </div>
    </React.Fragment>

  );
}


export default App;
