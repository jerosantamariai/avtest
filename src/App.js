import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import injectContext from './store/appContext.js';
import Navbar from '../src/components/navbar.jsx';
import About from './views/about.jsx';
import Home from '../src/views/home.jsx';
import Starwars from '../src/views/starwars.jsx';
import NotFound from '../src/views/notfound.jsx';
import UnderConstruction from './views/underconstruction.jsx';
import University from './views/university.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/university" element={<University/>} />
        <Route exact path="/starwars" element={<Starwars/>} />
        <Route exact path="/underconstruction" element={<UnderConstruction/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
