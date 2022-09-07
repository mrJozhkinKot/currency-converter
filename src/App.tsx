import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './components/pages/About';
import Main from './components/pages/Main';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Main/>} />
    <Route path='/about' element={<About/>} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
