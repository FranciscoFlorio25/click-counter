import React from "react";
import '../StyleSheet/Count.css';

function Count({clicksCounter}){
    return (
        <div className= 'counter'>
            {clicksCounter}
        </div>
    );


}

export default Count;