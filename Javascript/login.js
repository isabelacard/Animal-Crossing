const usuariosPorDefecto = [
    {
        nombre: "Mariana",
        apellido: "Cerón",
        email: "mariana@gmail.com",
        password: "1234",
        usuario: "marianacv"
    },
    {
        nombre: "Isabela",
        apellido: "Cardona",
        email: "isabela@gmail.com",
        password: "abcd",
        usuario: "isabelacv"
    },
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