import { Link } from "react-router-dom";
import { useState } from "react";
import jpIMG from '../../assets/sics.png'
import { LayoutComponents } from "../../componentes/LayoutComponentes";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title-img">
                    <img src={jpIMG} alt="SICS"/>
                        <h4 className="login-form-title">SICS</h4>
                </span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="E-mail"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" ><Link className="login-form-btn" to="/home">Login</Link></button>
                </div>

                <div className="text-center">
                    <span className="txt1">Primeiro acesso?</span>
                    <Link className="txt2" to="/register">
                        Clique aqui
                    </Link>
                    <span className="txt1">Esqueceu a senha?</span>
                    <Link className="txt2" to="/RecSenha">
                        Clique aqui
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}