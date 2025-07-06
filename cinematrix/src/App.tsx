import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from "./components";
import { MainPage } from './pages';
import "./App.sass";
import {ROUTES} from "./consts/routes";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={ROUTES.HOME.url} element={<MainPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
