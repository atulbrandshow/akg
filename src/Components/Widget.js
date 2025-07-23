import React from 'react'

function Widget({ type, stream, limit }) {
    console.log(type, stream, limit);
    
    return (
        <div>Widget</div>
    )
}

export default Widget