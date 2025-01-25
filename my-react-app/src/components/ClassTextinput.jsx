import React from "react";

class ClassTextinput extends React.Component {

    
    render(){
        return(
            <div>
                <h1>{input}</h1>
                <input 
                    type="text" 
                    value={input}
                    onChange={event => change(event.target.value)}
                >
                </input>
            </div>
        )
    }


}