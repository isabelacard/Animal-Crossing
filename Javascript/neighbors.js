const neighbors = [
    { name: "Pecan", image: "../assets/characteroftheday1.png" },
    { name: "Ribbot", image: "../assets/characteroftheday2.png" },
    { name: "Molly", image: "../assets/characteroftheday3.png" },
    { name: "Static", image: "../assets/characteroftheday4.png" },
    { name: "Fauna", image: "../assets/characteroftheday5.png" },
    { name: "Loli", image: "../assets/characteroftheday6.png" },
    { name: "Rolf", image: "../assets/characteroftheday7.png" },
    { name: "Tom Nook", image: "../assets/characteroftheday8.png" },
    { name: "Eloise", image: "../assets/favoriteneighbor1.png" },
    { name: "Roald", image: "../assets/favoriteneighbor2.png" },
    { name: "Labelle", image: "../assets/favoriteneighbor3.png" },
    { name: "Raymond", image: "../assets/neighbor-raymond.png" },
    { name: "Cherry", image: "../assets/neighbor-cherry.png" },
    { name: "Marshal", image: "../assets/neighbor-marshal.png" },
    { name: "Audie", image: "../assets/neighbor-audie.png" }
];

// Separar vecinos del día (primeros 8) y favoritos (resto)
const neighborsOfTheDay = neighbors.slice(0, 8);
const favoriteNeighbors = neighbors.slice(8);

// Función para crear tarjetas
function renderNeighbors(neighborsArray, containerSelector) {
    const container = document.querySelector(containerSelector);

    neighborsArray.forEach(neighbor => {
        const card = document.createElement('a');
        card.classList.add('cardneighbor');
        card.href = '#';

        const img = document.createElement('img');
        img.src = neighbor.image;
        img.alt = neighbor.name;

        const content = document.createElement('div');
        content.classList.add('cardcontent');

        const name = document.createElement('p');
        name.textContent = neighbor.name;
        name.id = 'nameneighbor';

        const icon = document.createElement('i');
        icon.className = 'icon fa-regular fa-star'; // estrella vacía

        // 🔁 Función para alternar favorito
        icon.addEventListener('click', function(event) {
            event.preventDefault(); // evitar que el <a> recargue
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

// Renderizar vecinos en sus respectivas secciones
renderNeighbors(neighborsOfTheDay, '.neighbors');
renderNeighbors(favoriteNeighbors, '.favorites');