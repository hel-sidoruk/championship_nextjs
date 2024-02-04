import { useEffect } from 'react';

interface Props {
  values: string[] | number[];
  text: string;
  state: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: (s: any) => void;
  onClick: () => void;
  active: boolean;
  error?: string;
  setActive: (b: boolean) => void;
  listDisabled?: boolean;
}

const Dropdown = ({
  values,
  text,
  state,
  setState,
  active,
  setActive,
  onClick,
  listDisabled,
  error,
}: Props) => {
  const handleClick = (value: string | number) => {
    if (listDisabled) return;
    setState(value);
  };

  const toggleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
    setActive(!active);
  };

  useEffect(() => {
    const close = () => setActive(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="form__field">
      <label>{text}</label>
      <div
        onClick={toggleActive}
        className={`dropdown ${!values.length ? 'disabled' : ''} ${error ? 'error' : ''}`}
      >
        {state ? '' : <span>{text}</span>}
        <div className={`dropdown__top ${active ? 'dropdown__active' : ''}`}>
          {state.toString().match(/\d/) ? `${state} кг` : state}
        </div>
        <ul className={`dropdown__list ${listDisabled ? 'disabled' : ''}`}>
          {values.map((el) => (
            <li key={el} className="dropdown__item" onClick={() => handleClick(el)}>
              {el.toString().match(/\d/) ? `${el} кг` : el}
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="text form__error">{error}</p>}
    </div>
  );
};

export default Dropdown;
