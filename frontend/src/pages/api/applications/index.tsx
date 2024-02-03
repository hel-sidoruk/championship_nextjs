import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../../knex';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();

  if (req.method === 'GET') {
    const applications = await knex('applications');
    res.status(200).json(applications);
  }
}
