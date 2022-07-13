// Methode .json() => méthode qui s"auto résoud en renvoyant le body de la requête

// ----------- stocké pour un site
// stockage de chaines de caractères uniquement

user = {
    name: "lol",
    age: 25,
}
localStorage.data = "jestocke la data";
console.log(localStorage.data);
// --------------- localStorage.removeItem("data");
localStorage.Name = "Lolo";
// ---------------- enregistrer un objet
localStorage.user = JSON.stringify(user);
// -------------- transformer en objet JS
console.log(JSON.parse(localStorage.user));

///// session storage
sessionStorage.datasettings = "55px";
sessionStorage.clear();


// cookies
document.cookie = "name=lolo;path=/;max-age=450000;secure";