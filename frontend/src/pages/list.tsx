import Participant from '@/components/Participant';
import { SearchForm } from '@/components/SearchForm';
import Section from '@/components/UI/Section';
import { ParticipantType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';

export default function List() {
  const [data, setData] = useState<{ [key: string]: ParticipantType[] }>({});
  const params = useSearchParams();

  useEffect(() => {
    axios
      .get(`api/participants`, { params: Object.fromEntries(params.entries()) })
      // .get(`http://api.bncbjj.site/participants`, { params: Object.fromEntries(params.entries()) })
      .then(({ data }) => setData(data));
  }, [params]);

  return (
    <>
      <Head>
        <title>Списки участников | BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</title>
      </Head>
      <Section>
        <h1 className="title">BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</h1>
      </Section>
      <div className="container list">
        <SearchForm />
        <section className="section-offset">
          <h2 className="title">Списки зарегистрированных</h2>
          {Object.keys(data).map((title) => (
            <div key={title} className="list__block">
              <h3 className="list__subtitle">{title}</h3>
              {data[title].map((participant) => (
                <Participant info={participant} key={participant.id}></Participant>
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
