import './menu.css';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://github.com/WantuilMicael">
                <BsGithub color="#fff" size={24}/>
            </a>

            <a className="social" href="https://www.instagram.com/wantuil.micael">
                <BsInstagram color="#fff" size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}