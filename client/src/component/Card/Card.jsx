import React from 'react';
import s from './Card.module.css';
function Card() {
  return (
    <main className={s.container}>
      <div className={s.orden}>
        <div className={s.card1}></div>
        <div className={s.card}></div>
      </div>
      <div className={s.orden}>
        <div className={s.card1}></div>
        <div className={s.card}></div>
      </div>
    </main>
  );
}

export default Card;
