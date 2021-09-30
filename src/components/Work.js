import React from 'react'
import cal from '../images/cal.png'
import news from '../images/news.jpg'
import {Link} from 'react-router-dom'
import rand from '../images/rand.jpg'

function  Work() {
    return (<>
      <a href="digitalcalculator.html"><div className='d5' style={{backgroundColor:'crimson'}}>
            <img src={cal} alt='ullu'/>
            <span>Calculator</span>
        </div>
        </a>
        <Link to='/saurabh'>
        <div className='d6' style={{backgroundColor:'chartreuse'}}>
        <img src={news} alt='ullu'/>
            <span>News</span>
        </div>
        </Link>
        <Link to='/mira/shyam'>
        <div className='d6' style={{backgroundColor:'darkorange'}}>
        <img src={rand} alt='ullu'/>
            <span>Random</span>
        </div>
        </Link>
        </>
    )
}

export default  Work
