import React from 'react';
import s from './Paginado.module.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Paginado({ previusPag, nextPag, actualPage, page }) {
  return (
    <div className={s.container}>
      {actualPage === 1 ? null : (
        <>
          <button  onClick={() => previusPag()}><FiChevronLeft className={s.icon}/></button>
        </>
      )}
      <p>Empresa {actualPage} de {page} pendiente por aprobación</p>
      {actualPage === 5 ? null : (
        <button onClick={() => nextPag()}><FiChevronRight className={s.icon} /></button>
      )}
    </div>
  );
}

export default Paginado;
