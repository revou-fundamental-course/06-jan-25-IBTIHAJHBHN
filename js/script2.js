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

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnails img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.style.display = 'none';
    thumbnails[i].classList.remove('active');
  });

  // Show the current slide and activate the thumbnail
  slides[slideIndex].style.display = 'block';
  thumbnails[slideIndex].classList.add('active');
}

function moveToNext() {
  slideIndex++;
  showSlide(slideIndex);
}

function moveToPrev() {
  slideIndex--;
  showSlide(slideIndex);
}

// Click on next/prev buttons
next.addEventListener('click', moveToNext);
prev.addEventListener('click', moveToPrev);

// Click on thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

// Auto slide every 3 seconds
setInterval(moveToNext, 3000);

// Initial display
showSlide(slideIndex);
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
