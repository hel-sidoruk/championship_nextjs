import React from 'react';

interface Props {
  id: string;
  label: string;
  value: string | number;
  isActive: boolean;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (s: any) => void;
}

export default function ApplicationInput({ label, value, isActive, setValue, id, type }: Props) {
  return (
    <div className={`application__field`}>
      <label htmlFor={`${label}${id}`} className="application__label">
        {label}
      </label>
      <input
        id={label}
        type={type || 'text'}
        className={`form__input ${isActive ? 'active' : ''}`}
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
