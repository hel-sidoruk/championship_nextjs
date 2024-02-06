import { Field, ErrorMessage } from 'formik';
import React from 'react';

interface Props {
  label: string;
  children: React.ReactNode;
  error?: string;
  // value: string;
  type?: string;
  // setValue: (s: string) => void;
}

export const InputField = ({ label, children, error }: Props) => {
  return (
    // <div className={`form__field input`}>
    //   <label htmlFor={label}>{label}</label>
    //   <input
    //     id={label}
    //     className={`form__input ${error ? 'form__input-error' : ''}`}
    //     placeholder={label}
    //     type={type || 'text'}
    //     value={value}
    //     onChange={(e) => setValue(e.target.value)}
    //   />
    // </div>
    <div className={`form__field ${error ? 'error' : ''}`}>
      <label htmlFor={label}>{label}</label>
      {children}
      {error && <p className="text form__error">{error}</p>}
    </div>
  );
};
