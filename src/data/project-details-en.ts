import { ProjectDetail } from "./project-details";

export const PROJECT_DETAILS_EN: Record<string, ProjectDetail> = {
  // ==========================================
  // WEB DEVELOPMENT PROJECTS
  // ==========================================
  "job-tracker": {
    slug: "job-tracker",
    title: "Job Tracker",
    tagline: "Manage your job search process in one place.",
    coverImage: "/projects/job-tracker.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "1 Months",
    type: "Personal",
    links: {
      website: "https://job-tracker.projectshowcase.web.id",
      source: "https://github.com/azharangga/job-tracker",
    },
    overview: "Job Tracker is a personal platform designed to help users manage the entire job search process in a more organized way. The application makes it easy to record job applications, monitor the status of each application, add important notes, and arrange follow-up priorities in a simple and easy-to-use dashboard. With a practical and centralized approach, Job Tracker helps users stay organized throughout their job search journey.",
    problemBackground: "- **Job Applications Are Hard to Manage Manually**: When applying to many companies, users often struggle to remember which positions they have already applied for, which ones need follow-up, and which ones have received a response.\n- **Application Status Is Often Not Tracked**: Without a centralized system, users may lose track of each application’s progress, making follow-ups less effective.\n- **Important Information Gets Scattered**: Details such as company names, applied roles, interview schedules, and additional notes are often stored in many places, making them difficult to find when needed.",
    solutionApproach: {
      design: "- **Centralized Job Application Storage**: Provides one place to store all job application information so users do not need to keep records separately.\n- **Better Status Monitoring**: Helps users clearly see the progress of each application so follow-up actions can be taken more effectively.\n- **Additional Notes for Each Application**: Allows users to add important notes to each application so all relevant information stays easy to access.\n- **More Efficient Job Search Management**: Organizes the entire job search process in one dashboard so users can work in a neater, more focused, and more structured way.",
      workflow: [
        "Users sign in to the application.",
        "Users add the job applications they are currently tracking.",
        "Users update application statuses based on the latest progress.",
        "Users add important notes to each application.",
        "All data is stored and displayed in a centralized dashboard.",
        "Users can monitor their job search progress more easily."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Job Application Logging",
        description: "Allows users to store job application details so all records are organized in one place."
      },
      {
        title: "Application Status Tracking",
        description: "Helps users follow the progress of each application from the initial stage to the final result."
      },
      {
        title: "Notes for Each Application",
        description: "Provides space for users to store important details such as company information, interview schedules, or follow-up actions."
      },
      {
        title: "Centralized Dashboard",
        description: "Displays all application data in one view so users can monitor and manage their job search more easily."
      },
      {
        title: "Job Search Activity Management",
        description: "Helps users keep their job search process neat, efficient, and easy to track."
      }
    ],
    gallery: [
      { image: "/projects/detail/job-tracker/job-tracker.png", title: "Job Tracker Main Dashboard", caption: "Kanban board and table view for tracking active job applications." }
    ]
  },
  gizimeal: {
    slug: "gizimeal",
    title: "GiziMeal",
    tagline: "Identify ingredients, understand their nutrition, create balanced meals.",
    coverImage: "/projects/gizimeal.png",
    category: "Web Development",
    role: "AI Engineer and Project Manager",
    duration: "4 Months",
    type: "Team",
    links: {
      website: "https://gizimeal.projectshowcase.web.id",
      source: "https://github.com/azharangga/gizimeal",
      apiDocs: "https://cc26-psu393-gizimeal-api.hf.space",
    },
    overview: "GiziMeal is an interactive web application developed as a capstone project by team CC26-PSU393 under the Healthy Lives and Well-Being theme. The project aims to improve public nutrition literacy through Deep Learning-based food ingredient image classification technology. The app recognizes 15 food ingredient categories from uploaded photos, estimates daily caloric needs using the Mifflin–St Jeor formula based on BMR and TDEE values, and provides balanced meal recommendations aligned with official Indonesian Dietary Reference Intake (AKG) standards alongside a fulfillment score.",
    disclaimer: "GiziMeal was originally developed as a Capstone Project by team CC26-PSU393 with my role as **AI Engineer and Project Manager**. This showcase version represents an independent redesign and rebuild of the **Frontend and Backend** to improve and demonstrate my Web Development capabilities, while the *Deep Learning* model remains the collaborative work of the team.",
    problemBackground: "- **Manual Calorie Counting**: Logging and weighing daily food portions manually is time-consuming, causing 80% of users to abandon nutrition tracking.\n- **Limited Meal Variety**: Lack of reference guidelines for building daily meal combinations tailored to specific individual physical needs.\n- **Low Nutritional Literacy**: Shortage of educational resources regarding ideal portion sizes and macronutrient distribution for long-term wellness.",
    solutionApproach: {
      design: "- **Automated Food Image Recognition**: Leveraging a convolutional neural network (CNN) to detect ingredients from photos and estimate nutrition instantly.\n- **Real-time AKG Score Evaluation**: Providing balanced menu recommendations tailored to official Indonesian Dietary Reference Intake standards.\n- **Verified Official Nutrition Data**: Combining Kaggle datasets with re-verified local nutritional reference values for maximum accuracy.\n- **Personalized Caloric Targets**: Integrating BMR and TDEE calculations powered by the Mifflin–St Jeor formula based on body physical metrics.",
      workflow: [
        "User captures fresh ingredient photos available in the kitchen using a camera or uploads images from gallery.",
        "Photos are transmitted to GiziMeal backend for inference processing.",
        "Deep Learning model analyzes visual surface features and identifies food categories automatically.",
        "GiziMeal processes ingredient data and prepares balanced menu recommendations with estimated nutrition.",
        "Detection results, calorie breakdowns, and menu recommendations display on screen in real time."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Food Ingredient Detection and Classification",
        description: "Identifies up to 15 food ingredient categories from uploaded images using a Deep Learning model and displays estimated calories."
      },
      {
        title: "Balanced Meal Recommendations",
        description: "Generates meal recommendations based on detected ingredients in accordance with Indonesian Dietary Reference Intake standards."
      },
      {
        title: "BMR and TDEE Calculator",
        description: "Calculates personalized daily calorie requirements using the Mifflin–St Jeor method."
      },
      {
        title: "Nutrition Information Database",
        description: "Provides comprehensive and easily accessible nutritional content information for each food ingredient."
      },
      {
        title: "Prediction History Log",
        description: "Saves detection history for authenticated users and synchronizes records with the database."
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
      { image: "/projects/detail/gizimeal/daftar-akun.png", title: "Sign Up Page", caption: "User registration form to start a balanced nutrition journey." },
      { image: "/projects/detail/gizimeal/masuk-akun.png", title: "Login Page", caption: "Secure user authentication sign-in interface." },
      { image: "/projects/detail/gizimeal/beranda.png", title: "Home Page", caption: "GiziMeal main platform landing page displaying feature highlights and nutrition info." },
      { image: "/projects/detail/gizimeal/tentang-kami.png", title: "About Us Page", caption: "Information about GiziMeal's vision, mission, and development team." },
      { image: "/projects/detail/gizimeal/deteksi.png", title: "Food Detection Page", caption: "Food ingredient image upload feature for automated AI identification." },
      { image: "/projects/detail/gizimeal/hasil-deteksi.png", title: "Detection Results Page", caption: "Analysis breakdown of detected food ingredients and estimated nutritional content." },
      { image: "/projects/detail/gizimeal/rekomendasi-menu.png", title: "Menu Recommendation Page", caption: "Personalized nutritious meal recipe recommendations based on detected ingredients." },
      { image: "/projects/detail/gizimeal/kalkulator.png", title: "Calorie Calculator Page", caption: "Personal BMR and TDEE daily calorie requirement calculation tool." },
      { image: "/projects/detail/gizimeal/tabel-gizi.png", title: "Nutrition Table Page", caption: "Structured directory of food ingredient nutritional facts." },
      { image: "/projects/detail/gizimeal/chatbot.png", title: "Chatbot Assistant Page", caption: "Interactive AI assistant for dietary and nutrition consultations." },
      { image: "/projects/detail/gizimeal/referensi.png", title: "Nutrition Reference Page", caption: "Official Dietary Recommended Intake guidelines and health references." },
      { image: "/projects/detail/gizimeal/faq.png", title: "FAQ Page", caption: "Frequently asked questions regarding GiziMeal platform features." },
      { image: "/projects/detail/gizimeal/pengaturan-akun.png", title: "Account Settings Page", caption: "User profile management, password updates, and account preferences." },
      { image: "/projects/detail/gizimeal/riwayat-deteksi.png", title: "Detection History Page", caption: "Historical records of past food ingredient AI detection analyses." },
    ]
  },
  dramova: {
    slug: "dramova",
    title: "Dramova",
    tagline: "Enjoy unlimited entertainment on a unified streaming platform.",
    coverImage: "/projects/dramova.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "-",
    type: "Personal",
    links: {
      website: "https://dramova.projectshowcase.web.id",
    },
    overview: "DRAMOVA is a web-based movie streaming platform designed to deliver a modern, convenient, and interactive entertainment experience. The platform allows users to explore movie collections, access detailed information for each title, create personal watchlists, and enjoy a Watch Party feature to watch together in real-time. With an intuitive interface and integrated services, DRAMOVA aims to provide a more practical and enjoyable digital entertainment experience.",
    problemBackground: "- **Difficulty Finding Suitable Content**: Users spend considerable time searching for movies that match their interests because information is scattered and poorly organized.\n- **Limited Shared Viewing Experience**: Most platforms do not offer a seamless way to enjoy movies together with friends or family in real-time synchronization from different locations.\n- **Disorganized Watchlists**: Users struggle to save and manage movies they intend to watch, often forgetting titles or having to search for them again.",
    solutionApproach: {
      design: "- **Centralized Streaming Platform**: Provides a single platform bringing together movie collections, detailed info, and search capabilities to help users find content easily.\n- **Interactive Watch Party**: Introduces real-time co-watching rooms so users can stream and watch movies synchronously even from different locations.\n- **Personal Watchlist**: Allows users to save favorite movies and manage watchlists for quick re-access anytime.\n- **Modern User Experience**: Offers a clean, responsive, and easy-to-use interface to make browsing and watching movies more comfortable.",
      workflow: [
        "Users sign in or create an account.",
        "Users explore movie collections and search for desired titles.",
        "Users view detailed movie information before watching.",
        "Users can save movies to their personal watchlist.",
        "Users stream movies independently or create a Watch Party room.",
        "User activity is saved to streamline account management."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Explore Movie Catalog",
        description: "Provides a full movie catalog complete with synopses, genres, runtime, ratings, and cast details so users can easily find content matching their preferences."
      },
      {
        title: "Personal Watchlist",
        description: "Allows users to save favorite movies to a personal list for quick access anytime."
      },
      {
        title: "Watch Party",
        description: "Delivers a real-time co-watching experience through watch rooms that can be shared with other users."
      },
      {
        title: "Movie Search and Filter",
        description: "Helps users discover movies based on titles, categories, genres, or specific preferences."
      },
      {
        title: "User Profile Management",
        description: "Provides account profile management along with activity history and saved movie lists."
      }
    ],
    gallery: [
      { image: "/projects/detail/dramova/daftar-akun.png", title: "Sign Up Page", caption: "User registration form to enjoy Dramova streaming services." },
      { image: "/projects/detail/dramova/masuk-akun.png", title: "Login Page", caption: "Convenient user account authentication sign-in interface." },
      { image: "/projects/detail/dramova/beranda.png", title: "Home Page", caption: "Main platform page showcasing featured titles and popular dramas." },
      { image: "/projects/detail/dramova/jelajahi.png", title: "Browse Catalog Page", caption: "Comprehensive search catalog with genre and category filtering options." },
      { image: "/projects/detail/dramova/serial.png", title: "Series Directory Page", caption: "Directory list of trending drama series across different regions." },
      { image: "/projects/detail/dramova/detail-drama.png", title: "Drama Details Page", caption: "Detailed information page with synopsis, ratings, cast, and episode lists." },
      { image: "/projects/detail/dramova/menonton-drama.png", title: "Video Player Page", caption: "Responsive video player interface to stream drama episodes seamlessly." },
      { image: "/projects/detail/dramova/movie.png", title: "Movie Collection Page", caption: "Curated selection of top feature films across various genres." },
      { image: "/projects/detail/dramova/nobar.png", title: "Watch Party Page", caption: "Watch Party feature to browse and join active group watch rooms." },
      { image: "/projects/detail/dramova/buat-room-nobar.png", title: "Create Watch Party Room", caption: "Form to create new synchronized watch rooms with privacy controls." },
      { image: "/projects/detail/dramova/undang-teman-nobar.png", title: "Invite Friends to Watch Party", caption: "Invitation link sharing feature to invite friends to watch together." },
      { image: "/projects/detail/dramova/gabung-room-nobar.png", title: "Join Watch Party Room", caption: "Smooth user onboarding flow into active synchronized watch rooms." },
      { image: "/projects/detail/dramova/room-nobar.png", title: "Watch Party Room Page", caption: "Real-time synchronized video playback with live group chat." },
      { image: "/projects/detail/dramova/riwayat-menonton.png", title: "Watch History Page", caption: "Historical log of watched episodes and movies." },
      { image: "/projects/detail/dramova/kelola-akun.png", title: "Account Management Page", caption: "User profile settings, security updates, and account preferences." },
    ]
  },
  "fifa-world-cup-2026": {
    slug: "fifa-world-cup-2026",
    title: "FIFA World Cup 2026",
    tagline: "Live Match Broadcast and Real-time Tournament Statistics Platform",
    coverImage: "/projects/fifa-wc26.png",
    category: "Web Development",
    role: "Front-end Developer",
    duration: "1 Months",
    type: "Personal",
    links: {
      website: "https://fifa-wc26.projectshowcase.web.id",
      source: "https://github.com/azharangga/fifa-wc",
    },
    overview: "FIFA World Cup 2026 is a premium web streaming and football stats platform. Powered by HLS.js technology for uninterrupted live sports broadcasting, it features automatic group standings calculations, match schedules, and historical player statistics.",
    problemBackground: "- **Hard to Find Reliable Live Streams**: Sports fans frequently struggle to find smooth, lag-free live match streams during tournaments.\n- **Dispersed Statistical Data**: Group standings, match fixtures, and player metrics are often scattered across different websites.\n- **Unresponsive Interfaces**: Standard sports news portals are often clogged with heavy ads and uncomfortable to navigate on mobile devices.",
    solutionApproach: {
      design: "- **Adaptive HLS Live Streaming Player**: Integrating HLS.js technology to deliver high-definition sports streaming without buffering.\n- **Unified Stats and Standings Dashboard**: Providing automated group table calculations, fixture search, and player metrics in a single interface.\n- **Energetic Sports-Themed UI**: Delivering a clean, fast, and responsive visual layout optimized across all screen sizes.\n- **Media Performance Optimization**: Applying adaptive segment bitrate buffering to maintain stream stability.",
      workflow: [
        "User opens platform to view featured match banners and active live streams.",
        "HLS.js streaming engine initializes video segment buffering adaptively.",
        "System updates group standings and match outcomes dynamically.",
        "User toggles between live view, group tables, and match calendar.",
        "Fans enjoy tournament broadcasts and complete real-time stats."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Adaptive Live Broadcast Player",
        description: "HLS video player reading dynamic stream segment links for smooth sports playback."
      },
      {
        title: "Automated Standings Calculation",
        description: "Calculates tournament group points, goal differences, and standings in real-time."
      },
      {
        title: "Match Schedule and Results",
        description: "Presents a full tournament fixture calendar alongside up-to-date scorelines."
      },
      {
        title: "Profile and Statistics Search",
        description: "Allows users to easily search team profiles, players, and historical tournament stats."
      }
    ],
    gallery: [
      { image: "/projects/detail/fifa-world-cup-2026/fifa-wc26.png", title: "Live Streaming View", caption: "High-definition streaming layout displaying active broadcast channels." }
    ]
  },
  "siakad-ikmi": {
    slug: "siakad-ikmi",
    title: "SIAKAD IKMI",
    tagline: "Manage academic activities more easily, quickly, and in an integrated way.",
    coverImage: "/projects/siakad-ikmi.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "7 Months",
    type: "Personal",
    links: {
      website: "https://siakad-ikmi.projectshowcase.web.id",
      source: "https://github.com/azharangga/siakad-ikmi",
    },
    overview: "SIAKAD IKMI is a web-based Academic Information System developed to support the digitalization of academic services at STMIK IKMI Cirebon. The platform integrates various academic services into a single system, from course plan selection (KRS), academic record management, and independent document printing to information access via a Generative AI chatbot assistant. By delivering modern, fast, and accessible services, SIAKAD IKMI aims to improve academic administrative efficiency while providing a better user experience for students, lecturers, and staff.",
    disclaimer: "All data used in this project consists of dummy records created for development and demonstration purposes. No actual student, lecturer, staff, or academic data is used or displayed, maintaining data privacy and confidentiality.",
    problemBackground: "- **Inefficient Course Plan Selection**: Traditional course registration workflows remain complex, making course enrollment cumbersome for students.\n- **Manual Document Services**: Students must go through manual administrative processes to obtain academic records, resulting in longer waiting times.\n- **Scattered Academic Information**: Academic information is spread across multiple services, making it hard for users to quickly access needed details.",
    solutionApproach: {
      design: "- **Digital Course Plan Management**: Provides a simplified digital course plan system with separate regular and MBKM course workflows.\n- **Self-Service Digital Documents**: Enables students to download official academic documents independently with QR code verification.\n- **Generative AI Assistant Chatbot**: Offers an interactive chatbot service to help users obtain academic information quickly.\n- **Integrated Academic Platform**: Unifies academic services into a single system to enhance administrative efficiency and user experience.",
      workflow: [
        "Users sign in based on their assigned roles.",
        "Students manage course registration digitally.",
        "The system processes and stores academic data in an integrated platform.",
        "Students access grades, transcripts, and academic information.",
        "Official academic documents can be downloaded.",
        "A Generative AI chatbot provides quick access to academic information."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Authentication and Role-Based Access Control",
        description: "Manages user permissions through role-based access for superusers, administrators, lecturers, and students."
      },
      {
        title: "Course Plan Selection and Validation",
        description: "Supports digital course registration by students as well as validation and management by administrators."
      },
      {
        title: "Automated Grade and Transcript Calculation",
        description: "Generates grade reports and transcripts automatically based on term and cumulative GPA calculations."
      },
      {
        title: "Self-Service Digital Document Printing",
        description: "Allows students to download official academic documents such as student IDs, biodata, active student letters, and graduation certificates with QR Code verification."
      },
      {
        title: "Generative AI Assistant Chatbot",
        description: "Provides interactive academic assistance by answering queries related to student profiles, academic transcripts, lecturers, and other academic information."
      }
    ],
    gallery: [
      { image: "/projects/detail/siakad-ikmi/login.png", title: "Login Page", caption: "SIAKAD IKMI user login authentication interface with role-based access control system." },
      // STUDENT ROLE
      { image: "/projects/detail/siakad-ikmi/dashboard-mahasiswa.png", title: "Student Dashboard", caption: "Summary of student academic information including GPA, total credits, study status, and announcements." },
      { image: "/projects/detail/siakad-ikmi/biodata-mahasiswa.png", title: "Student Biodata Page", caption: "Profile management and form interface for personal and academic student data." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-biodata.png", title: "Print Student Biodata", caption: "Print preview display of student biodata form complete with QR Code verification." },
      { image: "/projects/detail/siakad-ikmi/ktm.png", title: "Student ID Card Page", caption: "Interactive digital Student ID Card (KTM) display." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-ktm.png", title: "Print Student ID Card", caption: "Ready-to-print official format document for Student ID Card (KTM)." },
      { image: "/projects/detail/siakad-ikmi/nilai-mahasiswa.png", title: "Student Grades Page", caption: "List of course grades obtained by the student for each semester." },
      { image: "/projects/detail/siakad-ikmi/mengisi-krs.png", title: "Course Registration (KRS) Page", caption: "Interface for students to select and enroll in courses for the active semester." },
      { image: "/projects/detail/siakad-ikmi/krs-diajukan.png", title: "KRS Submitted", caption: "Draft status of Course Registration Form submitted by student for advisor/admin approval." },
      { image: "/projects/detail/siakad-ikmi/krs-disetujui.png", title: "KRS Approved", caption: "Official Study Plan status approved and validated by academic authorities." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-krs.png", title: "Print Study Plan (KRS)", caption: "Official self-service printable Study Plan document equipped with verification QR Code." },
      { image: "/projects/detail/siakad-ikmi/khs.png", title: "Semester Grade Report (KHS) Page", caption: "Semester Grade Report display featuring term GPA and cumulative GPA." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-khs.png", title: "Print Grade Report (KHS)", caption: "Automated print preview of student Semester Grade Report document." },
      { image: "/projects/detail/siakad-ikmi/transkrip-nilai.png", title: "Academic Transcript Page", caption: "Recap of cumulative grade history across all courses completed by the student." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-transkrip-nilai.png", title: "Print Academic Transcript", caption: "Official format temporary/final academic transcript document with QR Code verification." },
      { image: "/projects/detail/siakad-ikmi/skl.png", title: "Graduation Certificate (SKL) Page", caption: "Application and issuance page for Graduation Verification Letter for eligible students." },
      { image: "/projects/detail/siakad-ikmi/hasil-cetak-skl.png", title: "Print Graduation Certificate (SKL)", caption: "Official digital Graduation Verification Certificate (SKL) document." },
      { image: "/projects/detail/siakad-ikmi/chatbot.png", title: "AI Chatbot Assistant", caption: "Gemini API-powered AI assistant answering academic service inquiries." },
      // SUPERUSER / ADMIN ROLE
      { image: "/projects/detail/siakad-ikmi/dashboard-admin.png", title: "Superuser/Admin Dashboard", caption: "Central control panel and academic statistical data recap for institutional administration." },
      { image: "/projects/detail/siakad-ikmi/program-studi.png", title: "Study Programs Page", caption: "Management of academic departments and study programs offered by the institution." },
      { image: "/projects/detail/siakad-ikmi/tahun-akademik.png", title: "Academic Year Page", caption: "Configuration and management of active academic year periods and curricula." },
      { image: "/projects/detail/siakad-ikmi/mata-kuliah.png", title: "Courses Page", caption: "Course catalog management, credit units (SKS), semester loads, and prerequisites." },
      { image: "/projects/detail/siakad-ikmi/predikat-yudisium.png", title: "Graduation Predicate Page", caption: "Criteria and standards configuration for graduation honors (Cum Laude, Very Satisfactory, etc.)." },
      { image: "/projects/detail/siakad-ikmi/jadwal-sidang-skripsi.png", title: "Thesis Defense Schedule Page", caption: "Scheduling of student final thesis defense sessions and examination panels." },
      { image: "/projects/detail/siakad-ikmi/data-pengguna.png", title: "User Management Page", caption: "User account administration, role assignment, and account activation management." },
      { image: "/projects/detail/siakad-ikmi/data-mahasiswa.png", title: "Student Directory Page", caption: "Directory and record management of all registered students." },
      { image: "/projects/detail/siakad-ikmi/import-data-mahasiswa.png", title: "Import Student Data", caption: "Bulk upload feature for importing new student data using spreadsheet templates." },
      { image: "/projects/detail/siakad-ikmi/data-dosen.png", title: "Faculty Directory Page", caption: "Lecturer directory with national lecturer IDs (NIDN) and specialization fields." },
      { image: "/projects/detail/siakad-ikmi/data-pejabat.png", title: "Campus Officials Page", caption: "Structure management of institutional signatories for official document validation." },
      { image: "/projects/detail/siakad-ikmi/cetak-masal-biodata.png", title: "Batch Print Student Biodata", caption: "Batch printing utility for student biodata documents in large quantities." },
      { image: "/projects/detail/siakad-ikmi/cetak-masal-ktm.png", title: "Batch Print Student ID Cards", caption: "Batch generation and printing facility for Student ID Cards (KTM)." },
      { image: "/projects/detail/siakad-ikmi/data-mbkm.png", title: "MBKM Program Data Page", caption: "Management and credit equivalency mapping for Freedom to Learn (MBKM) activities." },
      { image: "/projects/detail/siakad-ikmi/kelola-nilai-mahasiswa.png", title: "Manage Student Grades Page", caption: "Centralized management and oversight of course final grades." },
      { image: "/projects/detail/siakad-ikmi/input-nilai-mahasiswa.png", title: "Input Student Grades", caption: "Grade entry form (Assignments, Midterms, Finals, Attendance) per course." },
      { image: "/projects/detail/siakad-ikmi/import-nilai-mahasiswa.png", title: "Import Student Grades", caption: "Bulk upload facility for importing course grades from Excel files." },
      { image: "/projects/detail/siakad-ikmi/validasi-krs.png", title: "KRS Validation Page", caption: "List of student course plan submissions requiring administrator validation." },
      { image: "/projects/detail/siakad-ikmi/validasi-krs-mahasiswa.png", title: "Student KRS Approval", caption: "Detailed review and approval interface for individual student course selections." },
      { image: "/projects/detail/siakad-ikmi/input-krs-kolektif.png", title: "Batch KRS Assignment", caption: "Bulk course registration assignment feature for entire student cohorts/classes." },
      { image: "/projects/detail/siakad-ikmi/cetak-masal-khs.png", title: "Batch Print Grade Reports (KHS)", caption: "Batch printing utility for Semester Grade Reports per class or cohort." },
      { image: "/projects/detail/siakad-ikmi/cetak-masal-transkrip.png", title: "Batch Print Transcripts", caption: "Batch printing facility for academic transcript documents." },
      { image: "/projects/detail/siakad-ikmi/cetak-masal-skl.png", title: "Batch Print Graduation Certificates (SKL)", caption: "Batch issuance and printing facility for Graduation Verification Letters." },
      { image: "/projects/detail/siakad-ikmi/manajemen-menu.png", title: "Menu Management Page", caption: "Navigation structure configuration and menu authorization settings." },
      { image: "/projects/detail/siakad-ikmi/atur-urutan-menu.png", title: "Reorder Navigation Menu", caption: "Drag-and-drop ordering interface for UI navigation hierarchy." },
      { image: "/projects/detail/siakad-ikmi/status-sistem.png", title: "System Status Page", caption: "Monitoring panel for server health, database performance, and system metrics." },
      { image: "/projects/detail/siakad-ikmi/Manajemen-api-key.png", title: "API Key Management Page", caption: "API access token administration and third-party service integration management." },
      { image: "/projects/detail/siakad-ikmi/pengaturan-akun.png", title: "Account Settings Page", caption: "Admin profile settings, password changes, and account preferences." },
    ]
  },
  datadikti: {
    slug: "datadikti",
    title: "DataDikti",
    tagline: "Access Indonesian higher education information more easily and efficiently.",
    coverImage: "/projects/datadikti.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "2 Months",
    type: "Personal",
    links: {
      website: "https://datadikti.projectshowcase.web.id",
      source: "https://github.com/azharangga/datadikti",
    },
    overview: "DataDikti is a web-based platform designed to simplify access to higher education information in Indonesia through a centralized system. The platform provides search capabilities for universities, study programs, students, lecturers, and other academic information using a simple and user-friendly interface. By delivering faster and more structured access to educational data, DataDikti helps users find the information they need more efficiently.",
    problemBackground: "- **Higher Education Information Is Difficult to Find**: Information about universities, students, lecturers, and study programs is often scattered, making searches less efficient.\n- **Searching Requires Multiple Steps**: Users must go through several steps to obtain the information they need, resulting in a slower search process.\n- **Information Is Not Well Organized**: Available data is not always presented in a simple and structured interface, making it harder for users to understand quickly.",
    solutionApproach: {
      design: "- **Centralized Search Platform**: Brings together various higher education information into a single platform for a more efficient search experience.\n- **Fast and Simple Search**: Provides keyword-based search functionality, allowing users to find information more quickly.\n- **Structured Information Display**: Presents search results in a clear and organized format to improve readability and usability.\n- **More Efficient Information Access**: Helps users obtain academic information faster without navigating multiple information sources.",
      workflow: [
        "Users open the search page.",
        "Users enter keywords for the information they are searching for.",
        "The system processes the search query.",
        "Matching data is displayed in the search results list.",
        "Users select a result to view complete information.",
        "Information is presented in a structured and easy-to-understand interface."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "University Search",
        description: "Enables users to quickly search for universities using names or keywords."
      },
      {
        title: "Student and Lecturer Search",
        description: "Provides search functionality for student and lecturer information along with available academic details."
      },
      {
        title: "Study Program Information",
        description: "Displays information about study programs offered by each university to help users explore academic options."
      },
      {
        title: "Centralized Search Platform",
        description: "Integrates various types of higher education information into a single platform for a more efficient search experience."
      },
      {
        title: "User-Friendly Search Results",
        description: "Presents search results in a clear and organized format, making information easier to understand."
      }
    ],
    gallery: [
      { image: "/projects/detail/datadikti/datadikti.png", title: "Main Portal Interface", caption: "Minimalist search bar with integrated tab filters." }
    ]
  },
  "pusdatin-kab-cirebon": {
    slug: "pusdatin-kab-cirebon",
    title: "Pusdatin Kab. Cirebon",
    tagline: "Manage village data in a centralized, structured, and efficient way.",
    coverImage: "/projects/pusdatin.png",
    category: "Web Development",
    role: "Full Stack Developer",
    duration: "4 Months",
    type: "Personal",
    links: {
      website: "https://pusdatin.kesug.com",
      source: "https://github.com/azharangga/pusdatin-kabcirebon",
    },
    overview: "PUSDATIN Kabupaten Cirebon is an integrated web platform designed to support centralized and efficient data collection, management, and recapitulation for villages and sub-districts in Cirebon Regency. The system helps village governments and related stakeholders input, update, manage, and generate sectoral data reports through a single integrated dashboard. With a more organized workflow and easier access, the platform is designed to improve administrative efficiency and simplify cross-region reporting.",
    problemBackground: "- **Village Data Is Scattered**: Data on village potential, infrastructure, population, and territorial information is often managed separately, making retrieval and recapitulation less efficient.\n- **Reporting Takes More Time**: Preparing sectoral reports still involves many manual steps, which slows administrative workflows and increases the risk of errors.\n- **Data Monitoring Is Not Centralized**: There is no fully centralized system that presents village data comprehensively in a single dashboard for related stakeholders.",
    solutionApproach: {
      design: "- **Centralized Data Platform**: Brings village and sub-district data into one system so data management becomes more organized, accessible, and efficient.\n- **Digital Recapitulation and Reporting**: Provides a digital workflow for data recapitulation and report generation to make administration faster and more structured.\n- **Interactive Monitoring Dashboard**: Displays data in a dashboard format that helps users monitor and understand information more quickly.\n- **Role-Based Access System**: Implements user role separation to protect data and ensure each party only accesses the features relevant to them.",
      workflow: [
        "Users access the main page and sign in to the system.",
        "Users log in according to their assigned roles.",
        "Admins or village users input and update sectoral data.",
        "The system stores data centrally in the database.",
        "Data can be recapitulated and filtered as needed.",
        "Reports can be exported to PDF or Excel."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Village Sector Data Management",
        description: "Enables users to manage various village and sub-district sectoral data in a structured way, including creating, updating, and deleting records in a centralized platform."
      },
      {
        title: "Authentication and Role-Based Access Control",
        description: "Controls user permissions based on roles such as superadmin, admin, and village users, ensuring that each user can only access authorized features."
      },
      {
        title: "Data Recapitulation and Reporting",
        description: "Provides cross-village and cross-district data recapitulation with filtering options to simplify monitoring and report preparation."
      },
      {
        title: "Document Export",
        description: "Allows users to generate reports in PDF and Excel formats for administrative, documentation, and data sharing purposes."
      },
      {
        title: "User and Fiscal Year Management",
        description: "Supports the management of users, application menus, and fiscal periods to keep the system organized and maintainable."
      }
    ],
    gallery: [
      { image: "/projects/detail/pusdatin-kab-cirebon/beranda.png", title: "Home Page", caption: "Landing page for the Data and Information Center of Cirebon Regency." },
      { image: "/projects/detail/pusdatin-kab-cirebon/login.png", title: "Login Page", caption: "Role-based user authentication sign-in interface." },
      { image: "/projects/detail/pusdatin-kab-cirebon/dashboard-user.png", title: "User Dashboard Page", caption: "Data collection dashboard summary tailored for village-level users." },
      { image: "/projects/detail/pusdatin-kab-cirebon/pengisian-formulir.png", title: "Form Entry Page", caption: "Structured data entry form for updating village sectoral information." },
      { image: "/projects/detail/pusdatin-kab-cirebon/dashboard-admin.png", title: "Admin Dashboard Page", caption: "Central administrator dashboard to monitor cross-village data." },
      { image: "/projects/detail/pusdatin-kab-cirebon/data-tahun.png", title: "Fiscal Year Data Page", caption: "Management of fiscal year periods for sectoral data collection." },
      { image: "/projects/detail/pusdatin-kab-cirebon/data-user.png", title: "User Data Page", caption: "User account management and role-based permission assignment." },
      { image: "/projects/detail/pusdatin-kab-cirebon/rekap-data.png", title: "Data Recapitulation Page", caption: "Aggregated sectoral data recapitulation across villages and sub-districts." },
      { image: "/projects/detail/pusdatin-kab-cirebon/export-data.png", title: "Export Data Page", caption: "Configuration feature for document printing and data exports." },
      { image: "/projects/detail/pusdatin-kab-cirebon/hasil-export-data.png", title: "Export Results Preview", caption: "Document preview for generated PDF and Excel data reports." },
      { image: "/projects/detail/pusdatin-kab-cirebon/manajemen-menu.png", title: "Menu Management Page", caption: "Configuration settings for system application menu structure." },
      { image: "/projects/detail/pusdatin-kab-cirebon/manajemen-form.png", title: "Form Management Page", caption: "Integrated schema management for sectoral data forms." },
    ]
  },

  // ==========================================
  // UI/UX DESIGN PROJECTS
  // ==========================================
  "ui-design-prototype-uboost": {
    slug: "ui-design-prototype-uboost",
    title: "UI Design Prototype UBoost",
    tagline: "High-fidelity UI prototype design for UBoost with a user-centered approach.",
    coverImage: "/projects/uboost.png",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    duration: "1 Month",
    type: "Personal",
    links: {
      figma: "https://www.figma.com/design/XVHfhNJNsVMPExVybbTArj/UBoost--Tugas-Technopreneurship---Copy-?node-id=13-123&t=GJthkXEK9Ve74fUL-1",
      prototype: "https://www.figma.com/proto/XVHfhNJNsVMPExVybbTArj/UBoost--Tugas-Technopreneurship---Copy-?node-id=13-123&p=f&t=GJthkXEK9Ve74fUL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    overview: "UI Design Prototype UBoost is a high-fidelity user interface design project created to support the UBoost platform application. The project focuses on crafting intuitive user flows, clean visual hierarchy, and consistent, responsive UI components. By applying user-centered design principles, this prototype optimizes navigation comfort and user interaction efficiency.",
    problemBackground: "- **Complex Navigation Flows**: Users require a simpler interface to access core features without confusion.\n- **Low Visual Consistency**: Previous interface components lacked standardization, leading to an inconsistent look and feel.\n- **Need for Interactive Prototyping**: Realistic flow simulations are required to test and evaluate the user experience before development.",
    solutionApproach: {
      design: "- **Design System and UI Kit Construction**: Building reusable UI components using Figma Auto Layout to maintain visual consistency across all screens.\n- **User Flow and Wireframe Design**: Structuring navigation paths from low-fidelity wireframes to high-fidelity mockups.\n- **Interactive Prototyping**: Converting visual elements into interactive prototypes for direct flow testing.\n- **Visual Hierarchy Optimization**: Arranging typography, layouts, and color palettes to enhance readability.",
      workflow: [
        "Initial research and user flow requirement identification.",
        "Sketching wireframes and application user flows.",
        "Establishing design system and UI component guidelines.",
        "Designing high-fidelity user interfaces in Figma.",
        "Adding interactions and micro-animations for the prototype.",
        "Testing and evaluating user experience on the interactive prototype."
      ]
    },
    techStack: [
      {
        category: "Design Tools",
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
        title: "Structured Design System",
        description: "Provides a consistent UI component library built with Auto Layout for seamless design scaling."
      },
      {
        title: "Interactive Prototype",
        description: "Delivers an interactive application navigation simulation that can be tested directly."
      },
      {
        title: "Clean Visual Hierarchy",
        description: "Organizes layouts and typography harmoniously to improve user readability."
      },
      {
        title: "Intuitive User Flow",
        description: "Designs each interaction step to follow a logical and responsive progression."
      }
    ],
    gallery: [
      { image: "/projects/detail/ui-design-prototype-uboost/uboost.png", title: "Main UBoost Prototype", caption: "Dashboard view and interaction flows for the UBoost interface." }
    ]
  },
  "ui-design-prototype-niagahoster": {
    slug: "ui-design-prototype-niagahoster",
    title: "UI Design Prototype Niagahoster",
    tagline: "Niagahoster web interface redesign focused on seamless navigation.",
    coverImage: "/projects/niagahoster.png",
    category: "UI/UX Design",
    role: "UI/UX Designer",
    duration: "1 Month",
    type: "Personal",
    links: {
      figma: "https://www.figma.com/design/7xcYSxhg7DJWW42SmLagbI/Case-Study-Niagahoster-by-Azharangga-Kusuma?node-id=35-2117&t=Ez3jYBbgHcAJHAY2-1",
      prototype: "https://www.figma.com/proto/7xcYSxhg7DJWW42SmLagbI/Case-Study-Niagahoster-by-Azharangga-Kusuma?node-id=35-2117&p=f&t=Ez3jYBbgHcAJHAY2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A2117",
    },
    overview: "UI Design Prototype Niagahoster is a case study user interface redesign project inspired by Niagahoster web hosting services. The project aims to improve user experience through a structured information architecture, clear visual hierarchy, and streamlined product purchase and navigation flows. With this interactive prototype, prospective users can explore hosting plans more intuitively.",
    problemBackground: "- **Densely Packed Product Information**: The original landing page and hosting plan list were crowded, making it slow for users to compare specifications.\n- **Checkout Flow Needs Streamlining**: Purchasing hosting plans required a shorter and more intuitive navigation flow.\n- **Content Hierarchy Needs Emphasis**: Essential elements like Call-to-Action (CTA) buttons and key features needed clearer visual contrast.",
    solutionApproach: {
      design: "- **Product Layout Simplification**: Redesigning hosting card layouts so pricing and specifications are effortless to compare.\n- **Visual Hierarchy and CTA Arrangement**: Highlighting primary action buttons with optimal color contrast to guide users intuitively.\n- **Wireframing and UI Kit Creation**: Building a modern, consistent UI component system.\n- **Interactive Checkout Prototype**: Developing an interactive flow from the main page through plan confirmation.",
      workflow: [
        "Initial interface analysis and UX improvement area identification.",
        "Structuring information architecture and user navigation flows.",
        "Creating low-fidelity wireframes and layout explorations.",
        "Designing high-fidelity interfaces and constructing UI Kits in Figma.",
        "Building interactive prototypes for the product checkout flow.",
        "Evaluating redesign outcomes for readability and interface comfort."
      ]
    },
    techStack: [
      {
        category: "Design Tools",
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
        title: "Clear Package Catalog View",
        description: "Presents hosting product cards with easily understandable pricing and specification comparisons."
      },
      {
        title: "Streamlined Checkout Flow",
        description: "Designs an efficient purchase journey to reduce cognitive load on users."
      },
      {
        title: "Interactive Figma Prototype",
        description: "Provides interactive navigation flows simulating a real site browsing experience."
      },
      {
        title: "Structured Visual Hierarchy",
        description: "Emphasizes key information points and call-to-action buttons with strong visual arrangement."
      }
    ],
    gallery: [
      { image: "/projects/detail/ui-design-prototype-niagahoster/niagahoster.png", title: "Main Niagahoster Prototype", caption: "Redesigned landing page and hosting plan comparison cards." }
    ]
  },

  // ==========================================
  // MACHINE LEARNING PROJECTS
  // ==========================================
  "food-image-classification-and-recommendation-menu": {
    slug: "food-image-classification-and-recommendation-menu",
    title: "Food Image Classification and Recommendation Menu",
    tagline: "Building a food ingredient classification model for smarter nutrition recommendations.",
    coverImage: "/projects/gizimeal-model.png",
    category: "Machine Learning",
    role: "AI Engineer and Project Manager",
    duration: "4 Months",
    type: "Team",
    links: {
      source: "https://github.com/CC26-PSU393-GiziMeal/AI-Engineer/tree/main/Model",
      model: "https://huggingface.co/CC26-PSU393/gizimeal-model/tree/main",
    },
    overview: "Food Ingredient Classification Model is the core component of the GiziMeal project, responsible for identifying food ingredients from user-uploaded images. The model is developed using a Deep Learning approach to recognize 15 food ingredient categories, providing predictions that serve as the foundation for nutritional analysis and balanced meal recommendations within GiziMeal. The development process covers the complete machine learning pipeline, including dataset preparation, image preprocessing, model training, and performance evaluation to ensure accurate and reliable classification.",
    problemBackground: "- **Food Ingredient Identification Is Still Manual**: Identifying food ingredients from images often requires manual observation, which is time-consuming and prone to errors.\n- **Variations in Food Appearance**: Differences in lighting, viewing angles, and ingredient appearance make image classification more challenging.\n- **Reliable Predictions Are Essential**: Nutritional analysis and meal recommendations depend on accurate classification results, requiring a reliable prediction model.",
    solutionApproach: {
      design: "- **Deep Learning-Based Classification Model**: Develops an image classification model capable of automatically recognizing various food ingredients from uploaded images.\n- **Improved Dataset Quality**: Applies preprocessing and image augmentation techniques to improve the model's ability to recognize diverse image conditions.\n- **Model Performance Evaluation**: Evaluates the model using unseen test data to ensure strong generalization and reliable predictions.\n- **Integration with GiziMeal**: Connects prediction results with GiziMeal's nutrition recommendation system to automatically generate nutritional information and balanced meal recommendations.",
      workflow: [
        "Food ingredient images are collected and prepared.",
        "Images are preprocessed and augmented to improve data quality.",
        "The dataset is divided into training, validation, and testing sets.",
        "The model is trained to learn patterns for each food ingredient category.",
        "The model is evaluated using the testing dataset.",
        "Prediction results are integrated into the GiziMeal application to support nutrition analysis and meal recommendations."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Food Ingredient Classification",
        description: "Automatically identifies 15 food ingredient categories from digital images using a Deep Learning model."
      },
      {
        title: "Data Preprocessing and Augmentation",
        description: "Performs image preprocessing, normalization, and data augmentation to improve training data quality."
      },
      {
        title: "Model Training and Evaluation",
        description: "Trains the classification model and evaluates its performance using appropriate evaluation metrics."
      },
      {
        title: "New Image Prediction",
        description: "Classifies unseen food ingredient images with trained model predictions."
      },
      {
        title: "GiziMeal Integration",
        description: "Generates predictions that serve as the basis for nutritional analysis and balanced meal recommendations in GiziMeal."
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
      { image: "/projects/detail/food-image-classification-and-recommendation-menu/gizimeal-model.png", title: "AI Model Stats Dashboard", caption: "Detailed look at CNN validation curves and multi-task predictions." }
    ]
  },
  "tokopedia-review-sentiment-analysis": {
    slug: "tokopedia-review-sentiment-analysis",
    title: "Tokopedia Review Sentiment Analysis",
    tagline: "Understand user opinions through product review sentiment analysis.",
    coverImage: "/projects/sentimen-tokped.png",
    category: "Machine Learning",
    role: "Data Scientist",
    duration: "1 Month",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/tokopedia-review-sentiment-analysis",
      notebook: "https://github.com/azharangga/tokopedia-review-sentiment-analysis/blob/main/pelatihan_model.ipynb",
    },
    overview: "Tokopedia Review Sentiment Analysis is a text analysis project focused on processing user reviews to identify positive, negative, or neutral sentiment toward a product. The project aims to help understand user perceptions in a more structured way through a Natural Language Processing and sentiment classification approach. By processing available review data, the system transforms textual opinions into information that is easier to analyze for product evaluation, market research, and decision-making purposes.",
    problemBackground: "- **User Reviews Are Difficult to Manage Manually**: A large number of reviews makes it inefficient to read and understand user opinions manually.\n- **User Opinions Are Diverse and Unstructured**: User reviews are written in different styles, making them difficult to analyze without an automated approach.\n- **Sentiment Information Is Not Immediately Actionable**: Raw review data does not clearly help decision-makers unless it is transformed into structured sentiment information.",
    solutionApproach: {
      design: "- **Automated Sentiment Analysis**: Applies a classification model to identify user sentiment from review text automatically.\n- **Structured Text Processing**: Performs text cleaning and preparation so reviews can be analyzed more accurately.\n- **Easier-to-Understand Information**: Transforms user opinions into structured analytical results that are easier to use for product evaluation.\n- **Decision-Making Support**: Provides sentiment analysis results that help interpret user responses toward products or services.",
      workflow: [
        "User review data is collected from available sources.",
        "Review text is cleaned and preprocessed first.",
        "The system performs sentiment analysis on each review.",
        "The results are classified into specific sentiment categories.",
        "Analysis results are displayed as summaries or visualizations.",
        "The information is then used to better understand user opinions."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Review Sentiment Classification",
        description: "Analyzes review text to determine whether user sentiment is positive, negative, or neutral."
      },
      {
        title: "Text Data Processing",
        description: "Cleans and prepares review data for the sentiment analysis pipeline."
      },
      {
        title: "Opinion Information Extraction",
        description: "Converts user reviews into structured information that can be used for product evaluation."
      },
      {
        title: "Analysis Result Visualization",
        description: "Presents sentiment results in a more understandable format to support data interpretation."
      },
      {
        title: "Model Performance Evaluation",
        description: "Measures classification results to assess how well the model recognizes sentiment in user reviews."
      }
    ],
    gallery: [
      { image: "/projects/detail/tokopedia-review-sentiment-analysis/sentimen-tokped.png", title: "Evaluation Confusion Matrix", caption: "Model evaluation matrix showing predicted vs actual sentiment classes." }
    ]
  },
  "apple-leaf-disease-classification": {
    slug: "apple-leaf-disease-classification",
    title: "Apple Leaf Disease Classification",
    tagline: "Detect apple leaf diseases early for healthier crop management.",
    coverImage: "/projects/klasifikasi-apel.png",
    category: "Machine Learning",
    role: "Deep Learning Engineer",
    duration: "1 Months",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/apple-leaf-disease-classification",
      notebook: "https://github.com/azharangga/apple-leaf-disease-classification/blob/main/pelatihan_model.ipynb",
    },
    overview: "Apple Leaf Disease Classification is a web-based application developed to identify diseases in apple leaves through image analysis using Deep Learning. The project aims to support early disease detection so that treatment can be carried out more quickly and accurately. Users simply upload an image of an apple leaf, and the system automatically classifies the leaf condition along with the prediction confidence. This approach helps improve crop health monitoring while reducing the risk of disease spread.",
    problemBackground: "- **Disease Identification Relies on Manual Inspection**: Apple leaf diseases are commonly identified through visual inspection, which requires expertise and may produce inconsistent results.\n- **Delayed Disease Treatment**: Late identification of disease symptoms can lead to wider disease spread and reduced crop quality.\n- **Limited Access to Expert Diagnosis**: Many farmers and users do not have immediate access to experts for rapid disease identification.",
    solutionApproach: {
      design: "- **Deep Learning-Based Disease Detection**: Uses a Deep Learning model to automatically identify apple leaf diseases from uploaded images.\n- **Fast Identification Process**: Provides prediction results within seconds, enabling users to quickly determine plant conditions.\n- **Web-Based Accessibility**: Makes disease identification available through a web application without requiring specialized equipment.\n- **Early Disease Detection**: Supports early disease identification so that treatment can be performed sooner and the spread of disease can be minimized.",
      workflow: [
        "Users upload an image of an apple leaf.",
        "The system preprocesses the image.",
        "A Deep Learning model analyzes the uploaded image.",
        "The system classifies the detected leaf condition.",
        "Prediction results and confidence scores are displayed.",
        "The prediction history can be stored and reviewed later."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Apple Leaf Disease Classification",
        description: "Identifies apple leaf conditions from uploaded images and classifies them into the available disease categories."
      },
      {
        title: "Direct Image Upload",
        description: "Allows users to upload apple leaf images through a web interface for quick disease identification."
      },
      {
        title: "Automatic Prediction Results",
        description: "Displays classification results along with prediction confidence to help users interpret the outcome."
      },
      {
        title: "Prediction History",
        description: "Stores previous prediction results so users can review past classifications."
      },
      {
        title: "User-Friendly Interface",
        description: "Provides a clean and responsive interface for a simple and efficient prediction process."
      }
    ],
    gallery: [
      { image: "/projects/detail/apple-leaf-disease-classification/klasifikasi-apel.png", title: "Accuracy Evaluation Plot", caption: "Training and validation accuracy curves for custom CNN model." }
    ]
  },
  "bitcoin-price-forecasting": {
    slug: "bitcoin-price-forecasting",
    title: "Bitcoin Price Forecasting",
    tagline: "Forecast Bitcoin price movements based on historical data.",
    coverImage: "/projects/prediksi-bitcoin.png",
    category: "Machine Learning",
    role: "Data Scientist",
    duration: "1 Months",
    type: "Personal",
    links: {
      source: "https://github.com/azharangga/bitcoin-price-forecasting",
      notebook: "https://github.com/azharangga/bitcoin-price-forecasting/blob/main/pelatihan_model.ipynb",
    },
    overview: "Bitcoin Price Forecasting is a time-series prediction project focused on forecasting Bitcoin closing prices using historical data. The project compares two Recurrent Neural Network approaches, namely a Baseline LSTM model and a Seq2Seq LSTM with Attention Mechanism. Using 96 historical time steps to predict the next 3 steps ahead, the project covers the full workflow from feature engineering, data scaling, and window-based dataset creation to model training and comparative evaluation.",
    problemBackground: "- **Bitcoin Prices Are Difficult to Predict Manually**: Bitcoin price movements are highly volatile, making them difficult to analyze visually without a more systematic modeling approach.\n- **Historical Patterns Are Highly Complex**: Bitcoin price data is influenced by many factors and often changes its pattern over time, requiring models that can learn long-term dependencies.\n- **Multi-Step Forecasting Is More Challenging**: Predicting multiple steps ahead is significantly harder than one-step forecasting because the model must understand sequential data more deeply.",
    solutionApproach: {
      design: "- **Deep Learning Approach for Time Series**: Uses a deep learning-based model so the system can learn Bitcoin price patterns more adaptively.\n- **Seq2Seq Architecture with Attention**: Applies a sequence-to-sequence model with an attention mechanism to improve the stability of multi-step forecasting.\n- **Feature Engineering and Data Windowing**: Builds technical features and organizes the data into historical windows so the model can capture price movement patterns more effectively.\n- **Comparative Model Evaluation**: Compares the performance of the baseline model and the main model to identify the most effective forecasting approach.",
      workflow: [
        "Historical Bitcoin price data is loaded into the system.",
        "The data is cleaned and analyzed to understand initial patterns.",
        "Technical and statistical features are created from the historical data.",
        "The dataset is split into train, validation, and test sets chronologically.",
        "The data is transformed into a windowed format for multi-step forecasting.",
        "Both the Baseline LSTM and Seq2Seq LSTM models are trained and evaluated.",
        "Predictions are compared with actual values and visualized."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
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
        title: "Time-Series Feature Engineering",
        description: "Builds technical and statistical features from historical Bitcoin price data to help the model better learn price movement patterns."
      },
      {
        title: "Separate Data Scaling",
        description: "Applies different scaling strategies for features and target values to stabilize the data distribution during training."
      },
      {
        title: "Multi-Step Windowing",
        description: "Creates window-based datasets so the model can learn from past sequences and predict multiple future steps."
      },
      {
        title: "Seq2Seq LSTM with Attention",
        description: "Uses a sequence-to-sequence architecture with an attention mechanism to improve multi-step time-series forecasting performance."
      },
      {
        title: "Evaluation and Result Visualization",
        description: "Provides performance comparisons between the baseline model, Seq2Seq model, and actual Bitcoin prices through evaluation metrics and visual plots."
      }
    ],
    gallery: [
      { image: "/projects/detail/bitcoin-price-forecasting/prediksi-bitcoin.png", title: "Price Prediction Evaluation Plot", caption: "Comparative plot of Seq2Seq LSTM model predictions vs actual Bitcoin prices." }
    ]
  }
};
