import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Financeiro } from "../pages/Financeiro";
import { Home } from "../pages/Inicio";
import { Login } from "../pages/Login";
import { RecSenha } from "../pages/RecSenha";
import { Register } from "../pages/Register";
import { Suporte } from "../pages/Suporte";
import { Comercial } from "../pages/Comercial";


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recsenha" element={<RecSenha />} />
                <Route path="/home" element={<Home />} />
                <Route path="/suporte" element={<Suporte />}/>
                <Route path="/financeiro" element={<Financeiro />}/>
                <Route path="/comercial" element={<Comercial />}/>
            </Routes>
        </Router>
    )
}