import "bootswatch/dist/lumen/bootstrap.min.css";



export const AlertaErro = (props) => {
    return (

        <div class="alert alert-dismissible alert-danger">
            <strong>
                {props.children}
            </strong>
        </div>
    )
}

