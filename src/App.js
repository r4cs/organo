import './App.css';
import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Squad from "./components/Squad";
import Footer from "./components/Footer";

function App() {

    const squads = [
        {
            name: "Programação",
            color1: "#D9F7E9",
            color2: "#57C278"
        },
        {
            name: "Front-End",
            color1: "#E8F8FF",
            color2: "#82CFFA"
        },
        {
            name: "Data Science",
            color1: "#F0F8E2",
            color2: "#A6D157"
        },
        {
            name: "DevOps",
            color1: "#FDE7E8",
            color2: "#E06B69"
        },
        {
            name: "Ux e Design",
            color1: "#FAE9F5",
            color2: "#DB6EBF"
        },
        {
            name: "Mobile",
            color1: "#FFF5D9",
            color2: "#FFBA05"
        },
        {
            name: "Inovação e Gestão",
            color1: "#FFEEDF",
            color2: "#FF8A29"
        }
    ]

    const [elements, setElements] = useState( [] )

    const addRegisteredElement = (element) => {
        // debugger
        setElements( [...elements, element]  )
    }


    return (
      <div className="App">
            <Banner />
                <Form
                    squadName={ squads.map( s => s.name ) }
                    registeredElement={element => addRegisteredElement(element)}
                />

                { squads.map( s =>
                    <Squad
                        key={s.name}
                        squadName={ s.name }
                        color1={s.color1}
                        color2={s.color2}
                        elements={ elements.filter(e => e.squad === s.name) }
                    />
                )}
          <Footer />
      </div>
    );
}

export default App;
