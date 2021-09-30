import React,{useState,useEffect} from 'react'
import './FrontPhoto.css'
import SmallPhoto from './SmallPhoto'
import f1 from '../images/f1.jpeg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpeg'
import f5 from '../images/f5.JPG'
import f6 from '../images/f6.jpg'
import f7 from '../images/f7.jpeg'
import f8 from '../images/f8.jpg'
import f9 from '../images/f9.jpeg'

function   FrontPhoto() {
    const list=[f1,f2,f3,f4,f5,f6,f7,f8,f9];
   var i=0;
    const [im,setIm]=useState(list[0])
    const Back = {
        backgroundImage:`url(${im})`
    }
    useEffect( ()=>{
     setInterval(change,5000)
    },[])
    const change=()=>{
        setIm(list[i])
        if(i===8){
           i=0 
        }
        else{
            i=i+1
        }
        
    }
    return (
        <div className='Photos' style={Back}>
            {console.log('r1')}
            <SmallPhoto/>
        </div>
    )
}

export default  React.memo(FrontPhoto)
