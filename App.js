<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Banner Foto dengan Teks di Dalam</title>
  <style>
    body { margin: 0; padding: 0; background-color: #000; color: white; font-family: Arial, sans-serif; display: flex; justify-content: center; }
    .container { width: 100%; max-width: 1200px; padding: 10px; }
    .banner { background-image: url('img/IMG_8331.png'); background-size: cover; background-position: center; height: 200px; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; color: white; border-radius: 10px; }
    .banner-title { font-size: 32px; margin: 10px 0; }
    .banner-subtitle { font-size: 24px; margin: 5px 0; }
    @media (max-width: 480px) { .banner { height: 100px; } .banner-title { font-size: 18px; } .banner-subtitle { font-size: 14px; } }
    @media (min-width: 481px) and (max-width: 768px) { .banner { height: 150px; } .banner-title { font-size: 22px; } .banner-subtitle { font-size: 18px; } }
    @media (min-width: 769px) and (max-width: 1024px) { .banner { height: 200px; } .banner-title { font-size: 26px; } .banner-subtitle { font-size: 20px; } }
    @media (min-width: 1025px) { .banner { height: 300px; } .banner-title { font-size: 32px; } .banner-subtitle { font-size: 24px; } }
    .crypto-balances { display: flex; justify-content: center; align-items: center; margin-top: 20px; gap: 20px; }
    .crypto-item { text-align: center; cursor: pointer; }
    .crypto-item img { width: 50px; height: 50px; }
    .crypto-item p { margin-top: 5px; font-size: 18px; }
    .darkweb-links { display: flex; justify-content: space-around; gap: 10px; flex-wrap: nowrap; overflow-x: scroll; padding: 10px 0; margin-top: 20px; }
    .darkweb-link { background-color: #444; padding: 10px 20px; border-radius: 5px; text-decoration: none; color: white; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; flex-direction: column; }
    .darkweb-link:hover { background-color: #666; }
    .darkweb-link img { width: 30px; height: 30px; }

    /* Gaya untuk galeri gambar */
    .image-gallery { display: flex; overflow-x: auto; gap: 10px; margin-top: 20px; padding: 10px 0; }
    .gallery-item { flex: 0 0 auto; width: 150px; height: 150px; border-radius: 10px; position: relative; margin: 5px; }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 10px; }
    .gallery-item div { position: absolute; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.5); color: white; text-align: center; padding: 5px; font-size: 14px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; }
    .image-gallery::-webkit-scrollbar { height: 8px; }
    .image-gallery::-webkit-scrollbar-thumb { background-color: #888; border-radius: 4px; }
    .image-gallery::-webkit-scrollbar-track { background-color: #333; }
  </style>
  <script>
    const btcToEthRate = 15; // Nilai tukar BTC ke ETH (contoh nilai)
    const btcToUsdtRate = 30000; // Nilai tukar BTC ke USDT (contoh nilai)

    function handleCryptoClick(crypto) {
      if (crypto === 'ETH' || crypto === 'USDT') {
        const amountBTC = prompt("Masukkan jumlah BTC yang ingin dipindahkan:");
        if (amountBTC && !isNaN(amountBTC)) {
          const amount = parseFloat(amountBTC);
          if (crypto === 'ETH') {
            const ethAmount = amount * btcToEthRate;
            alert(`${amount} BTC akan dipindahkan ke ${ethAmount.toFixed(4)} ETH.`);
          } else if (crypto === 'USDT') {
            const usdtAmount = amount * btcToUsdtRate;
            alert(`${amount} BTC akan dipindahkan ke ${usdtAmount.toFixed(2)} USDT.`);
          }
        } else {
          alert("Jumlah BTC tidak valid.");
        }
      } else if (crypto === 'BTC') {
        const address = prompt("Masukkan Alamat Bitcoin (59 digit):");
        if (address && address.length === 59) {
          alert("Alamat Bitcoin valid: " + address);
        } else {
          alert("Alamat Bitcoin tidak valid, pastikan alamatnya 59 digit.");
        }
      }
    }
  </script>
</head>
<body>
  <div class="container">
    <div class="banner">
      <h1 class="banner-title">Nama Web</h1>
      <h2 class="banner-subtitle">Nama Lainnya Web</h2>
      <h3 class="banner-subtitle">Nama Lainnya</h3>
      <h4 class="banner-subtitle">Nama Lainnya</h4>
    </div>

    <!-- Saldo di bawah banner -->
    <div class="crypto-balances">
      <div class="crypto-item" onclick="handleCryptoClick('ETH')">
        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH">
        <p>0.23 ETH</p>
      </div>
      <div class="crypto-item" onclick="handleCryptoClick('BTC')">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC">
        <p>1.45 BTC</p>
      </div>
      <div class="crypto-item" onclick="handleCryptoClick('USDT')">
        <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT">
        <p>2000 USDT</p>
      </div>
    </div>

    <!-- Darkweb links memanjang ke samping -->
    <div class="darkweb-links">
      <a href="darkweb1.html" class="darkweb-link">
        <img src="logo-darkweb1.png" alt="Forsaken">
        Forsaken
      </a>
      <a href="darkweb2.html" class="darkweb-link">
        <img src="logo-darkweb2.png" alt="Voidwalker">
        Voidwalker
      </a>
      <a href="darkweb3.html" class="darkweb-link">
        <img src="logo-darkweb3.png" alt="Abyss">
        Abyss
      </a>
      <a href="darkweb4.html" class="darkweb-link">
        <img src="logo-darkweb4.png" alt="Echoes">
        Echoes
      </a>
      <a href="darkweb5.html" class="darkweb-link">
        <img src="logo-darkweb5.png" alt="Wraiths">
        Wraiths
      </a>
    </div>

    <!-- Galeri gambar -->
    <div class="image-gallery">
      <div class="gallery-item">
        <img src="img/image1.jpg" alt="Gambar 1">
        <div>Gambar 1</div>
      </div>
      <div class="gallery-item">
        <img src="img/image2.jpg" alt="Gambar 2">
        <div>Gambar 2</div>
      </div>
      <div class="gallery-item">
        <img src="img/image3.jpg" alt="Gambar 3">
        <div>Gambar 3</div>
      </div>
      <div class="gallery-item">
        <img src="img/image4.jpg" alt="Gambar 4">
        <div>Gambar 4</div>
      </div>
    </div>
  </div>
</body>
</html>
