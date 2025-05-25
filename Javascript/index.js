//QUIENES SOMOS

const characters = [
    {
        name: "Mariana",
        gender: "female",
        species: "human",
        quote: "Everything happens for something",
        birthday: "March 17th",
        imgId: "imgmariana",
        imgSrc: "./assets/charactermariana.png",
        containerClass: "marianacontainer"
    },
    {
        name: "Isabela",
        gender: "female",
        species: "human",
        quote: "Do not stress, that stress me",
        birthday: "October 28th",
        imgId: "imgisabela",
        imgSrc: "./assets/characterisabela.png",
        containerClass: "isabelacontainer"
    }
];

function renderCharacters() {
    const container = document.getElementById("charactersContainer");
    container.innerHTML = ""; 

    characters.forEach(character => {
        const div = document.createElement("div");
        div.classList.add(character.containerClass);

        div.innerHTML = `
            <h1>${character.name}</h1>
            <br>
            <p>Gender: ${character.gender}</p>
            <p>Species: ${character.species}</p>
            <p>Quote: "${character.quote}"</p>
            <p>Birthday: ${character.birthday}</p>
            <img src="${character.imgSrc}" alt="${character.name}" id="${character.imgId}">
        `;

        container.appendChild(div);
    });
}

renderCharacters();


//SCROLL CARROUSEL

let current = 1;
const total = 4; 

setInterval(() => {
    current = current % total + 1;
    document.getElementById('slide' + current).checked = true;
}, 3000);


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