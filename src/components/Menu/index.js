import './menu.css';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://github.com/WantuilMicael" target="_blank" rel="noopener noreferrer">
                <BsGithub color="#fff" size={24}/>
            </a>

            <a className="social" href="https://www.instagram.com/wantuil.micael" target="_blank" rel="noopener noreferrer">
                <BsInstagram color="#fff" size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}