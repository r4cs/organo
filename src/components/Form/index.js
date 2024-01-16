import "./Form.css"
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import {useState} from "react";

const Form = (props) => {

    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [image, setImage] = useState("")
    const [squad, setSquad] = useState("")

    const save = (event) => {
        event.preventDefault();
        props.registeredElement({
            name,
            job,
            image,
            squad
        })
        // limpando a lista
        setName("")
        setJob("")
        setImage("")
        setSquad("")
    }
    return(
        <section className="form-section">
            <form onSubmit={save}>
                <h2>Insert data to create the collaborator's card</h2>

                <TextField
                    mandatory={true}
                    label="Name"
                    placeholder={"Insert your name"}
                    val={name}
                    save={val => setName(val)}
                />

                <TextField
                    mandatory={true}
                    label="Job"
                    placeholder={"Insert your job"}
                    val={job}
                    save={val => setJob(val)}
                />

                <TextField
                    label="Image"
                    placeholder={"Insert your image url"}
                    val={image}
                    save={val => setImage(val)}
                />

                <DropdownList
                    label={"Team"}
                    items={props.squadName}
                    val={squad}
                    save={val => setSquad(val)}
                />


                {/*<Button text="Clique aqui"/>*/}
                <Button>
                    Clique aqui !
                </Button>
            </form>
        </section>
    )
}

export default Form