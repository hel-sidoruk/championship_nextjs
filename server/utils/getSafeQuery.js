const { categories, categoriesBelts, categoriesWeights } = require('./categories');

function getSafeQuery(query) {
  const safeQuery = {};

  const division = query.division;
  if (division && categories.includes(division)) {
    safeQuery.division = division;
  }

  const stringWeight = query.weight;
  if (stringWeight) {
    const weight = Number(stringWeight);
    if (division && categoriesWeights[division] && categoriesWeights[division].includes(weight)) {
      safeQuery.weight = weight;
    }
  }

  const belt = query.belt;
  if (
    division &&
    categoriesBelts[division] &&
    (categoriesBelts[division].includes(belt) || belt === 'цветные')
  ) {
    safeQuery.belt = belt;
  }
  return safeQuery;
}

module.exports = getSafeQuery