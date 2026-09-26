// ========== Ganti Nama Kamu ==========
const nama = "Nama Kamu";
document.getElementById("nama").textContent = nama;

// ========== Dark Mode ==========
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeToggle.textContent = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
});

// ========== Animasi Saat Scroll ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => {
    observer.observe(el);
});

// ========== Form Kontak ==========
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah halaman reload

    const namaPengirim = document.getElementById("namaPengirim").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (namaPengirim === "" || email === "" || pesan === "") {
        formMessage.textContent = "Mohon isi semua kolom!";
        formMessage.className = "form-message error";
        return;
    }

    // Simulasi pengiriman (karena belum pakai backend)
    formMessage.textContent = "Pesan berhasil dikirim! Terima kasih 😊";
    formMessage.className = "form-message success";

    // Kosongkan form
    contactForm.reset();

    // Hilangkan pesan sukses setelah 4 detik
    setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "form-message";
    }, 4000);
});

console.log("Website portfolio berhasil dimuat!");