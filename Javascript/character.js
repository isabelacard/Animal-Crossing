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
    {
        name: "Molly",
        image: "../assets/characteroftheday3.png",
        phrase: "Quackidee.",
        species: "Duck",
        gender: "Female",
        birthday: "March 7",
        zodiac: "Pisces",
        clothing: "Yellow cardigan",
        island: "Resident",
        personality: "Normal",
        prevPhrases: "quackidee",
        debut: "NL",
        catchphrase: "quackidee"
    },
    {
        name: "Static",
        image: "../assets/characteroftheday4.png",
        phrase: "Cranky but cute.",
        species: "Squirrel",
        gender: "Male",
        birthday: "July 9",
        zodiac: "Cancer",
        clothing: "Lightning tee",
        island: "Resident",
        personality: "Cranky",
        prevPhrases: "krzzt",
        debut: "AC",
        catchphrase: "krzzt"
    },
    {
        name: "Fauna",
        image: "../assets/characteroftheday5.png",
        phrase: "The first step is always the hardest.",
        species: "Deer",
        gender: "Female",
        birthday: "March 26",
        zodiac: "Aries",
        clothing: "Red sweater",
        island: "Resident",
        personality: "Normal",
        prevPhrases: "dearie",
        debut: "NL",
        catchphrase: "dearie"
    },
    {
        name: "Loli",
        image: "../assets/characteroftheday6.png",
        phrase: "Always be yourself.",
        species: "Cat",
        gender: "Female",
        birthday: "March 27",
        zodiac: "Aries",
        clothing: "Blue dress",
        island: "Resident",
        personality: "Normal",
        prevPhrases: "bonbon",
        debut: "NH",
        catchphrase: "bonbon"
    },
    {
        name: "Rolf",
        image: "../assets/characteroftheday7.png",
        phrase: "Patience is a virtue.",
        species: "Tiger",
        gender: "Male",
        birthday: "August 22",
        zodiac: "Leo",
        clothing: "Tiger tee",
        island: "Resident",
        personality: "Cranky",
        prevPhrases: "grr",
        debut: "AC",
        catchphrase: "grr"
    },
    {
        name: "Tom Nook",
        image: "../assets/characteroftheday8.png",
        phrase: "Yes, yes!",
        species: "Raccoon",
        gender: "Male",
        birthday: "May 30",
        zodiac: "Gemini",
        clothing: "Business suit",
        island: "Special character",
        personality: "Business",
        prevPhrases: "hm?",
        debut: "DNM",
        catchphrase: "hm?"
    },
    {
        name: "Eloise",
        image: "../assets/favoriteneighbor1.png",
        phrase: "If you want something done right, do it yourself.",
        species: "Elephant",
        gender: "Female",
        birthday: "December 8",
        zodiac: "Sagittarius",
        clothing: "Yellow dress",
        island: "Resident",
        personality: "Snooty",
        prevPhrases: "tootie",
        debut: "AC",
        catchphrase: "tootie"
    },
    {
        name: "Roald",
        image: "../assets/favoriteneighbor2.png",
        phrase: "You must learn to waddle before you can swim.",
        species: "Penguin",
        gender: "Male",
        birthday: "January 5",
        zodiac: "Capricorn",
        clothing: "Blue jacket",
        island: "Resident",
        personality: "Jock",
        prevPhrases: "b-b-buddy",
        debut: "AC",
        catchphrase: "b-b-buddy"
    },
    {
        name: "Labelle",
        image: "../assets/favoriteneighbor3.png",
        phrase: "Fashion first!",
        species: "Hedgehog",
        gender: "Female",
        birthday: "October 31",
        zodiac: "Scorpio",
        clothing: "Fashionable dress",
        island: "Special character",
        personality: "Fashionista",
        prevPhrases: "label",
        debut: "CF",
        catchphrase: "label"
    },
    {
        name: "Raymond",
        image: "../assets/characteroftheday9.png",
        phrase: "Stay on brand!",
        species: "Cat",
        gender: "Male",
        birthday: "October 1",
        zodiac: "Libra",
        clothing: "Business suit",
        island: "Resident",
        personality: "Smug",
        prevPhrases: "crisp",
        debut: "NH",
        catchphrase: "crisp"
    },
    {
        name: "Cherry",
        image: "../assets/characteroftheday10.png",
        phrase: "What what!",
        species: "Dog",
        gender: "Female",
        birthday: "May 11",
        zodiac: "Taurus",
        clothing: "Punk outfit",
        island: "Resident",
        personality: "Sisterly",
        prevPhrases: "what what",
        debut: "NL",
        catchphrase: "what what"
    },
    {
        name: "Marshal",
        image: "../assets/characteroftheday11.png",
        phrase: "Seize the day.",
        species: "Squirrel",
        gender: "Male",
        birthday: "September 29",
        zodiac: "Libra",
        clothing: "Vest",
        island: "Resident",
        personality: "Smug",
        prevPhrases: "sulky",
        debut: "NL",
        catchphrase: "sulky"
    },
    {
        name: "Audie",
        image: ".../assets/characteroftheday12.png",
        phrase: "Be positive!",
        species: "Wolf",
        gender: "Female",
        birthday: "August 31",
        zodiac: "Virgo",
        clothing: "Orange dress",
        island: "Resident",
        personality: "Peppy",
        prevPhrases: "foxtrot",
        debut: "NH",
        catchphrase: "foxtrot"
    }
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
