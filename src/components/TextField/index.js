
import "./TextField.css"


const TextField = (props) => {

    const newPlaceHolder = `${props.placeholder}...`

    const typed = (event) => {
        props.save(event.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            {/*<input placeholder={props.placeholder}/>*/}
            <input
                value={props.val}
                onChange={typed}
                required={props.mandatory}
                placeholder={newPlaceHolder}
            />
        </div>
    )
}

export default TextField