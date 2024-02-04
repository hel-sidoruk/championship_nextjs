import { useEffect, useState } from 'react';
import { Errors, Values } from '@/types';

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function useApplicationForm() {
  const [errors, setErrors] = useState<Errors>({
    nameError: '',
    birthdateError: '',
    divisionError: '',
    weightError: '',
    beltError: '',
    teamError: '',
    cityError: '',
    phoneError: '',
    emailError: '',
    trainerError: '',
  });

  const [values, setValues] = useState<Values>({
    name: '',
    birthdate: '',
    division: '',
    weight: 0,
    belt: '',
    team: '',
    city: '',
    phone: '',
    email: '',
    trainer: '',
  });

  const setName = (name: string) => setValues((state) => ({ ...state, name }));
  const setBirthdate = (birthdate: string) => setValues((state) => ({ ...state, birthdate }));
  const setDivision = (division: string) => {
    if (values.division !== division) {
      setWeight(0);
      setBelt('');
    }
    setValues((state) => ({ ...state, division }));
  };
  const setWeight = (weight: number) => setValues((state) => ({ ...state, weight }));
  const setBelt = (belt: string) => setValues((state) => ({ ...state, belt }));
  const setTeam = (team: string) => setValues((state) => ({ ...state, team }));
  const setCity = (city: string) => setValues((state) => ({ ...state, city }));
  const setPhone = (phone: string) => setValues((state) => ({ ...state, phone }));
  const setEmail = (email: string) => setValues((state) => ({ ...state, email }));
  const setTrainer = (trainer: string) => setValues((state) => ({ ...state, trainer }));

  const setNameError = (e: string) => setErrors((state) => ({ ...state, nameError: e }));
  const setBirthdateError = (e: string) => setErrors((state) => ({ ...state, birthdateError: e }));
  const setDivisionError = (e: string) => setErrors((state) => ({ ...state, divisionError: e }));
  const setWeightError = (e: string) => setErrors((state) => ({ ...state, weightError: e }));
  const setBeltError = (e: string) => setErrors((state) => ({ ...state, beltError: e }));
  const setCityError = (e: string) => setErrors((state) => ({ ...state, cityError: e }));
  const setPhoneError = (e: string) => setErrors((state) => ({ ...state, phoneError: e }));
  const setEmailError = (e: string) => setErrors((state) => ({ ...state, emailError: e }));
  const setTeamError = (e: string) => setErrors((state) => ({ ...state, teamError: e }));
  const setTrainerError = (e: string) => setErrors((state) => ({ ...state, trainerError: e }));

  const checkValues = () => {
    let error = false;
    if (!values.name) {
      setNameError('Введите ваше ФИО');
      error = true;
    }
    if (!values.email) {
      setEmailError('Введите e-mail');
      error = true;
    }
    if (values.email && !values.email.match(regex)) {
      setEmailError('Некорректный email');
      error = true;
    }
    if (!values.phone) {
      setPhoneError('Введите телефон');
      error = true;
    }
    if (!values.division) {
      setDivisionError('Выберите дивизион');
      error = true;
    }
    if (!values.weight) {
      setWeightError('Выберите весовую категорию');
      error = true;
    }
    if (!values.belt) {
      setBeltError('Выберите пояс');
      error = true;
    }
    if (!values.city) {
      setCityError('Введите город');
      error = true;
    }
    if (!values.trainer) {
      setTrainerError('Укажите тренера');
      error = true;
    }
    if (!values.team) {
      setTeamError('Укажите команду');
      error = true;
    }
    if (!values.birthdate) {
      setBirthdateError('Укажите дату рождения');
      error = true;
    }
    return error;
  };

  useEffect(() => {
    if (values.division) setDivisionError('');
    if (values.weight) setWeightError('');
    if (values.belt) setBeltError('');
  }, [values.division, values.weight, values.belt]);

  return [
    values,
    errors,
    setName,
    setBirthdate,
    setDivision,
    setWeight,
    setBelt,
    setTeam,
    setCity,
    setPhone,
    setEmail,
    setTrainer,
    setNameError,
    setBirthdateError,
    setCityError,
    setPhoneError,
    setEmailError,
    setTeamError,
    setTrainerError,
    checkValues,
  ] as const;
}
