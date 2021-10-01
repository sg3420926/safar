import React from 'react'
import {FaYoutube,FaTelegram,FaInstagram,FaGithub,FaLinkedin} from'react-icons/fa'
function Social() {
    return (
        <div className='d7'>
         <a href='https://www.instagram.com/saurabhkanhaiagupta/'>   <div className='icon instagram'>
                <div>Instagram</div>
                <span><FaInstagram/></span>
            </div></a>
            <a href='https://github.com/sg3420926'>
            <div className='icon github'>
            <div>Github</div>
            <span><FaGithub/></span>
            </div></a>
            <a href='https://web.telegram.org/z/'>
            <div className='icon teligram'>
            <div>Teligram</div>
            <span><FaTelegram/></span>
            </div></a>
            <a href='https://www.youtube.com/channel/UC1-MnQGCL6qKt8IGj_7iNFw'>
            <div className='icon youtube'>
            <div>Youtube</div>
            <span><FaYoutube/></span>
            </div></a>
            <a href='https://www.linkedin.com/in/saurabh-gupta-99b8911b3/'>
            <div className='icon linkedin'>
            <div>Linkedin</div>
            <span><FaLinkedin/></span>
            </div></a>
        </div>
    )
}

export default Social
