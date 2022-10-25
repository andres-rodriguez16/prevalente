import React from 'react';
import s from './CardEmpresa.module.css';
import pdf from '../../image/buttonPdf.png';
import aprobar from '../../image/aceptar.png';
import rechazar from '../../image/rechazar.png';

function CardEmpresa({
  identificacion,
  nit,
  nombre,
  empleados,
  razonSocial,
  logo,
}) {
  return (
    <main>
      <section className={s.ruta}>
      <h3 className={s.one}>Administración </h3>
      <h3>/ Aprobación de Empresas</h3>
      </section>
      <div className={s.container}>
        <div className={s.nav}>
          <figure>
            <img src={logo} alt='' />
          </figure>
          <div className={s.button__action}>
            <button>
              <img src={aprobar} alt='' /> Aprobar Empresa
            </button>
            <button>
              <img src={rechazar} alt='' /> Rechazar Empresa
            </button>
          </div>
        </div>

        <div className={s.column__one}>
          <section className={s.section}>
            <p className={s.title}>Nombre de la empresa</p>
            <p className={s.name}>{nombre}</p>
            <hr />
          </section>
          <section>
            <p className={s.title}>Razón Social</p>
            <p className={s.name}>{razonSocial}</p>
            <hr />
          </section>
        </div>
        <div className={s.column__two}>
          <section className={s.section}>
            <p className={s.title}>Tipo de identificación</p>
            <p className={s.name}>{nit}</p>
            <hr />
          </section>
          <section>
            <p className={s.title}>Identificación</p>
            <p className={s.name}>{identificacion}</p>
            <hr />
          </section>
        </div>
        <div className={s.ultimo}>
          <section>
            <p className={s.title}># de empleados</p>
            <p className={s.name}>{empleados}</p>
            <hr />
          </section>
          <section>
            <button>
              <img src={pdf} alt='' /> Ver archivos adjuntos
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CardEmpresa;
