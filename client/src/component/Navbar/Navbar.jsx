import React from 'react';
import logo from '../.././image/Screenshot_1.png';
import empleo from '../.././image/cv.png';
import cv from '../.././image/cv2.png'; 
import ad from '../.././image/Administración.png';
import s from './Navbar.module.css';
import { HiSearch } from 'react-icons/hi';

function Navbar() {
  return (
    <div>
      <nav className={s.nav}>
        <section className={s.container__logo}>
          <img className={s.logo} src={logo} alt='' />
          <h3>Gente PreValente</h3>
        </section>
        <label className={s.bucardor}>
          <HiSearch className={s.lupa} />
          <input className={s.search} type='search' placeholder='Buscar...' />
        </label>
        <ul>
          <li className={s.ad}>
            <img src={ad} alt='' /> Administración
          </li>
          <li className={s.empleo}>
            <img src={empleo} alt='' />
            <select>
              <option value='Empleo'>Empleo</option>
            </select>
          </li>
          <li className={s.cv}>
            <img src={cv} alt='' />
            <select>
              <option value='Mi CV'>Mi CV</option>
            </select>
          </li>
          <li className={s.container__perfil}>
            <section className={s.perfil} ></section>
            <select>
              <option value='Daniel'>Daniel</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
