import Button from "./button/Button";
import Profile from "./profile/Profile";
import Footer from "./Footer/footer";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="App">
        <h2>Hello world</h2> 
        <Button />
        <Profile />
        <h5>To find out more about me, <Link to='/about'>Click Me!</Link></h5>
        <Footer />
      </div>
    )
}

export default Home;