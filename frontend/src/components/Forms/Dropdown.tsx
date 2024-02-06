import { useEffect } from 'react';

interface Props {
  values: string[] | number[];
  text: string;
  state: string;
  setState: (s: string) => void;
  onClick: () => void;
  active: boolean;
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
}: Props) => {
  const handleClick = (value: string) => setState(value);

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
    <div onClick={toggleActive} className={`dropdown ${!values.length ? 'disabled' : ''}`}>
      {state ? '' : <span>{text}</span>}
      <div className={`dropdown__top ${active ? 'dropdown__active' : ''}`}>
        {state.toString().match(/^[\d]/) ? `${state} кг` : state}
      </div>
      <ul className={`dropdown__list ${listDisabled ? 'disabled' : ''}`}>
        {values.map((el) => (
          <li key={el} className="dropdown__item" onClick={() => handleClick(el.toString())}>
            {el.toString().match(/^[\d]/) ? `${el} кг` : el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
