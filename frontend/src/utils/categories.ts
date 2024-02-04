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

export function getCategoriesTitles() {
  const titles: Record<string, string> = {};
  categories.forEach((division) => {
    const belts = categoriesBelts[division];
    const weights = categoriesWeights[division];
    belts.forEach((belt) => {
      weights.forEach((weight) => {
        const title = `${division} / ${belt.replace('й', 'е')} пояса / ${weight} КГ`;
        const link = `division=${division}&belt=${belt}&weight=${weight}`;
        titles[title] = link;
      });
    });
  });
  return titles;
}
