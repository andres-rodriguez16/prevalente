import React from 'react';
import s from './Card.module.css';
import e from './../.././image/empresa.png';
import i from './../.././image/indicadores.png';
import p from '../.././image/persona.png';
import confi from '../.././image/confi.png';
import reloj from '../.././image/reloj.png';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <main className={s.container}>
      <Link to='/empresas'>
        <div className={s.card1}>
          <section className={s.icon}>
            <img src={e} alt='' />
          </section>
          <h3>
            Solicitudes de creación <br />
            de empresas
          </h3>
          <footer>
            <img src={reloj} alt='' />
            <p>
              2 solicitudes sin <br /> tratar
            </p>
          </footer>
        </div>
      </Link>
      <div className={s.card}>
        <section className={s.icon1}>
          <img src={i} alt='' />
        </section>
        <h3>Indicadores</h3>
        <footer className={s.footer__1}>
          <img src={reloj} alt='' />
          <p>
            Visitado por última vez: <br /> 31/01/2020
          </p>
        </footer>
      </div>
      <div className={s.card}>
        <section className={s.icon2}>
          <img src={p} alt='' />
        </section>
        <h3>
          Inscripción de empleados <br /> en empresas
        </h3>
        <footer>
          <img src={reloj} alt='' />
          <p>
            3 usuarios sin empresa <br /> registrada
          </p>
        </footer>
      </div>
      <div className={s.card}>
        <section className={s.icon3}>
          <img src={confi} alt='' />
        </section>
        <h3>Gestión de usuarios</h3>
        <footer className={s.footer__2}>
          <img src={reloj} alt='' />
          <p>
            532 usuarios activos en la <br /> plataforma
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Card;
