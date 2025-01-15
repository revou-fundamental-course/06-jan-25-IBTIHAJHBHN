// Menampilkan modal ketika halaman pertama kali dimuat
window.onload = function() {
    document.getElementById('welcomeModal').style.display = 'flex';
};

// Menangani pengiriman nama
document.getElementById('submitBtn').addEventListener('click', function() {
    var userName = document.getElementById('nameInput').value.trim();

    // Jika nama diisi
    if (userName !== '') {
        document.getElementById('welcomeModal').style.display = 'none'; // Menyembunyikan modal
        document.getElementById('welcomeMessage').classList.remove('hidden'); // Menampilkan pesan selamat datang
        document.getElementById('userName').textContent = userName; // Menampilkan nama pengunjung
    } else {
        alert('Harap masukkan nama terlebih dahulu!');
    }
});

const contactForm = document.getElementById('contactForm');
        const messageList = document.getElementById('messageList');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const gender = document.getElementById('gender').value;
            const message = document.getElementById('message').value;

            const messageItem = document.createElement('div');
            messageItem.classList.add('message-item');
            messageItem.innerHTML = `
                <h3>${name} (${gender})</h3>
                <p>Email: ${email}</p>
                <p>Pesan: ${message}</p>
            `;
            messageList.appendChild(messageItem);

            contactForm.reset();
        });