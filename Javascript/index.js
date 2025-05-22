const characters = [
    {
        name: "Mariana",
        gender: "female",
        species: "human",
        quote: "Everything happens for something",
        birthday: "March 17th",
        image: "./assets/charactermariana.png"
    },
    {
        name: "Isabela",
        gender: "female",
        species: "human",
        quote: "Do not stress, that stress me",
        birthday: "October 28th",
        image: "./assets/characterisabela.png"
    }
];

function renderCharacters() {
    const container = document.getElementById("charactersContainer");

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("character-card");

        card.innerHTML = `
            <h1>${character.name}</h1>
            <br>
            <p>Gender: ${character.gender}</p>
            <p>Species: ${character.species}</p>
            <p>Quote: "${character.quote}"</p>
            <p>Birthday: ${character.birthday}</p>
            <img src="${character.image}" alt="${character.name}">
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderCharacters);
