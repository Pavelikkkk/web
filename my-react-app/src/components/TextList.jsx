import React from "react";
import Text from "./Text";

const TextList = ({posts, title}) =>{

    console.log(title);


    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post) =>
                <Text post={post} key={post.id}/>
            )}
        </div>
    )
}

export default TextList;