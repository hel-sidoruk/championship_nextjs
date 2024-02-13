import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();

  const teams: [{ team: string }] = await knex('participants')
    .select('team')
    .orderBy('team')
    .distinct();

  res.status(200).json(teams.map((el) => el.team));
}
