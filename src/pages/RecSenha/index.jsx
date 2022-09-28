import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../componentes/LayoutComponentes"
import jpIMG  from "../../assets/sics.png";

export const RecSenha = () => {
    const [email, setEmail] = useState("");
    return(
        <LayoutComponents>
            <form className="login-form-rec">
                <span className="login-form-title">
                    <img src={jpIMG} alt="SICS" />
                </span>
                <span className="login-form-title-rec">Recuperação de Senha</span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="E-mail"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" >Recuperar</button>
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