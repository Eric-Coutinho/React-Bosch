import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { useContext } from 'react'

import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import AboutPage from './Pages/AboutPage';
import SearchPage from './Pages/SearchPage';
import CounterPage from './Pages/CounterPage';
import ReqPage from './Pages/RequisitionPage';
import NewMusicPage from './Pages/NewMusicPage';
import NotFoundPage from './Pages/NotFoundPage';
import CarteiraPage from './Pages/CarteiraPage';
import PagamentoPage from './Pages/PagamentoPage';

import { DarkModeContext } from './Context/darkMode';
import { ExtratoContext, ExtratoProvider } from './Context/extrato';

function App() {
  const { mode } = useContext(DarkModeContext);

  return (
    <div className={mode ? 'AppDark' : 'AppLight'}>
      <ExtratoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ReqPage />} />
          <Route path='/new' element={<NewMusicPage />} />
          <Route path='/add' element={<PagamentoPage />} />
          <Route path='/extrato' element={<CarteiraPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </ExtratoProvider>
    </div>
  );
}

export default App;
