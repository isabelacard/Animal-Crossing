const usuariosPorDefecto = [
    {
        nameAndSurname: "Mariana Cerón",
        email: "mariana@gmail.com",
        password: "1234",
        usuario: "marianacv",
    },
    {
        nameAndSurname: "Isabela Cardona",
        email: "isabela@gmail.com",
        password: "abcd",
        usuario: "isabelacv",
    },
];

if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuariosPorDefecto));
}

const favoritosMariana = [
    { name: "Eloise", image: "../assets/favoriteneighbor1.png" },
    { name: "Labelle", image: "../assets/favoriteneighbor3.png" },
    { name: "Roald", image: "../assets/favoriteneighbor2.png" },
];

const favoritosIsabela = [
    { name: "Raymond", image: "../assets/characteroftheday9.png" },
    { name: "Loli", image: "../assets/characteroftheday6.png" },
    { name: "Rolf", image: "../assets/characteroftheday7.png" },
];

if (!localStorage.getItem('favorites_marianacv')) {
    localStorage.setItem('favorites_marianacv', JSON.stringify(favoritosMariana));
}
if (!localStorage.getItem('favorites_isabelacv')) {
    localStorage.setItem('favorites_isabelacv', JSON.stringify(favoritosIsabela));
}

function renderFavorites(containerSelector, neighbors) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';

    const cuadroDiv = document.createElement('div');
    cuadroDiv.classList.add('cuadropro2');

    const h2 = document.createElement('h2');
    h2.id = 'titlefavorites';
    h2.textContent = 'Favorites';
    cuadroDiv.appendChild(h2);

    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cardis');

    neighbors.forEach(neighbor => {
        const a = document.createElement('a');
        a.href = `character.html?name=${encodeURIComponent(neighbor.name)}`;
        a.classList.add('cardfavoriteneighbor');

        const img = document.createElement('img');
        img.src = neighbor.image;
        img.alt = neighbor.name;

        const cardContent = document.createElement('div');
        cardContent.classList.add('cardcontent');

        const p = document.createElement('p');
        p.id = 'nameneighbor';
        p.textContent = neighbor.name;

        const icon = document.createElement('i');
        icon.className = 'icon fa-solid fa-star';

        icon.addEventListener('click', (event) => {
            event.preventDefault();
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });

        cardContent.appendChild(p);
        cardContent.appendChild(icon);
        a.appendChild(img);
        a.appendChild(cardContent);

        cardsDiv.appendChild(a);
    });

    cuadroDiv.appendChild(cardsDiv);
    container.appendChild(cuadroDiv);
}

window.addEventListener('DOMContentLoaded', () => {
    const logueado = JSON.parse(localStorage.getItem('logueado'));

    if (!logueado) {
        window.location.href = 'signup.html';
        return;
    }

    document.getElementById('profile-name').textContent = logueado.nameAndSurname || 'Sin nombre';
    document.getElementById('profile-email').textContent = logueado.email || 'Sin email';
    document.getElementById('profile-username').textContent = logueado.usuario || 'Sin usuario';

//CONTRASEÑA FORM

    const passwordElement = document.getElementById('profile-password');
    if (passwordElement) passwordElement.textContent = '******';

    const keyFavorites = `favorites_${logueado.usuario}`;
    const userFavorites = JSON.parse(localStorage.getItem(keyFavorites)) || [];
    renderFavorites('.favorites', userFavorites);

    const togglePasswordIcon = document.getElementById('togglePassword');
    if (togglePasswordIcon && passwordElement) {
        let isPasswordVisible = false;
        togglePasswordIcon.classList.add('fa-eye-slash');
        togglePasswordIcon.addEventListener('click', () => {
            if (!isPasswordVisible) {
                passwordElement.textContent = logueado.password;
                togglePasswordIcon.classList.remove('fa-eye-slash');
                togglePasswordIcon.classList.add('fa-eye');
            } else {
                passwordElement.textContent = '******';
                togglePasswordIcon.classList.remove('fa-eye');
                togglePasswordIcon.classList.add('fa-eye-slash');
            }
            isPasswordVisible = !isPasswordVisible;
        });
    }

    // Footer form
    const footerForm = document.querySelector('footer form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Mensaje enviado correctamente!');
            footerForm.reset();
        });
    }
});
