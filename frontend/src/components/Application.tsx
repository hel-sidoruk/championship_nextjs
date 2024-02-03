import { ParticipantType } from '@/types';
import React, { useState } from 'react';
import ApplicationInput from './ApplicationInput';
import axios from 'axios';

interface Props {
  applicationData: ParticipantType;
}

export default function Application({ applicationData }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(applicationData);
  const [deleted, setDeleted] = useState(false);

  const setName = (name: string) => setData((state) => ({ ...state, name }));
  const setBirthdate = (birthdate: string) => setData((state) => ({ ...state, birthdate }));
  const setDivision = (division: string) => setData((state) => ({ ...state, division }));
  const setWeight = (weight: number) => setData((state) => ({ ...state, weight }));
  const setBelt = (belt: string) => setData((state) => ({ ...state, belt }));
  const setTeam = (team: string) => setData((state) => ({ ...state, team }));
  const setCity = (city: string) => setData((state) => ({ ...state, city }));
  const setPhone = (phone: string) => setData((state) => ({ ...state, phone }));
  const setEmail = (email: string) => setData((state) => ({ ...state, email }));
  const setTrainer = (trainer: string) => setData((state) => ({ ...state, trainer }));

  const edit = () => {
    if (isActive) {
      axios
        .patch(`http://api.bncbjj.site/applications/${data.id}`, data)
        .then(() => setIsActive(false))
        .catch((e) => console.log(e));
    } else {
      setIsActive(true);
    }
  };

  const submit = () => {
    axios
      .post(`http://api.bncbjj.site/participants`, data)
      .then(() => setDeleted(true))
      .catch((e) => console.log(e));
  };

  return (
    <div className={`application ${deleted ? 'deleted' : ''}`}>
      <ApplicationInput
        label={'ФИО'}
        value={data.name}
        id={data.id}
        setValue={(str) => {
          setName(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Дата Рождения'}
        value={data.birthdate}
        type="date"
        id={data.id}
        setValue={(str) => {
          setBirthdate(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Дивизион'}
        value={data.division}
        id={data.id}
        setValue={(str) => {
          setDivision(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Весовая категория'}
        value={data.weight}
        id={data.id}
        setValue={(str) => {
          setWeight(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Пояс'}
        value={data.belt}
        id={data.id}
        setValue={(str) => {
          setBelt(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Город'}
        value={data.city}
        id={data.id}
        setValue={(str) => {
          setCity(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Команда'}
        value={data.team}
        id={data.id}
        setValue={(str) => {
          setTeam(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Тренер'}
        value={data.trainer}
        id={data.id}
        setValue={(str) => {
          setTrainer(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Email'}
        value={data.email}
        id={data.id}
        setValue={(str) => {
          setEmail(str);
        }}
        isActive={isActive}
      />
      <ApplicationInput
        label={'Телефон'}
        value={data.phone}
        id={data.id}
        setValue={(str) => {
          setPhone(str);
        }}
        isActive={isActive}
      />
      <button className="btn btn-fill" onClick={submit}>
        Подтвердить
      </button>
      <button className="btn btn-fill" onClick={edit}>
        {isActive ? 'Сохранить' : 'Редактировать'}
      </button>
    </div>
  );
}
