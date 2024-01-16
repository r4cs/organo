
import "./Squad.css"
import Element from "../Element";

const Squad = (props) => {
    const css1 = {backgroundColor: props.color1}
    const css2 = {borderColor: props.color2}

    return (
        (props.elements.length > 0) ?
            <section
                className="squad"
                style={css1}
            >
                <h3 style={css2}>
                    {props.squadName}
                </h3>

                <div className="elements">
                    {props.elements.map(e =>
                        <Element
                            key={e.name.concat("|").concat(e.job)}
                            img={e.image}
                            name={e.name}
                            job={e.job}
                            squad={e.squad}
                            bckgColor={props.color2}
                        />
                    )
                    }
                </div>

            </section>
        : ""

    )
}

export default Squad;