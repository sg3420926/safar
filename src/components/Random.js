import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {FaBraille,FaCat,FaDog,FaGrinSquint,FaArrowAltCircleRight} from 'react-icons/fa'

function Random(){
  const [thought,setThought]=useState({})
  const [cat,setCat]=useState([{url:''}])
  const [dog,setDog]=useState({})
  const [joke,setJoke]=useState({})
  const [load,setLoad]=useState(true)
  const [count,setCount]=useState(1)
  var de;
  var ch;
  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice').then(res=>{setThought(res.data)
  setLoad(false)}).catch(err=>console.log(err))
  setCount(1)
  },[load])
  const Th=()=>{
    axios.get('https://api.adviceslip.com/advice').then(res=>{setThought(res.data)
    setLoad(false)}).catch(err=>console.log(err))
    setCount(1)
  }
  const ca=()=>{
    axios.get('https://api.thecatapi.com/v1/images/search').then((res) =>{setCat(res.data)
  setLoad(false)}).catch(err => console.log(err))
  setCount(2)
 };
 const dg =()=>{
   axios.get('https://dog.ceo/api/breeds/image/random').then((res) =>{ setDog(res.data)
   setLoad(false)}).catch(err => console.log(err))
   setCount(3)
 }
 const jo=()=>{
  axios.get('https://geek-jokes.sameerkumar.website/api?format=json').then((res) =>{ setJoke(res.data)
  setLoad(false)}).catch(err => console.log(err))
  setCount(4)

 }
 if(count===1){
 de=<h1>{load?'Loading...':thought.slip.advice}</h1>
 ch=Th
 }
 else if(count===2){
   de=<img src={cat[0].url}/>
   ch=ca
 }
 else if(count===3){
   de=<img src={dog.message}/>
   ch=dg
 }
 else{
   de=<h1>{joke.joke}</h1>
   ch=jo
 }
  return (
    <>
      <div className='d10'>
        <button onClick={Th} ><FaBraille/>Good Words</button>
        <button onClick={ca}><FaCat/>Cutie Cats</button>
        <button onClick={dg}><FaDog/>Loyal Dogs</button>
        <button onClick={jo}><FaGrinSquint/>Jokes</button>
      </div>
      <div className='d11'>
          {de}   
      </div>
      <span className='b1' onClick={ch}><FaArrowAltCircleRight/>Next</span>
    </>
  )
}

export default Random