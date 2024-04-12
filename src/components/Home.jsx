import Menu from "./Menu";
import '../components/style/home.css'

export default function Home(){
    return (
        <div className="home">
            <Menu/>
            <div className="main">
            <p className="first">SO, YOU WANT TO TRAVEL TO <br></br><h1>SPACE</h1></p>
            <p className="second">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            <button id="explore">
                EXPLORE
            </button>
            </div>
        </div>
    )
}