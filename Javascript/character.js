class Neighbor {
    constructor(apiData) {
        this.name = apiData.name;
        this.image = apiData.image_url;
        this.phrase = apiData.quote || "";
        this.species = apiData.species || "";
        this.gender = apiData.gender || "";
        this.birthday = apiData.birthday_month && apiData.birthday_day
            ? `${apiData.birthday_month} ${apiData.birthday_day}`
            : "";
        this.zodiac = apiData.sign || "";
        this.clothing = apiData.clothing || "";
        this.island = apiData.islander ? "Islander" : "Resident";
        this.personality = apiData.personality || "";
        this.prevPhrases = (apiData.prev_phrases && apiData.prev_phrases.join(", ")) || "";
        this.debut = apiData.debut || "";
        this.catchphrase = apiData.phrase || "";
    }
}

const params = new URLSearchParams(window.location.search);
const nameParam = params.get("name");

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

async function renderCharacter() {
    if (!nameParam) {
        document.querySelector(".charactersection").innerHTML = "<p>Character not found 😢</p>";
        return;
    }
    const character = await fetchNeighborByName(nameParam);

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
}

renderCharacter();

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