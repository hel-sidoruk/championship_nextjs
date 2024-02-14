import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Application from './Application';

export default function NewApplications() {
  const [data, setData] = useState<ParticipantType[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/applications`)
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
