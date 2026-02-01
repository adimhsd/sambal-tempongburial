# SedapNusantara - Landing Page UMKM Rumah Makan

Landing page profesional dan responsif untuk UMKM Rumah Makan "SedapNusantara". Project ini didesain untuk menampilkan menu yang menggugah selera, membangun kepercayaan pelanggan melalui profil & testimoni, serta meningkatkan konversi pesanan melalui integrasi WhatsApp.

## 🛠️ Teknologi yang Digunakan

Berikut adalah detail stack teknologi yang digunakan dalam pengembangan project ini:

### Core & Framework
*   **Library UI**: [React](https://react.dev/) (v19) - Digunakan untuk membangun antarmuka pengguna berbasis komponen yang modular dan efisien.
*   **Build Tool**: [Vite](https://vitejs.dev/) - Digunakan sebagai bundler dan dev server yang sangat cepat (Hot Module Replacement) untuk pengalaman pengembangan yang optimal.
*   **Bahasa Pemrograman**: JavaScript (ES6+), HTML5.

### Styling & Frontend
*   **CSS**: Vanilla CSS3.
    *   **CSS Variables**: Untuk manajemen tema (warna, spacing) yang konsisten.
    *   **Flexbox & Grid**: Untuk layout yang responsif dan modern.
    *   **Scroll Snap**: Untuk interaksi slider (Testimoni) yang smooth tanpa library tambahan.
    *   **Animations**: CSS Native animations (@keyframes) untuk efek interaktif.

### Assets & Optimization
*   **Images**: Format PNG/WebP (High-Res generated assets).
*   **Fonts**: Google Fonts (Playfair Display untuk kesan elegan/tradisional & Open Sans untuk keterbacaan modern).
*   **Icons**: SVG Inline icons (ringan dan scalable).

### Backend
*   **Static**: Project ini adalah *Single Page Application* (SPA) statis. Tidak menggunakan backend database server-side; data konten disimpan dalam file JSON lokal (`src/data/content.js`) untuk kemudahan pengelolaan oleh frontend developer.

## 🚀 Fitur Utama

1.  **Sticky Navigation**: Navigasi yang mudah diakses saat user melakukan scroll.
2.  **Hero Section Imersif**: Tampilan awal dengan visual yang kuat dan CTA yang jelas.
3.  **Dynamic Menu**: Grid menu responsif dengan fitur highlight "Best Seller".
4.  **Testimoni Slider**: Carousel ulasan pelanggan yang dapat digeser (swipeable).
5.  **Direct WhatsApp Link**: Tombol floating dan link pemesanan yang langsung membuka WhatsApp dengan *pre-filled message*.
6.  **Lokasi & Delivery**: Integrasi peta (Google Maps Embed) dan tombol akses cepat ke GoFood/GrabFood/ShopeeFood.

## 📂 Struktur Project

```bash
sedap-nusantara/
├── public/              # Aset statis publik
├── src/
│   ├── assets/          # Gambar dan file media
│   ├── components/      # Komponen React (Header, Hero, Menu, dll)
│   ├── data/            # Data konten (menu, testimoni, kontak)
│   ├── styles/          # File CSS per komponen
│   ├── App.jsx          # Komponen utama
│   ├── App.css          # Reset CSS
│   ├── index.css        # CSS Global & Variabel
│   └── main.jsx         # Entry point React
├── index.html           # File HTML utama
├── package.json         # Dependensi project
└── vite.config.js       # Konfigurasi Vite
```

## 💻 Cara Menjalankan Project

Pastikan Anda telah menginstall [Node.js](https://nodejs.org/) di komputer Anda.

1.  **Clone repository ini** (atau download zip):
    ```bash
    git clone https://github.com/username/sedap-nusantara.git
    cd sedap-nusantara
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Jalankan Development Server**:
    ```bash
    npm run dev
    ```
    Buka browser di `http://localhost:5173`.

4.  **Build untuk Production**:
    ```bash
    npm run build
    ```
    File hasil build akan berada di folder `dist/`.

---
*Dibuat dengan ❤️ untuk memajukan UMKM Indonesia.*
