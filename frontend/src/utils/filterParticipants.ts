import { ParticipantType } from '@/types';
import { categories, categoriesBelts, categoriesWeights, coloredBelts } from './categories';

type Query = { division?: string; weight?: number; belt?: string };

export function filterParticipants(
  participants: ParticipantType[],
  query: Query,
  isAdmin?: boolean
) {
  const data: { [key: string]: ParticipantType[] } = {};
  categories.forEach((division) => {
    const categoryParticipants = participants.filter(
      (el: ParticipantType) => el.division === division
    );
    if (query.division && query.division !== division && !categoryParticipants.length) {
      return;
    }
    const belts = categoriesBelts[division];
    const weights = categoriesWeights[division];
    belts.forEach((belt) => {
      if (!isAdmin && coloredBelts.includes(belt)) {
        belt = 'цветные';
      }
      const byBelts = categoryParticipants.filter((el: ParticipantType) => {
        if (coloredBelts.includes(el.belt) && belt === 'цветные') {
          return true;
        }
        return el.belt === belt;
      });
      if (query.belt && query.belt !== belt && !byBelts.length) {
        return;
      }
      weights.forEach((weight) => {
        const byWeight = byBelts.filter((el: ParticipantType) => el.weight === weight);
        if (query.weight && query.weight != weight && !byWeight.length) {
          return;
        }
        const categoryKey = `${division} / ${belt.replace('й', 'е')} пояса / ${weight} КГ`;
        data[categoryKey] = byWeight;
      });
    });
  });
  return data;
}
