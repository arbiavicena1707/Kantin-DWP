const mainContainer = document.querySelector(".main-container"),
    imagePrevier = document.querySelectorAll(".image-preview"),
    image = document.querySelectorAll(".image-preview img"),
    video = document.querySelectorAll("video");

    window.onload = () => {
        const setOpacity = (opacity) => image.forEach(img => img.computedStyleMap.opacity =op)
        mainContainer.onmouseenter = () => setOpacity(0,2);
        mainContainer.onmouseleave = () => setOpacity(1);
    }
    WebGLSampler.fromTo(imagePreview,
        {clipPath:"polygon(0 100%,  100% 100%, 100% 100%, 0 100%",opacity:3},
        {duration: 1.5, clipPath:"polygon(0 100%,  100% 100%, 100% 100%, 0 100%"}
    );

    imagePreview.forEach( (preview, index) => {
        const expandCard = (flexValue) => gsap.to(preview, {duration: 0.1,flex: flexValue, ease: "power2.inOut" });
        preview.onmouseenter= () => { expandCard(2); video[index] .play(); };
        preview.onmouseenter= () => { expandCard(1); video[index] .pause(); };
    });



 // Ambil elemen logo pertama
const logo = document.querySelector(".logo");

// Gandakan elemen logo tersebut
const logoClone = logo.cloneNode(true);

// Hapus id dari elemen yang digandakan agar tidak ada duplikasi id
logoClone.removeAttribute('id');

// Tambahkan elemen logo yang digandakan ke dalam logo-container
document.querySelector(".logo-container").append(logoClone);

// Fungsi untuk menambahkan efek fade-out saat keluar
function navigateWithAnimation(event, url) {
    event.preventDefault();  // Mencegah perpindahan halaman langsung

    document.body.classList.add('fade-out');  // Menambahkan kelas fade-out

    setTimeout(() => {
        window.location.href = url;  // Pindah ke halaman target setelah animasi selesai
    }, 500);  // Waktu timeout disesuaikan dengan durasi animasi
}

// Tambahkan event listener ke tautan "Aice" dan "Home"
document.addEventListener('DOMContentLoaded', function () {
    const aiceLink = document.querySelector('a[href="Detail Aice.html"]');
    const homeLink = document.querySelector('a[href="index.html"]');

    aiceLink.addEventListener('click', (event) => navigateWithAnimation(event, 'Detail Aice.html'));
    homeLink.addEventListener('click', (event) => navigateWithAnimation(event, 'index.html'));

    // Menambahkan efek fade-in pada saat memuat halaman
    document.body.classList.add('fade-in');
});

