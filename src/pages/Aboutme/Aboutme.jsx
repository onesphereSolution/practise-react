import Davidpic from '../../images/dave.jpeg';
import './Aboutme.css'
import'../../components/Footer/footer'
import Footer from '../../components/Footer/footer';


const user={
    name: ' David',
    imageUrl: Davidpic,
    imageSize: 150,
    
}


const Aboutme = () =>{

    return(
        <>

          <h2>This page is about Me</h2>
          <img className='avatar' src={user.imageUrl} alt={'Photo of ' + user.name} style={{height:user.imageSize, width:user.imageSize }}/> 
          <p><h3>My name is {user.name} and I am front-end developer.</h3></p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
          <Footer />
        </>
      
    )
}

export default Aboutme;