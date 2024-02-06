import AdminPanel from '@/components/AdminPanel';
import AuthForm from '@/components/Forms/AuthForm';
import Section from '@/components/UI/Section';
import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export default function Admin() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/auth`, {
        // .get(`http://api.bncbjj.site/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setIsAuth(true);
      })
      .catch((e) => console.log(e));
  }, [isAuth]);

  return (
    <>
      <Head>
        <title>Админ-панель | BELARUS NATIONAL CHAMPIONSHIP BJJ 2024 GI</title>
      </Head>
      <Section>{!isAuth ? <AuthForm setIsAuth={setIsAuth} /> : <AdminPanel />}</Section>
    </>
  );
}
