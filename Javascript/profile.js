class Usuario {
    constructor(nameAndSurname, email, password, usuario) {
        this.nameAndSurname = nameAndSurname;
        this.email = email;
        this.password = password;
        this.usuario = usuario;
    }
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

        if (neighbor.phrase) {
            const phrase = document.createElement('p');
            phrase.textContent = `"${neighbor.phrase}"`;
            cardContent.appendChild(phrase);
        }

        if (neighbor.species || neighbor.gender) {
            const info1 = document.createElement('p');
            info1.textContent = `Species: ${neighbor.species || ''} | Gender: ${neighbor.gender || ''}`;
            cardContent.appendChild(info1);
        }
        if (neighbor.birthday || neighbor.zodiac) {
            const info2 = document.createElement('p');
            info2.textContent = `Birthday: ${neighbor.birthday || ''} | Zodiac: ${neighbor.zodiac || ''}`;
            cardContent.appendChild(info2);
        }
        if (neighbor.clothing || neighbor.island || neighbor.personality) {
            const info3 = document.createElement('p');
            info3.textContent = `Clothing: ${neighbor.clothing || ''} | Island: ${neighbor.island || ''} | Personality: ${neighbor.personality || ''}`;
            cardContent.appendChild(info3);
        }
        if (neighbor.prevPhrases) {
            const info4 = document.createElement('p');
            info4.textContent = `Prev Phrases: ${neighbor.prevPhrases}`;
            cardContent.appendChild(info4);
        }
        if (neighbor.debut || neighbor.catchphrase) {
            const info5 = document.createElement('p');
            info5.textContent = `Debut: ${neighbor.debut || ''} | Catchphrase: ${neighbor.catchphrase || ''}`;
            cardContent.appendChild(info5);
        }

        const icon = document.createElement('i');
        icon.className = 'icon fa-solid fa-star';

        icon.addEventListener('click', (event) => {
            event.preventDefault();
            const logueado = JSON.parse(localStorage.getItem('logueado'));
            if (!logueado) return;
            const keyFavorites = `favorites_${logueado.usuario}`;
            let userFavorites = JSON.parse(localStorage.getItem(keyFavorites)) || [];
            userFavorites = userFavorites.filter(f => f.name !== neighbor.name);
            localStorage.setItem(keyFavorites, JSON.stringify(userFavorites));
            renderFavorites(containerSelector, userFavorites);
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

    const passwordElement = document.getElementById('profile-password');
    if (passwordElement) passwordElement.textContent = '****';

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
                passwordElement.textContent = '****';
                togglePasswordIcon.classList.remove('fa-eye');
                togglePasswordIcon.classList.add('fa-eye-slash');
            }
            isPasswordVisible = !isPasswordVisible;
        });
    }
});

// PASSWORD CHANGE
    const link = document.getElementById('changePasswordLink');
    const form = document.getElementById('changePasswordForm');
    const btn = document.getElementById('confirmChangeBtn');
    const msg = document.getElementById('passwordChangeMessage');

    if (link && form && btn && msg) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            form.style.display = 'block';
        });

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const newPassword = document.getElementById('newPassword').value.trim();
            if (!newPassword || newPassword.length < 4) {
                msg.textContent = 'Password must be at least 4 characters.';
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem('usuarios'));
            const index = usuarios.findIndex(u => u.usuario === logueado.usuario);
            if (index !== -1) {
                usuarios[index].password = newPassword;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                logueado.password = newPassword;
                localStorage.setItem('logueado', JSON.stringify(logueado));
                msg.textContent = `Password changed successfully.`;

                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        });
    }

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
            
            localStorage.setItem('informacionForm', JSON.stringify(data));

            alert('¡Mensaje enviado correctamente!');
            footerForm.reset();
        });
    }
});