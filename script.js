const badges = [
  { name: 'Sábio da Serpente', file: 'sabio-da-serpente.png' },
  { name: 'Deploy de Sexta', file: 'deploy-de-sexta.png' },
  { name: 'Bluetooth Hacker', file: 'bluetooth-hacker.png' },
  { name: 'Barbeiro Digital', file: 'barbeiro-digital.png' },
  { name: 'Tijolinho de Framework', file: 'tijolinho-de-framework.png' },
  { name: 'Oráculo do Cypress', file: 'oraculo-do-cypress.png' },
  { name: 'Frontend Caprichoso', file: 'frontend-caprichoso.png' },
  { name: 'Truqueiro do Código', file: 'truqueiro-do-codigo.png' }
];

const baseUrl = "https://raw.githubusercontent.com/GbrlSouza/dev-achievements/main/badges/";

const grid = document.getElementById('badgeGrid');

badges.forEach(badge => {
  const card = document.createElement('div');
  card.className = 'badge-card';
  card.innerHTML = `
    <img src="${baseUrl}${badge.file}" alt="${badge.name}" class="badge-img">
    <div class="badge-name">${badge.name}</div>
    <button class="copy-btn" onclick="copyToClipboard('${baseUrl}${badge.file}')">Copiar Link</button>
  `;
  grid.appendChild(card);
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Link copiado para a área de transferência!');
  });
}
