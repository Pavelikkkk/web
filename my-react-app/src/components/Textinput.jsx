import React, { useState } from "react";

const Textinput = (props) => {

    console.log(props);

    const [input,change] = useState('');

    return(
        <div>
            <h1 className="content">{input}</h1>
            <input 
                type="text" 
                onChange={event => change(event.target.value)}
            >
            </input>
        </div>
    )
}

export default Textinput;