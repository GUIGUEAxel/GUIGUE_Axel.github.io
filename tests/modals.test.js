/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Modales du portfolio', () => {
  beforeEach(() => {
    // 1. On vide le cache des modules pour que scripts.js soit rechargé
    jest.resetModules();

    // 2. On recharge le HTML
    const html = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf8'
    );
    document.documentElement.innerHTML = html;

    // 3. On recharge ton script qui ajoute les event listeners
    require('../js/scripts.js'); // :contentReference[oaicite:0]{index=0}
  });

  test('cliquer sur "Voir plus" ouvre la bonne modale', () => {
    const buttons = document.querySelectorAll('.work__button-modal');
    const modals = document.querySelectorAll('.work__modal');

    expect(buttons.length).toBeGreaterThan(0);
    expect(modals.length).toBeGreaterThan(0);

    buttons[0].click();

    expect(modals[0].classList.contains('active-modal')).toBe(true);
  });

  test('fermer une modale retire la classe active-modal', () => {
    const buttons = document.querySelectorAll('.work__button-modal');
    const modals = document.querySelectorAll('.work__modal');

    // On ouvre la modale
    buttons[0].click();
    expect(modals[0].classList.contains('active-modal')).toBe(true);

    // On clique sur la croix
    const closeButton = modals[0].querySelector('.work__modal-close');
    closeButton.click();

    // Toutes les modales doivent être fermées
    modals.forEach((modal) => {
      expect(modal.classList.contains('active-modal')).toBe(false);
    });
  });
});
