import { categoriesBelts, categoriesWeights, categories } from '@/utils/categories';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { FormSuccess } from './FormSuccess';
import { InputField } from './InputField';
import { Field, Form, Formik } from 'formik';
import { validate } from '@/utils/validate';
import axios from 'axios';

const dropdownDefaultValue = ['Выберите дивизион'];
const initialValues = {
  name: '',
  birthdate: '',
  team: '',
  city: '',
  phone: '',
  email: '',
  trainer: '',
  division: '',
  weight: '',
  belt: '',
};

export const ApplicationForm = () => {
  const [divisionActive, setDivisionActive] = useState(false);
  const [weightActive, setWeightActive] = useState(false);
  const [beltActive, setBeltActive] = useState(false);

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

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setStatus }) => {
        axios.post(`http://localhost:5000/applications`, values).then(() => {
          setStatus('success');
        });
      }}
    >
      {({ errors, values, setFieldError, setFieldValue, status, resetForm }) => (
        <div className="form-container">
          {status === 'success' ? (
            <FormSuccess onClose={resetForm} />
          ) : (
            <h2 className="subtitle">Заполните форму для регистрации</h2>
          )}
          <Form className="form">
            <InputField label="ФИО" error={errors.name}>
              <Field className="input" type="text" name="name" id="ФИО" placeholder="ФИО" />
            </InputField>
            <InputField label="Дата рождения" error={errors.birthdate}>
              <Field
                className="input"
                type="date"
                name="birthdate"
                id="Дата рождения"
                placeholder="Дата рождения"
              />
            </InputField>
            <InputField label="Email" error={errors.email}>
              <Field className="input" type="email" name="email" id="Email" placeholder="Email" />
            </InputField>
            <InputField label="Телефон" error={errors.phone}>
              <Field
                className="input"
                type="text"
                name="phone"
                id="Телефон"
                placeholder="Телефон"
              />
            </InputField>
            <InputField label="Город" error={errors.city}>
              <Field className="input" type="text" name="city" id="Город" placeholder="Город" />
            </InputField>
            <InputField label="Команда" error={errors.team}>
              <Field className="input" type="text" name="team" id="Команда" placeholder="Команда" />
            </InputField>
            <InputField label="Тренер" error={errors.trainer}>
              <Field
                className="input"
                type="text"
                name="trainer"
                id="Тренер"
                placeholder="Тренер"
              />
            </InputField>
            <InputField label="Дивизион" error={errors.division}>
              <Field
                name="division"
                as={() => (
                  <Dropdown
                    onClick={handleCategoryClick}
                    active={divisionActive}
                    setActive={setDivisionActive}
                    state={values.division}
                    setState={(division) => {
                      setFieldError('division', undefined);
                      if (values.division !== division) {
                        setFieldValue('belt', '');
                        setFieldValue('weight', '');
                      }
                      setFieldValue('division', division);
                    }}
                    text="Дивизион"
                    values={categories}
                  />
                )}
              />
            </InputField>
            <InputField label="Весовая категория" error={errors.weight}>
              <Field
                name="weight"
                as={() => (
                  <Dropdown
                    onClick={handleWeightClick}
                    active={weightActive}
                    setActive={setWeightActive}
                    state={values.weight}
                    setState={(value) => {
                      setFieldError('weight', undefined);
                      setFieldValue('weight', value);
                    }}
                    text="Весовая категория"
                    listDisabled={values.division === ''}
                    values={
                      values.division ? categoriesWeights[values.division] : dropdownDefaultValue
                    }
                  />
                )}
              />
            </InputField>
            <InputField label="Пояс" error={errors.belt}>
              <Field
                name="belt"
                as={() => (
                  <Dropdown
                    onClick={handleBeltClick}
                    active={beltActive}
                    setActive={setBeltActive}
                    state={values.belt}
                    setState={(value) => {
                      setFieldError('belt', undefined);
                      setFieldValue('belt', value);
                    }}
                    text="Пояс"
                    listDisabled={values.division === ''}
                    values={
                      values.division ? categoriesBelts[values.division] : dropdownDefaultValue
                    }
                  />
                )}
              />
            </InputField>
            <button type="submit" className="btn btn-fill form__btn">
              Зарегистрироваться
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
