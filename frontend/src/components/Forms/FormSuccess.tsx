import React from 'react';

interface Props {
  onClose: () => void;
}

export const FormSuccess = ({ onClose }: Props) => {
  return (
    <div className="form__success">
      <div className="content">
        <svg
          onClick={onClose}
          className="close"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          stroke="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 1.5L18 19M18.5 1.5L1.5 19" strokeWidth="2" />
        </svg>

        <h2>Спасибо за вашу заявку!</h2>
        <p className="text">
          При подаче заявки через сайт фото оплаты стартового взноса необходимо отправить на
          электронный адрес <b>battalion.33a@gmail.com</b>
        </p>
        <div className="text">
          После того, как заявка будет обработана, вы сможете найти себя в списке участников
        </div>
      </div>
    </div>
  );
};
