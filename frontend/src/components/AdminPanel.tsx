import React, { useEffect, useState } from 'react';
import Application from './Application';
import axios from 'axios';
import { ParticipantType } from '@/types';
import Link from 'next/link';

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
      <div className="admin__nav">
        <Link href="/admin" className="subtitle application__subtitle active">
          Новые заявки
        </Link>
        <Link href="/admin/registered" className="subtitle application__subtitle">
          Зарегистрированные
        </Link>
      </div>
      <div className="application-container">
        {data.map((item) => (
          <Application applicationData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
