const neighbors = [
    {
        name: "Pecan",
        image: "../assets/characteroftheday1.png",
        phrase: "Sweeten your life.",
        species: "Squirrel",
        gender: "Female",
        birthday: "September 10",
        zodiac: "Virgo",
        clothing: "Purple dress",
        island: "Resident of Acorn Island",
        personality: "Snooty",
        prevPhrases: "chipmunk",
        debut: "AC: Population Growing",
        catchphrase: "chipmunk"
    },
    {
        name: "Ribbot",
        image: "../assets/characteroftheday2.png",
        phrase: "Never rest, never oxide.",
        species: "Frog",
        gender: "Male",
        birthday: "February 13",
        zodiac: "Aquarius",
        clothing: "Simple parka",
        island: "Not a resident of the island",
        personality: "Jock",
        prevPhrases: "toady",
        debut: "DNM",
        catchphrase: "ZZRRBBIT"
    },
];

const urlParams = new URLSearchParams(window.location.search);
const characterName = urlParams.get("name");


const character = neighbors.find(n => n.name.toLowerCase() === characterName?.toLowerCase());

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
