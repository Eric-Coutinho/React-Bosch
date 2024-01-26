import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { useContext } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import SearchPage from "./Pages/SearchPage";
import CounterPage from "./Pages/CounterPage";
import ReqPage from "./Pages/RequisitionPage";
import NewMusicPage from "./Pages/NewMusicPage";
import NotFoundPage from "./Pages/NotFoundPage";
import CarteiraPage from "./Pages/CarteiraPage";
import RegisterPage from "./Pages/RegisterPage";
import CountryInfo from "./Pages/CountryInfoPage";
import PagamentoPage from "./Pages/PagamentoPage";
import AccessDeniedPage from "./Pages/AccessDeniedPage";

import { DarkModeContext } from "./Context/darkMode";
import { ExtratoContext, ExtratoProvider } from "./Context/extrato";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { mode } = useContext(DarkModeContext);

  return (
    <div className={mode ? "AppDark" : "AppLight"}>
      <ExtratoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute
                errorPage={<AccessDeniedPage />}
                targetPage={<></>}
              />
            }
          />
          <Route path=" " element={<CountryInfo />} />
          <Route path="/denied" element={<AccessDeniedPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/paises" element={<ReqPage />} />
          <Route path="/country/:name" element={<CountryInfo />} />
          <Route path="/new" element={<NewMusicPage />} />
          <Route path="/add" element={<PagamentoPage />} />
          <Route path="/extrato" element={<CarteiraPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ExtratoProvider>
    </div>
  );
}

export default App;
