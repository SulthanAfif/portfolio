// ========== Ganti Nama Kamu ==========
const nama = "Muhammad Sulthan Muqsith Afif";
const namaElement = document.getElementById("nama");
if (namaElement) {
    namaElement.textContent = nama;
}

// ========== Loading Animation ==========
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 800); // Loading muncul selama 0.8 detik
    }
});

// ========== Dark Mode ==========
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    if (darkModeToggle) darkModeToggle.textContent = "☀️";
}

if (darkModeToggle) {
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
}

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

fadeElements.forEach(el => observer.observe(el));

// ========== Form Kontak (sederhana, tanpa backend) ==========
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const namaPengirim = document.getElementById("namaPengirim").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (namaPengirim === "" || email === "" || pesan === "") {
            formMessage.textContent = "Mohon isi semua kolom!";
            formMessage.className = "form-message error";
            return;
        }

        formMessage.textContent = "Pesan berhasil dikirim! Terima kasih 😊";
        formMessage.className = "form-message success";
        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = "";
            formMessage.className = "form-message";
        }, 4000);
    });
}

console.log("Website portfolio berhasil dimuat!");