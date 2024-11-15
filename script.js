let currentToken = '';

function checkStorageAndDownload(sizeInZB) {
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(({ quota, usage }) => {
            const availableSpace = quota - usage;

            let tokenFileSize;
            if (sizeInZB === 44) {
                tokenFileSize = 44 * (1024 ** 5);
            } else if (sizeInZB === 55) {
                tokenFileSize = 55 * (1024 ** 5);
            }

            if (availableSpace < tokenFileSize) {
                alert("Ruang penyimpanan tidak cukup untuk mengunduh file.");
                return;
            }

            updateProgressBar(20);

            checkUserLocation(); // Periksa lokasi pengguna sebelum melanjutkan
        }).catch((error) => {
            console.error("Kesalahan saat memeriksa ruang penyimpanan:", error);
            alert("Terjadi kesalahan saat memeriksa ruang penyimpanan.");
        });
    } else {
        alert("API penyimpanan tidak didukung di browser ini.");
    }
}

function checkUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Memeriksa apakah lokasi pengguna berada di area yang diperbolehkan
            if (isInAllowedCountry(lat, lon)) {
                generateTokenAndDownload();
            } else {
                alert('Pengunduhan hanya diperbolehkan di wilayah yang diperbolehkan.');
            }
        });
    } else {
        alert("Geolokasi tidak didukung di browser ini.");
    }
}

function isInAllowedCountry(latitude, longitude) {
    // Memeriksa apakah koordinat pengguna berada di negara yang diizinkan
    return (
        (latitude >= -6.0 && latitude <= 6.0 && longitude >= 95.0 && longitude <= 141.0) ||  // Indonesia
        (latitude >= 35.0 && latitude <= 40.0 && longitude >= -120.0 && longitude <= -115.0)  // USA
    );
}

function generateTokenAndDownload() {
    currentToken = generateToken();
    const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000);  
    sessionStorage.setItem("downloadToken", currentToken);
    sessionStorage.setItem("tokenExpirationTime", expirationTime);

    const fileContent = "Token unik untuk file asli: " + currentToken;
    const encryptedContent = encryptFile(fileContent);
    const blob = new Blob([encryptedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tokenFile.txt';
    link.click();

    updateProgressBar(100);
    alert("File token telah diunduh. Token baru: " + currentToken);
}

function generateToken() {
    const length = 22;
    const charset = 'あいうえおかきくけこさしすせそたちつてと';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return token;
}

function encryptFile(fileContent) {
    return fileContent.split('').reverse().join('');
}

function updateProgressBar(progress) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.value = progress;
}

document.addEventListener('DOMContentLoaded', function() {
    // Handle gallery image click event
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('imgCaption');

    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const imgSrc = event.target.src;
            const caption = event.target.alt;
            modal.style.display = "block";
            modalImg.src = imgSrc;
            captionText.textContent = caption;
        });
    });

    // Close the modal when clicking the close button
    function closeModal() {
        modal.style.display = "none";
    }

    document.querySelector('.close').addEventListener('click', closeModal);
});
