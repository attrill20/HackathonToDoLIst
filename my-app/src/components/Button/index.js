import React from 'react';


function Button(props) {
    // console.log(props);
    
    return(

        <button onClick ={() => {props.addToList(props.text)}}>Add to list</button>
        

    );

}


export default Button;