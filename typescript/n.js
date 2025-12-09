var _a;
var user1 = {
    nom: "Fred",
    adresse: {
        ville: "Paris"
    }
};
var user2 = {
    nom: "Fred"
};
// Sans optional chaining (dangereux ❌)
// console.log(user2.adresse.ville); // Erreur à l'exécution
// Avec optional chaining ✅
console.log((_a = user1.adresse) === null || _a === void 0 ? void 0 : _a.ville); // "Paris"
console.log(user2.adresse.ville); // undefined (pas d'erreur)
