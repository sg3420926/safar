import React, { useState } from 'react'
import Edu from './Edu'
import V1 from '../vid/navodaya.mp4'
import V2 from '../vid/kashmir.mp4'
import V3 from '../vid/kashmir.mp4'
import School from './School'
import College from './College'
import Coading from './Coading'
function Study() {
    const [state1, setState1] = useState(true)
    const [state2, setState2] = useState(true)
    const [state3, setState3] = useState(true)
    let sch;
    let clg;
    let pgm;
    if (state1) {
        sch = <Edu vid={V1} Head='Schooling' Para='I never can forget my school days' set={()=>setState1(false)}/>;
    }
    else {
        sch = <School  set={()=>setState1(true)}/>
    }
    if (state2) {
        clg = <Edu vid={V2} Head='College' Para="Visit my Collage it's paradise "  set={()=>setState2(false)}/>;
    }
    else {
        clg = <College  set={()=>setState2(true)}/>
    }


    if (state3) {

        pgm = <Edu vid={V3} Head='Programming' Para='Programming World devlopes your thinking' set={()=>setState3(false)} />
    }
    else {
        pgm = <Coading set={()=>setState3(true)}/>
    }
    
    return(
        <>
        <b>Click to see details/and back</b>
        {sch}
        {clg}
        {pgm}
        </>
    )
}

export default Study
