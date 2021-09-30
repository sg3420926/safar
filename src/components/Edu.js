import React from 'react'

function Edu(props) {
    return (
        <div className='d2' onClick={props.set}>
          <video controls>
              <source src={props.vid}/>
          </video>
          <h1>{props.Head}</h1>
              <span>{props.Para}</span>
        </div>
    )
}

export default Edu
