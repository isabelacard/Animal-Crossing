//QUIENES SOMOS

class Character {
    constructor(name, gender, species, quote, birthday, imgId, imgSrc, containerClass) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.quote = quote;
        this.birthday = birthday;
        this.imgId = imgId;
        this.imgSrc = imgSrc;
        this.containerClass = containerClass;
    }
}

const characters = [
    new Character("Mariana", "female", "human", "Everything happens for something", "March 17th", "imgmariana", "./assets/charactermariana.png", "marianacontainer"),
    new Character("Isabela", "female", "human", "Do not stress, that stress me", "October 28th", "imgisabela", "./assets/characterisabela.png", "isabelacontainer")
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

            const formData = new FormData(footerForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            let mensajes = JSON.parse(localStorage.getItem('informacionForm')) || [];
            mensajes.push(data);
            localStorage.setItem('informacionForm', JSON.stringify(mensajes));

            alert('¡Mensaje enviado correctamente!');
            footerForm.reset();
        });
    }
});