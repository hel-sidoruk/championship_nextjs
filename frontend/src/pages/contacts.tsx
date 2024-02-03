import { ApplicationForm } from '@/components/Forms';
import Head from 'next/head';
import { useRef } from 'react';
import MapBlock from '../components/UI/MapBlock';

export default function ContactsPage() {
  const mapRef = useRef<HTMLSpanElement>(null);
  return (
    <>
      <Head>
        <title>Контакты | Holy Family Gym Минск</title>
        <meta
          name="description"
          content="Контактная информация зала Holy Family Gym. Записаться на тренировку в Holy Family Gym"
        />
      </Head>
      <span className="contacts__hidden" id="form" aria-hidden="true"></span>
      <ApplicationForm />
      <span className="contacts__hidden" ref={mapRef} aria-hidden={true}></span>
      <MapBlock mapWidth={'100%'} mapHeight={'400px'} />
    </>
  );
}
