import React from 'react';

function Button(props) {
    console.log(props);
    
    return(

        <button onClick = {props.buttonClick}>Add to list</button>
        

    );

}


export default Button;