import { useState } from "react"
import Link from "next/link";
import one from "../philsmusicdepot/guy-reading-newspaper-image-happy-young-african-man-looking-camera-33656799.jpeg";
import two from "../philsmusicdepot/worstguitar.jpeg";
import three from "../philsmusicdepot/guitar221.jpeg";


const Home = () => {

    const [currentback,setCurrentBack] = useState(1);

    const slides = [
        {'url': one , 'title' : '1'},
        {'url': two, 'title' : '2'},
        {'url': three, 'title' : '3'},
      ]

    return(
    <div className="pageContainer">
    <h1>Welcome to the homepage boys</h1>
    <div className="panelContainer">
    <div 
        style = {{
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[0].url})`,
        }}
        
        onMouseEnter={() => console.log(slides[0].url)}>
        Current News!
        
    </div>
    <div onMouseEnter={() => setCurrentBack(two)}>
             Newest Products!
    </div>
    <div onMouseEnter={() => setCurrentBack(three)}>
             Staff Picks
    </div>
    </div>
    </div>
    )
}

export default Home;