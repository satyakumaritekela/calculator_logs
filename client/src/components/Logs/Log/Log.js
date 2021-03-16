import React from 'react';
import "./Log.css";

const Log = ({ expression, userId }) => {
    return (<>
        <div className="Card">
            <p>UserId: {userId}</p>
            <p>{expression}</p>
        </div>
    </>);
}
 
export default Log;