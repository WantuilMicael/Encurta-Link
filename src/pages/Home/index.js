import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Swal from 'sweetalert2';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home(){
  const [link, setLink] = useState('')
  const [data, setData] = useState({});
  const [showmModal, setShowmodal] = useState(false);

  async function handleShortlink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowmodal(true);

      saveLink('@encurtaLink', response.data)

      setLink('');

    }catch{
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
      }).fire({
        icon: 'error',
        title: 'Ops, parece que algo deu errado!'
      })
      setLink('');
    }
    
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

        {showmModal && (
          <LinkItem
            closeModal={ (e) => setShowmodal(false) }
            content={data}
          />
        )}

      </div>
    )
  }