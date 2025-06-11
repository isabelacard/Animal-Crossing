class Neighbor {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

function getDailyRandomNeighbors(allNeighbors, count = 8) {
    const now = new Date();
    const daySeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const shuffled = [...allNeighbors];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = (daySeed + i * 31) % shuffled.length;
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

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

        const filteredNeighbors = neighbors.filter(n => n.name?.toLowerCase().includes(query));

        renderNeighbors(filteredNeighbors, '.neighbors');

        const favoritesContainer = document.querySelector('.favorites');
        if (favoritesContainer) favoritesContainer.innerHTML = '';

        const titleNeighbors = document.querySelector('.neighbors h2');
        const neighborsContainer = document.querySelector('.neighbors');

        if (query.trim() !== '') {
            if (titleNeighbors) titleNeighbors.style.display = 'none';
            if (neighborsContainer) neighborsContainer.style.paddingTop = '70px';
        } else {
            if (titleNeighbors) titleNeighbors.style.display = '';
            if (neighborsContainer) neighborsContainer.style.paddingTop = '';
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