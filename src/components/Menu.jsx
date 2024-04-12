import Logo from '../assets/shared/logo.svg'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import '../components/style/menu.css'
export default function Menu(){
    return (
        <nav>
            
            <ul className='menu'>
                <li><img src={Logo} alt="website logo" /></li>
                <ol className="hamburger">
                <li>HOME</li>
                <li>DESTINATION</li>
                <li>CREW</li>
                <li>TECHNOLOGY</li>
                </ol>
                <button className="ham-logo"><img src={Hamburger} alt="" /></button>
            </ul>
        </nav>
    )
}