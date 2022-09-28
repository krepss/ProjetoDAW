
import * as AiIcons from 'react-icons/ai';
import React, { useState } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "./suporte.css";
import { Alerta } from '../../componentes/Alertas/alerta';
import { AlertaErro } from '../../componentes/Alertas/alertaErro';
import { useEffect } from 'react';

export const FormularioSUP = (props) => {
  //esconder formulario-apresentar
  const [showForm, setForm] = useState(true);
  const apresenForm = () => setForm(!showForm);

  const [suporte, setSuporte] = useState({
    nome: '',
    contato: '',
    tarefa: ''
  });


  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

   



  const valorInput = e => setSuporte({ ...suporte, [e.target.name]: e.target.value });

  const cadastrarTarefa = async e => {
    //e.preventDefault();
    await fetch("http://localhost/ProjectWEB/cadTarefaSup.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ suporte })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.messagem
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.messagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
        });
      });
  }

 
  return (
    <div className="div-form-container">

      <form className={showForm ? 'nform' : 'nform-click'} onSubmit={cadastrarTarefa} >
        <div className="form-group">
          <label className="col-form-label mt-4">Nome:</label>
          <input type="text"
            name="nome"
            onChange={valorInput}
            className="form-control"
            placeholder="Digite o nome do cliente"
            id="inputDefault"
            required />
        </div>

        <div className="form-group">
          <label className="col-form-label mt-4" >Telefone:</label>
          <input type="tel"
            name="contato"
            pattter="[0-9]{2}-[0-9]{5}-[0-9]{4}"
            onChange={valorInput}
            className="form-control"
            placeholder="99 99999-9999"
            required />
        </div>

        <div className="form-group">
          <label className="form-label mt-4">Tarefa:</label>
          <textarea className="form-control"
            name="tarefa"
            onChange={valorInput}
            rows="3"
          >
          </textarea>
        </div>

        <div className="container-form-btn-cadastrar" >
          <button type="submit" className="btn btn-primary" >Cadastrar</button>
        </div>

      </form>
      {status.type === 'erro' ? <AlertaErro>{status.mensagem}</AlertaErro> : ""}
      {status.type === 'success' ? <Alerta>{status.mensagem}</Alerta> : ""}

      <div className={showForm ? 'container-form-btn' : 'container-form-btn-click'}  >
        <button type="button" className="btn btn-success" onClick={apresenForm}><AiIcons.AiFillPlusCircle /></button>
      </div>

    </div>
  )
}