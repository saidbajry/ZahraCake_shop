// Database Kue (Gampang buat ditambahin)
const cakes = [
    {
        name: "Strawberry Chiffon",
        price: "Rp 150.000",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Chocolate Fudge",
        price: "Rp 175.000",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Matcha Tiramisu",
        price: "Rp 185.000",
        image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Classic Velvet",
        price: "Rp 160.000",
        image: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=500"
    }
];

// Function untuk nampilin kue ke HTML
function displayCakes() {
    const gallery = document.getElementById('cake-gallery');

    cakes.forEach(cake => {
        const card = `
            <div class="cake-card">
                <img src="${cake.image}" alt="${cake.name}">
                <div class="cake-info">
                    <h3>${cake.name}</h3>
                    <p class="price">${cake.price}</p>
                    <br>
                    <a href="https://wa.me/6281234567890?text=Halo, saya mau pesan ${cake.name}" class="btn-cta" style="padding: 8px 20px; font-size: 14px;">Order via WA</a>
                </div>
            </div>
        `;
        gallery.innerHTML += card;
    });
}

// Jalankan fungsi saat page load
window.onload = displayCakes;