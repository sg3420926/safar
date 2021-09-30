import React from 'react'
import FrontPhoto from './FrontPhoto';
import Block from './Block';
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';
import {Link} from 'react-router-dom'
function FrontPage() {

    return (
        
        <div>
             <FrontPhoto/>
             <span className='h1'>Saurabh Gupta</span>
      <div>

      <Link to ='/ram'><Block color='springgreen' field='My Study' photo={p3}/></Link>
      <Link to ='/mira'><Block color='sandybrown'   field='Work'  photo={p1}/></Link>
      </div>
      <div>
      <Link to ='/kanha'><Block color='pink' field='Social Media'  photo={p2}/></Link>
      </div>
      <div>
      <Link to ='/shiv'><Block color='palegreen'  field='My Blog'  photo={p5}/></Link>
      <Link to ='/'><Block color='mediumturquoise' field='Empty'  photo={p4}/></Link>
      </div>
        </div>
    )
}

export default FrontPage
