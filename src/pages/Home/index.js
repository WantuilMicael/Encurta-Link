import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'

export default function Home(){
  const [link, setLink] = useState('')

  function handleShortlink(){
    alert("MEU LINK" + link)
  }

    return(
      <div className="container-home">
        
        <div className="logo">
          <img src="/logo.png" alt="Logo Incurta Link" />
          <h1>Encurtador de Link</h1>
          <span>Cole seu link para encurtar</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
            <input
              placeholder="Cole seu link aqui..."
              value={link}
              onChange={ (e) => setLink(e.target.value) }
            />
          </div>

          <button onClick={handleShortlink}>Encurtar Link</button>
        </div>

        <Menu/>

      </div>
    )
  }