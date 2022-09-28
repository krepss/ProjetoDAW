import { Link } from "react-router-dom"
import { useState } from "react";
import { LayoutComponents } from "../../componentes/LayoutComponentes"
import jpIMG from '../../assets/sics.png'


export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title-img">
                    <img src={jpIMG} alt="SICS" />
                </span>
                <span className="login-form-title">Criar Conta</span>

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
                        className={name !== "" ? "has-val input" : "input"}
                        type="email"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
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
                    <button className="login-form-btn" >Criar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta?</span>
                    <Link className="txt2" to="/login">
                        Clique aqui
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    )
}