 /* eslint-disable-next-line */
 
import React from 'react';
import s from './Modal.module.css';
import { FaFilePdf } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../Redux/actions';


function Modal() {
  const onButtonClick = () => {
    fetch('pdfejemplo.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'pdfejemplo.pdf';
            alink.click();
        })
    })
}

const dispatch = useDispatch()
const openModal = useSelector(state => state.modal)
const handleSutmit = () => {
  dispatch(closeModal())
}

if (openModal) {
  return (
    <div className={s.modal}>
    <button className={s.close} onClick={() => handleSutmit()}>X</button>
    <h3>Documentos cargados</h3>
    <section className={s.container}>
      <div className={s.one___rut}>
        <p>RUT PrevlalentWare</p>
        <button onClick={onButtonClick}>
          <FaFilePdf className={s.icono__one} />
        </button>
      </div>
      <div className={s.one___rut}>
        <p>Logo PrevlalentWare</p>
        <button onClick={onButtonClick}>
          <FaFilePdf className={s.icono__two} />
        </button>
      </div>
      <div className={s.one}>
        <p>
          Acta de constitución
          <br />
          PrevlalentWare
        </p>
        <button onClick={onButtonClick}>
          <FaFilePdf className={s.icono__three} />
        </button>
      </div>
      <div className={s.one}>
        <p>
          Cámara de Comercio
          <br />
          Prevalentware
        </p>
        <button onClick={onButtonClick}>
          <FaFilePdf className={s.icono__four} />
        </button>
      </div>
      <div className={s.one}>
        <p>
          Otro Documento
          <br /> Prevalentware
        </p>
        <button onClick={onButtonClick}>
          <FaFilePdf className={s.icono__five} />
        </button>
      </div>
    </section>
  </div>
  )

}
}

export default Modal;
