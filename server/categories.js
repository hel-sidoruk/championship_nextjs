const boysWeights = [15, 20, 30];
const girlsWeights = [16, 21, 31];
const menWeights = [66, 77, 88];
const womenWeights = [55, 66];

const boysBelts = ['белый', 'желтый', 'оранжевый'];
const girlsBelts = ['белый', 'желтый'];
const menBelts = ['белый', 'синий', 'пурпурный'];
const womenBelts = ['белый', 'синий'];

const categories = ['Мальчики', 'Девочки', 'Мужчины', 'Женщины'];

const categoriesWeights = {
  Мальчики: boysWeights,
  Девочки: girlsWeights,
  Мужчины: menWeights,
  Женщины: womenWeights,
};

const categoriesBelts = {
  Мальчики: boysBelts,
  Девочки: girlsBelts,
  Мужчины: menBelts,
  Женщины: womenBelts,
};

module.exports = {
  categories,
  categoriesWeights,
  categoriesBelts 
}