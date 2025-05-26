class Usuario {
    constructor(nameAndSurname, email, password, usuario) {
        this.nameAndSurname = nameAndSurname;
        this.email = email;
        this.password = password;
        this.usuario = usuario;
    }
}

const usuariosPorDefecto = [
    new Usuario("Mariana Cerón", "mariana@gmail.com", "1234", "marianacv"),
    new Usuario("Isabela Cardona", "isabela@gmail.com", "abcd", "isabelacv"),
];

if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuariosPorDefecto));
}

const loginForm = document.getElementById('loginForm');

function ingresarUsuario(e) {
    e.preventDefault();
    const email = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existeUsuario = usuarios.find((usuario) => usuario.email === email);

    if (!existeUsuario) {
        alert("El usuario no existe, favor registrarlo!");
        loginForm.reset();
        return;
    }

    if (existeUsuario.password !== password) {
        alert("La contraseña es incorrecta!");
        loginForm.reset();
        return;
    }

const usuarioLogueado = {
    nameAndSurname: existeUsuario.nameAndSurname,
    email: existeUsuario.email,
    password: existeUsuario.password,
    usuario: existeUsuario.usuario
};

    localStorage.setItem('logueado', JSON.stringify(usuarioLogueado));
    window.location.href = 'neighbors.html'; 
}

loginForm.addEventListener('submit', ingresarUsuario);

//LOGIN

document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });
});
