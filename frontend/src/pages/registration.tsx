import { ApplicationForm } from '@/components/Forms';
import Section from '@/components/UI/Section';
import React from 'react';
import Head from 'next/head';

export default function Registration() {
  return (
    <>
      <Head>
        <title>Регистрация на турнир | BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</title>
      </Head>
      <Section>
        <h1 className="title align-center">BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</h1>
        <ApplicationForm />
      </Section>
    </>
  );
}
