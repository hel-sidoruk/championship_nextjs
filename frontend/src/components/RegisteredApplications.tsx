import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RegisteredApplications() {
  const [data, setData] = useState<{ [key: string]: ParticipantType[] }>({});

  useEffect(() => {
    axios.get('http://localhost:5000/participants').then(({ data }) => {
      // axios.get('http://api.bncbjj.site/participants').then(({ data }) => {
      setData(data);
    });
  }, []);
  return (
    <>
      {Object.keys(data).map((title) =>
        data[title].length ? (
          <div className="apps-container" key={title}>
            <h3>{title}</h3>
            <div className="apps">
              {data[title].map((item) => (
                <div key={item.id} className="registered">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <React.Fragment key={title}></React.Fragment>
        )
      )}
    </>
  );
}
