document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Ganti dengan username dan password yang diinginkan
    if (username === 'admin' && password === 'password') {
        window.location.href = 'index.html'; // Ganti dengan halaman setelah login berhasil
    } else {
        document.getElementById('login-error').style.display = 'block';
        setTimeout(function() {
            document.getElementById('login-error').style.display = 'none';
        }, 3000); // Menampilkan pesan error selama 3 detik
    }
});
