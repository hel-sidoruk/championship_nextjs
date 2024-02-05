import { categories, categoriesWeights, categoriesBelts } from './categories';

export function getSafeQuery(query: { [key: string]: string }) {
  const safeQuery: { division?: string; weight?: number; belt?: string } = {};

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
  if (division && categoriesBelts[division] && categoriesBelts[division].includes(belt)) {
    safeQuery.belt = belt;
  }
  return safeQuery;
}
