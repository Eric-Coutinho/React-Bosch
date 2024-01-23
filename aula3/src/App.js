import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { useContext } from 'react'

import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import AboutPage from './Pages/AboutPage';
import SearchPage from './Pages/SearchPage';
import CounterPage from './Pages/CounterPage';
import NotFoundPage from './Pages/NotFoundPage';
import PagamentoPage from './Pages/PagamentoPage';
import CarteiraPage from './Pages/CarteiraPage';

import { DarkModeContext } from './Context/darkMode';
import { ExtratoContext, ExtratoProvider } from './Context/extrato';

function App() {
  const { mode } = useContext(DarkModeContext);

  return (
    <div className={mode ? 'AppDark' : 'AppLight'}>
      <ExtratoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<PagamentoPage />} />
          <Route path='/extrato' element={<CarteiraPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </ExtratoProvider>
    </div>
  );
}

export default App;
