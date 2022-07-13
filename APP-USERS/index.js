let userData = [];


// ----------- recuperation des donées
const fetchUser = async() => {
    await fetch("https://randomuser.me/api/?results=24")
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data.results);
            userData = data.results;
        })
        .catch(() => console.log("Error!"));
    console.log(userData);
}

// ---------- convertisseur de dates

const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return newDate;
}


// jours écoulés depuis 'date'
const dateCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);


    return Math.floor((todayTimestamp - timestamp) / (3600 * 1000 * 24));
}

// -------------- affichage
const userDisplay = async() => {
    await fetchUser();

    document.body.innerHTML = userData.map(
        (user) =>
        `
        <div class="card">
        <img src=${user.picture.large} alt="photo de +${user.name.last}" />
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dateCalc(user.registered.date)} jours</em>


        </div>
        `
    ).join('');
}

userDisplay();