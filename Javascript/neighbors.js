//PROTECCION ACCESO 
document.addEventListener('DOMContentLoaded', function() {
    const logueado = JSON.parse(localStorage.getItem('logueado'));
    if (!logueado) {
        window.location.href = 'login.html'; 
        return;
    }
});

class Neighbor {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

async function fetchNeighborsFromAPI() {
    try {
        const response = await fetch('https://api.nookipedia.com/villagers', {
            headers: {
                "X-API-KEY": "9b35898d-19d0-4efc-8150-292756fc7c5f",
                "X-API-VERSION": "1.0.0"
            }
        });

        const data = await response.json();

        return data.map(v => new Neighbor(v.name, v.image_url));
    } catch (error) {
        console.error('Error al cargar vecinos desde la API:', error);
        return [];
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

    const logueado = JSON.parse(localStorage.getItem('logueado'));
    const keyFavorites = logueado ? `favorites_${logueado.usuario}` : null;
    const userFavorites = keyFavorites ? (JSON.parse(localStorage.getItem(keyFavorites)) || []) : [];

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
        const isFavorite = userFavorites.some(f => f.name === neighbor.name);
        icon.className = isFavorite ? 'icon fa-solid fa-star' : 'icon fa-regular fa-star';

        icon.addEventListener('click', function (event) {
            event.preventDefault();
            const logueado = JSON.parse(localStorage.getItem('logueado'));
            if (!logueado) return;
            const keyFavorites = `favorites_${logueado.usuario}`;
            let userFavorites = JSON.parse(localStorage.getItem(keyFavorites)) || [];
            const isFavorite = userFavorites.some(f => f.name === neighbor.name);

            if (isFavorite) {
                userFavorites = userFavorites.filter(f => f.name !== neighbor.name);
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            } else {
                userFavorites.push(neighbor); 
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
            localStorage.setItem(keyFavorites, JSON.stringify(userFavorites));

            if (typeof renderFavorites === 'function') {
                renderFavorites('.favorites', userFavorites);
            }
        });

        content.appendChild(name);
        content.appendChild(icon);
        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    const allNeighbors = await fetchNeighborsFromAPI();
    const neighborsOfTheDay = getDailyRandomNeighbors(allNeighbors, 8);

    renderNeighbors(neighborsOfTheDay, '.neighbors');
    renderNeighbors(allNeighbors, '.favorites');

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();

            const filtered = allNeighbors.filter(n => n.name?.toLowerCase().includes(query));

            renderNeighbors(filtered, '.neighbors');

            const neighborsTitle = document.querySelector('.neighbors h2');
            const neighborsContainer = document.querySelector('.neighbors');

            if (query.trim() !== '') {
                if (neighborsTitle) neighborsTitle.style.display = 'none';
                if (neighborsContainer) neighborsContainer.style.paddingTop = '70px';
            } else {
                if (neighborsTitle) neighborsTitle.style.display = '';
                if (neighborsContainer) neighborsContainer.style.paddingTop = '';
            }
        });
    }
});

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