# Redesign Website PT ASDP Indonesia Ferry (Persero)

Proyek ini merupakan perancangan ulang (*redesign*) tampilan antarmuka website profil dan layanan **PT ASDP Indonesia Ferry (Persero)** berbasis web statis interaktif. Proyek ini disusun untuk memenuhi tugas **Ujian Tengah Semester (UTS)** mata kuliah Web Programming / Pemrograman Web dengan menerapkan standar desain korporat BUMN yang modern, responsif (*desktop* & *mobile*), serta konvensi penamaan `id` dan `class` khusus.

---

## Identitas Mahasiswa

* **Nama Lengkap:** Rayival Dede Saputra
* **NIM:** 2503010032
* **Program Studi:** Teknik Informatika
* **Fakultas:** Fakultas Teknik
* **Institusi:** Universitas Perjuangan Tasikmalaya
* **Mata Kuliah:** Web Programming / Pemrograman Web
* **Keperluan:** Ujian Tengah Semester (UTS) Ganjil Tahun Akademik 2026/2027
* **Portofolio:** [rayival.vercel.app](https://rayival.vercel.app/)

---

## Ketentuan Teknis yang Diterapkan

1. **Jumlah Halaman (8 Halaman):** Melampaui batas minimal 7 halaman, mencakup halaman wajib `index.html` (Beranda) dan `kontak.html` (Formulir Pengiriman Pesan).
2. **Konvensi Penamaan CSS:** Seluruh selektor `id` dan `class` di seluruh file HTML, CSS, dan JavaScript menggunakan awalan nama mahasiswa (`rayival_`), seperti `#rayival_header`, `#rayival_footer`, `.rayival_nav_link`, `#rayival_hero`, dan `.rayival_card`.
3. **Arsitektur Header & Footer Terpusat:** Komponen *header* (lengkap dengan *top utility bar* dan navigasi aktif otomatis) serta *footer* dirender terpusat melalui `js/script.js` ke seluruh 8 halaman untuk konsistensi tampilan dan kemudahan pemeliharaan kode.
4. **Teknologi Murni:** Dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript** tanpa framework atau template eksternal.
5. **Desain Responsif:** Mendukung tampilan layar *desktop*, tablet, hingga perangkat *mobile* dengan menu navigasi adaptif (*hamburger menu*) dan tabel yang dapat digeser (*horizontal scroll*).

---

## Struktur Folder Proyek

```text
redesign-asdp-rayival/
├── index.html          # Halaman 1: Beranda, Hero Slideshow, Kalkulator Tarif & Sekilas Tentang Kami
├── tentang.html        # Halaman 2: Profil Korporasi, Sejarah, Visi Misi & Nilai AKHLAK
├── layanan.html        # Halaman 3: Layanan Reguler, Express, Kawasan Waterfront & Spesifikasi Armada
├── jadwal-tarif.html   # Halaman 4: Pencarian Jadwal 7 Lintasan, Kalkulator Tarif & Golongan Kendaraan
├── pemesanan.html      # Halaman 5: Panduan Reservasi Ferizy, Aturan Operasional & Simulator E-Ticket
├── berita.html         # Halaman 6: Rilis Berita & Informasi Operasional dengan Filter Kategori
├── galeri.html         # Halaman 7: Dokumentasi Armada & Fasilitas dengan Lightbox Modal
├── kontak.html         # Halaman 8: Formulir Layanan Pelanggan, Contact Center & Kantor Cabang
├── css/
│   └── style.css       # Stylesheet utama dengan prefix rayival_
├── js/
│   └── script.js       # Logika terpusat (Header/Footer, Slideshow, Kalkulator, Filter, Lightbox, Validasi)
├── assets/
│   ├── logo.png        # Logo resmi PT ASDP Indonesia Ferry (Persero)
│   ├── home1.png        # Aset visual 1
│   ├── home2.jpeg      # Aset visual 2
│   ├── home3.png       # Aset visual 3
│   ├── home4.jpeg      # Aset visual 4
│   └── home5.jpg       # Aset visual 5
└── README.md           # Dokumentasi proyek
```

---

## Daftar Halaman & Fitur Utama

| No | File | Judul Halaman | Fitur & Konten Utama |
| :--- | :--- | :--- | :--- |
| 1 | `index.html` | **Beranda** | *Top bar* korporat & navbar adaptif, *Hero Slideshow* otomatis 5 foto lokal, *floating bar* kalkulator tarif cepat, statistik perusahaan, seksi **Sekilas Tentang Kami**, dan lintasan utama. |
| 2 | `tentang.html` | **Tentang Kami** | Sejarah singkat PT ASDP Indonesia Ferry sejak 1973, Visi & Misi perusahaan, serta penjabaran nilai budaya kerja BUMN (**AKHLAK**). |
| 3 | `layanan.html` | **Layanan & Armada** | Portofolio bisnis (Reguler/Perintis, Dermaga *Express*, *Long Distance Ferry*), pengembangan kawasan *waterfront* (**Bakauheni Harbour City** & **Marina Labuan Bajo**), standar fasilitas penumpang, dan tabel spesifikasi KMP unggulan. |
| 4 | `jadwal-tarif.html` | **Jadwal & Tarif** | Fitur pencarian jadwal keberangkatan secara langsung (*real-time search*) pada 7 lintasan utama, kalkulator estimasi tarif terpadu (dengan validasi layanan *Express* khusus Merak–Bakauheni), serta tabel penggolongan kendaraan Golongan I–IX. |
| 5 | `pemesanan.html` | **Pemesanan Ferizy** | Alur 4 langkah reservasi tiket daring Ferizy, simulator pembuatan *E-Ticket* dengan kode *booking* acak, serta tabel ketentuan radius pembelian (*geofencing*) dan *check-in* pelabuhan. |
| 6 | `berita.html` | **Berita & Pengumuman** | Kumpulan siaran pers dan informasi operasional terkini ASDP tahun 2026 dengan tombol filter kategori interaktif (*Semua Berita*, *Info Operasional*, *Transformasi Digital*, *Korporasi & Logistik*). |
| 7 | `galeri.html` | **Galeri** | Dokumentasi visual armada dan fasilitas pelabuhan yang dilengkapi fitur *Lightbox Modal* untuk memperbesar foto saat diklik. |
| 8 | `kontak.html` | **Hubungi Kami** | Formulir pengiriman pesan/pengaduan pelanggan dengan validasi input dan notifikasi konfirmasi, informasi *Contact Center* 24 jam `(021) 191`, WhatsApp resmi `0811-1021-191`, email `cs@asdp.id`, serta daftar kantor cabang utama. |

---

## Cara Menjalankan Proyek

1. Buka folder proyek di **Visual Studio Code**.
2. Pastikan seluruh aset gambar berada di dalam folder `assets/`.
3. Jalankan ekstensi **Live Server** di VS Code pada file `index.html`, atau buka file `index.html` secara langsung menggunakan peramban (*browser*).