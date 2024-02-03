import React, { useEffect, useState } from 'react';
import Application from './Application';
import axios from 'axios';
import { ParticipantType } from '@/types';

export default function AdminPanel() {
  const [data, setData] = useState<ParticipantType[]>([]);
  useEffect(() => {
    axios
      .get('http://api.bncbjj.site/applications')
      .then(({ data }: { data: ParticipantType[] }) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h2 className="subtitle application__subtitle">Новые заявки</h2>
      <div className="application-container">
        {data.map((item) => (
          <Application applicationData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
