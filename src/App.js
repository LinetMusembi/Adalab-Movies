import GetMovies from './components/GetMovies';
import Slider from './components/GetMovies/Slider';
import './App.css';
import Navbar from './components/GetMovies/NavBar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/GetMovies/MovieDetails';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Slider/>
        <Routes>
           <Route path='/' element={<GetMovies/>} /> 
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
;



