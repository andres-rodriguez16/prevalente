/* eslint-disable no-restricted-globals */
/* eslint-disable no-new-wrappers */
import React from 'react';
import s from './CardEmpresa.module.css';
import pdf from '../../image/buttonPdf.png';
import aprobar from '../../image/aceptar.png';
import r from '../../image/rechazar.png';
import { aprobacionDeEmpresa, RechazoDeEmpresa } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
function CardEmpresa({
  identificacion,
  nit,
  nombre,
  empleados,
  razonSocial,
  logo,
  id,
  aprobada,
  rechazada,
}) {
  const Dispatch = useDispatch();
  const aceptar = () => {
    const booleano = new Boolean(true);
    Dispatch(aprobacionDeEmpresa(id, booleano));
    alert("empresa aprobada exitosamente")
    location.reload();
  };
  const rechazar = () => {
    const booleano = new Boolean(true);
    Dispatch(RechazoDeEmpresa(id, booleano));
    alert("empresa Rechazada exitosamente")
    location.reload();
  };
  const aprobacion = 'Aprobada';
  const rechazo = 'rechazada';

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
            {aprobada || rechazada ? (
              rechazada ? (
                <p className={s.respuesta__rechazo}>empresa {rechazo}</p>
              ) : (
                <p className={s.respuesta__aprobacion}>empresa {aprobacion}</p>
              )
            ) : (
              <>
                <button onClick={() => aceptar()}>
                  <img src={aprobar} alt='' /> Aprobar Empresa
                </button>
                <button onClick={() => rechazar()}>
                  <img src={r} alt='' /> Rechazar Empresa
                </button>
              </>
            )}
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
