import AdminPanel from '@/components/AdminPanel';
import AuthForm from '@/components/Forms/AuthForm';
import Section from '@/components/UI/Section';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Admin() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get(`http://api.bncbjj.site/auth`, {
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

  return <Section>{!isAuth ? <AuthForm setIsAuth={setIsAuth} /> : <AdminPanel />}</Section>;
}
