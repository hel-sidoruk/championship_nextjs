const boysWeights = [15, 20, 30];
const girlsWeights = [16, 21, 31];
const menWeights = [66, 77, 88];
const womenWeights = [55, 66];

const boysBelts = ['белый', 'желтый', 'оранжевый'];
const girlsBelts = ['белый', 'желтый'];
const menBelts = ['белый', 'синий', 'пурпурный'];
const womenBelts = ['белый', 'синий'];

export const categories = ['Мальчики', 'Девочки', 'Мужчины', 'Женщины'];

export const categoriesWeights: { [key: string]: number[] } = {
  Мальчики: boysWeights,
  Девочки: girlsWeights,
  Мужчины: menWeights,
  Женщины: womenWeights,
};

export const categoriesBelts: { [key: string]: string[] } = {
  Мальчики: boysBelts,
  Девочки: girlsBelts,
  Мужчины: menBelts,
  Женщины: womenBelts,
};
