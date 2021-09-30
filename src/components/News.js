import React ,{useState,useEffect} from 'react'
import axios from 'axios'

function News() {
    const [posts,setPosts]=useState({})
    const [load,setLoad]=useState(true)
    const [count,setCount]=useState(0)
   useEffect(() => {
    var options = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b98c4c7c2770496ea9a20d8905bf93c3'
    
    axios.request(options).then(function (response) {
      setPosts(response.data)
      setLoad(false)
    }).catch(function (error) {
      console.error(error);
    });
    },[])
    if(load){
      return(<h1>Loading......</h1>)
    }
    const Next=()=>{
      if(count<19){
        setCount(count+1)
      }
      
    }
    const Prev=()=>{
      if(count>0){
        setCount(count-1)
      }
      
    }
    return (
        <>
        
        <button className='b3' onClick={Prev}>prev</button>
        <button className='b2' onClick={Next}>next</button>
      <div className='d12'>
      <img src={posts.articles[count].urlToImage}/>
      </div>   
      <h1 className='h2'>{posts.articles[count].title}</h1>   
      <div className='d13'>{posts.articles[count].description}</div>   
      <button className='b3' onClick={Prev}>prev</button>
        <button className='b2' onClick={Next}>next</button>
        </>
    )
}

export default News
