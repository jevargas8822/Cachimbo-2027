const fs = require('fs');

const mallasPath = 'src/data/mallas.json';
const mallas = JSON.parse(fs.readFileSync(mallasPath, 'utf8'));

const prefixes = {
  'ingenieria-civil': 'civ',
  'ingenieria-informatica': 'inf',
  'ingenieria-mecatronica': 'mtr'
};

for (const [carreraKey, carreraData] of Object.entries(mallas)) {
  const prefix = prefixes[carreraKey] || carreraKey.slice(0, 3);
  carreraData.ciclos.forEach(ciclo => {
    ciclo.cursos.forEach((curso, idx) => {
      curso.id = `${prefix}-${ciclo.numero}${String(idx + 1).padStart(2, '0')}`;
    });
  });
}

fs.writeFileSync(mallasPath, JSON.stringify(mallas, null, 2), 'utf8');
console.log('✅ IDs reindexados y únicos al 100% en todas las mallas.');
