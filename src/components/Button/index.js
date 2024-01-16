import "./Button.css";

const Button = (props) => {
    return (
        <button className="btn">
            {/*{props.text}*/}
            {props.children}
        </button>
    )
}

export default Button;