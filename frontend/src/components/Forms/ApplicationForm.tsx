import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useApplicationSubmit } from '@/hooks/useApplicationSubmit';
import { categoriesBelts, categoriesWeights, categories } from '@/utils/categories';
import React, { useEffect, useState } from 'react';
import { Loader } from '../UI/Loader';
import Dropdown from './Dropdown';
import { FormSuccess } from './FormSuccess';
import { InputField } from './InputField';

const dropdownDefaultValue = ['Выберите возрастную категорию'];

export const ApplicationForm = () => {
  const [
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
  ] = useApplicationForm();
  const [divisionActive, setDivisionActive] = useState(false);
  const [weightActive, setWeightActive] = useState(false);
  const [beltActive, setBeltActive] = useState(false);
  const [sendApplication, resetSuccess, success, isLoading] = useApplicationSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = checkValues();
    if (error) return;
    sendApplication(values);
  };

  const handleCategoryClick = () => {
    setWeightActive(false);
    setBeltActive(false);
  };

  const handleWeightClick = () => {
    setDivisionActive(false);
    setBeltActive(false);
  };

  const handleBeltClick = () => {
    setWeightActive(false);
    setDivisionActive(false);
  };

  const reset = () => {
    setName('');
    setBirthdate('');
    setDivision('');
    setWeight(0);
    setBelt('');
    setTeam('');
    setCity('');
    setPhone('');
    setEmail('');
    setTrainer('');
    resetSuccess();
  };

  useEffect(() => {
    setWeight(0);
    setBelt('');
  }, [values.division]);

  return (
    <div className="form-container">
      {success ? (
        <FormSuccess onClose={reset} />
      ) : (
        <h2 className="subtitle">Заполните форму для регистрации</h2>
      )}
      {isLoading && (
        <div className="form__loader">
          <Loader />
        </div>
      )}
      <form className={`form`} onSubmit={handleSubmit}>
        <InputField
          label="ФИО"
          error={errors.nameError}
          value={values.name}
          setValue={(str: string) => {
            if (errors.nameError) setNameError('');
            setName(str);
          }}
        />
        <InputField
          label="Дата рождения"
          error={errors.birthdateError}
          value={values.birthdate}
          type="date"
          setValue={(str: string) => {
            if (errors.birthdateError) setBirthdateError('');
            setBirthdate(str);
          }}
        />
        <InputField
          label="Email"
          error={errors.emailError}
          value={values.email}
          setValue={(str: string) => {
            if (errors.emailError) setEmailError('');
            setEmail(str);
          }}
        />
        <InputField
          label="Телефон"
          error={errors.phoneError}
          value={values.phone}
          setValue={(str: string) => {
            if (errors.phoneError) setPhoneError('');
            setPhone(str);
          }}
        />
        <InputField
          label="Город"
          error={errors.cityError}
          value={values.city}
          setValue={(str: string) => {
            if (errors.cityError) setCityError('');
            setCity(str);
          }}
        />
        <InputField
          label="Команда"
          error={errors.teamError}
          value={values.team}
          setValue={(str: string) => {
            if (errors.teamError) setTeamError('');
            setTeam(str);
          }}
        />
        <InputField
          label="Тренер"
          error={errors.trainerError}
          value={values.trainer}
          setValue={(str: string) => {
            if (errors.trainerError) setTrainerError('');
            setTrainer(str);
          }}
        />
        <div className="form__field">
          <Dropdown
            onClick={handleCategoryClick}
            active={divisionActive}
            setActive={(value: boolean) => setDivisionActive(value)}
            state={values.division}
            setState={(value: string) => setDivision(value)}
            text="Дивизион"
            error={errors.divisionError}
            values={categories}
          />
          <p className="text form__error">{errors.divisionError}</p>
        </div>
        <div className="form__field">
          <Dropdown
            onClick={handleWeightClick}
            active={weightActive}
            setActive={(value: boolean) => setWeightActive(value)}
            state={values.weight || ''}
            setState={(value: number) => setWeight(value)}
            text="Весовая категория"
            error={errors.weightError}
            listDisabled={values.division === ''}
            values={values.division ? categoriesWeights[values.division] : dropdownDefaultValue}
          />
          <p className="text form__error">{errors.weightError}</p>
        </div>
        <div className="form__field">
          <Dropdown
            onClick={handleBeltClick}
            active={beltActive}
            setActive={(value: boolean) => setBeltActive(value)}
            state={values.belt}
            setState={(value: string) => setBelt(value)}
            text="Пояс"
            listDisabled={values.division === ''}
            error={errors.beltError}
            values={values.division ? categoriesBelts[values.division] : dropdownDefaultValue}
          />
          <p className="text form__error">{errors.beltError}</p>
        </div>
        <button type="submit" className="btn btn-fill form__btn">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};