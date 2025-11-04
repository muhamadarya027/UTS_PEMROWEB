// 1. Pesan alert otomatis ketika halaman dibuka
alert("Halo, selamat datang di website saya!");

// 2. Prompt untuk meminta nama pengguna
const nama = prompt("Masukkan nama Anda:");

// 3. Menampilkan hasilnya di halaman utama menggunakan DOM
const sapaanEl = document.getElementById("sapaan");
const namaSayaEl = document.getElementById("namaSaya");

if (nama && nama.trim() !== "") {
  sapaanEl.textContent = `Senang bertemu denganmu, ${nama}! 😊`;
  namaSayaEl.textContent = nama;
} else {
  sapaanEl.textContent = "Halo, Pengunjung! 😊";
  namaSayaEl.textContent = "Pengunjung";
}

// 4. Fungsi navigasi antar halaman
function tampilkanHalaman(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
