function submitName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        document.getElementById('userName').textContent = nameInput;
        document.querySelector('.welcome-container').style.display = 'none';
        document.getElementById('greetingMessage').style.display = 'block';

        // Redirect to another page after 3 seconds
        setTimeout(function() {
            window.location.href = "mainpage.html";  // Ganti dengan URL halaman utama Anda
        }, 3000);  // 3 detik
    } else {
        alert("Nama tidak boleh kosong!");
    }
}
