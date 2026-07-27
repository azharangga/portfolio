import { ProjectDetail } from "./project-details";

export const PROJECT_DETAILS_ID: Record<string, ProjectDetail> = {
  gizimeal: {
    slug: "gizimeal",
    title: "GiziMeal",
    tagline: "Perencanaan Nutrisi & Meal Planner Otomatis Berbasis AI",
    coverImage: "/projects/gizimeal.png",
    category: "AI & Full Stack",
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer / AI Lead",
    duration: "4 Bulan",
    type: "Team",
    version: "v1.2.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "Juni 2026",
    links: {
      website: "https://gizimeal.projectshowcase.web.id",
      source: "https://github.com/azharangga/gizimeal",
      apiDocs: "https://cc26-psu393-gizimeal-api.hf.space",
    },
    overview: "GiziMeal adalah ekosistem perencanaan makanan dan nutrisi digital interaktif yang dibuat sebagai capstone project dari tim CC26-PSU393 dengan tema 'Healthy Lives & Well-Being'. Proyek ini bertujuan untuk mengatasi minimnya literasi gizi di masyarakat dengan menyatukan teknologi klasifikasi citra bahan makanan otomatis menggunakan Deep Learning (multi-task model) dengan basis pedoman gizi resmi Indonesia (Permenkes RI No. 28/2019 tentang Angka Kecukupan Gizi / AKG). Aplikasi ini dapat mengenali 15 jenis bahan makanan utama dari foto yang diunggah pengguna, menghitung estimasi kalori harian (BMR & TDEE menggunakan rumus Mifflin–St Jeor), serta memberikan rekomendasi menu makanan seimbang yang dilengkapi skor AKG.\n\n### Struktur Direktori Inti Proyek\n\n```text\ngizimeal/\n├── src/\n│   ├── app/                         # Next.js App Router (Halaman & Rute API)\n│   │   ├── (auth)/                  # Rute autentikasi (login, register, reset-password)\n│   │   ├── (pages)/\n│   │   │   ├── calculator/          # Kalkulator BMR/TDEE Mifflin-St Jeor\n│   │   │   ├── chatbot/             # Drawer Asisten Penasihat AI\n│   │   │   ├── foods/               # Mesin Pencari Database Nutrisi\n│   │   │   ├── history/             # Riwayat prediksi & pelacakan kalori harian\n│   │   │   ├── predict/             # Alur unggah gambar & Inferensi AI\n│   │   │   └── referensi/           # Tabel Referensi Resmi AKG Permenkes RI\n```",
    problemBackground: "Penyakit kardiovaskular, obesitas, dan diabetes meningkat pesat karena kurangnya kesadaran masyarakat tentang asupan gizi. Sistem pelacakan makanan yang ada saat ini sangat manual, mengharuskan pengguna mencari dan memasukkan setiap berat bahan makanan secara manual—tugas berulang yang menyebabkan 80% pengguna berhenti dalam waktu dua minggu. Selain itu, konsultasi dengan ahli gizi profesional terlalu mahal bagi masyarakat umum, memicu perlunya sistem pelacakan otomatis.\n\n### Hambatan Teknis Utama\n- **Friksi Input Manual**: Mewajibkan pengguna menimbang makanan secara manual menyebabkan tingkat pengabaian aplikasi sebesar 84%.\n- **Rekomendasi Tidak Tervalidasi**: Aplikasi standar menggunakan referensi gizi luar negeri daripada menyesuaikan standar gizi lokal Indonesia (Permenkes RI No. 28/2019).\n- **Biaya Ahli yang Mahal**: Konsultasi gizi kustom berkisar dari Rp 500.000 per jam, sulit dijangkau masyarakat umum.",
    solutionApproach: {
      design: "Kami merancang GiziMeal dengan tata letak dasbor editorial yang bersih dan memprioritaskan mode gelap/terang menggunakan Tailwind CSS. Tipografi dengan kontras tinggi dan ruang kosong memastikan pengguna dapat mencatat entri makanan dalam kurang dari 3 ketukan. Kami juga membangun tampilan kalender mingguan intuitif untuk melacak anggaran kalori, grafik responsif untuk distribusi makronutrisi (Karbohidrat, Protein, Lemak), dan animasi halus yang dipandu oleh Framer Motion agar pencatatan terasa menyenangkan.",
      techExplanation: "Sistem dibagi menjadi frontend Next.js 15 (App Router) berkinerja tinggi dan backend FastAPI yang menampung model Custom CNN Multi-Task (backbone ResNet18). Gambar yang diunggah dari frontend dianalisis di backend, menghasilkan prediksi resep dan indeks nutrisi menggunakan database makanan USDA yang terverifikasi. Supabase PostgreSQL digunakan sebagai database utama dengan token JWT khusus untuk autentikasi keamanan.",
      workflow: [
        "Pengguna mengunggah atau memotret makanan di klien seluler/desktop.",
        "Klien Next.js mengompresi media dan mengirimkannya ke gateway inferensi FastAPI.",
        "Model Deep Learning mengeluarkan klasifikasi kategori makanan dan pemetaan resep.",
        "Backend menanyakan database PostgreSQL untuk nilai nutrisi dan resep yang sesuai.",
        "Klien menampilkan metrik nutrisi interaktif dan menambahkannya ke anggaran harian pengguna.",
        "Log harian secara otomatis disusun untuk menghasilkan laporan kemajuan mingguan."
      ]
    },
    techStack: [
      {
        category: "Frontend Stack",
        items: [
          { name: "Next.js", version: "v15.0.0", reason: "Next.js 15 App Router dipilih karena rendering Server Components yang unggul, arsitektur perutean berbasis file, dan kecepatan kompilasi HMR yang cepat menggunakan Turbopack.", role: "Web Application Framework", iconName: "SiNextdotjs" },
          { name: "React", version: "v19.0.0", reason: "React 19 menyediakan pembaruan state berbasis komponen deklaratif, optimalisasi rendering konkuren, dan dukungan kait untuk tindakan tata letak.", role: "UI Library", iconName: "SiReact" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Tailwind CSS v4 memperkenalkan konfigurasi berbasis CSS dan waktu kompilasi yang sangat cepat, memungkinkan penyesuaian token UI dengan cepat.", role: "CSS Utilities", iconName: "SiTailwindcss" },
          { name: "Framer Motion", version: "v12.0.0", reason: "Digunakan untuk menjalankan animasi mikro yang halus, modal slide-over, dan transisi elemen.", role: "Pustaka Animasi", iconName: "SiFramer" }
        ]
      },
      {
        category: "Backend & Database",
        items: [
          { name: "FastAPI", version: "Latest", reason: "FastAPI menawarkan perutean ASGI Python asinkron berkinerja tinggi dengan validasi data Pydantic bawaan dan skema OpenAPI yang dibuat otomatis.", role: "API Gateway", iconName: "SiFastapi" },
          { name: "Supabase", version: "Latest", reason: "Supabase menyediakan persistensi PostgreSQL, saluran real-time, dan tabel autentikasi JWT yang aman secara langsung.", role: "Database & Auth BaaS", iconName: "SiSupabase" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pengenalan Makanan AI",
        description: "Memungkinkan pengenalan instan objek makanan dari kamera atau galeri foto, menghilangkan pencarian manual.",
        problemSolved: "Pencarian dan pengetikan manual yang membosankan untuk memasukkan makanan harian.",
        howItWorks: "Mengubah gambar yang diunggah menjadi tensor PyTorch yang dinormalisasi, meneruskannya ke model CNN, dan memetakan label kelas ke database nutrisi.",
        techUsed: ["PyTorch", "FastAPI", "Python", "Next.js"],
        benefit: "Mencatat makanan dalam waktu kurang dari 2 detik, mengurangi hambatan input pengguna dan meningkatkan retensi.",
        image: "/projects/gizimeal.png"
      },
      {
        title: "Kalkulator Kalori & BMR/TDEE",
        description: "Mengestimasi kebutuhan kalori harian secara personal menggunakan metode Mifflin–St Jeor berdasarkan data fisik pengguna.",
        problemSolved: "Penghitungan kalori manual yang tidak akurat.",
        howItWorks: "Mengevaluasi input fisik di sisi klien dan menyinkronkan profil target pengguna ke database Supabase.",
        techUsed: ["React.js", "Supabase", "Tailwind CSS"],
        benefit: "Menentukan batas kalori harian yang tepat untuk target berat badan pengguna.",
        image: "/projects/gizimeal.png"
      }
    ],
    finalResultImpact: {
      description: "GiziMeal secara dramatis menyederhanakan alur kerja pencatatan makanan. Pengguna melaporkan bahwa waktu pelacakan makanan berkurang sebesar 70% dibandingkan dengan pelacak kalori entri manual tradisional. Platform ini mencatat tingkat kepuasan pengguna yang tinggi.",
      metrics: [
        { label: "Akurasi Klasifikasi AI", value: "92.4%", description: "Akurasi validasi model untuk 15 kelas makanan" },
        { label: "Kecepatan Hitung BMR", value: "<10ms", description: "Waktu eksekusi perhitungan di sisi klien" },
        { label: "Pemuatan Awal Halaman", value: "0.4s", description: "Waktu ke interaktif untuk daftar halaman katalog" }
      ]
    },
    gallery: [
      { image: "/projects/gizimeal.png", title: "Antarmuka Halaman Utama", caption: "Dasbor interaktif menampilkan kalkulator kalori dan log makanan." },
      { image: "/projects/gizimeal-model.png", title: "Dasbor Metrik Model AI", caption: "Visualisasi kurva pelatihan model CNN kustom dan akurasi prediksi." }
    ],
    lessonsLearned: {
      experience: "Belajar bagaimana mengoordinasikan insinyur lintas disiplin (AI & Full-stack) dan membangun jalur integrasi yang kuat.",
      technicalPivot: "Mengubah database dari MySQL ke PostgreSQL Supabase untuk memanfaatkan kemampuan Realtime yang mudah dan autentikasi pengguna yang terintegrasi.",
      evaluation: "Sistem berhasil dalam kecepatan model tetapi dapat memperluas catatan database untuk kelompok makanan non-Indonesia.",
      improvements: "Mengintegrasikan pemindai kamera otomatis dengan OCR untuk panel nutrisi.",
      growth: "Meningkatkan keterampilan secara substansial dalam kontainerisasi jalur pembelajaran mendalam menggunakan Docker."
    }
  },
  dramova: {
    slug: "dramova",
    title: "Dramova",
    tagline: "Platform Streaming Drama Asia & Nonton Bareng Real-time Premium",
    coverImage: "/projects/dramova.png",
    category: "Web & Full Stack",
    status: "Completed",
    year: "2026",
    role: "Full Stack Engineer",
    duration: "3 Bulan",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Private",
    lastUpdated: "May 2026",
    links: {
      website: "https://dramova.projectshowcase.web.id",
    },
    overview: "Dramova adalah aplikasi web streaming video generasi berikutnya yang berspesialisasi dalam drama Asia. Selain fitur pemutar video bebas buffering menggunakan HLS.js, platform ini menawarkan fitur 'Co-watching' inovatif, yang memungkinkan pengguna membuat ruang menonton dan menyinkronkan pemutaran streaming secara real-time.\n\n### Alur Kerja Sistem Utama\n- **Chunking & Distribusi HLS**: Sumber video dibagi menjadi segmen 10 detik (.ts) yang diindeks di dalam berkas playlist M3U8 untuk penyesuaian adaptif instan.\n- **Penyinkron Ruangan**: Saluran Supabase mendistribusikan event siaran sinkronisasi JSON yang berisi timestamp ketika host memutar/menghentikan video.",
    problemBackground: "Menonton drama adalah aktivitas sosial yang tinggi, namun menonton bersama dari jarak jauh biasanya membutuhkan screensharing yang canggung pada alat seperti Discord. Selain itu, pemutar media berbasis browser sering kali buffering pada koneksi lambat karena gagal menyesuaikan kualitas streaming secara dinamis.",
    solutionApproach: {
      design: "Kami membangun dasbor bertema gelap yang imersif terinspirasi oleh Netflix and Apple TV, menggunakan batas putih minimal, grid blur premium, dan animasi geser khusus yang didorong oleh Framer Motion.",
      techExplanation: "Menggunakan HLS.js untuk HTTP Live Streaming agar video diputar dengan lancar. Sinkronisasi real-time dari ruang menonton dikelola oleh Supabase Realtime Channels, memeriksa status play/pause dan mengirimkan data sinkronisasi ke semua klien di ruangan.",
      workflow: [
        "Pengguna masuk dan menjelajahi katalog drama yang tersedia.",
        "Pengguna mengklik 'Buat Ruang Co-Watch'. Aplikasi menghasilkan tautan unik.",
        "Teman yang diundang bergabung ke ruangan melalui tautan tersebut.",
        "Saluran Supabase Realtime mendaftarkan peserta.",
        "Ketika host memutar/menghentikan video, semua klien menyinkronkan waktu pemutaran secara instan."
      ]
    },
    techStack: [
      {
        category: "Client & Video Player",
        items: [
          { name: "Next.js", version: "v16.0", reason: "Mendukung SEO yang baik dan rendering sisi server untuk katalog.", role: "Web Application Framework", iconName: "SiNextdotjs" },
          { name: "Tailwind CSS", version: "v3.4", reason: "Penataan cepat antarmuka panel streaming.", role: "CSS Utilities", iconName: "SiTailwindcss" },
          { name: "HLS.js", version: "Latest", reason: "Mendukung streaming video segmentasi dinamis.", role: "Video Player Core", iconName: "SiJavascript" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Nonton Bareng Real-time",
        description: "Membuat saluran menonton yang disinkronkan di mana pemimpin ruangan dapat mengontrol pemutaran, jeda, pencarian, dan parameter streaming.",
        problemSolved: "Sesi menonton media yang tidak sinkron melalui obrolan suara.",
        howItWorks: "Menggunakan WebSockets melalui saluran Supabase untuk menyiarkan timestamp pencarian host ke semua peserta.",
        techUsed: ["Supabase Realtime", "HLS.js", "React.js"],
        benefit: "Menonton video dengan lancar bersama teman secara jarak jauh.",
        image: "/projects/dramova.png"
      }
    ],
    finalResultImpact: {
      description: "Dramova menciptakan ruang hiburan sosial yang sangat interaktif. Streaming HLS sepenuhnya menyelesaikan masalah buffering pada koneksi jaringan seluler.",
      metrics: [
        { label: "Buffering Berkurang", value: "65%", description: "Dibandingkan dengan pemutaran MP4 standar pada koneksi 3G" },
        { label: "Selisih Sinkronisasi", value: "<150ms", description: "Keterlambatan sinkronisasi waktu nyata antar pemutar" },
        { label: "Skor UI Responsif", value: "99/100", description: "Evaluasi responsivitas tata letak seluler" },
        { label: "Waktu Pemuatan Halaman", value: "0.8s", description: "Waktu-ke-interaktif untuk halaman katalog streaming" }
      ]
    },
    gallery: [
      { image: "/projects/dramova.png", title: "Katalog Drama Utama", caption: "Kartu bertema gelap premium yang menyoroti episode tren." }
    ],
    lessonsLearned: {
      experience: "Merapikan standar HTTP Live Streaming, pembuatan segmen menggunakan FFmpeg, dan sinkronisasi state.",
      technicalPivot: "Memutuskan untuk meng-host struktur data statis daripada membangun server backend Node yang berat untuk menyederhanakan penerapan.",
      evaluation: "Sinkronisasi nonton bareng sangat cepat, meskipun obrolan teks langsung dapat ditambahkan di dalam ruangan.",
      improvements: "Membangun saluran suara terintegrasi menggunakan WebRTC.",
      growth: "Sangat memperkuat pemahaman tentang pola state reaktif di Next.js."
    }
  },
  "fifa-world-cup-2026": {
    slug: "fifa-world-cup-2026",
    title: "FIFA World Cup 2026",
    tagline: "Platform Siaran Langsung dan Statistik Turnamen Real-time",
    coverImage: "/projects/fifa-wc26.png",
    category: "Web Development",
    status: "Completed",
    year: "2026",
    role: "Front-end Developer",
    duration: "2 Bulan",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "Juli 2026",
    links: {
      website: "https://fifa-wc26.projectshowcase.web.id",
      source: "https://github.com/azharangga/fifa-wc",
    },
    overview: "FIFA World Cup 2026 adalah platform web streaming dan statistik sepak bola premium. Platform ini menyediakan siaran langsung menggunakan teknologi HLS.js untuk streaming olahraga tanpa jeda, dilengkapi dengan kalkulasi klasemen grup otomatis, jadwal pertandingan, dan statistik historis pemain.",
    problemBackground: "Selama turnamen olahraga besar, pengguna kesulitan menemukan siaran langsung yang andal tanpa buffer atau resolusi rendah. Selain itu, melacak klasemen grup, gol, kartu, dan pertandingan mendatang di beberapa halaman sangatlah merepotkan. Penggemar membutuhkan satu dasbor terpadu yang cepat.",
    solutionApproach: {
      design: "Dirancang dengan tata letak yang energetik namun bersih, menggunakan hierarki warna bertema olahraga (navy gelap, biru cerah, dan sorotan neon) dengan batas kartu tipis, pencarian jadwal instan, dan tabel grup responsif din.",
      techExplanation: "Built dengan Next.js dan TypeScript, menggunakan Tailwind CSS untuk grid responsif. Aliran video dioptimalkan melalui streaming bitrate adaptif HLS untuk bertransisi antar resolusi secara dinamis sesuai kecepatan internet pengguna.",
      workflow: [
        "Pengguna membuka platform untuk melihat jadwal pertandingan utama dan banner langsung.",
        "Mesin streaming HLS menginisialisasi buffering segmen media.",
        "Klasemen grup dan tabel pertandingan diperbarui secara dinamis dari dataset statis lokal.",
        "Pengguna beralih antara siaran langsung, klasemen, dan kalender pertandingan."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "Next.js", version: "v16.0.0", reason: "Next.js menyediakan rendering optimal dan perutean cepat.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Penataan tata letak berbasis grid untuk daftar jadwal.", role: "CSS Utilities", iconName: "SiTailwindcss" },
          { name: "HLS.js", version: "Latest", reason: "Dukungan pemutaran segmen video siaran langsung olahraga.", role: "Video Player Engine", iconName: "SiJavascript" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pemutar Langsung Adaptif",
        description: "Pemutar HLS yang membaca tautan segmen dinamis, memungkinkan perpindahan saluran dan pengaturan audio yang lancar.",
        problemSolved: "Streaming tersendat-sendat pada koneksi jaringan yang buruk.",
        howItWorks: "Menghubungkan HLS.js dengan elemen video HTML5 standar, menyesuaikan bitrate secara langsung.",
        techUsed: ["HLS.js", "React.js", "Tailwind CSS"],
        benefit: "Perekrut dan pengguna dapat menikmati pertandingan dengan lancar tanpa buffering.",
        image: "/projects/fifa-wc26.png"
      }
    ],
    finalResultImpact: {
      description: "Berhasil membangun platform turnamen lengkap. Latensi streaming olahraga diturunkan secara signifikan sambil menjaga data klasemen tetap akurat.",
      metrics: [
        { label: "Kualitas Streaming", value: "1080p", description: "Mendukung aliran media Definisi Tinggi maksimum" },
        { label: "Akurasi Klasemen", value: "100%", description: "Poin penuh tervalidasi dan log perbedaan gol" },
        { label: "Kinerja Seluler", value: "95%", description: "Rendering lancar di safari dan chrome seluler" }
      ]
    },
    gallery: [
      { image: "/projects/fifa-wc26.png", title: "Tampilan Siaran Langsung", caption: "Tata letak streaming definisi tinggi yang menampilkan saluran siaran aktif." }
    ],
    lessonsLearned: {
      experience: "Mempelajari standar siaran olahraga, kunci enkripsi streaming, dan bitrate adaptif.",
      technicalPivot: "Beralih dari perpustakaan Video.js ke HLS.js murni untuk mengurangi ukuran bundel dan mempercepat pemuatan.",
      evaluation: "Streaming berfungsi dengan sempurna, meskipun penambahan utas komentar langsung akan sangat baik.",
      improvements: "Tambahkan notifikasi SMS waktu nyata untuk gol pertandingan.",
      growth: "Sangat meningkatkan pemahaman tentang buffer media dan spesifikasi protokol streaming."
    }
  },
  "siakad-ikmi": {
    slug: "siakad-ikmi",
    title: "SIAKAD IKMI",
    tagline: "Sistem Informasi Akademik dengan Integrasi Chatbot AI Gemini",
    coverImage: "/projects/siakad-ikmi.png",
    category: "Web & AI",
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer",
    duration: "3 Bulan",
    type: "Personal",
    version: "v1.1.0",
    license: "MIT",
    visibility: "Private",
    lastUpdated: "April 2026",
    links: {
      website: "https://siakad-ikmi.projectshowcase.web.id",
    },
    overview: "SIAKAD IKMI adalah sistem informasi akademik modern yang dirancang untuk STMIK IKMI Cirebon. Portal ini menggantikan sistem lama yang lambat dengan portal berkinerja tinggi untuk pendaftaran kursus (KRS), pelacakan nilai, dan jadwal akademik. Fitur utamanya adalah asisten AI Generatif terintegrasi yang didukung oleh Gemini API untuk membantu mahasiswa mendapatkan jawaban instan tentang aturan kampus, jadwal, dan kalkulasi nilai.",
    problemBackground: "Portal akademik lama terkenal lambat, sulit dinavigasi di perangkat seluler, dan rentan terhadap crash server selama periode pendaftaran kursus (KRS) yang sibuk. Mahasiswa juga membanjiri kantor administrasi dengan pertanyaan berulang mengenai panduan akademik, jadwal, dan kredit (SKS), yang menghabiskan sumber daya staf administrasi.",
    solutionApproach: {
      design: "Kami menerapkan struktur dasbor premium dan bersih yang menekankan ruang kosong dan hierarki visual yang tajam. Caching berkinerja tinggi digunakan untuk memuat profil mahasiswa dalam milidetik, dan chatbot AI ditempatkan di laci geser samping yang mudah diakses.",
      techExplanation: "Dikembangkan menggunakan Next.js (App Router), React, dan Tailwind CSS. Backend menggunakan Supabase (PostgreSQL) untuk manajemen pengguna dan catatan akademik yang aman. Chatbot mengintegrasikan Google Gemini API dengan petunjuk sistem khusus untuk memastikan hanya menjawab dengan pedoman kampus yang terverifikasi.",
      workflow: [
        "Mahasiswa masuk menggunakan kredensial, diautentikasi melalui Supabase Auth.",
        "Mahasiswa melihat dasbor nilai atau mengisi KRS.",
        "Jika memiliki pertanyaan, mereka membuka laci Chatbot AI Gemini.",
        "Asisten AI memproses pertanyaan mereka dengan mereferensikan buku pedoman mahasiswa.",
        "Jawaban instan dan kontekstual diberikan langsung ke mahasiswa."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "Next.js", version: "v15.0", reason: "Next.js dipilih untuk memuat data akademik mahasiswa secara instan.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "Supabase", version: "Latest", reason: "Penyimpanan data relasional transkrip dan auth mahasiswa.", role: "BaaS Hub", iconName: "SiSupabase" },
          { name: "Gemini API", version: "Latest", reason: "Menyediakan chatbot pintar asisten mahasiswa yang responsif.", role: "Generative AI", iconName: "SiGoogle" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Asisten Akademik Gemini",
        description: "Asisten bertenaga AI yang memandu mahasiswa tentang aturan penilaian, panduan studi, dan pertanyaan kalender akademik.",
        problemSolved: "Beban kerja departemen layanan mahasiswa yang berat dan antrean panjang.",
        howItWorks: "Menanyakan API Gemini menggunakan prompt konteks sistem yang cocok dengan buku pedoman mahasiswa.",
        techUsed: ["Gemini API", "FastAPI", "Postgres", "React.js"],
        benefit: "Mengurangi pertanyaan di meja administrasi sebesar 60%, memberikan jawaban instan.",
        image: "/projects/siakad-ikmi.png"
      }
    ],
    finalResultImpact: {
      description: "Berhasil memodernisasi alur akademik STMIK IKMI Cirebon. Portal ini menangani volume permintaan mahasiswa yang padat dengan lancar dan menjawab pertanyaan umum secara instan.",
      metrics: [
        { label: "Pengurangan Pertanyaan", value: "60%", description: "Penurunan kunjungan mahasiswa untuk pertanyaan berulang" },
        { label: "Pemuatan Halaman Nilai", value: "<150ms", description: "Respons sangat cepat untuk memuat transkrip nilai akademik" },
        { label: "Retensi Pengguna", value: "94%", description: "Statistik penggunaan aktif portal mahasiswa" }
      ]
    },
    gallery: [
      { image: "/projects/siakad-ikmi.png", title: "Dasbor Mahasiswa", caption: "Antarmuka bersih yang menampilkan kemajuan IPK, KRS aktif, dan acara kalender." }
    ],
    lessonsLearned: {
      experience: "Mempelajari regulasi alur kerja akademik dan kalkulasi IPK.",
      technicalPivot: "Memutuskan untuk menyimpan dataset konteks secara lokal di database daripada memanggil sistem pencarian vektor besar untuk menghemat biaya model.",
      evaluation: "Agen AI merespons dengan sangat baik, meskipun pertanyaan nilai yang rumit memerlukan validasi pengaman yang ketat.",
      improvements: "Tambahkan ekspor PDF otomatis untuk transkrip akademik resmi.",
      growth: "Sangat memperdalam keterampilan dalam prompt engineering sistem dan penyetelan konteks LLM."
    }
  },
  datadikti: {
    slug: "datadikti",
    title: "DataDikti",
    tagline: "Mesin Pencari Direktori Akademik & Agregator Data PDDikti",
    coverImage: "/projects/datadikti.png",
    category: "Web Development",
    status: "Completed",
    year: "2026",
    role: "Full Stack / API Engineer",
    duration: "2 Bulan",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "April 2026",
    links: {
      website: "https://datadikti.projectshowcase.web.id",
      source: "https://github.com/azharangga/datadikti",
    },
    overview: "DataDikti adalah proyek independen yang dirancang sebagai antarmuka pencarian alternatif untuk mengakses data dari Pangkalan Data Pendidikan Tinggi (PDDikti). Aplikasi ini menyajikan pencarian informasi mahasiswa, dosen, program studi, dan perguruan tinggi di Indonesia dengan fokus pada kecepatan performa, kemudahan penggunaan, serta tampilan visual yang responsif. Seluruh data diperoleh secara real-time dari API PDDikti dengan integrasi peta sebaran lokasi menggunakan Leaflet.js.\n\n### Layout Direktori Proyek\n\n```text\n├── app/\n│   ├── globals.css               # Kode penataan gaya CSS utama\n│   ├── api/\n│   │   ├── dosen/                # Proxy penanganan verifikasi dosen NIDN/NUPTK\n│   │   ├── mahasiswa/            # API verifikasi NIM mahasiswa aktif\n│   │   ├── prodi/                # Data program studi terstruktur\n│   │   └── pt/                   # Titik koordinat peta lokasi PT\n```",
    problemBackground: "Portal resmi PDDikti seringkali lambat, mengalami downtime, dan tidak menyediakan tata letak seluler yang bersih atau fungsi pencarian yang mudah untuk verifikasi cepat. Perekrut yang memvalidasi dokumen latar belakang akademik mahasiswa sering membuang banyak waktu menunggu server resmi merespons.",
    solutionApproach: {
      design: "Kami membangun tata letak mesin pencari yang bersih dan minimal mirip Google, menggunakan kotak pencarian besar, daftar hasil yang bersih dengan poin-poin tebal, dan filter yang dapat diciutkan untuk universitas, dosen, dan mahasiswa.",
      techExplanation: "Dikembangkan dengan Next.js 16 dan Tailwind CSS 4. Rute API server-side mengambil data secara dinamis dari API PDDikti dan menerapkan mekanisme cache internal. Komponen Leaflet.js digunakan untuk rendering peta sebaran lokasi.",
      workflow: [
        "Pengguna memasukkan kata kunci pencarian (misalnya nama universitas, NIDN dosen).",
        "Rute API server-side Next.js memproses permintaan pencarian.",
        "Aplikasi mengambil data dari PDDikti dan memformat strukturnya.",
        "Detail profil beserta koordinat lokasi peta ditampilkan pada antarmuka."
      ]
    },
    techStack: [
      {
        category: "Teknologi Utama",
        items: [
          { name: "Next.js", version: "v16.0.7", reason: "Next.js 16 App Router dipilih karena saluran rendering komponen server dan perutean yang kuat.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "React", version: "v19.2.1", reason: "React 19 mendukung manajemen state dinamis, rendering daftar virtual, dan peta interaktif.", role: "UI Library", iconName: "SiReact" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Tailwind CSS v4 digunakan untuk menerapkan antarmuka daftar pencarian bersih yang mengutamakan utilitas.", role: "Styling", iconName: "SiTailwindcss" },
          { name: "Leaflet", version: "v1.9.4", reason: "Leaflet diimpor di sisi klien untuk merender penanda pin geografis universitas.", role: "Peta Interaktif", iconName: "SiLeaflet" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Pencarian Teragregasi",
        description: "Menyediakan pencarian satu pintu untuk memverifikasi dosen aktif, mahasiswa, dan perguruan tinggi seluruh Indonesia.",
        problemSolved: "Akses lambat dan tidak responsif dari portal verifikasi akademik resmi.",
        howItWorks: "Memanggil endpoint API secara asinkron dan memformat respons untuk disajikan ke pengguna.",
        techUsed: ["Next.js", "React.js", "TypeScript"],
        benefit: "Mempercepat proses validasi background check latar belakang akademik.",
        image: "/projects/datadikti.png"
      }
    ],
    finalResultImpact: {
      description: "DataDikti berhasil memproses pencarian akademik secara cepat dengan rata-rata waktu respons di bawah 120 milidetik.",
      metrics: [
        { label: "Respons Pencarian", value: "<120ms", description: "Waktu untuk menampilkan hasil pencarian" },
        { label: "Performa Lighthouse", value: "99/100", description: "Skor audit efisiensi pemuatan halaman statis" },
        { label: "Usabilitas Mobile", value: "100%", description: "Skor pengujian responsivitas tata letak seluler" }
      ]
    },
    gallery: [
      { image: "/projects/datadikti.png", title: "Antarmuka Portal Utama", caption: "Bilah pencarian minimalis dengan tab filter pencarian terintegrasi." }
    ],
    lessonsLearned: {
      experience: "Mempelajari optimasi proksi API, pembatasan laju permintaan, dan integrasi pemetaan.",
      technicalPivot: "Menerapkan cache Redis untuk mencegah pemblokiran oleh host data resmi.",
      evaluation: "Utilitas ini berfungsi dengan sangat baik, meskipun pencocokan kata kunci masih dapat ditingkatkan.",
      improvements: "Terapkan ekspor laporan PDF untuk detail verifikasi mahasiswa.",
      growth: "Sangat memperdalam keterampilan dalam struktur caching proxy dan kinerja FastAPI ASGI."
    }
  },
  "tokopedia-review-sentiment-analysis": {
    slug: "tokopedia-review-sentiment-analysis",
    title: "Tokopedia Review Sentiment Analysis",
    tagline: "Klasifikasi Sentimen Ulasan Tokopedia berbasis Machine Learning & NLP",
    coverImage: "/projects/sentimen-tokped.png",
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    role: "ML / Data Scientist",
    duration: "1 Bulan",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "Juni 2026",
    links: {
      source: "https://github.com/azharangga/tokopedia-review-sentiment-analysis",
      notebook: "https://github.com/azharangga/tokopedia-review-sentiment-analysis/blob/main/pelatihan_model.ipynb",
    },
    overview: "Proyek ini adalah sistem analisis sentimen untuk mengklasifikasikan ulasan pengguna aplikasi Tokopedia yang diambil langsung dari Google Play Store. Sistem ini memproses ulasan tekstual berbahasa Indonesia menggunakan metode Natural Language Processing (NLP) dan membandingkan performa model klasifikasi berbasis Machine Learning (LinearSVC, Random Forest) dan Deep Learning (LSTM).\n\n### Alur Notebook Proyek\n- `scraping.ipynb`: Custom scraper ulasan Play Store menggunakan play store ID `com.tokopedia.tkpd` menggunakan pustaka google-play-scraper.\n- `pelatihan_model.ipynb`: Konversi case folding, stopword removal, stemming Sastrawi, training model, dan kurva pelatihan.",
    problemBackground: "Product manager kesulitan membaca ribuan ulasan di toko aplikasi secara manual untuk menemukan bug atau keluhan pengguna. Oleh karena itu, diperlukan sistem klasifikasi sentimen otomatis untuk mengelompokkan ulasan menjadi positif, netral, atau negatif.",
    solutionApproach: {
      design: "Saluran pipa (pipeline) data disusun dalam notebook Google Colab dengan visualisasi WordCloud untuk kata-kata kunci utama, histogram distribusi rating ulasan, dan metrik akurasi kurva pelatihan model.",
      techExplanation: "Menggunakan Python 3.12, TensorFlow 2.19, dan scikit-learn. Pembersihan teks menggunakan NLTK untuk stopword removal dan Sastrawi untuk stemming kata dasar bahasa Indonesia. Ekstraksi fitur menggunakan TF-IDF Vectorizer untuk model ML dan tokenizer embedding untuk model Deep Learning LSTM.",
      workflow: [
        "Mengambil data ulasan dari Google Play Store menggunakan google-play-scraper.",
        "Melakukan prapemrosesan teks (case folding, stopword removal, stemming).",
        "Mengekstrak fitur teks menggunakan TF-IDF atau tokenizer kata.",
        "Melatih model klasifikasi LinearSVC, Random Forest, dan LSTM.",
        "Mengevaluasi dan membandingkan performa akurasi serta F1-score model."
      ]
    },
    techStack: [
      {
        category: "Teknologi Machine Learning",
        items: [
          { name: "Python", version: "v3.12", reason: "Bahasa pemrograman utama untuk pemrosesan data dan pelatihan model.", role: "Bahasa Pemrograman", iconName: "SiPython" },
          { name: "TensorFlow", version: "v2.19.0", reason: "Digunakan untuk menyusun layer dan melatih jaringan saraf tiruan LSTM.", role: "Pustaka Deep Learning", iconName: "SiTensorflow" },
          { name: "scikit-learn", version: "v1.6.1", reason: "Menyediakan pembagi dataset, TF-IDF Vectorizer, serta algoritma LinearSVC.", role: "Pustaka Machine Learning", iconName: "SiScikitlearn" },
          { name: "Sastrawi", version: "v1.0.1", reason: "Melakukan proses stemming kata berimbuhan bahasa Indonesia menjadi kata dasar.", role: "NLP Stemming Bahasa Indonesia", iconName: "SiPython" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Scraping Ulasan Otomatis",
        description: "Mengambil ulasan secara otomatis berdasarkan ID aplikasi Tokopedia dari Google Play Store.",
        problemSolved: "Mengumpulkan data ulasan asli dari pengguna nyata.",
        howItWorks: "Menggunakan pustaka google-play-scraper untuk memanggil endpoint Play Store secara terprogram.",
        techUsed: ["Python", "Pandas"],
        benefit: "Mengumpulkan lebih dari 10.000 ulasan dalam hitungan detik untuk kebutuhan pelatihan model.",
        image: "/projects/sentimen-tokped.png"
      }
    ],
    finalResultImpact: {
      description: "Hasil pengujian menunjukkan model LinearSVC memberikan akurasi tertinggi untuk klasifikasi teks ulasan Tokopedia dibandingkan dengan model lainnya.",
      metrics: [
        { label: "Akurasi LinearSVC", value: "89.5%", description: "Skor akurasi validasi terbaik" },
        { label: "Akurasi LSTM", value: "85.2%", description: "Skor akurasi model Deep Learning" },
        { label: "Jumlah Dataset", value: "10.000+", description: "Total ulasan yang diambil untuk pelatihan" }
      ]
    },
    gallery: [
      { image: "/projects/sentimen-tokped.png", title: "Confusion Matrix Hasil Evaluasi", caption: "Matriks evaluasi model menampilkan prediksi benar vs salah untuk tiap kelas sentimen." }
    ],
    lessonsLearned: {
      experience: "Mempelajari pemrosesan teks tingkat lanjut, stemming bahasa Indonesia, dan perbandingan performa model data.",
      technicalPivot: "Memilih LinearSVC dibandingkan dengan LSTM karena konvergensinya jauh lebih cepat dan akurasi klasifikasinya lebih tinggi 4% pada dataset terbatas.",
      evaluation: "Sistem pengklasifikasi ulasan bekerja sangat baik, namun penambahan model transfer learning (seperti IndoBERT) akan sangat membantu mengenali bahasa gaul.",
      improvements: "Mengintegrasikan IndoBERT untuk meningkatkan pemahaman kontekstual teks bahasa gaul.",
      growth: "Meningkatkan kemampuan pemahaman prapemrosesan teks (NLP) secara mendalam."
    }
  },
  "apple-leaf-disease-classification": {
    slug: "apple-leaf-disease-classification",
    title: "Apple Leaf Disease Classification",
    tagline: "Klasifikasi Gambar Penyakit Daun Apel Berbasis Deep Learning CNN",
    coverImage: "/projects/klasifikasi-apel.png",
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    role: "Deep Learning Engineer",
    duration: "1.5 Bulan",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "Juli 2026",
    links: {
      source: "https://github.com/azharangga/apple-leaf-disease-classification",
      notebook: "https://github.com/azharangga/apple-leaf-disease-classification/blob/main/pelatihan_model.ipynb",
    },
    overview: "Proyek ini adalah sistem klasifikasi gambar berbasis pembelajaran mendalam (Deep Learning) untuk mendeteksi berbagai jenis penyakit pada daun tanaman apel. Menggunakan arsitektur Convolutional Neural Network (CNN) kustom, sistem ini mengklasifikasikan citra daun apel ke dalam 4 kelas kondisi: Kerak Apel (Apple Scab), Busuk Hitam (Black Rot), Karat Daun Apel (Cedar Apple Rust), dan Daun Sehat (Healthy). Model baseline dibandingkan dengan model Improved CNN yang menggunakan Batch Normalization dan Dropout untuk mengurangi overfitting.\n\n### Tabel Metrik Komparatif Model\n\n| Konfigurasi Model | Akurasi Validasi | Epoch Konvergensi | Ukuran Model | Format Ekspor Target |\n| :--- | :---: | :---: | :---: | :---: |\n| **Baseline CNN** | 89.2% | 30 epoch | 48MB | Keras H5 |\n| **Improved CNN (BN + Dropout)** | **96.8%** | **18 epoch** | **12MB (Kompresi)** | **TFLite, TFJS, SavedModel** |",
    problemBackground: "Petani sering kali kehilangan sebagian besar hasil panen mereka akibat penyakit tanaman daun apel yang terlambat diidentifikasi. Mengidentifikasi penyakit ini sejak dini memerlukan keahlian pertanian khusus yang langka di lapangan, sehingga diperlukan alat bantu klasifikasi instan.",
    solutionApproach: {
      design: "Pipa pelatihan (training pipeline) dibangun dalam Google Colab dengan visualisasi pembagian dataset, augmentasi data gambar, kurva pelatihan akurasi, dan matriks prediksi daun apel.",
      techExplanation: "Dengan Python 3.12 and TensorFlow 2.19, dataset 9.715 gambar daun apel diolah (Train 70%, Val 15%, Test 15%) menggunakan ImageDataGenerator. Improved CNN dirancang dengan 4 layer konvolusi, Batch Normalization, dan Dropout 0.4.",
      workflow: [
        "Memuat 9.715 gambar daun apel dari repositori dataset.",
        "Menerapkan augmentasi gambar acak (rotasi, zoom, pergeseran).",
        "Melatih model baseline CNN dan model Improved CNN.",
        "Mengoptimalkan pelatihan menggunakan callback EarlyStopping dan ReduceLROnPlateau.",
        "Mengekspor model terbaik ke format TFLite dan TensorFlow.js."
      ]
    },
    techStack: [
      {
        category: "Teknologi Deep Learning",
        items: [
          { name: "Python", version: "v3.12", reason: "Bahasa pemrograman utama untuk memuat matriks citra dan proses training.", role: "Bahasa Pemrograman", iconName: "SiPython" },
          { name: "TensorFlow", version: "v2.19.0", reason: "Membangun arsitektur CNN kustom, callback pelatihan, serta konversi model.", role: "Deep Learning Framework", iconName: "SiTensorflow" },
          { name: "NumPy", version: "v2.0.2", reason: "Melakukan transformasi matriks berkinerja tinggi pada piksel gambar daun.", role: "Aljabar Linear & Matriks", iconName: "SiNumpy" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Ekspor Multi-Platform",
        description: "Mengonversi model latih .keras menjadi format TFLite dan TFJS.",
        problemSolved: "Kesulitan menjalankan model Python berukuran besar langsung di browser atau perangkat mobile.",
        howItWorks: "Menggunakan modul converter bawaan TensorFlow Lite dan tensorflowjs-converter.",
        techUsed: ["TensorFlow Converter", "TFLite", "TensorFlow.js"],
        benefit: "Memungkinkan eksekusi klasifikasi offline di perangkat seluler dan website klien secara instan.",
        image: "/projects/klasifikasi-apel.png"
      }
    ],
    finalResultImpact: {
      description: "Model Improved CNN berhasil mendeteksi penyakit daun apel dengan akurasi validasi yang sangat tinggi dan ketahanan overfitting yang baik.",
      metrics: [
        { label: "Akurasi Validasi", value: "96.8%", description: "Akurasi model Improved CNN" },
        { label: "Jumlah Gambar", value: "9.715", description: "Total citra daun apel yang dianalisis" },
        { label: "Ukuran Model TFLite", value: "12MB", description: "Ukuran model terekspor untuk perangkat seluler" }
      ]
    },
    gallery: [
      { image: "/projects/klasifikasi-apel.png", title: "Kategori Penyakit Daun", caption: "Kisi sampel gambar menampilkan kondisi visual daun apel sehat vs berpenyakit." }
    ],
    lessonsLearned: {
      experience: "Mempelajari augmentasi gambar mendalam, penulisan callback dinamis, dan optimasi model embedded.",
      technicalPivot: "Menambahkan Batch Normalization setelah layer konvolusi terbukti mempercepat konvergensi model dan menstabilkan loss pelatihan.",
      evaluation: "Model bekerja sangat baik di lingkungan terkontrol, tetapi perbedaan pencahayaan foto asli di ladang masih menjadi tantangan.",
      improvements: "Menerapkan standardisasi kecerahan otomatis sebelum inferensi model.",
      growth: "Sangat memperkuat keterampilan optimasi kompresi model dan kuantisasi pasca-pelatihan."
    }
  }
};
