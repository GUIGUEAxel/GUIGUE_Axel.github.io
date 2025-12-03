📁 Portfolio – [Ton Nom]

Ce portfolio présente mes projets, mon parcours et mes compétences en développement web.
Il a été construit de manière à être simple, rapide et maintenable, tout en intégrant de bonnes pratiques modernes : tests unitaires, CI et structure de code propre.

🚀 Fonctionnalités

Présentation personnelle

Section projets avec affichage détaillé via des fenêtres modales

Navigation fluide avec scroll actif et ancre automatique

Design responsive

Interactions JavaScript :

Ouverture / fermeture des modales

Mise en surbrillance automatique des liens de navigation selon la section visible

Tests unitaires (Jest + JSDOM)

CI GitHub Actions (exécution automatique des tests)

🛠️ Technologies utilisées
Front-end

HTML5

CSS3

JavaScript (vanilla)

Outils & Qualité

Jest (tests unitaires)

jest-environment-jsdom (simulation du DOM)

GitHub Actions (CI)

📂 Structure du projet
.
│── index.html
│── css/
│   └── styles.css
│── js/
│   └── scripts.js
│── tests/
│   └── modals.test.js
│── package.json
│── jest.config.js
└── README.md

🧪 Tests unitaires

Le projet inclut des tests pour vérifier le bon fonctionnement des modales (ouverture, fermeture, gestion des classes CSS).

Lancer les tests
npm install
npm test


Les tests utilisent JSDOM pour charger index.html et exécuter scripts.js dans un environnement simulé.

🔄 Intégration Continue (CI)

Un workflow GitHub Actions exécute automatiquement les tests :

à chaque push sur main

à chaque pull request

Il permet de s’assurer que les interactions du site restent fonctionnelles après chaque modification.

🧱 Installation et utilisation

Clonez le repository :

git clone https://github.com/GUIGUEAxel/GUIGUE_Axel.github.io.git
cd portfolio


Installez les dépendances (pour les tests seulement) :

npm install


Ouvrez index.html dans un navigateur pour visualiser le portfolio.

🎯 Objectifs du projet

Construire un portfolio moderne et responsive

Mettre en pratique JavaScript et la manipulation du DOM

Ajouter une couche de qualité via les tests unitaires

Utiliser la CI pour automatiser la validation du code

📧 Me contacter

Ton nom
📬 guigueaxel@gmail.com

💼 LinkedIn : https://linkedin.com/in/axelguigue

🌐 Portfolio en ligne : https://tonportfolio.com

