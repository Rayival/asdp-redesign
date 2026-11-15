document.addEventListener("DOMContentLoaded", () => {

  const rayivalHeaderPlaceholder = document.getElementById("rayival_header_placeholder");
  const rayivalFooterPlaceholder = document.getElementById("rayival_footer_placeholder");

  if (rayivalHeaderPlaceholder) {
    rayivalHeaderPlaceholder.outerHTML = `
      <header id="rayival_header">
        <div class="rayival_container rayival_nav_wrapper">
          <a href="index.html" class="rayival_logo">
            <img src="assets/logo.png" alt="Logo PT ASDP Indonesia Ferry" class="rayival_logo_img" />
          </a>
          <nav id="rayival_nav_menu">
            <ul class="rayival_nav_list">
              <li><a href="index.html" class="rayival_nav_link">Beranda</a></li>
              <li><a href="tentang.html" class="rayival_nav_link">Tentang</a></li>
              <li><a href="layanan.html" class="rayival_nav_link">Layanan</a></li>
              <li><a href="jadwal-tarif.html" class="rayival_nav_link">Jadwal & Tarif</a></li>
              <li><a href="pemesanan.html" class="rayival_nav_link">Ferizy</a></li>
              <li><a href="berita.html" class="rayival_nav_link">Berita</a></li>
              <li><a href="galeri.html" class="rayival_nav_link">Galeri</a></li>
              <li><a href="kontak.html" class="rayival_nav_link">Kontak</a></li>
            </ul>
          </nav>
          <button id="rayival_mobile_toggle" aria-label="Buka Navigasi">&#9776;</button>
        </div>
      </header>
    `;
  }

  if (rayivalFooterPlaceholder) {
    rayivalFooterPlaceholder.outerHTML = `
      <footer id="rayival_footer">
        <div class="rayival_container">
          <div class="rayival_footer_grid">
            <div>
              <h4 class="rayival_footer_title">PT ASDP Indonesia Ferry (Persero)</h4>
              <p style="font-size: 0.88rem; line-height: 1.7;">BUMN penyedia jasa angkutan penyeberangan dan pengelola pelabuhan terintegrasi terbesar di Indonesia.</p>
            </div>
            <div>
              <h4 class="rayival_footer_title">Navigasi Cepat</h4>
              <ul class="rayival_footer_links">
                <li><a href="index.html">Beranda</a></li>
                <li><a href="tentang.html">Tentang Perusahaan</a></li>
                <li><a href="layanan.html">Layanan & Armada</a></li>
                <li><a href="jadwal-tarif.html">Jadwal & Tarif</a></li>
              </ul>
            </div>
            <div>
              <h4 class="rayival_footer_title">Informasi Publik</h4>
              <ul class="rayival_footer_links">
                <li><a href="pemesanan.html">Panduan Tiket Ferizy</a></li>
                <li><a href="berita.html">Berita & Pengumuman</a></li>
                <li><a href="galeri.html">Galeri Fasilitas</a></li>
                <li><a href="kontak.html">Hubungi Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 class="rayival_footer_title">Kantor Pusat & Call Center</h4>
              <p style="font-size: 0.88rem;">Jl. Jend. Ahmad Yani Kav. 52 A, Cempaka Putih Timur, Jakarta Pusat 10510</p>
              <p style="margin-top: 10px; color: #FFFFFF; font-weight: 700;">Call Center 24 Jam: 021-191</p>
            </div>
          </div>
          <div class="rayival_footer_bottom">
            <span>&copy; 2026 PT ASDP Indonesia Ferry (Persero).</span>
            <span>UTS Pemrograman Web - Rayival Dede Saputra (2503010032)</span>
          </div>
        </div>
      </footer>
    `;
  }

  const rayivalCurrentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".rayival_nav_link").forEach((link) => {
    if (link.getAttribute("href") === rayivalCurrentPage) {
      link.classList.add("rayival_active");
    }
  });

  const rayivalHeader = document.getElementById("rayival_header");
  if (rayivalHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        rayivalHeader.classList.add("rayival_scrolled");
      } else {
        rayivalHeader.classList.remove("rayival_scrolled");
      }
    });
  }

  const rayivalToggleBtn = document.getElementById("rayival_mobile_toggle");
  const rayivalNavMenu = document.getElementById("rayival_nav_menu");
  if (rayivalToggleBtn && rayivalNavMenu) {
    rayivalToggleBtn.addEventListener("click", () => {
      rayivalNavMenu.classList.toggle("rayival_menu_open");
    });
  }

  const rayivalSlides = document.querySelectorAll(".rayival_hero_slide");
  const rayivalDots = document.querySelectorAll(".rayival_slide_dot");

  if (rayivalSlides.length > 0) {
    let rayivalCurrentSlide = 0;

    const rayivalShowSlide = (index) => {
      rayivalSlides.forEach((s) => s.classList.remove("rayival_slide_active"));
      rayivalDots.forEach((d) => d.classList.remove("rayival_dot_active"));

      rayivalSlides[index].classList.add("rayival_slide_active");
      if (rayivalDots[index]) {
        rayivalDots[index].classList.add("rayival_dot_active");
      }
      rayivalCurrentSlide = index;
    };

    rayivalDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => rayivalShowSlide(idx));
    });

    setInterval(() => {
      const next = (rayivalCurrentSlide + 1) % rayivalSlides.length;
      rayivalShowSlide(next);
    }, 5000);
  }

  const rayivalBtnHitung = document.getElementById("rayival_btn_hitung_tarif");
  if (rayivalBtnHitung) {
    rayivalBtnHitung.addEventListener("click", () => {
      const rute = document.getElementById("rayival_pilih_rute").value;
      const golongan = document.getElementById("rayival_pilih_golongan").value;
      const layanan = document.getElementById("rayival_pilih_layanan").value;
      const output = document.getElementById("rayival_hasil_tarif");

      const tarifDasar = {
        "merak-bakauheni": { kaki: 22700, motor: 62100, mobil: 481800, truk: 952400 },
        "ketapang-gilimanuk": { kaki: 10600, motor: 31600, mobil: 213400, truk: 442100 },
        "padangbai-lembar": { kaki: 65300, motor: 169400, mobil: 1184100, truk: 2350000 },
        "kayangan-pototano": { kaki: 21000, motor: 56000, mobil: 412000, truk: 810000 }
      };

      let harga = tarifDasar[rute][golongan];
      if (layanan === "express") harga = Math.round(harga * 1.45);

      const formatRupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(harga);

      output.innerHTML = `Estimasi Tarif (${layanan.toUpperCase()}): <strong>${formatRupiah}</strong> — Sudah termasuk asuransi Jasa Raharja & pas pelabuhan.`;
    });
  }

  const rayivalSearchJadwal = document.getElementById("rayival_search_jadwal");
  if (rayivalSearchJadwal) {
    rayivalSearchJadwal.addEventListener("keyup", function () {
      const keyword = this.value.toLowerCase();
      document.querySelectorAll("#rayival_tbody_jadwal tr").forEach((row) => {
        row.style.display = row.textContent.toLowerCase().includes(keyword) ? "" : "none";
      });
    });
  }

  const rayivalFormFerizy = document.getElementById("rayival_form_ferizy");
  if (rayivalFormFerizy) {
    rayivalFormFerizy.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("rayival_ferizy_nama").value;
      const rute = document.getElementById("rayival_ferizy_rute").value;
      const tgl = document.getElementById("rayival_ferizy_tanggal").value;
      const kode = "ASDP-" + Math.floor(100000 + Math.random() * 900000);

      const hasilTiket = document.getElementById("rayival_hasil_tiket");
      hasilTiket.style.display = "block";
      hasilTiket.innerHTML = `E-Ticket Simulasi Berhasil Dibuat | Kode Booking: <strong>${kode}</strong> | Penumpang: ${nama} (${rute}, ${tgl}).`;
    });
  }

  const rayivalFilterBtns = document.querySelectorAll(".rayival_filter_btn");
  const rayivalBeritaCards = document.querySelectorAll(".rayival_berita_card");
  if (rayivalFilterBtns.length > 0) {
    rayivalFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        rayivalFilterBtns.forEach((b) => b.classList.remove("rayival_active_filter"));
        btn.classList.add("rayival_active_filter");
        const kat = btn.getAttribute("data-filter");
        rayivalBeritaCards.forEach((card) => {
          card.style.display = kat === "all" || card.getAttribute("data-category") === kat ? "block" : "none";
        });
      });
    });
  }

  const rayivalGalleryItems = document.querySelectorAll(".rayival_gallery_item");
  const rayivalLightbox = document.getElementById("rayival_lightbox");
  if (rayivalGalleryItems.length > 0 && rayivalLightbox) {
    rayivalGalleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        document.getElementById("rayival_lightbox_img").src = item.querySelector("img").src;
        document.getElementById("rayival_lightbox_text").textContent = item.querySelector(".rayival_gallery_caption").textContent;
        rayivalLightbox.style.display = "flex";
      });
    });
    document.getElementById("rayival_close_lightbox").addEventListener("click", () => {
      rayivalLightbox.style.display = "none";
    });
  }

  const rayivalFormKontak = document.getElementById("rayival_form_kontak");
  if (rayivalFormKontak) {
    rayivalFormKontak.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("rayival_kontak_nama").value.trim();
      const email = document.getElementById("rayival_kontak_email").value.trim();
      const subjek = document.getElementById("rayival_kontak_subjek").value;
      const alertBox = document.getElementById("rayival_kontak_alert");
      alertBox.style.display = "block";
      alertBox.innerHTML = `Terima kasih, <strong>${nama}</strong>. Pesan mengenai <em>${subjek}</em> telah diterima dan balasan akan dikirim ke <strong>${email}</strong>.`;
      rayivalFormKontak.reset();
    });
  }
});