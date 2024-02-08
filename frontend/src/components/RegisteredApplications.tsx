import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RegisteredItem from './RegisteredItem';

export default function RegisteredApplications() {
  const [data, setData] = useState<{ [key: string]: ParticipantType[] }>({});

  useEffect(() => {
    // axios.get('http://localhost:5000/participants').then(({ data }) => {
    axios.get('https://api.bncbjj.site/participants').then(({ data }) => {
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
                <RegisteredItem key={item.id} item={item} />
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
