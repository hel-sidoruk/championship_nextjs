import Head from 'next/head';
import { ApplicationForm } from '@/components/Forms';
import Section from '@/components/UI/Section';
import Image from 'next/image';
import Link from 'next/link';
import Regulations from '@/components/Regulations';
import { categories } from '@/utils/categories';

export default function Home() {
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
            <br />
            <p style={{ marginBottom: '-20px' }}>
              Зарегистрируйтесь на турнир, заполнив форму на сайте:
            </p>
            <Link className="btn btn-fill form__btn" href="/registration">
              Регистрация
            </Link>
          </div>
          <Regulations />
          <div className="home__info">
            <h2 className="subtitle">Контакты</h2>
            <a href="tel:+375296276010">+375 (29) 627-60-10</a>
            <a href="mailto:battalion.33a@gmail.com">battalion.33a@gmail.com</a>
          </div>
          <div className="home__info">
            <h2 className="subtitle">Списки</h2>
            {categories.map((division) => (
              <div key={division}>
                <Link href={`/list?division=${division}`} className="home__link text">
                  {division}
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
