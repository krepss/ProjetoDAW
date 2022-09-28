import { Side } from "../../componentes/Sidebar/Navbar";
import React, { useState, useEffect } from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import './suporte.css';
import { FormularioSUP } from "./formSUP";
import * as FaIcons from "react-icons/fa";
import { Alerta } from '../../componentes/Alertas/alerta';
import { AlertaErro } from '../../componentes/Alertas/alertaErro';


export const Suporte = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    // const [id] = useState(props.match.prams.id);
    // const [nome, setNome] = useState('');
    // const [contato, setContato] = useState('');
    // const [tarefa, setTarefa] = useState('');

    // useEffect(() => {const editarTarefas = async () => {
    //     await fetch("http://localhost/projectweb/sup.php?id=" + id)
    //     .then((response) => response.json())
    //     .then((responseJson) =>{
    //         setNome(responseJson.tarefa.nome);
    //         setContato(responseJson.tarefa.contato);
    //         setTarefa(responseJson.tarefa.tarefa);
    //     });
    // }
    //     editarTarefas();
    // }, [id]);
    

    const getTarefas = async () => {
        fetch("http://localhost/projectweb/sup.php")
            .then((response) => response.json())
            .then((responseJson) =>
            (
                setData(responseJson.records)
            ));
    };

    useEffect(() => {
        getTarefas();
    }, []);


    const apagarTarefa = async (idTarefa) => {
        await fetch ("http://localhost/ProjectWEB/apagarSup.php?id=" + idTarefa)
        .then((response)=> response.json())
        .then((responseJson)=>{
            if(responseJson.erro){
                setStatus({
                    type: 'erro',
                    mensagem: responseJson.mensagem
                });
            }else{
                setStatus({
                    type: 'success',
                    mensagem: responseJson.mensagem
                });
                getTarefas();
            }
        }).catch(()=>{
            setStatus({
                type: 'erro',
                mensagem: "Erro: TAREFA NÃO APAGADA COM SUCESSO"
            })
        })
    };

    

    return (
        <Side>
            <FormularioSUP></FormularioSUP>

            {status.type === 'erro' ? <AlertaErro>{status.mensagem}</AlertaErro> : ""}
            {status.type === 'success' ? <Alerta>{status.mensagem}</Alerta> : ""}

            <div className="container-table">
                <div className="list-group">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-primary">
                                <td>ID</td>
                                <td>NOME</td>
                                <td>CONTATO</td>
                                <td>TAREFA</td>
                                <td>COMANDOS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(data).map(tarefa => (
                                <tr key={tarefa.id}>
                                    <td>{tarefa.id}</td>
                                    <td>{tarefa.nome}</td>
                                    <td>{tarefa.contato}</td>
                                    <td>{tarefa.tarefa}</td>
                                    <td>
                                        <button className="btn-feito" type="button" ><FaIcons.FaCheckSquare /></button>
                                        <button className="btn-editar" type="button" ><FaIcons.FaEdit /></button>
                                        <button
                                            className="btn-cancelar"
                                            type="button"
                                            onClick={ () => apagarTarefa(tarefa.id)} >
                                            <FaIcons.FaTimesCircle />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Side>

    )
}