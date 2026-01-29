const cakes = [
    { name: "Choco Fantasy", price: "Rp 45.000", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
    { name: "Strawberry Delight", price: "Rp 50.000", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500" },
    { name: "Rainbow Roll", price: "Rp 35.000", img: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=500" },
    { name: "Cheese Tart", price: "Rp 40.000", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500" },
    { name: "Tiramisu Cake", price: "Rp 55.000", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?w=500" },
    { name: "Cupcake Variety", price: "Rp 30.000", img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500" }
];

function renderCakes() {
    const container = document.getElementById('cake-container');
    container.innerHTML = cakes.map((cake, index) => {
        // Tentukan arah masuk berdasarkan index (ganjil/genap)
        const sideClass = (index % 2 === 0) ? 'from-left' : 'from-right';
        return `
            <div class="cake-card ${sideClass}">
                <img src="${cake.img}" alt="${cake.name}">
                <h3>${cake.name}</h3>
                <p class="price">${cake.price}</p>
                <a href="https://wa.me/6281234567890?text=Halo, saya mau pesan ${cake.name}" class="btn-wa-main" style="padding: 8px 20px; font-size: 13px;">Pesan Sekarang</a>
            </div>
        `;
    }).join('');

    // Inisialisasi animasi setelah kartu dirender
    initScrollAnimation();
}

function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.2 }); // Muncul setelah 20% elemen terlihat

    document.querySelectorAll('.cake-card').forEach(card => {
        observer.observe(card);
    });
}

// Navbar Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Jalankan saat load
document.addEventListener('DOMContentLoaded', renderCakes);