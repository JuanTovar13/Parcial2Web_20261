import "./Banner.css"

//Component with Props
export const Banner = ({subtitle, title, button, cancelButton}) => {
    //JS
    return (
        //HTML
        <div className="banner">
            <p>{subtitle}</p>
            <h1>{title}</h1>
            <button>{button}</button>
            {/* Esto es para renderizar el boton si el padre le envio el cancelButton */}
            {/* {cancelButton && <button>{cancelButton}</button>}  */}
            {/* Esto es otra forma para renderizar el boton si el padre le envio el cancelButton */}
            {cancelButton ? <button>{cancelButton}</button> : null}
        </div>
    )
}

