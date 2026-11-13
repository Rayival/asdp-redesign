document.addEventListener("DOMContentLoaded", () => {

  const rayivalCurrentPage = window.location.pathname.split("/").pop() || "index.html";
  const rayivalNavLinks = document.querySelectorAll(".rayival_nav_link");

  rayivalNavLinks.forEach((link) => {
    link.classList.remove("rayival_active");
    const linkHref = link.getAttribute("href");
    if (linkHref === rayivalCurrentPage) {
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