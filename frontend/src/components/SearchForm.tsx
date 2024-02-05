import { categoriesBelts, categoriesWeights, categories } from '@/utils/categories';
import React, { useState } from 'react';
import Dropdown from './Forms/Dropdown';
import { useSearchForm } from '@/hooks/useSearchForm';

const dropdownDefaultValue = ['Выберите дивизион'];

export const SearchForm = () => {
  const [query, setCategory, setWeight, setBelt, search, reset] = useSearchForm();

  const [categoryActive, setCategoryActive] = useState(false);
  const [weightActive, setWeightActive] = useState(false);
  const [beltActive, setBeltActive] = useState(false);

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

  return (
    <div className={`form search-form`}>
      <Dropdown
        onClick={handleCategoryClick}
        active={categoryActive}
        setActive={setCategoryActive}
        state={query.division}
        setState={setCategory}
        text="Дивизион"
        values={categories}
      />
      <Dropdown
        onClick={handleWeightClick}
        active={weightActive}
        setActive={setWeightActive}
        state={query.weight}
        setState={setWeight}
        text="Весовая категория"
        listDisabled={query.division === ''}
        values={query.division ? categoriesWeights[query.division] : dropdownDefaultValue}
      />
      <Dropdown
        onClick={handleBeltClick}
        active={beltActive}
        setActive={setBeltActive}
        state={query.belt}
        setState={setBelt}
        text="Пояс"
        listDisabled={query.division === ''}
        values={query.division ? categoriesBelts[query.division] : dropdownDefaultValue}
      />
      <div className="btns-container">
        <button className="btn btn-fill form__btn" onClick={search}>
          Поиск
        </button>
        <button className="btn btn-fill form__btn" onClick={reset}>
          Сброс
        </button>
      </div>
    </div>
  );
};
