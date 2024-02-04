/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../knex';
import { categories, categoriesBelts, categoriesWeights } from '@/utils/categories';
import { ParticipantType } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();

  const query = req.query;

  const data: { [key: string]: ParticipantType[] } = {};
  const participants = await knex('participants').where(query);

  categories.forEach((division) => {
    const categoryParticipants = participants.filter((el: any) => el.division === division);
    if (query.division && query.division !== division && !categoryParticipants.length) {
      return;
    }
    const belts = categoriesBelts[division];
    const weights = categoriesWeights[division];
    belts.forEach((belt) => {
      const byBelts = categoryParticipants.filter((el: any) => el.belt === belt);
      if (query.belt && query.belt !== belt && !byBelts.length) {
        return;
      }
      weights.forEach((weight) => {
        const byWeight = byBelts.filter((el: any) => el.weight === weight);
        if (query.weight && query.weight != weight.toString() && !byWeight.length) {
          return;
        }
        const categoryKey = `${division} / ${belt.replace('й', 'е')} пояса / ${weight} КГ`;
        data[categoryKey] = byWeight;
      });
    });
  });

  res.status(200).json(data);
}
