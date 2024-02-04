import Head from 'next/head';
import axios from 'axios';
import { ApplicationForm } from '@/components/Forms';
import Section from '@/components/UI/Section';
import { ParticipantType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Regulations from '@/components/Regulations';

export async function getStaticProps() {
  const { data } = await axios.get(`http://api.bncbjj.site/participants`);
  return { props: { data } };
}

export default function Home({ data }: { data: { [key: string]: ParticipantType[] } }) {
  return (
    <>
      <Head>
        <title>BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</title>
      </Head>
      <Section>
        <h1 className="title home__title">BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</h1>
        <div className="home__content">
          <div className="home__image">
            <Image
              src="/Poster.png"
              alt="Афиша соревнований"
              style={{ objectFit: 'contain' }}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>
          <div className="home__info top">
            <address>г. Минск, ул. Героев 120-й дивизии, 1</address>
            <p>16 марта 2024</p>
            <p>Правила AJP</p>
            <Link className="link home__link" href="/list">
              Списки участников
            </Link>
            <Link className="btn btn-fill form__btn" href="/registration">
              Регистрация
            </Link>
          </div>
          <Regulations />
          <div className="home__info">
            <h2 className="subtitle">Контакты</h2>
            <a className="" href="tel:+375296276010">
              +375 (29) 627-60-10
            </a>
          </div>
          <div className="home__info">
            <h2 className="subtitle">Списки</h2>
            {Object.keys(data).map((title) => (
              <div key={title}>
                <Link href="/list" className="home__link text">
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <ApplicationForm />
      </Section>
    </>
  );
}
