import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Application from './Application';

export default function NewApplications() {
  const [data, setData] = useState<ParticipantType[]>([]);

  useEffect(() => {
    axios
      // .get('http://localhost:5000/applications')
      .get('https://api.bncbjj.site/applications')
      .then(({ data }: { data: ParticipantType[] }) => {
        setData(data);
      });
  }, []);

  return (
    <div className="application-container">
      {data.map((item) => (
        <Application applicationData={item} key={item.id} />
      ))}
    </div>
  );
}
