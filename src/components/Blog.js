import React ,{useState} from 'react'

function Blog() {
    const [topic ,setTopic]=useState('')
    const [art,setArt]=useState('')
    const save=(e)=>{
        setTopic('')
        setArt('')
    }
    const Change1=(e)=>{
         setTopic(e.target.value)
    }
    const Change2=(e)=>{
        setArt(e.target.value)
   }
    return (
        <>
        <div className='d8'>
           <h1> <u><b>Topics</b></u></h1>
        </div>
        <div className='d9'>
    
            <span>Enter Topic of Blog:</span><input type='text' value={topic} onChange={Change1}/>
            <h1>Express Your Thoughts </h1>
            <textarea value={art} onChange={Change2}/>
            <button type='submit' onClick={save}>Save</button>
        </div>
        </>
    )
}

export default Blog
