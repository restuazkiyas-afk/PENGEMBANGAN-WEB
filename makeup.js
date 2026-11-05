// ===== JAVASCRIPT dimakeupinsalma =====

// 1. Mengubah konten HTML (innerHTML)
function ubahSapaan() {
    document.getElementById("sapaan").innerHTML = "Halo! Selamat datang di dimakeupinsalma";
}

// 2. Mengubah atribut HTML (src gambar)
function gantiFoto(alamat) {
    document.getElementById("fotoUtama").src = alamat;
}

// 3. Mengubah gaya tampilan (CSS)
function besarkanTeks() {
    document.getElementById("teksArtikel").style.fontSize = "24px";
}

function kecilkanTeks() {
    document.getElementById("teksArtikel").style.fontSize = "16px";
}

// 4. Menampilkan elemen HTML
function tampilHarga() {
    document.getElementById("infoHarga").style.display = "block";
}

// 5. Menyembunyikan elemen HTML
function sembunyiHarga() {
    document.getElementById("infoHarga").style.display = "none";
}