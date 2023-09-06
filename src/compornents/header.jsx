import { useState } from "react";
import { Link as Scroll } from 'react-scroll';
import {Link} from 'react-router-dom'

const Header = () => {
    const [active, setActive] = useState(false);
    
    const navChange = () => {
        setActive(!active)
    }
    return (
        <>
            <div class="title">
                <h1>
                    <Link to="/">齊藤大輔</Link>
                    <div class="sub_title">-Daisuke Saito-</div>
                </h1>
            </div>
            <nav class="pc-nav">
                <ul>
                    <li>
                        <Link to="/news">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/schedule">SCHEDULE</Link>
                    </li>
                    <li>
                        <Link to="/works">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/discography">DISCOGRAPHY</Link>
                    </li>
                    <li>
                        <Link to="/biography">BIOGRAPHY</Link>
                    </li>
                    <li>
                        <Link to="/equipment">EQUIPMENT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <nav className={'sp-nav ' + (active ? 'open' : '')}>
                <ul>
                    <li>
                        <Link to="/news" onClick={navChange}>NEWS</Link>
                    </li>
                    <li>
                        <Link to="/schedule" onClick={navChange}>SCHEDULE</Link>
                    </li>
                    <li>
                        <Link to="/works" onClick={navChange}>WORKS</Link>
                    </li>
                    <li>
                        <Link to="/discography" onClick={navChange}>DISCOGRAPHY</Link>
                    </li>
                    <li>
                        <Link to="/biography" onClick={navChange}>BIOGRAPHY</Link>
                    </li>
                    <li>
                        <Link to="/equipment" onClick={navChange}>EQUIPMENT</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={navChange}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div className={'hamburger ' + (active ? 'active' : '')} onClick={navChange}><span></span><span></span><span></span></div>
        </>
    )
}
export default Header;