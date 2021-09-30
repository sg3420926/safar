import React from 'react'

function Block(props) {
    const sa={backgroundImage:`url(${props.photo})`}
    return ( 
       
        <div className='d1' style={sa}> 
        {props.field}
        </div>
    )
}

export default Block
