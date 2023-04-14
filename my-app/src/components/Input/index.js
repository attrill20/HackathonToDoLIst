import React from 'react';

function Input(props) {
    // console.log(props);
    
    return(
//do the mapping here
        <input type = "text" onChange={props.onChange}></input>
        

    );

}


export default Input;