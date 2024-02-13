const { categories, categoriesBelts, categoriesWeights, coloredBelts } = require('./categories');

function filterParticipants(participants, query, isAdmin) {
  const data = {};

  categories.forEach((division) => {
    const categoryParticipants = participants.filter(
      (el) => el.division === division
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
      const byBelts = categoryParticipants.filter((el) => {
        if (coloredBelts.includes(el.belt) && belt === 'цветные') {
          return true;
        }
        return el.belt === belt;
      });
      if (query.belt && query.belt !== belt && !byBelts.length) {
        return;
      }
      weights.forEach((weight) => {
        const byWeight = byBelts.filter((el) => el.weight === weight);
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

module.exports = filterParticipants