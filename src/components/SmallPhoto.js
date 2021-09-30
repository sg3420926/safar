import React,{useState} from 'react'
import photo from '../images/i1.jpg'

function SmallPhoto() {
    
   const [img,setImg]=useState(photo)
   const Im=(event)=>{
    setImg(URL.createObjectURL(event.target.files[0]))
}
    return (
        <>
        <div className='small' title='Change photo' >
            <img  src={img}  width ='100%' height='100%' alt='ullu'/>
            
        </div>
        <input className='custom-file-input' type='file' id='Im' onChange={Im} />
        </>
    )
}

export default SmallPhoto
