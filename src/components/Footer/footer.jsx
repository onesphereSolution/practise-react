
import {Link} from 'react-router-dom'
import './footer.css'



const Footer =()=>{
    return(

        <>
        <div id="container">

            <div>
                <Link style={{textDecoration: 'none', color: '#fff'}} to='/'>
                 <h1><b>Logo</b></h1>
                </Link>
                
            </div>

            <div>
               
                <h3>Related links</h3>
                <ul>
                 <Link to='/about'>
                    <h4>About Me</h4>
                 </Link>

                 <Link to='/contact'>
                    <h4>Contact</h4>
                 </Link>
                    
                    <h4>Services</h4>
                </ul>
            </div>

            <div>
                <h3>Contacts</h3>
                <ul>
                    <h4>okunrobo@gmail.com</h4>
                    <h4>+234-811-1111-111</h4>
                    <h4>Linkedin</h4>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Footer;