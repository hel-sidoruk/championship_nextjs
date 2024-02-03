import { categoriesBelts, categoriesWeights, categories } from '@/utils/categories';
import React, { useEffect, useState } from 'react';
import Dropdown from './Forms/Dropdown';

const dropdownDefaultValue = ['Выберите возрастную категорию'];

export const SearchForm = () => {
  const [categoryActive, setCategoryActive] = useState(false);
  const [weightActive, setWeightActive] = useState(false);
  const [beltActive, setBeltActive] = useState(false);

  const [category, setCategory] = useState('');
  const [weight, setWeight] = useState(0);
  const [belt, setBelt] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCategoryClick = () => {
    setWeightActive(false);
    setBeltActive(false);
  };

  const handleWeightClick = () => {
    setCategoryActive(false);
    setBeltActive(false);
  };

  const handleBeltClick = () => {
    setWeightActive(false);
    setCategoryActive(false);
  };

  useEffect(() => {
    setWeight(0);
    setBelt('');
  }, [category]);

  return (
    <form className={`form search-form`} onSubmit={handleSubmit}>
      <div className="form__field">
        <Dropdown
          onClick={handleCategoryClick}
          active={categoryActive}
          setActive={(value: boolean) => setCategoryActive(value)}
          state={category}
          setState={(value: string) => setCategory(value)}
          text="Категория"
          values={categories}
        />
      </div>
      <div className="form__field">
        <Dropdown
          onClick={handleWeightClick}
          active={weightActive}
          setActive={(value: boolean) => setWeightActive(value)}
          state={weight || ''}
          setState={(value: number) => setWeight(value)}
          text="Весовая категория"
          listDisabled={category === ''}
          values={category ? categoriesWeights[category] : dropdownDefaultValue}
        />
      </div>
      <div className="form__field">
        <Dropdown
          onClick={handleBeltClick}
          active={beltActive}
          setActive={(value: boolean) => setBeltActive(value)}
          state={belt}
          setState={(value: string) => setBelt(value)}
          text="Пояс"
          listDisabled={category === ''}
          values={category ? categoriesBelts[category] : dropdownDefaultValue}
        />
      </div>
      <div className="form__field">
        <input
          id="Команда"
          className={`form__input`}
          placeholder="Команда"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-fill form__btn">
        Поиск
      </button>
    </form>
  );
};
