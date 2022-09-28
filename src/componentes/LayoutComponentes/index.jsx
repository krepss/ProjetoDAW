import './styles.css';

export const LayoutComponents = (props) => {
    return(
        <div className="ncontainer">
            <div className="ncontainer-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    )
}