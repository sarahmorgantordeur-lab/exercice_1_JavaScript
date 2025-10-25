const voitures = [
  { marque: "Tesla", modele: "Model 3", carburant: "Électrique", annee: 2023, couleur: "Blanc nacré", prix: 45900 },
  { marque: "BMW", modele: "320d", carburant: "Diesel", annee: 2019, couleur: "Noir métallisé", prix: 32900 },
  { marque: "Audi", modele: "A4", carburant: "Essence", annee: 2020, couleur: "Gris argent", prix: 33900 },
  { marque: "Mercedes-Benz", modele: "C200", carburant: "Hybride", annee: 2022, couleur: "Bleu nuit", prix: 41900 },
  { marque: "Peugeot", modele: "208", carburant: "Essence", annee: 2021, couleur: "Jaune Faro", prix: 19900 },
  { marque: "Volkswagen", modele: "Golf 8", carburant: "Diesel", annee: 2020, couleur: "Rouge Tornado", prix: 23900 },
  { marque: "Renault", modele: "Clio V", carburant: "Essence", annee: 2019, couleur: "Orange Valencia", prix: 16900 },
  { marque: "Toyota", modele: "Yaris Hybrid", carburant: "Hybride", annee: 2023, couleur: "Bleu Électrique", prix: 23900 },
  { marque: "Ford", modele: "Focus", carburant: "Essence", annee: 2018, couleur: "Gris magnétique", prix: 15400 },
  { marque: "Opel", modele: "Corsa-e", carburant: "Électrique", annee: 2021, couleur: "Jaune Power", prix: 24900 },
  { marque: "Volvo", modele: "XC40 Recharge", carburant: "Électrique", annee: 2024, couleur: "Blanc glacier", prix: 51900 },
  { marque: "Kia", modele: "Sportage", carburant: "Hybride", annee: 2022, couleur: "Vert camouflage", prix: 29900 },
  { marque: "Hyundai", modele: "Ioniq 5", carburant: "Électrique", annee: 2023, couleur: "Gris cyber", prix: 45900 },
  { marque: "Fiat", modele: "500e", carburant: "Électrique", annee: 2022, couleur: "Rose gold", prix: 26900 },
  { marque: "Nissan", modele: "Qashqai", carburant: "Essence", annee: 2021, couleur: "Bleu céramique", prix: 28900 },
  { marque: "Mazda", modele: "CX-30", carburant: "Essence", annee: 2020, couleur: "Rouge Soul", prix: 25900 },
  { marque: "Skoda", modele: "Octavia", carburant: "Diesel", annee: 2019, couleur: "Blanc lunaire", prix: 21900 },
  { marque: "Citroën", modele: "C5 Aircross", carburant: "Hybride", annee: 2022, couleur: "Gris platinium", prix: 30900 },
  { marque: "Seat", modele: "Leon", carburant: "Essence", annee: 2020, couleur: "Rouge désir", prix: 22900 },
  { marque: "Dacia", modele: "Spring", carburant: "Électrique", annee: 2023, couleur: "Gris pierre", prix: 16900 }
];

function afficherTable(tab, titre) {
  if(tab.length === 0) {
    document.getElementById("resultat").innerHTML = `<h2>${titre}</h2><p>Aucune voiture trouvée.</p>`;
    return;
  }
  let html = `<h2>${titre}</h2><table><thead><tr><th>Marque</th><th>Modèle</th><th>Carburant</th><th>Année</th><th>Couleur</th><th>Prix</th></tr></thead><tbody>`;
  tab.forEach(v => {
    html += `<tr><td>${v.marque}</td><td>${v.modele}</td><td>${v.carburant}</td><td>${v.annee}</td><td>${v.couleur}</td><td>${v.prix.toLocaleString('fr-FR', {style:'currency', currency:'EUR'})}</td></tr>`;
  });
  html += `</tbody></table>`;
  document.getElementById("resultat").innerHTML = html;
};


function afficherToutes(){
    afficherTable(voitures,"Toutes les voitures");
};


function afficherElectriques(){
    const elec = voitures.filter(p => p.carburant === 'Électrique');
    afficherTable(elec,"Voitures électriques");
};

function afficherChere(){
    const chere = voitures.reduce((max,p) => p.prix > max.prix ? p : max, voitures[0]);
    afficherTable([chere], "Les voitures les plus chères");
};

function afficherPrixMoyen() {
    const prixMoyen = voitures.reduce((sum, p) => sum + p.prix, 0)/voitures.length;
    document.getElementById("resultat").innerHTML = `<h2>Prix moyen</h2><p><strong>${prixMoyen.toLocaleString('fr-FR', {style:'currency', currency:'EUR'})}</strong></p>`;
};

function afficherRecentes(){
    const recentes = voitures.filter(p => p.annee > 2020);
    afficherTable(recentes, 'Les voitures après 2020');
};

function afficherTriees(){
    const triees = [...voitures].sort((a,b) => a.prix - b.prix);
    afficherTable(triees,'Triées par ordre croisssant');
};

// let voituresElectriques =[];

// voitures.forEach((voiture) => {
//     if (voiture.carburant == "Électrique"){
//         voituresElectriques.push(voiture) ;
//     };
//     console.log(voituresElectriques);
// });

// let prixHaut = 0;
// let voitureLaPlusChere = '';
// voitures.forEach((voiture) => {
//     if(voiture.prix > prixHaut){
//         prixHaut = voiture.prix;
//         voitureLaPlusChere = voiture;
//     }
// });



// console.log(voitureLaPlusChere);