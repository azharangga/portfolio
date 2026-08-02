import { ProjectDetail } from "./project-details";

export const PROJECT_DETAILS_ID: Record<string, ProjectDetail> = {
  // ==========================================
  // WEB DEVELOPMENT PROJECTS
  // ==========================================
  "job-tracker": {
    slug: "job-tracker",
    title: "Job Tracker",
    tagline: "Kelola proses pencarian kerja dalam satu tempat.",
    coverImage: "/projects/job-tracker.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      website: "https://job-tracker.projectshowcase.web.id",
      source: "https://github.com/azharangga/job-tracker",
    },
    overview: "Job Tracker merupakan platform personal yang dirancang untuk membantu pengguna mengelola seluruh proses pencarian kerja secara lebih terstruktur. Aplikasi ini memudahkan pengguna mencatat lowongan yang sudah dilamar, memantau status setiap lamaran, menambahkan catatan penting, dan menyusun prioritas tindak lanjut dalam satu dashboard yang sederhana dan mudah digunakan. Dengan pendekatan yang praktis dan terpusat, Job Tracker membantu pengguna tetap terorganisir selama proses melamar pekerjaan.",
    problemBackground: "- **Lamaran Kerja Sulit Dikelola Secara Manual**: Saat melamar ke banyak perusahaan, pengguna sering kesulitan mengingat lowongan mana yang sudah dilamar, mana yang perlu ditindaklanjuti, dan mana yang sudah mendapat respons.\n- **Status Lamaran Sering Tidak Terpantau**: Tanpa sistem yang terpusat, pengguna dapat kehilangan jejak perkembangan setiap lamaran sehingga proses follow up menjadi kurang efektif.\n- **Informasi Penting Mudah Tersebar**: Detail seperti nama perusahaan, posisi yang dilamar, jadwal interview, dan catatan tambahan sering tersimpan di banyak tempat sehingga sulit ditemukan kembali saat dibutuhkan.",
    solutionApproach: {
      design: "- **Pusat Data Lamaran Kerja**: Menyediakan satu tempat untuk menyimpan seluruh informasi lamaran kerja agar pengguna tidak perlu mencatatnya secara terpisah.\n- **Pemantauan Status yang Lebih Teratur**: Membantu pengguna melihat perkembangan setiap lamaran secara jelas sehingga tindak lanjut dapat dilakukan dengan lebih tepat.\n- **Pencatatan Informasi Tambahan**: Memungkinkan pengguna menambahkan catatan penting pada setiap lamaran agar semua informasi relevan tetap mudah diakses.\n- **Pengelolaan Pencarian Kerja yang Lebih Efisien**: Menyusun seluruh aktivitas pencarian kerja dalam satu dashboard agar pengguna dapat bekerja lebih rapi, fokus, dan terorganisir.",
      workflow: [
        "Pengguna masuk ke aplikasi.",
        "Pengguna menambahkan data lamaran kerja yang sedang dilamar.",
        "Pengguna memperbarui status lamaran sesuai perkembangan terbaru.",
        "Pengguna menambahkan catatan penting pada setiap lamaran.",
        "Seluruh data tersimpan dan tampil dalam dashboard terpusat.",
        "Pengguna dapat memantau progres pencarian kerja secara lebih mudah."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Shadcn UI", iconName: "Shadcn UI" },
          { name: "Supabase", iconName: "Supabase" },
          { name: "PostgreSQL", iconName: "PostgreSQL" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pencatatan Lamaran Kerja",
        description: "Memungkinkan pengguna menyimpan informasi lowongan yang sudah dilamar agar seluruh data tersusun dalam satu tempat."
      },
      {
        title: "Pemantauan Status Lamaran",
        description: "Membantu pengguna mengikuti perkembangan setiap lamaran, mulai dari tahap awal hingga hasil akhir."
      },
      {
        title: "Catatan Tambahan untuk Setiap Lamaran",
        description: "Memberikan ruang bagi pengguna untuk menyimpan informasi penting seperti detail perusahaan, jadwal interview, atau tindak lanjut yang perlu dilakukan."
      },
      {
        title: "Dashboard Terpusat",
        description: "Menampilkan seluruh data lamaran dalam satu tampilan agar pengguna lebih mudah memantau dan mengatur proses pencarian kerja."
      },
      {
        title: "Pengelolaan Aktivitas Pencarian Kerja",
        description: "Membantu pengguna menyusun proses pencarian kerja secara lebih rapi, efisien, dan mudah dipantau."
      }
    ],
    gallery: [
      { image: "/projects/detail/job-tracker/job-tracker.png", title: "Dasbor Utama Job Tracker", caption: "Antarmuka Kanban dan tabel pelacakan lamaran kerja." }
    ]
  },
  gizimeal: {
    slug: "gizimeal",
    title: "GiziMeal",
    tagline: "Perencanaan Nutrisi & Meal Planner Otomatis Berbasis AI",
    coverImage: "/projects/gizimeal.png",
    category: "Web Development",
    role: "AI Engineer dan Project Manager",
    duration: "4 Bulan",
    type: "Team",
    links: {
      website: "https://gizimeal.projectshowcase.web.id",
      source: "https://github.com/azharangga/gizimeal",
      apiDocs: "https://cc26-psu393-gizimeal-api.hf.space",
    },
    overview: "GiziMeal adalah aplikasi web interaktif yang dikembangkan sebagai capstone project oleh tim CC26-PSU393 dengan tema Healthy Lives dan Well-Being. Proyek ini bertujuan meningkatkan literasi gizi masyarakat melalui teknologi klasifikasi citra bahan makanan berbasis Deep Learning. Aplikasi mampu mengenali 15 jenis bahan makanan dari foto yang diunggah pengguna, menghitung estimasi kebutuhan kalori harian menggunakan metode Mifflin–St Jeor berdasarkan nilai BMR dan TDEE, serta memberikan rekomendasi menu makanan seimbang yang mengacu pada Permenkes RI No. 28 Tahun 2019 tentang Angka Kecukupan Gizi (AKG) beserta skor pemenuhannya.",
    disclaimer: "Proyek GiziMeal awalnya dikembangkan sebagai Capstone Project tim CC26-PSU393 dengan peran saya sebagai **AI Engineer dan Project Manager**. Versi showcase ini merupakan hasil redesign dan pembangunan ulang secara independen pada aspek **Frontend dan Backend** untuk meningkatkan serta mendemonstrasikan kemampuan saya di bidang Web Development, sedangkan model *Deep Learning* tetap menggunakan model hasil kolaborasi tim.",
    problemBackground: "- **Perhitungan Kalori Manual**: Proses mencatat dan menimbang berat makanan harian membutuhkan waktu lama sehingga memicu 80% pengguna berhenti melacak gizi mereka.\n- **Keterbatasan Variasi Menu**: Ketiadaan referensi dalam menyusun kombinasi hidangan harian yang sesuai dengan kebutuhan nutrisi spesifik tubuh.\n- **Pemahaman Gizi yang Rendah**: Kurangnya edukasi dan standar acuan mengenai porsi serta distribusi makronutrisi yang ideal untuk kesehatan jangka panjang.",
    solutionApproach: {
      design: "- **Deteksi Citra Bahan Otomatis**: Menggunakan jaringan syaraf tiruan (CNN) untuk mengenali bahan makanan dari foto dan menghitung nutrisinya dalam hitungan detik.\n- **Penilaian Skor AKG Real-time**: Menyajikan rekomendasi menu seimbang yang disesuaikan dengan standar Angka Kecukupan Gizi (Permenkes RI No. 28/2019).\n- **Validasi Data Nutrisi Resmi**: Memadukan dataset Kaggle dengan basis data referensi gizi lokal Indonesia yang telah terverifikasi secara akurat.\n- **Target Kalori Personal**: Mengintegrasikan kalkulasi BMR dan TDEE berbasis rumus Mifflin–St Jeor sesuai profil fisik individu.",
      workflow: [
        "Pengguna mengambil foto bahan makanan segar yang tersedia di dapur menggunakan kamera atau mengunggah gambar dari galeri.",
        "Foto dikirim secara aman ke sistem backend GiziMeal untuk dipproses oleh gateway inferensi AI.",
        "Model Deep Learning menganalisis citra gambar dan mengenali jenis bahan makanan yang terdeteksi secara otomatis.",
        "GiziMeal memproses data bahan makanan dan menyiapkan rekomendasi menu gizi seimbang beserta estimasi nutrisinya.",
        "Hasil deteksi bahan makanan, kalkulasi kalori, dan rekomendasi menu langsung tampil secara real-time di layar pengguna."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Shadcn UI", iconName: "Shadcn UI" },
          { name: "Supabase", iconName: "Supabase" },
          { name: "PostgreSQL", iconName: "PostgreSQL" },
          { name: "Python", iconName: "Python" },
          { name: "FAST API", iconName: "FAST API" },
          { name: "Gemini API", iconName: "Gemini API" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Deteksi dan Klasifikasi Bahan Makanan",
        description: "Mengidentifikasi hingga 15 jenis bahan makanan dari gambar yang diunggah pengguna menggunakan model Deep Learning serta menampilkan estimasi kalorinya."
      },
      {
        title: "Rekomendasi Menu Gizi Seimbang",
        description: "Memberikan rekomendasi menu berdasarkan bahan makanan yang terdeteksi dengan mengacu pada Angka Kecukupan Gizi sesuai Permenkes RI No. 28 Tahun 2019."
      },
      {
        title: "Kalkulator BMR dan TDEE",
        description: "Menghitung estimasi kebutuhan kalori harian secara personal menggunakan metode Mifflin–St Jeor."
      },
      {
        title: "Database Informasi Nutrisi",
        description: "Menyediakan informasi kandungan gizi setiap bahan makanan secara lengkap dan mudah diakses."
      },
      {
        title: "Riwayat Prediksi",
        description: "Menyimpan riwayat hasil deteksi pengguna yang telah login dan menyinkronkannya ke dalam database."
      }
    ],
    contributors: [
      { name: "Azharangga Kusuma", role: "AI Engineer dan Project Manager", avatar: "/team/angga.png", github: "https://github.com/azharangga", linkedin: "https://linkedin.com/in/azharanggakusuma" },
      { name: "Putri Nabilla", role: "AI Engineer", avatar: "/team/billa.png", github: "https://github.com/putribila", linkedin: "https://linkedin.com/in/putri-nabilla-77a670223" },
      { name: "Farina Setya Rahesti", role: "Data Scientist", avatar: "/team/farina.png", github: "https://github.com/farinasetyarahesti", linkedin: "https://www.linkedin.com/in/farina-setya-91474a3ab" },
      { name: "Mahaputri Buana Devwitasari", role: "Data Scientist", avatar: "/team/buana.png", github: "https://github.com/mahaputribuanaa", linkedin: "https://www.linkedin.com/in/mahaputri-buana-87b924332" },
      { name: "M. Dava Arya Nada Putra", role: "Full-Stack Web Developer", avatar: "/team/dava.png", github: "https://github.com/mdavaarya", linkedin: "https://www.linkedin.com/in/m-dava-arya-nada-putra-a2ba8a3a5" },
      { name: "Muhammad Ihsanul Dzaky", role: "Full-Stack Web Developer", avatar: "/team/dzaky.png", github: "https://github.com/ihsanulDzaky", linkedin: "https://www.linkedin.com/in/muhammad-ihsanul-dzaky" }
    ],
    gallery: [
      { image: "/projects/detail/gizimeal/gizimeal.png", title: "Antarmuka Halaman Utama", caption: "Dasbor interaktif menampilkan kalkulator kalori dan log makanan." },
      { image: "/projects/detail/gizimeal/gizimeal-model.png", title: "Dasbor Metrik Model AI", caption: "Visualisasi kurva pelatihan model CNN kustom dan akurasi prediksi." }
    ]
  },
  dramova: {
    slug: "dramova",
    title: "Dramova",
    tagline: "Nikmati hiburan tanpa batas dalam satu platform streaming.",
    coverImage: "/projects/dramova.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "-",
    type: "Personal",
    links: {
      website: "https://dramova.projectshowcase.web.id",
    },
    overview: "DRAMOVA merupakan platform streaming film berbasis web yang dirancang untuk menghadirkan pengalaman menonton yang modern, nyaman, dan interaktif. Platform ini memungkinkan pengguna menjelajahi berbagai koleksi film, memperoleh informasi lengkap mengenai setiap judul, membuat daftar tontonan pribadi, serta menikmati fitur Watch Party untuk menonton bersama secara real-time. Dengan antarmuka yang intuitif dan layanan yang terintegrasi, DRAMOVA bertujuan memberikan pengalaman hiburan digital yang lebih praktis dan menyenangkan.",
    problemBackground: "- **Sulit Menemukan Tontonan yang Sesuai**: Pengguna sering menghabiskan banyak waktu untuk mencari film yang sesuai dengan minat karena informasi tersebar dan kurang terorganisir.\n- **Pengalaman Menonton Bersama Terbatas**: Sebagian besar platform belum menyediakan cara yang mudah untuk menikmati film bersama teman atau keluarga secara sinkron dari lokasi yang berbeda.\n- **Daftar Tontonan Kurang Terorganisir**: Pengguna kesulitan menyimpan dan mengelola film yang ingin ditonton sehingga sering lupa atau harus mencarinya kembali.",
    solutionApproach: {
      design: "- **Platform Streaming Terpusat**: Menyediakan satu platform yang menggabungkan koleksi film, informasi detail, dan fitur pencarian untuk memudahkan pengguna menemukan tontonan.\n- **Watch Party Interaktif**: Menghadirkan ruang menonton bersama secara real-time sehingga pengguna dapat menikmati film secara sinkron meskipun berada di lokasi yang berbeda.\n- **Watchlist Pribadi**: Memungkinkan pengguna menyimpan film favorit dan mengelola daftar tontonan agar lebih mudah diakses kembali.\n- **Pengalaman Pengguna yang Modern**: Menyediakan antarmuka yang sederhana, responsif, dan mudah digunakan sehingga aktivitas menjelajahi maupun menikmati film menjadi lebih nyaman.",
      workflow: [
        "Pengguna masuk atau membuat akun.",
        "Pengguna menjelajahi koleksi film dan mencari judul yang diinginkan.",
        "Pengguna melihat informasi detail film sebelum menonton.",
        "Pengguna dapat menyimpan film ke dalam watchlist pribadi.",
        "Pengguna menonton film secara mandiri atau membuat ruang Watch Party.",
        "Aktivitas pengguna disimpan untuk memudahkan pengelolaan akun."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Shadcn UI", iconName: "Shadcn UI" },
          { name: "HLS.js", iconName: "HLS.js" },
          { name: "Supabase", iconName: "Supabase" },
          { name: "PostgreSQL", iconName: "PostgreSQL" },
          { name: "Python", iconName: "Python" },
          { name: "FAST API", iconName: "FAST API" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Jelajahi Koleksi Film",
        description: "Menyediakan berbagai koleksi film lengkap dengan informasi seperti sinopsis, genre, durasi, rating, dan detail pemeran sehingga pengguna dapat menemukan tontonan yang sesuai dengan preferensinya."
      },
      {
        title: "Watchlist Pribadi",
        description: "Memungkinkan pengguna menyimpan film favorit ke dalam daftar tontonan sehingga lebih mudah diakses kembali kapan saja."
      },
      {
        title: "Watch Party",
        description: "Menghadirkan pengalaman menonton bersama secara real-time melalui ruang tontonan yang dapat dibagikan kepada pengguna lain."
      },
      {
        title: "Pencarian dan Filter Film",
        description: "Memudahkan pengguna menemukan film berdasarkan judul, kategori, genre, maupun preferensi tertentu."
      },
      {
        title: "Profil Pengguna",
        description: "Menyediakan pengelolaan profil pengguna beserta riwayat aktivitas dan daftar film yang telah disimpan."
      }
    ],
    gallery: [
      { image: "/projects/detail/dramova/dramova.png", title: "Katalog Drama Utama", caption: "Kartu bertema gelap premium yang menyoroti episode tren." }
    ]
  },
  "fifa-world-cup-2026": {
    slug: "fifa-world-cup-2026",
    title: "FIFA World Cup 2026",
    tagline: "Platform Siaran Langsung dan Statistik Turnamen Real-time",
    coverImage: "/projects/fifa-wc26.png",
    category: "Web Development",
    role: "Front-end Developer",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      website: "https://fifa-wc26.projectshowcase.web.id",
      source: "https://github.com/azharangga/fifa-wc",
    },
    overview: "FIFA World Cup 2026 adalah platform web streaming dan statistik sepak bola premium. Platform ini menyediakan siaran langsung menggunakan teknologi HLS.js untuk streaming olahraga tanpa jeda, dilengkapi dengan kalkulasi klasemen grup otomatis, jadwal pertandingan, dan statistik historis pemain.",
    problemBackground: "- **Kesulitan Menemukan Siaran Langsung Stabil**: Penggemar olahraga sering kesulitan mencari tautan siaran langsung turnamen yang lancar dan bebas hambatan.\n- **Informasi Statistik Terpisah**: Data klasemen grup, jadwal pertandingan, dan statistik pemain sering kali tersebar di berbagai situs yang berbeda.\n- **Antarmuka Kurang Responsif**: Situs berita olahraga standar kerap dipenuhi iklan berat dan kurang nyaman diakses via perangkat seluler.",
    solutionApproach: {
      design: "- **Pemutar Siaran Langsung HLS Adaptif**: Mengintegrasikan teknologi HLS.js untuk menyajikan tayangan olahraga definisi tinggi tanpa jeda.\n- **Dasbor Statistik dan Klasemen Terpadu**: Menyediakan kalkulasi otomatis klasemen grup, pencarian jadwal, dan statistik pemain dalam satu antarmuka.\n- **Desain Tematik Olahraga Energetik**: Menghadirkan tata letak visual olahraga yang bersih, cepat, dan responsif di seluruh ukuran layar.\n- **Optimasi Performa Media**: Menerapkan buffering segmen bitrate adaptif untuk menjaga stabilitas tayangan.",
      workflow: [
        "Pengguna membuka platform untuk melihat banner pertandingan utama dan siaran langsung yang sedang berjalan.",
        "Mesin streaming HLS.js menginisialisasi buffering segmen video secara adaptif.",
        "Sistem memperbarui klasemen grup dan hasil pertandingan secara dinamis.",
        "Pengguna beralih antara tampilan siaran langsung, tabel grup, dan kalender pertandingan.",
        "Penggemar dapat menikmati tayangan turnamen serta statistik lengkap secara real-time."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Shadcn UI", iconName: "Shadcn UI" },
          { name: "HLS.js", iconName: "HLS.js" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pemutar Siaran Langsung Adaptif",
        description: "Pemutar video HLS yang membaca tautan segmen dinamis untuk streaming olahraga tanpa jeda."
      },
      {
        title: "Kalkulasi Klasemen Otomatis",
        description: "Menghitung poin, selisih gol, dan peringkat grup turnamen secara real-time."
      },
      {
        title: "Jadwal dan Hasil Pertandingan",
        description: "Menyajikan kalender pertandingan lengkap beserta hasil skor terkini."
      },
      {
        title: "Pencarian Profil dan Statistik",
        description: "Memudahkan pengguna mencari informasi tim, pemain, dan statistik historis turnamen."
      }
    ],
    gallery: [
      { image: "/projects/detail/fifa-world-cup-2026/fifa-wc26.png", title: "Tampilan Siaran Langsung", caption: "Tata letak streaming definisi tinggi yang menampilkan saluran siaran aktif." }
    ]
  },
  "siakad-ikmi": {
    slug: "siakad-ikmi",
    title: "SIAKAD IKMI",
    tagline: "Kelola aktivitas akademik dengan lebih mudah, cepat, dan terintegrasi.",
    coverImage: "/projects/siakad-ikmi.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "7 Bulan",
    type: "Personal",
    links: {
      website: "https://siakad-ikmi.projectshowcase.web.id",
    },
    overview: "SIAKAD IKMI merupakan platform Sistem Informasi Akademik berbasis web yang dikembangkan untuk mendukung digitalisasi layanan akademik di lingkungan STMIK IKMI Cirebon. Platform ini mengintegrasikan berbagai layanan akademik dalam satu sistem, mulai dari pengisian Kartu Rencana Studi (KRS), pengelolaan data akademik, pencetakan dokumen secara mandiri, hingga akses informasi melalui asisten chatbot berbasis Generative AI. Dengan menghadirkan layanan yang modern, cepat, dan mudah diakses, SIAKAD IKMI bertujuan meningkatkan efisiensi administrasi akademik sekaligus memberikan pengalaman pengguna yang lebih baik bagi mahasiswa, dosen, dan tenaga kependidikan.",
    disclaimer: "Seluruh data yang digunakan dalam proyek ini menggunakan data dummy yang dibuat untuk keperluan pengembangan dan demonstrasi aplikasi. Tidak ada data asli mahasiswa, dosen, tenaga kependidikan, maupun informasi akademik lainnya yang digunakan atau ditampilkan, sehingga privasi dan kerahasiaan data tetap terjaga.",
    problemBackground: "- **Proses Pengisian KRS Kurang Efisien**: Alur pengisian KRS masih cukup kompleks sehingga proses pengambilan mata kuliah menjadi kurang praktis bagi mahasiswa.\n- **Layanan Dokumen Masih Manual**: Mahasiswa harus melalui proses administrasi untuk memperoleh dokumen akademik, sehingga membutuhkan waktu dan pelayanan yang lebih lama.\n- **Informasi Akademik Belum Terpusat**: Informasi akademik masih tersebar di berbagai layanan sehingga pengguna kesulitan memperoleh informasi secara cepat.",
    solutionApproach: {
      design: "- **Pengisian KRS Digital**: Menyediakan sistem pengisian KRS yang lebih sederhana dengan alur digital dan dukungan pemisahan kelas reguler serta MBKM.\n- **Dokumen Digital Mandiri**: Memungkinkan mahasiswa mengunduh dokumen akademik resmi secara mandiri dengan verifikasi QR Code.\n- **Asisten Chatbot Generative AI**: Menyediakan layanan chatbot untuk membantu pengguna memperoleh informasi akademik secara cepat melalui percakapan interaktif.\n- **Platform Akademik Terintegrasi**: Menggabungkan berbagai layanan akademik ke dalam satu sistem untuk meningkatkan efisiensi administrasi dan pengalaman pengguna.",
      techExplanation: "Dikembangkan menggunakan Next.js (App Router), React, dan Tailwind CSS. Backend menggunakan Supabase (PostgreSQL) untuk manajemen pengguna dan catatan akademik yang aman. Chatbot mengintegrasikan Google Gemini API dengan petunjuk sistem khusus untuk memastikan hanya menjawab dengan pedoman kampus yang terverifikasi.",
      workflow: [
        "Pengguna masuk ke sistem sesuai peran masing-masing.",
        "Mahasiswa mengelola Kartu Rencana Studi secara digital.",
        "Sistem memproses dan menyimpan data akademik secara terintegrasi.",
        "Mahasiswa mengakses nilai, transkrip, dan informasi akademik.",
        "Dokumen akademik dapat diunduh secara mandiri.",
        "Chatbot Generative AI membantu pengguna memperoleh informasi akademik secara cepat."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Shadcn UI", iconName: "Shadcn UI" },
          { name: "Supabase", iconName: "Supabase" },
          { name: "PostgreSQL", iconName: "PostgreSQL" },
          { name: "Gemini API", iconName: "Gemini API" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Otentikasi dan Role-Based Access Control",
        description: "Mengelola hak akses pengguna berdasarkan peran, meliputi superuser, admin, dosen, dan mahasiswa."
      },
      {
        title: "Pengisian dan Validasi Kartu Rencana Studi",
        description: "Mendukung proses pengisian KRS oleh mahasiswa serta validasi dan pengelolaan KRS oleh administrator."
      },
      {
        title: "Perhitungan Nilai dan Transkrip Otomatis",
        description: "Menghasilkan Kartu Hasil Studi dan transkrip akademik secara otomatis berdasarkan perhitungan IPS dan IPK."
      },
      {
        title: "Cetak Dokumen Digital Mandiri",
        description: "Memungkinkan mahasiswa mengunduh dokumen akademik resmi, seperti KTM, biodata, Surat Keterangan Mahasiswa Aktif, dan Surat Keterangan Lulus dengan QR Code untuk verifikasi."
      },
      {
        title: "Asisten Chatbot Generative AI",
        description: "Membantu pengguna memperoleh informasi akademik melalui percakapan interaktif, termasuk profil mahasiswa, transkrip nilai, dan data dosen."
      }
    ],
    gallery: [
      { image: "/projects/detail/siakad-ikmi/siakad-ikmi.png", title: "Dasbor Mahasiswa", caption: "Antarmuka bersih yang menampilkan kemajuan IPK, KRS aktif, dan acara kalender." }
    ]
  },
  datadikti: {
    slug: "datadikti",
    title: "DataDikti",
    tagline: "Akses informasi pendidikan tinggi Indonesia dengan lebih mudah dan cepat.",
    coverImage: "/projects/datadikti.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "2 Bulan",
    type: "Personal",
    links: {
      website: "https://datadikti.projectshowcase.web.id",
      source: "https://github.com/azharangga/datadikti",
    },
    overview: "DataDikti merupakan platform berbasis web yang dirancang untuk memudahkan pengguna dalam mencari dan mengakses informasi pendidikan tinggi di Indonesia secara terpusat. Sistem ini menyediakan layanan pencarian data perguruan tinggi, program studi, mahasiswa, dosen, dan informasi akademik lainnya melalui antarmuka yang sederhana dan mudah digunakan. Dengan menghadirkan proses pencarian yang lebih cepat dan terstruktur, DataDikti membantu pengguna memperoleh informasi yang dibutuhkan secara lebih efisien.",
    problemBackground: "- **Informasi Pendidikan Tinggi Sulit Ditemukan**: Data mengenai perguruan tinggi, mahasiswa, dosen, dan program studi sering kali tersebar sehingga proses pencarian menjadi kurang efisien.\n- **Proses Pencarian Memerlukan Banyak Langkah**: Pengguna harus melakukan beberapa tahapan pencarian untuk memperoleh informasi yang dibutuhkan sehingga menghabiskan waktu.\n- **Informasi Belum Tersaji Secara Terstruktur**: Data yang tersedia belum disajikan dalam antarmuka yang sederhana sehingga menyulitkan pengguna untuk memahami informasi dengan cepat.",
    solutionApproach: {
      design: "- **Platform Pencarian Terpusat**: Menggabungkan berbagai informasi pendidikan tinggi ke dalam satu platform sehingga proses pencarian menjadi lebih praktis dan efisien.\n- **Pencarian yang Cepat dan Mudah**: Menyediakan fitur pencarian berdasarkan kata kunci sehingga pengguna dapat menemukan informasi dalam waktu yang lebih singkat.\n- **Penyajian Informasi yang Terstruktur**: Menampilkan hasil pencarian dalam format yang jelas dan mudah dipahami untuk meningkatkan pengalaman pengguna.\n- **Akses Informasi yang Lebih Efisien**: Membantu pengguna memperoleh informasi akademik secara lebih cepat tanpa harus berpindah ke berbagai sumber informasi.",
      workflow: [
        "Pengguna membuka halaman pencarian.",
        "Pengguna memasukkan kata kunci sesuai informasi yang dicari.",
        "Sistem memproses permintaan pencarian.",
        "Data yang sesuai ditampilkan dalam daftar hasil pencarian.",
        "Pengguna memilih salah satu hasil untuk melihat informasi secara lebih lengkap.",
        "Informasi ditampilkan dalam antarmuka yang terstruktur dan mudah dipahami."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "React.js", iconName: "React.js" },
          { name: "Next.js", iconName: "Next.js" },
          { name: "TypeScript", iconName: "TypeScript" },
          { name: "Leaflet.js", iconName: "Leaflet.js" },
          { name: "Tailwind CSS", iconName: "Tailwind CSS" },
          { name: "Python", iconName: "Python" },
          { name: "FAST API", iconName: "FAST API" },
          { name: "PDDikti API", iconName: "PDDikti API" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pencarian Data Perguruan Tinggi",
        description: "Memungkinkan pengguna mencari informasi perguruan tinggi berdasarkan nama atau kata kunci secara cepat dan terstruktur."
      },
      {
        title: "Pencarian Mahasiswa dan Dosen",
        description: "Menyediakan fasilitas pencarian data mahasiswa dan dosen beserta informasi akademik yang tersedia."
      },
      {
        title: "Informasi Program Studi",
        description: "Menampilkan informasi mengenai program studi yang tersedia pada setiap perguruan tinggi sehingga memudahkan pengguna memperoleh gambaran akademik."
      },
      {
        title: "Antarmuka Pencarian Terpusat",
        description: "Mengintegrasikan berbagai jenis informasi pendidikan tinggi ke dalam satu platform agar proses pencarian menjadi lebih praktis."
      },
      {
        title: "Hasil Pencarian yang Mudah Dipahami",
        description: "Menyajikan informasi dalam tampilan yang sederhana sehingga pengguna dapat menemukan data yang dibutuhkan dengan lebih nyaman."
      }
    ],
    gallery: [
      { image: "/projects/detail/datadikti/datadikti.png", title: "Antarmuka Portal Utama", caption: "Bilah pencarian minimalis dengan tab filter pencarian terintegrasi." }
    ]
  },
  "pusdatin-kab-cirebon": {
    slug: "pusdatin-kab-cirebon",
    title: "Pusdatin Kab. Cirebon",
    tagline: "Platform Pendataan Terpadu Desa dan Kelurahan Kabupaten Cirebon.",
    coverImage: "/projects/pusdatin.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "4 Bulan",
    type: "Personal",
    links: {
      website: "https://pusdatin.kesug.com",
      source: "https://github.com/azharangga/pusdatin-kabcirebon",
    },
    overview: "PUSDATIN Kabupaten Cirebon adalah platform web terpadu yang dirancang untuk mendukung pendataan, pengelolaan, dan rekapitulasi data desa dan kelurahan di wilayah Kabupaten Cirebon secara terpusat, terstruktur, dan efisien. Sistem ini memfasilitasi pemerintah desa dan pihak terkait dalam menginput, memperbarui, mengelola, serta mengekspor data sektoral melalui dashboard manajemen interaktif yang dilengkapi autentikasi pengguna, pengaturan hak akses, dan fitur ekspor laporan dalam format PDF dan Excel.",
    problemBackground: "- **Pendataan Desa Masih Terpisah**: Pengelolaan data sektoral di setiap desa dan kelurahan sering kali dilakukan secara terpisah sehingga menyulitkan proses rekapitulasi di tingkat kabupaten.\n- **Proses Pelaporan Membutuhkan Waktu**: Penyusunan laporan perkembangan desa membutuhkan waktu yang relatif lama karena pengumpulan data masih berbasis proses manual.\n- **Format Data Kurang Terstandarisasi**: Perbedaan format dalam pencatatan data menyebabkan penyajian informasi menjadi kurang konsisten dan sulit dianalisis.",
    solutionApproach: {
      design: "- **Platform Pendataan Terpusat**: Menyediakan satu sistem terpadu untuk mengelola seluruh data sektoral desa dan kelurahan secara terstruktur.\n- **Dashboard Manajemen Interaktif**: Menyajikan ringkasan data melalui tampilan dasbor yang intuitif untuk memudahkan pemantauan dan evaluasi.\n- **Pengaturan Hak Akses Berbasis Peran**: Mengamankan pengelolaan data dengan sistem autentikasi dan pembagian hak akses pengguna yang jelas.\n- **Fitur Ekspor Laporan Otomatis**: Memfasilitasi pencetakan dan pengunduhan laporan dalam format PDF dan Excel untuk kebutuhan administrasi.",
      workflow: [
        "Pengguna masuk ke sistem sesuai hak akses yang dimiliki.",
        "Pemerintah desa menginput atau memperbarui data sektoral melalui formulir manajemen.",
        "Sistem menyimpan dan mengagregasi data ke dalam basis data terpusat.",
        "Dashboard menampilkan rekapitulasi data secara real-time untuk pemantauan.",
        "Pengguna dapat mengekspor laporan data sektoral dalam format PDF atau Excel sesuai kebutuhan."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "PHP", iconName: "PHP" },
          { name: "Bootstrap", iconName: "Bootstrap" },
          { name: "MySQL", iconName: "MySQL" },
          { name: "JavaScript", iconName: "JavaScript" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Manajemen Data Sektoral Desa",
        description: "Memungkinkan pengguna mengelola berbagai data sektoral desa dan kelurahan secara terstruktur, mulai dari penambahan, pembaruan, hingga penghapusan data melalui satu platform terintegrasi."
      },
      {
        title: "Otentikasi dan Role-Based Access Control",
        description: "Mengelola hak akses pengguna berdasarkan peran sehingga setiap pengguna hanya dapat mengakses fitur dan data sesuai dengan kewenangannya."
      },
      {
        title: "Dashboard Rekapitulasi Data",
        description: "Menyajikan ringkasan dan rekapitulasi data dalam bentuk dashboard interaktif untuk memudahkan pemantauan kondisi dan perkembangan data setiap desa."
      },
      {
        title: "Ekspor Laporan",
        description: "Memungkinkan pengguna menghasilkan laporan dalam format PDF maupun Excel sehingga data dapat digunakan untuk kebutuhan administrasi, dokumentasi, dan pelaporan."
      },
      {
        title: "Manajemen Master Data",
        description: "Menyediakan fitur pengelolaan data pendukung seperti pengguna, menu aplikasi, kategori data, dan tahun anggaran agar seluruh informasi tetap konsisten dan terstruktur."
      }
    ],
    gallery: [
      { image: "/projects/detail/pusdatin-kab-cirebon/pusdatin.png", title: "Dasbor Utama Pusdatin", caption: "Halaman ringkasan rekapitulasi data sektoral desa Kabupaten Cirebon." }
    ]
  },

  // ==========================================
  // UI/UX DESIGN PROJECTS
  // ==========================================
  "ui-design-prototype-uboost": {
    slug: "ui-design-prototype-uboost",
    title: "UI Design Prototype UBoost",
    tagline: "Desain purwarupa antarmuka UBoost dengan pendekatan berpusat pada pengguna.",
    coverImage: "/projects/uboost.png",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      figma: "https://www.figma.com/design/XVHfhNJNsVMPExVybbTArj/UBoost--Tugas-Technopreneurship---Copy-?node-id=13-123&t=GJthkXEK9Ve74fUL-1",
      prototype: "https://www.figma.com/proto/XVHfhNJNsVMPExVybbTArj/UBoost--Tugas-Technopreneurship---Copy-?node-id=13-123&p=f&t=GJthkXEK9Ve74fUL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    overview: "UI Design Prototype UBoost merupakan proyek perancangan antarmuka pengguna presisi tinggi (high-fidelity) yang dikembangkan untuk mendukung aplikasi platform UBoost. Proyek ini berfokus pada penyusunan alur pengguna yang intuitif, struktur hierarki visual yang rapi, serta pembuatan komponen UI yang konsisten dan responsif. Melalui penerapan prinsip desain berpusat pada pengguna, purwarupa ini membantu mengoptimalkan kenyamanan navigasi dan efisiensi interaksi pengguna.",
    problemBackground: "- **Alur Navigasi Terlalu Kompleks**: Pengguna membutuhkan antarmuka yang lebih sederhana untuk mengakses fitur utama tanpa kebingungan.\n- **Konsistensi Visual Masih Rendah**: Komponen antarmuka sebelumnya belum terstandardisasi sehingga tampilan terasa kurang harmonis.\n- **Kebutuhan Purwarupa Interaktif**: Diperlukan simulasi alur nyata agar pengalaman interaksi dapat diuji dan dievaluasi sebelum masuk tahap pengembangan.",
    solutionApproach: {
      design: "- **Penyusunan Design System dan UI Kit**: Membangun komponen UI reusable berbasis Auto Layout Figma untuk menjaga konsistensi visual di seluruh layar.\n- **Perancangan User Flow dan Wireframe**: Menyusun alur navigasi dari wireframe low-fidelity hingga purwarupa high-fidelity.\n- **Prototyping Interaktif**: Mengubah elemen visual menjadi purwarupa interaktif yang dapat diuji coba alurnya secara langsung.\n- **Optimasi Hierarki Visual**: Mengatur tipografi, tata letak, dan skema warna untuk meningkatkan kejelasan informasi.",
      workflow: [
        "Riset awal dan identifikasi kebutuhan alur pengguna.",
        "Pembuatan sketsa wireframe dan alur aplikasi.",
        "Penyusunan sistem desain dan panduan gaya komponen UI.",
        "Perancangan antarmuka high-fidelity pada Figma.",
        "Penambahan interaksi dan animasi mikro untuk purwarupa.",
        "Pengujian dan evaluasi pengalaman pengguna pada purwarupa interaktif."
      ]
    },
    techStack: [
      {
        category: "Alat Desain",
        items: [
          { name: "Figma", iconName: "Figma" },
          { name: "Auto Layout", iconName: "Figma" },
          { name: "Design System", iconName: "Figma" },
          { name: "Interactive Prototyping", iconName: "Figma" },
          { name: "User Flows", iconName: "Figma" },
          { name: "Wireframing", iconName: "Figma" },
          { name: "Whimsical", iconName: "Figma" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Sistem Desain Terstruktur",
        description: "Menyediakan perpustakaan komponen UI yang konsisten berbasis Auto Layout untuk kemudahan pengembangan."
      },
      {
        title: "Purwarupa Interaktif",
        description: "Menyajikan simulasi alur navigasi aplikasi yang interaktif dan dapat diuji secara langsung."
      },
      {
        title: "Hierarki Visual Bersih",
        description: "Mengatur tata letak dan tipografi secara harmonis untuk mempermudah pemahaman pengguna."
      },
      {
        title: "Alur Pengguna Intuitif",
        description: "Merancang setiap tahapan interaksi agar berjalan secara logis dan responsif."
      }
    ],
    gallery: [
      { image: "/projects/detail/ui-design-prototype-uboost/uboost.png", title: "Purwarupa Utama UBoost", caption: "Tampilan dasbor dan alur interaksi antarmuka UBoost." }
    ]
  },
  "ui-design-prototype-niagahoster": {
    slug: "ui-design-prototype-niagahoster",
    title: "UI Design Prototype Niagahoster",
    tagline: "Redesain antarmuka web Niagahoster yang berfokus pada kemudahan navigasi.",
    coverImage: "/projects/niagahoster.png",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      figma: "https://www.figma.com/design/7xcYSxhg7DJWW42SmLagbI/Case-Study-Niagahoster-by-Azharangga-Kusuma?node-id=35-2117&t=Ez3jYBbgHcAJHAY2-1",
      prototype: "https://www.figma.com/proto/7xcYSxhg7DJWW42SmLagbI/Case-Study-Niagahoster-by-Azharangga-Kusuma?node-id=35-2117&p=f&t=Ez3jYBbgHcAJHAY2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A2117",
    },
    overview: "UI Design Prototype Niagahoster merupakan proyek studi kasus redesain antarmuka pengguna yang terinspirasi dari layanan web hosting Niagahoster. Proyek ini bertujuan meningkatkan pengalaman pengguna melalui penerapan struktur informasi yang lebih rapi, hierarki visual yang jelas, serta penyederhanaan alur pembelian dan navigasi produk. Dengan purwarupa interaktif ini, calon pengguna dapat menjelajahi opsi paket hosting dengan lebih intuitif dan nyaman.",
    problemBackground: "- **Informasi Produk Cenderung Padat**: Tampilan halaman utama dan daftar paket hosting sebelumnya cukup padat sehingga membutuhkan waktu bagi pengguna untuk membandingkan spesifikasi.\n- **Alur Pemesanan Perlu Dipersingkat**: Langkah-langkah pembelian paket hosting memerlukan alur navigasi yang lebih ringkas dan intuitif.\n- **Hierarki Konten Perlu Dipertegas**: Elemen penting seperti tombol aksi (CTA) dan fitur unggulan memerlukan penekanan visual yang lebih jelas.",
    solutionApproach: {
      design: "- **Penyederhanaan Tata Letak Produk**: Merancang ulang tata letak kartu paket hosting agar spesifikasi dan harga mudah dibandingkan.\n- **Penataan Hierarki Visual dan CTA**: Menyoroti tombol aksi utama dengan kontras warna yang tepat untuk mengarahkan pengguna secara intuitif.\n- **Pembuatan Wireframe dan UI Kit**: Menyusun kerangka sistem komponen UI yang modern dan konsisten.\n- **Purwarupa Interaktif Pemesanan**: Mengembangkan alur interaktif dari halaman utama hingga proses konfirmasi paket.",
      workflow: [
        "Analisis antarmuka awal dan identifikasi area peningkatan UX.",
        "Penyusunan arsitektur informasi dan alur navigasi pengguna.",
        "Pembuatan wireframe low-fidelity dan eksplorasi tata letak.",
        "Desain antarmuka high-fidelity dan penyusunan UI Kit di Figma.",
        "Pembuatan purwarupa interaktif alur pemesanan produk.",
        "Evaluasi hasil redesain untuk memastikan keterbacaan dan kenyamanan antarmuka."
      ]
    },
    techStack: [
      {
        category: "Alat Desain",
        items: [
          { name: "Figma", iconName: "Figma" },
          { name: "Design System", iconName: "Figma" },
          { name: "Wireframing", iconName: "Figma" },
          { name: "User Flows", iconName: "Figma" },
          { name: "Interactive Prototyping", iconName: "Figma" },
          { name: "UI Kit", iconName: "Figma" },
          { name: "Information Architecture", iconName: "Figma" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Tampilan Katalog Paket Jelas",
        description: "Menyajikan kartu produk hosting dengan perbandingan harga dan spesifikasi yang mudah dipahami."
      },
      {
        title: "Alur Pemesanan Ringkas",
        description: "Merancang langkah pembelian yang efisien untuk mengurangi beban kognitif pengguna."
      },
      {
        title: "Purwarupa Interaktif Figma",
        description: "Menyediakan alur navigasi interaktif untuk mensimulasikan pengalaman menjelajahi situs."
      },
      {
        title: "Hierarki Visual Terstruktur",
        description: "Menekankan poin informasi penting dan tombol aksi utama dengan penataan visual yang tegas."
      }
    ],
    gallery: [
      { image: "/projects/detail/ui-design-prototype-niagahoster/niagahoster.png", title: "Purwarupa Utama Niagahoster", caption: "Redesain halaman utama dan perbandingan paket web hosting." }
    ]
  },

  // ==========================================
  // MACHINE LEARNING PROJECTS
  // ==========================================
  "food-image-classification-and-recommendation-menu": {
    slug: "food-image-classification-and-recommendation-menu",
    title: "Food Image Classification and Recommendation Menu",
    tagline: "Membangun model klasifikasi bahan makanan untuk mendukung rekomendasi gizi yang lebih cerdas.",
    coverImage: "/projects/gizimeal-model.png",
    category: "Machine Learning",
    role: "AI Engineer dan Project Manager",
    duration: "4 Bulan",
    type: "Team",
    links: {
      source: "https://github.com/CC26-PSU393-GiziMeal/AI-Engineer/tree/main/Model",
      model: "https://huggingface.co/CC26-PSU393/gizimeal-model/tree/main",
    },
    overview: "Model Klasifikasi Bahan Makanan merupakan komponen utama dari proyek GiziMeal yang bertugas mengidentifikasi jenis bahan makanan dari gambar yang diunggah pengguna. Model ini dikembangkan menggunakan pendekatan Deep Learning untuk mengenali 15 kategori bahan makanan dan menghasilkan prediksi yang menjadi dasar perhitungan nilai gizi serta rekomendasi menu seimbang pada aplikasi GiziMeal. Pengembangan model mencakup seluruh tahapan, mulai dari persiapan dataset, prapemrosesan citra, pelatihan model, hingga evaluasi performa untuk memastikan hasil klasifikasi yang akurat dan andal.",
    problemBackground: "- **Identifikasi Bahan Makanan Masih Dilakukan Secara Manual**: Menentukan jenis bahan makanan dari gambar memerlukan pengamatan langsung yang dapat memakan waktu dan berpotensi menimbulkan kesalahan.\n- **Variasi Bentuk dan Kondisi Bahan Makanan**: Perbedaan pencahayaan, sudut pengambilan gambar, dan bentuk bahan makanan membuat proses klasifikasi menjadi lebih menantang.\n- **Dibutuhkan Prediksi yang Andal**: Rekomendasi gizi pada aplikasi bergantung pada hasil klasifikasi, sehingga model perlu menghasilkan prediksi yang konsisten dan akurat.",
    solutionApproach: {
      design: "- **Model Klasifikasi Berbasis Deep Learning**: Mengembangkan model klasifikasi citra yang mampu mengenali berbagai jenis bahan makanan secara otomatis dari gambar yang diunggah pengguna.\n- **Peningkatan Kualitas Dataset**: Menerapkan proses prapemrosesan dan augmentasi citra untuk meningkatkan kemampuan model dalam mengenali berbagai variasi data.\n- **Evaluasi Performa Model**: Melakukan pengujian menggunakan data yang belum pernah dilatih untuk memastikan model memiliki kemampuan generalisasi yang baik.\n- **Integrasi dengan Aplikasi GiziMeal**: Menghubungkan hasil prediksi model dengan sistem rekomendasi gizi sehingga pengguna memperoleh informasi nutrisi dan rekomendasi menu secara otomatis.",
      workflow: [
        "Dataset bahan makanan dikumpulkan dan dipersiapkan.",
        "Citra dipraproses dan diaugmentasi untuk meningkatkan kualitas data.",
        "Dataset dibagi menjadi data pelatihan, validasi, dan pengujian.",
        "Model dilatih untuk mempelajari pola setiap kategori bahan makanan.",
        "Model dievaluasi menggunakan data pengujian.",
        "Model menghasilkan prediksi yang diintegrasikan ke dalam aplikasi GiziMeal."
      ]
    },
    techStack: [
      {
        category: "Teknologi Machine Learning",
        items: [
          { name: "Python", iconName: "Python" },
          { name: "TensorFlow", iconName: "TensorFlow" },
          { name: "Keras", iconName: "Keras" },
          { name: "CNN ResNet18", iconName: "Python" },
          { name: "Pandas", iconName: "Pandas" },
          { name: "Scikit-learn", iconName: "scikit-learn" },
          { name: "NumPy", iconName: "NumPy" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Klasifikasi Bahan Makanan",
        description: "Mengidentifikasi 15 jenis bahan makanan dari citra digital secara otomatis menggunakan model Deep Learning."
      },
      {
        title: "Prapemrosesan dan Augmentasi Data",
        description: "Melakukan normalisasi, augmentasi, dan persiapan dataset untuk meningkatkan kualitas data pelatihan."
      },
      {
        title: "Pelatihan dan Evaluasi Model",
        description: "Melatih model klasifikasi serta mengevaluasi performanya menggunakan metrik yang sesuai untuk memastikan hasil prediksi yang optimal."
      },
      {
        title: "Prediksi Gambar Baru",
        description: "Mampu mengklasifikasikan gambar bahan makanan yang belum pernah digunakan selama proses pelatihan."
      },
      {
        title: "Integrasi dengan GiziMeal",
        description: "Menghasilkan prediksi yang digunakan sebagai dasar analisis kandungan gizi dan rekomendasi menu pada aplikasi GiziMeal."
      }
    ],
    contributors: [
      { name: "Azharangga Kusuma", role: "AI Engineer dan Project Manager", avatar: "/team/angga.png", github: "https://github.com/azharangga", linkedin: "https://linkedin.com/in/azharanggakusuma" },
      { name: "Putri Nabilla", role: "AI Engineer", avatar: "/team/billa.png", github: "https://github.com/putribila", linkedin: "https://linkedin.com/in/putri-nabilla-77a670223" },
      { name: "Farina Setya Rahesti", role: "Data Scientist", avatar: "/team/farina.png", github: "https://github.com/farinasetyarahesti", linkedin: "https://www.linkedin.com/in/farina-setya-91474a3ab" },
      { name: "Mahaputri Buana Devwitasari", role: "Data Scientist", avatar: "/team/buana.png", github: "https://github.com/mahaputribuanaa", linkedin: "https://www.linkedin.com/in/mahaputri-buana-87b924332" },
      { name: "M. Dava Arya Nada Putra", role: "Full-Stack Web Developer", avatar: "/team/dava.png", github: "https://github.com/mdavaarya", linkedin: "https://www.linkedin.com/in/m-dava-arya-nada-putra-a2ba8a3a5" },
      { name: "Muhammad Ihsanul Dzaky", role: "Full-Stack Web Developer", avatar: "/team/dzaky.png", github: "https://github.com/ihsanulDzaky", linkedin: "https://www.linkedin.com/in/muhammad-ihsanul-dzaky" }
    ],
    gallery: [
      { image: "/projects/detail/food-image-classification-and-recommendation-menu/gizimeal-model.png", title: "Dasbor Metrik Model AI", caption: "Visualisasi kurva pelatihan model CNN kustom dan akurasi prediksi." }
    ]
  },
  "tokopedia-review-sentiment-analysis": {
    slug: "tokopedia-review-sentiment-analysis",
    title: "Tokopedia Review Sentiment Analysis",
    tagline: "Memahami opini pengguna melalui analisis sentimen ulasan produk.",
    coverImage: "/projects/sentimen-tokped.png",
    category: "Machine Learning",
    role: "Data Scientist",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/tokopedia-review-sentiment-analysis",
      notebook: "https://github.com/azharangga/tokopedia-review-sentiment-analysis/blob/main/pelatihan_model.ipynb",
    },
    overview: "Tokopedia Review Sentiment Analysis merupakan proyek analisis teks yang berfokus pada pengolahan ulasan pengguna untuk mengidentifikasi sentimen positif, negatif, atau netral terhadap suatu produk. Proyek ini bertujuan membantu memahami persepsi pengguna secara lebih terstruktur melalui pendekatan Natural Language Processing dan klasifikasi sentimen. Dengan memproses data ulasan yang tersedia, sistem dapat mengubah opini teks menjadi informasi yang lebih mudah dianalisis untuk kebutuhan evaluasi produk, riset pasar, maupun pengambilan keputusan.",
    problemBackground: "- **Ulasan Pengguna Sulit Dikelola Secara Manual**: Jumlah ulasan yang banyak membuat proses membaca dan memahami opini pengguna secara manual menjadi tidak efisien.\n- **Opini Pengguna Beragam dan Tidak Terstruktur**: Ulasan pengguna biasanya ditulis dengan gaya bahasa yang berbeda-beda sehingga sulit dianalisis tanpa pendekatan otomatis.\n- **Informasi Sentimen Sulit Dimanfaatkan Langsung**: Data ulasan mentah belum memberikan gambaran yang jelas bagi pengambil keputusan tanpa diolah menjadi informasi sentimen yang terstruktur.",
    solutionApproach: {
      design: "- **Analisis Sentimen Otomatis**: Menerapkan model klasifikasi untuk mengenali sentimen pengguna dari teks ulasan secara otomatis.\n- **Pengolahan Teks Terstruktur**: Melakukan pembersihan dan persiapan data agar ulasan dapat dianalisis dengan lebih akurat.\n- **Informasi yang Lebih Mudah Dipahami**: Mengubah opini pengguna menjadi hasil analisis yang terstruktur sehingga lebih mudah digunakan untuk evaluasi produk.\n- **Dukungan untuk Pengambilan Keputusan**: Menyediakan hasil analisis sentimen yang dapat membantu memahami respons pengguna terhadap produk atau layanan.",
      workflow: [
        "Data ulasan pengguna dikumpulkan dari sumber yang tersedia.",
        "Teks ulasan dibersihkan dan dipproses terlebih dahulu.",
        "Sistem melakukan analisis sentimen terhadap setiap ulasan.",
        "Hasil sentimen diklasifikasikan ke dalam kategori tertentu.",
        "Hasil analisis ditampilkan dalam bentuk ringkasan atau visualisasi.",
        "Informasi tersebut digunakan untuk memahami opini pengguna secara lebih jelas."
      ]
    },
    techStack: [
      {
        category: "Teknologi Machine Learning",
        items: [
          { name: "Python", iconName: "Python" },
          { name: "Google Colab", iconName: "Google Colab" },
          { name: "TensorFlow", iconName: "TensorFlow" },
          { name: "Hugging Face", iconName: "Hugging Face" },
          { name: "scikit-learn", iconName: "scikit-learn" },
          { name: "Sastrawi", iconName: "Sastrawi" },
          { name: "NLTK", iconName: "NLTK" },
          { name: "Pandas", iconName: "Pandas" },
          { name: "NumPy", iconName: "NumPy" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Klasifikasi Sentimen Ulasan",
        description: "Menganalisis teks ulasan untuk menentukan apakah sentimen pengguna bersifat positif, negatif, atau netral."
      },
      {
        title: "Pengolahan Data Teks",
        description: "Membersihkan dan mempersiapkan data ulasan agar siap digunakan dalam proses analisis sentimen."
      },
      {
        title: "Ekstraksi Informasi Opini",
        description: "Mengubah ulasan pengguna menjadi informasi yang lebih terstruktur sehingga dapat digunakan untuk evaluasi produk."
      },
      {
        title: "Visualisasi Hasil Analisis",
        description: "Menampilkan hasil sentimen dalam bentuk yang lebih mudah dipahami untuk mendukung interpretasi data."
      },
      {
        title: "Evaluasi Performa Model",
        description: "Mengukur hasil klasifikasi untuk mengetahui seberapa baik model dalam mengenali sentimen dari ulasan pengguna."
      }
    ],
    gallery: [
      { image: "/projects/detail/tokopedia-review-sentiment-analysis/sentimen-tokped.png", title: "Confusion Matrix Hasil Evaluasi", caption: "Matriks evaluasi model menampilkan prediksi benar vs salah untuk tiap kelas sentimen." }
    ]
  },
  "apple-leaf-disease-classification": {
    slug: "apple-leaf-disease-classification",
    title: "Apple Leaf Disease Classification",
    tagline: "Deteksi dini penyakit daun apel untuk mendukung pertanian yang lebih sehat.",
    coverImage: "/projects/klasifikasi-apel.png",
    category: "Machine Learning",
    role: "Deep Learning Engineer",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/apple-leaf-disease-classification",
      notebook: "https://github.com/azharangga/apple-leaf-disease-classification/blob/main/pelatihan_model.ipynb",
    },
    overview: "Apple Leaf Disease Classification merupakan aplikasi berbasis web yang dikembangkan untuk membantu mengidentifikasi penyakit pada daun apel melalui analisis citra menggunakan Deep Learning. Proyek ini bertujuan mendukung deteksi dini penyakit tanaman sehingga penanganan dapat dilakukan lebih cepat dan tepat. Pengguna hanya perlu mengunggah gambar daun apel, kemudian sistem akan mengklasifikasikan kondisi daun beserta tingkat kepercayaan hasil prediksi secara otomatis. Pendekatan ini diharapkan dapat membantu meningkatkan efisiensi pemantauan kesehatan tanaman dan mengurangi risiko penyebaran penyakit.",
    problemBackground: "- **Identifikasi Penyakit Masih Bergantung pada Pengamatan Manual**: Proses identifikasi penyakit daun apel umumnya dilakukan melalui pengamatan visual yang membutuhkan pengalaman dan berpotensi menghasilkan diagnosis yang kurang konsisten.\n- **Penanganan Penyakit Sering Terlambat**: Keterlambatan dalam mengenali gejala penyakit dapat menyebabkan penyebaran penyakit yang lebih luas dan menurunkan kualitas hasil panen.\n- **Akses terhadap Identifikasi Penyakit Masih Terbatas**: Tidak semua petani atau pengguna memiliki akses langsung kepada tenaga ahli untuk melakukan identifikasi penyakit secara cepat.",
    solutionApproach: {
      design: "- **Deteksi Penyakit Berbasis Deep Learning**: Memanfaatkan model Deep Learning untuk mengidentifikasi penyakit daun apel secara otomatis dari gambar yang diunggah pengguna.\n- **Proses Identifikasi yang Cepat**: Memberikan hasil klasifikasi hanya dalam beberapa detik sehingga pengguna dapat segera mengetahui kondisi tanaman.\n- **Akses Melalui Platform Web**: Menyediakan layanan identifikasi yang dapat diakses melalui browser tanpa memerlukan perangkat khusus.\n- **Mendukung Deteksi Dini Penyakit**: Membantu pengguna mengenali penyakit sejak tahap awal sehingga tindakan penanganan dapat dilakukan lebih cepat untuk mengurangi risiko penyebaran.",
      workflow: [
        "Pengguna mengunggah gambar daun apel.",
        "Sistem melakukan prapemrosesan citra.",
        "Model Deep Learning menganalisis gambar.",
        "Sistem mengklasifikasikan jenis penyakit atau kondisi daun.",
        "Hasil prediksi beserta tingkat kepercayaan ditampilkan kepada pengguna.",
        "Riwayat hasil identifikasi dapat disimpan dan ditinjau kembali."
      ]
    },
    techStack: [
      {
        category: "Teknologi Deep Learning",
        items: [
          { name: "Python", iconName: "Python" },
          { name: "Google Colab", iconName: "Google Colab" },
          { name: "TensorFlow", iconName: "TensorFlow" },
          { name: "Hugging Face", iconName: "Hugging Face" },
          { name: "scikit-learn", iconName: "scikit-learn" },
          { name: "Pandas", iconName: "Pandas" },
          { name: "NumPy", iconName: "NumPy" },
          { name: "Matplotlib", iconName: "Matplotlib" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Klasifikasi Penyakit Daun Apel",
        description: "Mengidentifikasi kondisi daun apel berdasarkan gambar yang diunggah pengguna dan mengklasifikasikannya ke dalam kategori penyakit yang tersedia."
      },
      {
        title: "Unggah Gambar Secara Langsung",
        description: "Memungkinkan pengguna mengunggah foto daun apel melalui antarmuka web sehingga proses identifikasi dapat dilakukan dengan mudah."
      },
      {
        title: "Hasil Prediksi Otomatis",
        description: "Menampilkan hasil klasifikasi beserta tingkat kepercayaan model untuk membantu pengguna memahami hasil identifikasi."
      },
      {
        title: "Riwayat Hasil Prediksi",
        description: "Menyimpan hasil klasifikasi sehingga pengguna dapat melihat kembali riwayat deteksi yang telah dilakukan."
      },
      {
        title: "Antarmuka yang Mudah Digunakan",
        description: "Menyediakan tampilan yang sederhana dan responsif agar proses identifikasi dapat dilakukan dengan cepat dan nyaman."
      }
    ],
    gallery: [
      { image: "/projects/detail/apple-leaf-disease-classification/klasifikasi-apel.png", title: "Grafik Evaluasi Akurasi", caption: "Kurva pelatihan dan validasi akurasi model CNN kustom." }
    ]
  },
  "bitcoin-price-forecasting": {
    slug: "bitcoin-price-forecasting",
    title: "Bitcoin Price Forecasting",
    tagline: "Memprediksi pergerakan harga Bitcoin berdasarkan data historis.",
    coverImage: "/projects/prediksi-bitcoin.png",
    category: "Machine Learning",
    role: "Data Scientist",
    duration: "1 Bulan",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/bitcoin-price-forecasting",
      notebook: "https://github.com/azharangga/bitcoin-price-forecasting/blob/main/pelatihan_model.ipynb",
    },
    overview: "Bitcoin Price Forecasting merupakan proyek prediksi deret waktu yang berfokus pada peramalan harga penutupan Bitcoin berdasarkan data historis. Proyek ini membandingkan dua pendekatan model berbasis Recurrent Neural Network, yaitu Baseline LSTM dan Seq2Seq LSTM dengan Attention Mechanism. Dengan memanfaatkan data historis selama 96 langkah ke belakang untuk memprediksi 3 langkah ke depan, proyek ini mencakup proses lengkap mulai dari rekayasa fitur, penskalaan data, pembuatan dataset berbasis windowing, pelatihan model, hingga evaluasi hasil prediksi secara komparatif.",
    problemBackground: "- **Harga Bitcoin Sulit Diprediksi Secara Manual**: Pergerakan harga Bitcoin sangat fluktuatif sehingga sulit dianalisis hanya dengan melihat tren secara visual tanpa pendekatan model yang lebih sistematis.\n- **Pola Data Historis Sangat Kompleks**: Data harga Bitcoin dipengaruhi oleh banyak faktor dan memiliki pola yang berubah-ubah, sehingga diperlukan model yang mampu mempelajari dependensi jangka panjang.\n- **Prediksi Multi Langkah Lebih Menantang**: Memprediksi lebih dari satu langkah ke depan jauh lebih sulit dibandingkan prediksi satu langkah karena model harus memahami urutan data secara lebih mendalam.",
    solutionApproach: {
      design: "- **Pendekatan Deep Learning untuk Deret Waktu**: Menggunakan model berbasis deep learning agar sistem dapat mempelajari pola historis harga Bitcoin secara lebih adaptif.\n- **Arsitektur Seq2Seq dengan Attention**: Menerapkan model sequence-to-sequence dengan attention mechanism untuk meningkatkan kemampuan prediksi multi-step yang lebih stabil.\n- **Rekayasa Fitur dan Windowing Data**: Menyusun fitur teknikal dan membagi data ke dalam window historis agar model dapat menangkap pola pergerakan harga dengan lebih baik.\n- **Evaluasi Model Secara Komparatif**: Membandingkan performa model baseline dan model utama untuk mengetahui pendekatan yang paling efektif dalam memprediksi harga Bitcoin.",
      workflow: [
        "Dataset harga historis Bitcoin dimuat ke dalam sistem.",
        "Data dibersihkan dan dianalisis untuk memahami pola awal.",
        "Fitur teknikal dan statistik dibentuk dari data historis.",
        "Data dibagi menjadi train, validation, dan test berdasarkan urutan waktu.",
        "Dataset diubah ke format windowing untuk prediksi multi-step.",
        "Model Baseline LSTM dan Seq2Seq LSTM dilatih dan dievaluasi.",
        "Hasil prediksi dibandingkan dengan data aktual dan divisualisasikan."
      ]
    },
    techStack: [
      {
        category: "Teknologi Machine Learning",
        items: [
          { name: "Python", iconName: "Python" },
          { name: "Google Colab", iconName: "Google Colab" },
          { name: "TensorFlow", iconName: "TensorFlow" },
          { name: "Hugging Face", iconName: "Hugging Face" },
          { name: "scikit-learn", iconName: "scikit-learn" },
          { name: "statsmodels", iconName: "statsmodels" },
          { name: "Pandas", iconName: "Pandas" },
          { name: "NumPy", iconName: "NumPy" },
          { name: "Matplotlib", iconName: "Matplotlib" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Rekayasa Fitur Time-Series",
        description: "Menyusun berbagai fitur teknikal dan statistik dari data historis harga Bitcoin untuk membantu model memahami pola pergerakan harga secara lebih baik."
      },
      {
        title: "Penskalaan Data Terpisah",
        description: "Menerapkan penskalaan fitur dan target secara berbeda agar distribusi data lebih stabil selama proses pelatihan model."
      },
      {
        title: "Windowing Multi-Step",
        description: "Membentuk dataset berbasis jendela historis sehingga model dapat mempelajari pola dari data masa lalu dan menghasilkan prediksi beberapa langkah ke depan."
      },
      {
        title: "Model Seq2Seq LSTM dengan Attention",
        description: "Menggunakan arsitektur sequence-to-sequence yang dilengkapi attention mechanism untuk meningkatkan kualitas prediksi deret waktu multi-step."
      },
      {
        title: "Evaluasi dan Visualisasi Hasil",
        description: "Menyediakan perbandingan hasil prediksi antara model baseline, model Seq2Seq, dan harga aktual dalam bentuk evaluasi serta visualisasi."
      }
    ],
    gallery: [
      { image: "/projects/detail/bitcoin-price-forecasting/prediksi-bitcoin.png", title: "Grafik Evaluasi Prediksi Harga", caption: "Perbandingan grafik hasil prediksi model Seq2Seq LSTM vs harga aktual Bitcoin." }
    ]
  }
};
