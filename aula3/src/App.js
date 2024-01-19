import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import AboutPage from './Pages/AboutPage';
import SearchPage from './Pages/SearchPage';
import CounterPage from './Pages/CounterPage';
import NotFoundPage from './Pages/NotFoundPage';

import { CounterProvider } from './Context/counter';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/counter' element={<CounterPage />} />
        </Routes>
      </CounterProvider>
    </div>
  );
}

export default App;
