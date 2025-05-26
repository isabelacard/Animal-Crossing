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

const neighbors = [
    new Neighbor("Pecan", "../assets/characteroftheday1.png", "Sweeten your life.", "Squirrel", "Female", "September 10", "Virgo", "Purple dress", "Resident of Acorn Island", "Snooty", "chipmunk", "AC: Population Growing", "chipmunk"),
    new Neighbor("Ribbot", "../assets/characteroftheday2.png", "Never rest, never oxide.", "Frog", "Male", "February 13", "Aquarius", "Simple parka", "Not a resident of the island", "Jock", "toady", "DNM", "ZZRRBBIT"),
    new Neighbor("Molly", "../assets/characteroftheday3.png", "Quackidee.", "Duck", "Female", "March 7", "Pisces", "Yellow cardigan", "Resident", "Normal", "quackidee", "NL", "quackidee"),
    new Neighbor("Static", "../assets/characteroftheday4.png", "Cranky but cute.", "Squirrel", "Male", "July 9", "Cancer", "Lightning tee", "Resident", "Cranky", "krzzt", "AC", "krzzt"),
    new Neighbor("Fauna", "../assets/characteroftheday5.png", "The first step is always the hardest.", "Deer", "Female", "March 26", "Aries", "Red sweater", "Resident", "Normal", "dearie", "NL", "dearie"),
    new Neighbor("Loli", "../assets/characteroftheday6.png", "Always be yourself.", "Cat", "Female", "March 27", "Aries", "Blue dress", "Resident", "Normal", "bonbon", "NH", "bonbon"),
    new Neighbor("Rolf", "../assets/characteroftheday7.png", "Patience is a virtue.", "Tiger", "Male", "August 22", "Leo", "Tiger tee", "Resident", "Cranky", "grr", "AC", "grr"),
    new Neighbor("Tom Nook", "../assets/characteroftheday8.png", "Yes, yes!", "Raccoon", "Male", "May 30", "Gemini", "Business suit", "Special character", "Business", "hm?", "DNM", "hm?"),
    new Neighbor("Eloise", "../assets/favoriteneighbor1.png", "If you want something done right, do it yourself.", "Elephant", "Female", "December 8", "Sagittarius", "Yellow dress", "Resident", "Snooty", "tootie", "AC", "tootie"),
    new Neighbor("Roald", "../assets/favoriteneighbor2.png", "You must learn to waddle before you can swim.", "Penguin", "Male", "January 5", "Capricorn", "Blue jacket", "Resident", "Jock", "b-b-buddy", "AC", "b-b-buddy"),
    new Neighbor("Labelle", "../assets/favoriteneighbor3.png", "Fashion first!", "Hedgehog", "Female", "October 31", "Scorpio", "Fashionable dress", "Special character", "Fashionista", "label", "CF", "label"),
    new Neighbor("Raymond", "../assets/characteroftheday9.png", "Stay on brand!", "Cat", "Male", "October 1", "Libra", "Business suit", "Resident", "Smug", "crisp", "NH", "crisp"),
    new Neighbor("Cherry", "../assets/characteroftheday10.png", "What what!", "Dog", "Female", "May 11", "Taurus", "Punk outfit", "Resident", "Sisterly", "what what", "NL", "what what"),
    new Neighbor("Marshal", "../assets/characteroftheday11.png", "Seize the day.", "Squirrel", "Male", "September 29", "Libra", "Vest", "Resident", "Smug", "sulky", "NL", "sulky"),
    new Neighbor("Audie", "../assets/characteroftheday12.png", "Be positive!", "Wolf", "Female", "August 31", "Virgo", "Orange dress", "Resident", "Peppy", "foxtrot", "NH", "foxtrot")
];

const busqueda = new URLSearchParams(window.location.search);
const namee = busqueda.get("name");


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