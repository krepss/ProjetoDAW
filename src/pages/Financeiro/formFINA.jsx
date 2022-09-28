
import * as AiIcons from 'react-icons/ai';
import React, { useState } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "./financeiro.css";

export const FormularioFINA = () => {
    //esconder formulario-apresentar
    const [showForm, setForm] = useState(true);
    const apresenForm = () => setForm(!showForm);

    const [financeiro, setTarefaFina] = useState({
        nome: '',
        contato: '',
        tarefa: ''
    })

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const valorInput = e => setTarefaFina({ ...financeiro, [e.target.name]: e.target.value });

    //enviando os dados
    const cadTarafaFina = async e => {
        //e.preventDefault();
        await fetch("http://localhost/ProjectWEB/cadTarefaFina.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({financeiro})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.erro) {
                setStatus({
                    type: 'erro',
                    mensagem: 'Tarefa não cadastrada'
                });
            } else {
                setStatus({
                    type: 'success',
                    mensagem: 'Tarefa Cadastrada com sucesso'
                });
             }
         }).catch(() => {
            setStatus({
                type: 'erro',
                mensagem: 'Tarefa não cadastrada'
            });
        });
    }



    return (
        <div className="div-form-container">

            {/* {status.type === 'erro' ? <p>{status.mensagem}</p> : ""}
            {status.type === 'success' ? <p>{status.mensagem}</p> : ""} */}

<form className={showForm ? 'nform' : 'nform-click'} onSubmit={cadTarafaFina}>
                <div className="form-group">
                    <label className="col-form-label mt-4" for="inputDefault">Nome:</label>
                    <input type="text"
                        name="nome"
                        onChange={valorInput}
                        className="form-control"
                        placeholder="Digite o nome do cliente"
                        id="inputDefault"
                        required />
                </div>

                <div className="form-group">
                    <label className="col-form-label mt-4" for="inputDefault">Telefone:</label>
                    <input type="tel"
                        name="contato"
                        pattter="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                        onChange={valorInput}
                        className="form-control"
                        placeholder="99 99999-9999"
                        id="inputDefault"
                        required />
                </div>

                <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Tarefa:</label>
                    <textarea className="form-control"
                        name="tarefa"
                        onChange={valorInput}
                        id="exampleTextarea"
                        rows="3"
                        required>
                    </textarea>
                </div>

                <div className="container-form-btn-cadastrar" >
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>

            </form>
            <div className={showForm ? 'container-form-btn' : 'container-form-btn-click'}  >
                <button type="button" className="btn btn-success" onClick={apresenForm}><AiIcons.AiFillPlusCircle /></button>
            </div>

        </div>
    )
}