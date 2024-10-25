document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulación de validación de usuarios
    const users = {
        admin: { password: 'admin123', role: 'admin' },
        user: { password: 'user123', role: 'user' }
    };

    // Verificar si el usuario y la contraseña son correctos
    if (users[username] && users[username].password === password) {
        const role = users[username].role;

        if (role === 'admin') {
            window.location.href = 'admin-dashboard.html'; // Redirigir al dashboard de administrador
        } else if (role === 'user') {
            window.location.href = 'user-dashboard.html'; // Redirigir al dashboard de usuario
        }
    } else {
        document.getElementById('loginMessage').textContent = 'Usuario o contraseña incorrectos';
    }
});
