import React, { useState } from 'react';
import { InputField } from './InputField';
import axios from 'axios';

interface Props {
  setIsAuth: (s: boolean) => void;
}

export default function AuthForm({ setIsAuth }: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authData = { login, password };

    axios
      // .post(`http://localhost:5000/user/login`, authData)
      .post(`https://api.bncbjj.site/login`, authData)
      .then(({ data }) => {
        setIsAuth(true);
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="form-container">
      <h3 className="subtitle">Вход в админ-панель</h3>
      <form className="form" onSubmit={auth}>
        <InputField label="Логин" value={login} setValue={(str: string) => setLogin(str)} />
        <InputField label="Пароль" value={password} setValue={(str: string) => setPassword(str)} />
        <button type="submit" className="btn btn-fill">
          Войти
        </button>
      </form>
    </div>
  );
}
