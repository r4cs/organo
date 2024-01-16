import "./Element.css"

const Element = ( { img, name, job, bckgColor } ) => {

    return (

        <div className="element">
            <div
                className="element-header"
                style={ { backgroundColor: bckgColor } }
            >
                <img src={ img } alt={ name } />
            </div>
            <div className="element-footer">
                <h4>{ name }</h4>
                <h5>{ job }</h5>
            </div>
        </div>

    )
}

export default Element;