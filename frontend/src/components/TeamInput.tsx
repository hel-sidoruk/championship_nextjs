import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  error: string;
  value: string;
  active: boolean;
  setActive: (b: boolean) => void;
  onClick: () => void;
  setTeamError: (s: string) => void;
  setTeam: (s: string) => void;
}
export default function TeamInput({
  error,
  value,
  setTeamError,
  setTeam,
  onClick,
  active,
  setActive,
}: Props) {
  const [teams, setTeams] = useState<string[]>([]);

  const setValue = (str: string) => {
    if (error) setTeamError('');
    setTeam(str);
  };

  const toggleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
    setActive(!active);
  };

  useEffect(() => {
    axios.get('api/teams').then(({ data }) => setTeams(data));
  }, []);

  useEffect(() => {
    const close = () => setActive(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <>
      <div className="form__field">
        <label htmlFor="Команда">Команда</label>
        <div onClick={toggleActive} className={`dropdown ${error ? 'error' : ''}`}>
          <div
            className={`dropdown__top ${active ? 'dropdown__active' : ''}`}
            style={{ padding: 0 }}
          >
            <input
              id="Команда"
              className={`form__input ${error ? 'form__input-error' : ''}`}
              placeholder="Команда"
              value={value}
              style={{ paddingRight: 50, border: 'unset' }}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <ul className="dropdown__list">
            {teams.map(
              (el) =>
                el.toLowerCase().startsWith(value.toLowerCase()) && (
                  <li key={el} className="dropdown__item" onClick={() => setValue(el)}>
                    {el}
                  </li>
                )
            )}
          </ul>
        </div>
        {error && <p className="text form__error">{error}</p>}
      </div>
    </>
  );
}
