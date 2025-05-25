window.addEventListener('DOMContentLoaded', () => {
    const logueado = JSON.parse(localStorage.getItem('logueado'));

    if (!logueado) {
        window.location.href = 'signup.html';
        return;
    }

    document.getElementById('profile-name').textContent = logueado.nombreCompleto;
    document.getElementById('profile-email').textContent = logueado.email;
    document.getElementById('profile-username').textContent = logueado.usuario;
    document.getElementById('profile-password').textContent = logueado.password;
});
