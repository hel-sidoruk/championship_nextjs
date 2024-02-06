import { Values } from '@/types';

export const validate = (values: Values) => {
  const errors: Partial<Values> = {};
  if (!values.name) {
    errors.name = 'Введите ваше ФИО';
  }
  if (!values.email) {
    errors.email = 'Введите e-mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Некорректный email';
  }
  if (!values.phone) {
    errors.phone = 'Введите телефон';
  }
  if (!values.city) {
    errors.city = 'Введите город';
  }
  if (!values.trainer) {
    errors.trainer = 'Укажите тренера';
  }
  if (!values.team) {
    errors.team = 'Укажите команду';
  }
  if (!values.birthdate) {
    errors.birthdate = 'Укажите дату рождения';
  }
  if (!values.division) {
    errors.division = 'Выберите дивизион';
  }
  if (!values.weight) {
    errors.weight = 'Выберите весовую категорию';
  }
  if (!values.belt) {
    errors.belt = 'Выберите пояс';
  }
  return errors;
};
