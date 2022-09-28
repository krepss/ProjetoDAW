import "bootswatch/dist/lumen/bootstrap.min.css";



export const Alerta = (props) => {
    return (
        <div class="alert alert-dismissible alert-success">
            <strong>
            {props.children}
            </strong>
        </div>
    )
}