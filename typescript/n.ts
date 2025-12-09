type Utilisateur = {
  nom: string;
  adresse?: {
    ville: string;
  };
};

const user1: Utilisateur = {
  nom: "Fred",
  adresse: {
    ville: "Paris"
  }
};

const user2: Utilisateur = {
  nom: "Fred"
};

// Sans optional chaining (dangereux ❌)
// console.log(user2.adresse.ville); // Erreur à l'exécution

// Avec optional chaining ✅
console.log(user1.adresse?.ville); // "Paris"
console.log(user2.adresse!.ville); // undefined (pas d'erreur)


