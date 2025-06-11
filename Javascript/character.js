class Neighbor {
    constructor(name, image, phrase, species, gender, birthday, zodiac, clothing, island, personality, prevPhrases, debut, catchphrase) {
        this.name = name;
        this.image = image;
        this.phrase = phrase;
        this.species = species;
        this.gender = gender;
        this.birthday = birthday;
        this.zodiac = zodiac;
        this.clothing = clothing;
        this.island = island;
        this.personality = personality;
        this.prevPhrases = prevPhrases;
        this.debut = debut;
        this.catchphrase = catchphrase;
    }
}

const busqueda = new URLSearchParams(window.location.search);
const namee = busqueda.get("name");

async function fetchNeighborByName(name) {
    try {
        const response = await fetch(`https://api.nookipedia.com/villagers?name=${encodeURIComponent(name)}`, {
            headers: {
                "X-API-KEY": "9b35898d-19d0-4efc-8150-292756fc7c5f",
                "Accept-Version": "1.0.0"
            }
        });
        const data = await response.json();
        const villager = data.find(v => v.name.toLowerCase() === name.toLowerCase()) || data[0];
        return villager ? new Neighbor(villager) : null;
    } catch (error) {
        console.error("Error fetching neighbor:", error);
        return null;
    }
}

const character = neighbors.find(n => n.name.toLowerCase() === namee?.toLowerCase());

if (character) {
    document.querySelector(".imgcharacter").src = character.image;
    document.querySelector(".imgcharacter").alt = character.name;

    document.getElementById("name").textContent = character.name;
    document.getElementById("phrase").textContent = `"${character.phrase}"`;

    const infoItems = document.querySelectorAll(".firstinfo .infoitem p");
    infoItems[0].textContent = character.species;
    infoItems[1].textContent = character.gender;
    infoItems[2].textContent = character.birthday;
    infoItems[3].textContent = character.zodiac;

    const secondInfo = document.querySelectorAll(".secondinfo .secondword");
    secondInfo[0].textContent = character.catchphrase;
    secondInfo[1].textContent = character.clothing;
    secondInfo[2].textContent = character.island;
    secondInfo[3].textContent = character.personality;
    secondInfo[4].textContent = character.prevPhrases;
    secondInfo[5].textContent = character.debut;
} else {
    document.querySelector(".charactersection").innerHTML = "<p>Character not found 😢</p>";
}

//BUTTON FORM
document.addEventListener('DOMContentLoaded', function() {
    const footerForm = document.querySelector('footer form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Mensaje enviado correctamente!');
            footerForm.reset();
        });
    }
});