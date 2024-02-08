import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useState } from 'react';

export default function RegisteredItem({ item }: { item: ParticipantType }) {
  const [isPaid, setIsPaid] = useState(item.paid);
  const markAsPaid = () => {
    axios.patch(`https://api.bncbjj.site/participants/${item.id}`).then(() => setIsPaid(true));
    // axios.patch(`http://localhost:5000/participants/${item.id}`).then(() => setIsPaid(true));
  };

  return (
    <div className="registered">
      <div className="registered__name">{item.name}</div>
      <div>
        <div className="registered__item">
          <span>Дата рождения:</span>
          {item.birthdate.split('-').reverse().join('.')}
        </div>
        <div className="registered__item">
          <span>Город:</span>г. {item.city}
        </div>
        <div className="registered__item">
          <span>Команда:</span>
          {item.team}
        </div>
        <div className="registered__item">
          <span>Тренер:</span>
          {item.trainer}
        </div>
        <div className="registered__item">
          <span>Email:</span>
          {item.email}
        </div>
        <div className="registered__item">
          <span>Телефон:</span>
          {item.phone}
        </div>
        <div className="registered__item">
          {isPaid ? (
            <p className="paid">Оплачено</p>
          ) : (
            <>
              <span style={{ color: '#ed5454' }}>Ожидается оплата</span>
              <button className="registered__btn" onClick={markAsPaid}>
                Оплачено
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
