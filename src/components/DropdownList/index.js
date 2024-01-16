import "./DropdownList.css"

const DropdownList = (props) => {
    // console.log(props)
    return (
        <div className={"dropdown-list"}>
            <label>
                { props.label }
            </label>
            <select onChange={event => props.save(event.target.value)}>
                {/* forma enxuta */}
                <option value=""></option>
                { props.items.map(item => <option key={item}>{item}</option>) }

                { /* forma destrinchada  */ }
                { /* {props.item.map(item => { */ }
                { /*    return <option>{item}</option> */ }
                { /* })}*/ }

            </select>
        </div>
    )
}

export default DropdownList;