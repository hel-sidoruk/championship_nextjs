import Section from '@/components/UI/Section';
import { ParticipantType } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Registered() {
  const [data, setData] = useState<{ [key: string]: ParticipantType[] }>({});

  useEffect(() => {
    axios.get('http://api.bncbjj.site/participants').then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <Section>
      <div className="admin__nav">
        <Link href="/admin" className="subtitle application__subtitle">
          Новые заявки
        </Link>
        <Link href="/admin/registered" className="subtitle application__subtitle active">
          Зарегистрированные
        </Link>
      </div>
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
          <></>
        )
      )}
    </Section>
  );
}
