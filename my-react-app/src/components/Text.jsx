import React from "react";

const Text = (props) =>{

    return(
        <div>
            <p>{props.post.description}</p> 
            <button>Delete</button>
        </div>
    )
}



export default Text;