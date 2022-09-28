
import * as FaIcons from "react-icons/fa";

import "./buttons.css";

export const Buttons = () =>{
    return (
        <div className="buttons-crud">
            
            <button className="btn-feito" type="button" ><FaIcons.FaCheckSquare/></button>
            <button className="btn-editar" type="button" ><FaIcons.FaEdit/></button>
            <button className="btn-cancelar" type="button" ><FaIcons.FaTimesCircle/></button>
            
        </div>
    )
}