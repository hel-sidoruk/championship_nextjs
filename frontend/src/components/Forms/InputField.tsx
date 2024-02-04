import React from 'react';

interface Props {
  label: string;
  error?: string;
  value: string;
  type?: string;
  setValue: (s: string) => void;
}

export const InputField = ({ label, error, value, setValue, type }: Props) => {
  return (
    <div className={`form__field input`}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className={`form__input ${error ? 'form__input-error' : ''}`}
        placeholder={label}
        type={type || 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="text form__error">{error}</p>}
    </div>
  );
};
