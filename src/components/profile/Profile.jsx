import Davidpic from '../../images/dave.jpeg';
import './profile.css'




const user={
    name: ' David',
    imageUrl: Davidpic,
    imageSize: 90,
    
}
const Profile = ()=>{

    return(
        <>
        <h1>Name:{user.name}</h1>
        <img className='avatar' src={user.imageUrl} alt={'Photo of ' + user.name} style={{height:user.imageSize, width:user.imageSize }}/>     
        </>
    )
}

export default Profile;