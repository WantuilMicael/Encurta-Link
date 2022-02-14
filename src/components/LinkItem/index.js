
import "./link-item.css";
import { FiX, FiCopy } from 'react-icons/fi';
import Swal from 'sweetalert2';

export default function LinkItem({ closeModal, content }){

    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
        Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
          }).fire({
            icon: 'success',
            title: 'Link Copiado com Sucesso!'
          })

    }

    return(
        <div className="modal-container">

            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiCopy size={20} color="#fff" />
            </button>

        </div>
    )
}