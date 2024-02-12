import { NextApiRequest, NextApiResponse } from 'next';
import { getKnex } from '../../../knex';
import { getSafeQuery } from '@/utils/getSafeQuery';
import { filterParticipants } from '@/utils/filterParticipants';
// import { coloredBelts } from '@/utils/categories';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const knex = getKnex();

  const query = req.query;
  const isAdmin = !!query.admin;
  const safeQuery = getSafeQuery(query as { [key: string]: string });
  const participants = await knex('participants').where(safeQuery);
  // let participants;
  // if (safeQuery.belt === 'цветные') {
  //   participants = await knex('participants')
  //     .where({ ...safeQuery, belt: coloredBelts[0] })
  //     .orWhere({ ...safeQuery, belt: coloredBelts[1] })
  //     .orderBy('name');
  // } else {
  //   participants = await knex('participants').where(safeQuery).orderBy('name');
  // }
  // console.log(safeQuery);
  const data = filterParticipants(participants, safeQuery, isAdmin);
  res.status(200).json(data);
}
