const registro = document.getElementById('input');

function registrarUsuario(e) {
  e.preventDefault();

  const nameAndSurnameValor = document.getElementById('nameAndSurname').value;
  const emailValor = document.getElementById('email').value;
  const userValor = document.getElementById('user').value;
  const passwordValor = document.getElementById('password').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const existeUsuario = usuarios.find(
    (usuario) => usuario.email === emailValor || usuario.user === userValor
  );

  if (existeUsuario) {
    alert("El usuario o el email ya está registrado!!!");
    registro.reset();
    return;
  }

  const usuario = {
    nameAndSurname: nameAndSurnameValor,
    email: emailValor,
    user: userValor,
    password: passwordValor,
  };

  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("Usuario creado con éxito!");
  registro.reset();
  window.location.href = 'login.html';
}

registro.addEventListener('submit', registrarUsuario);
