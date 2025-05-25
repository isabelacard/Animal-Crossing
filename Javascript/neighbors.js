const neighbors = [
    { name: "Eloise", image: "../assets/favoriteneighbor1.png" },
    { name: "Roald", image: "../assets/favoriteneighbor2.png" },
    { name: "Labelle", image: "../assets/favoriteneighbor3.png" },
    { name: "Raymond", image: "../assets/characteroftheday9.png" },
    { name: "Cherry", image: "../assets/characteroftheday10.png" },
    { name: "Marshal", image: "../assets/characteroftheday11.png" },
    { name: "Audie", image: "../assets/characteroftheday12.png" },
    { name: "Pecan", image: "../assets/characteroftheday1.png" },
    { name: "Ribbot", image: "../assets/characteroftheday2.png" },
    { name: "Molly", image: "../assets/characteroftheday3.png" },
    { name: "Static", image: "../assets/characteroftheday4.png" },
    { name: "Fauna", image: "../assets/characteroftheday5.png" },
    { name: "Loli", image: "../assets/characteroftheday6.png" },
    { name: "Rolf", image: "../assets/characteroftheday7.png" },
    { name: "Tom Nook", image: "../assets/characteroftheday8.png" },
];

function getMinuteRandomNeighbors(allNeighbors, count = 8) {
    const now = new Date();
    const minuteSeed = now.getMinutes(); 

    const shuffled = [...allNeighbors];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = (minuteSeed + i * 31) % shuffled.length;
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
}

const neighborsOfTheDay = getMinuteRandomNeighbors(neighbors); 
const discoverNeighbors = neighbors; 


function renderNeighbors(neighborsArray, containerSelector) {
    const container = document.querySelector(containerSelector);

    const cards = container.querySelectorAll('.cardneighbor');
    cards.forEach(card => card.remove());

    neighborsArray.forEach(neighbor => {
        const card = document.createElement('a');
        card.classList.add('cardneighbor');
        card.href = `./character.html?name=${encodeURIComponent(neighbor.name)}`;


        const img = document.createElement('img');
        img.src = neighbor.image;
        img.alt = neighbor.name;

        const content = document.createElement('div');
        content.classList.add('cardcontent');

        const name = document.createElement('p');
        name.textContent = neighbor.name;
        name.id = 'nameneighbor';

        const icon = document.createElement('i');
        icon.className = 'icon fa-regular fa-star';

        icon.addEventListener('click', function(event) {
            event.preventDefault();
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });

        content.appendChild(name);
        content.appendChild(icon);
        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);
    });
}

renderNeighbors(neighborsOfTheDay, '.neighbors');
renderNeighbors(discoverNeighbors, '.favorites');

const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        const filteredNeighborsDay = neighborsOfTheDay.filter(n => n.name?.toLowerCase().includes(query));
        const filteredFavorites = discoverNeighbors.filter(n => n.name?.toLowerCase().includes(query));

        renderNeighbors(filteredNeighborsDay, '.neighbors');
        renderNeighbors(filteredFavorites, '.favorites');

        const titleNeighbors = document.querySelector('.neighbors h2');
        const titleFavorites = document.querySelector('.favorites h2');

        const neighborsContainer = document.querySelector('.neighbors');
        const favoritesContainer = document.querySelector('.favorites');

        if (query.trim() !== '') {
            if (titleNeighbors) titleNeighbors.style.display = 'none';
            if (titleFavorites) titleFavorites.style.display = 'none';

            if (neighborsContainer) neighborsContainer.style.paddingTop = '70px';
            if (favoritesContainer) favoritesContainer.style.paddingTop = '20px';
        } else {
            if (titleNeighbors) titleNeighbors.style.display = '';
            if (titleFavorites) titleFavorites.style.display = '';

            if (neighborsContainer) neighborsContainer.style.paddingTop = '';
            if (favoritesContainer) favoritesContainer.style.paddingTop = '';
        }
    });
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