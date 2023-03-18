import './App.css';
import React, {useContext, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'


import Home from "./component/page/home"
import Manager from "./component/page/manager"
import ErrorPage from "./component/page/error"

import LockerPlugin from "./component/plugins/locker/locker"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager /> }>
            <Route path="/manager/locker" element={<LockerPlugin/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
