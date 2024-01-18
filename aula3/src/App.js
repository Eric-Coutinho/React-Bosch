import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import AboutPage from './Pages/AboutPage';
import SearchPage from './Pages/SearchPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element= { <HomePage />} />
        <Route path='/search' element= { <SearchPage />} />
        <Route path='/about' element= { <AboutPage />} />
        <Route path='/*' element= { <NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
