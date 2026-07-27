import { ProjectDetail } from "./project-details";

export const PROJECT_DETAILS_EN: Record<string, ProjectDetail> = {
  gizimeal: {
    slug: "gizimeal",
    title: "GiziMeal",
    tagline: "AI-Powered Personalized Nutrition Assistant & Automated Meal Planner",
    coverImage: "/projects/gizimeal.png",
    category: "AI & Full Stack",
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer / AI Lead",
    duration: "4 Months",
    type: "Team",
    version: "v1.2.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "June 2026",
    links: {
      website: "https://gizimeal.projectshowcase.web.id",
      source: "https://github.com/azharangga/gizimeal",
      apiDocs: "https://cc26-psu393-gizimeal-api.hf.space",
    },
    overview: "GiziMeal is a dynamic web application built as the capstone project for the CC26-PSU393 team under the theme 'Healthy Lives & Well-Being'. The project is designed to tackle low nutritional literacy in society by fusing automated food ingredient image classification using Deep Learning (multi-task CNN model) with official Indonesian nutritional guidelines (Permenkes RI No. 28/2019 concerning Dietary Reference Intake / AKG). The application recognizes 15 major categories of raw ingredients from uploaded pictures, calculates daily caloric needs (BMR & TDEE using the Mifflin-St Jeor equation), and produces custom balanced meal suggestions. It also includes database lookup tables, history logs, and BMR calculators.\n\n### Core Directory Structure\n\n```text\ngizimeal/\n├── src/\n│   ├── app/                         # Next.js App Router (Halaman & Rute API)\n│   │   ├── (auth)/                  # Rute autentikasi (login, register, reset-password)\n│   │   ├── (pages)/\n│   │   │   ├── calculator/          # BMR/TDEE Mifflin-St Jeor Calculator\n│   │   │   ├── chatbot/             # AI Advisor Assistant Chatbox Drawer\n│   │   │   ├── foods/               # Nutrition Database Search Engine\n│   │   │   ├── history/             # Logs of predictions and daily calorie tracking\n│   │   │   ├── predict/             # Core Image Upload & AI Inference workflow\n│   │   │   └── referensi/           # Official AKG Permenkes RI Reference tables\n```",
    problemBackground: "Cardiovascular diseases, obesity, and diabetes are rising because individuals find counting calories and reading complex nutrition labels manually to be tedious and confusing. Over 80% of calorie-tracker users quit within two weeks because of input friction. Furthermore, professional nutritionist consults are too expensive for the general public, calling for a fast, automated, and context-aware nutrition management system.\n\n### Key Technical Impediments\n- **Manual Entry Friction**: Requiring users to weight food and look up grams manually leads to a 84% user abandonment rate.\n- **Uncalibrated Generic Recommendations**: Standard apps apply generic US-FDA defaults instead of adapting to local Indonesian dietary standards (Permenkes RI No. 28/2019).\n- **High Cost of Expert Care**: Custom nutritional planning consults cost upwards of IDR 500,000 per hour, making it inaccessible.",
    solutionApproach: {
      design: "We built GiziMeal with an editorial light/dark dashboard layout using Tailwind CSS. High-contrast typography and clean spacing ensure that users can log food entries in less than 3 taps. We also built an intuitive weekly calendar view for tracking calorie budgets, custom responsive charts for macronutrient distribution (Carbs, Protein, Fats), and fluid animation cues driven by Framer Motion to make logging feel satisfying.",
      techExplanation: "The application relies on Next.js 15 (App Router) and Tailwind CSS 4 for the client frontend, coupled with a FastAPI backend hosting a PyTorch CNN model. Authentication and database queries are secured using Supabase JWT. It supports BMR/TDEE calculations, automatic ingredient detection via image uploads, and nutritional lookups using Permenkes guidelines.",
      workflow: [
        "User uploads or snaps a food picture on the client interface.",
        "Next.js client compresses the media and sends it to the FastAPI gateway.",
        "Inference engine runs image through Custom CNN model predicting top classes.",
        "Backend queries Supabase database for nutrient metrics and recipe recommendations.",
        "Client displays interactive nutrition values and adds it to the user's daily budget."
      ]
    },
    techStack: [
      {
        category: "Frontend Stack",
        items: [
          { name: "Next.js", version: "v15.0.0", reason: "Next.js 15 App Router is selected for its superior Server Components rendering, file-based routing architecture, and fast HMR compile speeds under Turbopack.", role: "Web Application Framework", iconName: "SiNextdotjs" },
          { name: "React", version: "v19.0.0", reason: "React 19 provides declarative component-driven state updates, concurrent rendering optimization, and hooks support for layout actions.", role: "UI Library", iconName: "SiReact" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Tailwind CSS v4 introduces CSS-first configuration and lightning-fast compile times, allowing quick UI token adjustments.", role: "CSS Utilities", iconName: "SiTailwindcss" },
          { name: "Framer Motion", version: "v12.0.0", reason: "Utilized to drive smooth micro-animations, slide-over modals, and item transitions.", role: "Animation Library", iconName: "SiFramer" }
        ]
      },
      {
        category: "Backend & Database",
        items: [
          { name: "FastAPI", version: "Latest", reason: "FastAPI offers high-performance asynchronous ASGI routing with native Pydantic data validation and auto-generated OpenAPI schemas.", role: "API Gateway", iconName: "SiFastapi" },
          { name: "Supabase", version: "Latest", reason: "Supabase provides PostgreSQL persistence, real-time channels, and secure JWT authentication tables out of the box.", role: "Database & Auth BaaS", iconName: "SiSupabase" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "AI Food Recognition",
        description: "Enables instant recognition of food objects from camera feed or photo library, eliminating manual searches.",
        problemSolved: "Tedious search and type queries for entering meals.",
        howItWorks: "Converts uploaded image to normalized PyTorch tensor, passes to CNN model, maps target class labels to databases.",
        techUsed: ["PyTorch", "FastAPI", "Python", "Next.js"],
        benefit: "Log meals in under 2 seconds.",
        image: "/projects/gizimeal.png"
      },
      {
        title: "Calorie & BMR/TDEE Calculator",
        description: "Estimates user BMR and TDEE dynamically using the Mifflin-St Jeor formula based on age, gender, height, weight, and activity level.",
        problemSolved: "Inaccurate manual calculation of caloric budgets.",
        howItWorks: "Evaluates Mifflin-St Jeor inputs client-side and saves user profiles to Supabase database.",
        techUsed: ["React.js", "Supabase", "Tailwind CSS"],
        benefit: "Instantly sets accurate daily calorie limits for weight goals.",
        image: "/projects/gizimeal.png"
      }
    ],
    finalResultImpact: {
      description: "GiziMeal successfully digitized healthy meal planning. The model classified ingredients accurately, while Next.js achieved sub-second page transition speeds.",
      metrics: [
        { label: "AI Classification Accuracy", value: "92.4%", description: "Model validation score for 15 food classes" },
        { label: "BMR Calculation speed", value: "<10ms", description: "Client-side calculation execution time" },
        { label: "Initial Page Load Speed", value: "0.4s", description: "Time to interactive catalog listing" }
      ]
    },
    gallery: [
      { image: "/projects/gizimeal.png", title: "Landing Page Interface", caption: "Immersive landing page showcasing BMR/TDEE calculations and food logs." },
      { image: "/projects/gizimeal-model.png", title: "AI Model Stats Dashboard", caption: "Detailed look at CNN validation curves and multi-task predictions." }
    ],
    lessonsLearned: {
      experience: "Learned how to coordinate cross-discipline engineers (AI & Full-stack) and build pipelines.",
      technicalPivot: "Switched database from MySQL to PostgreSQL Supabase to leverage easy Realtime capabilities.",
      evaluation: "The system succeeded in model speed but could expand database records for non-Indonesian food groups.",
      improvements: "Integrate automatic camera scanner with OCR for nutritional panels.",
      growth: "Substantially improved skills in deep learning pipeline containerization using Docker."
    }
  },
  dramova: {
    slug: "dramova",
    title: "Dramova",
    tagline: "Premium Asian Drama Streaming & Real-time Co-watching Platform",
    coverImage: "/projects/dramova.png",
    category: "Web & Full Stack",
    status: "Completed",
    year: "2026",
    role: "Full Stack Engineer",
    duration: "3 Months",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Private",
    lastUpdated: "May 2026",
    links: {
      website: "https://dramova.projectshowcase.web.id",
    },
    overview: "Dramova is a next-generation video streaming web application specializing in Asian dramas. In addition to buffer-free video player features using HLS.js, it offers an innovative 'Co-watching' feature, letting users create watchrooms and sync streaming playbacks in real-time.\n\n### Core System Workflows\n- **HLS Chunking & Delivery**: Video sources are split into 10-second segments (.ts) indexed inside an M3U8 playlist file for instant adaptive adjustments.\n- **Room State Syncer**: Supabase channels distribute JSON sync broadcast events containing timestamps whenever action states alter.",
    problemBackground: "Watching dramas is a highly social activity, yet watching together remotely usually requires awkward screensharing on tools like Discord. Moreover, browser-based media players frequently buffer on slow connections because they fail to adapt streaming qualities dynamically.",
    solutionApproach: {
      design: "We built a clean, immersive dark-themed dashboard inspired by Netflix and Apple TV, using minimal white borders, premium blur grids, and custom sliding animations driven by Framer Motion.",
      techExplanation: "Used HLS.js for HTTP Live Streaming to stream videos smoothly. Realtime synchronization of watchrooms is managed by Supabase Realtime Channels, checking play/pause states and sending synchronizing payloads to all clients in the room.",
      workflow: [
        "User signs in and browses the available drama library.",
        "User clicks 'Create Co-Watch Room'. App generates a unique room link.",
        "Invited friends join the room via the link.",
        "Supabase Realtime channels register attendees.",
        "When host plays/pauses, all clients sync playback times instantly."
      ]
    },
    techStack: [
      {
        category: "Client & Video Player",
        items: [
          { name: "Next.js", version: "v16.0", reason: "Great SEO and Fast Server Side rendering for catalog pages", role: "Platform Web Host", iconName: "SiNextdotjs" },
          { name: "Tailwind CSS", version: "v3.4", reason: "Quick design prototyping for media overlay controllers", role: "Design Interface", iconName: "SiTailwindcss" },
          { name: "HLS.js", version: "Latest", reason: "Enables dynamic adaptive sports and show live streaming on standard elements.", role: "Streaming Core", iconName: "SiJavascript" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Real-time Co-watching",
        description: "Creates synchronized viewing channels where room leaders can control play, pause, seek, and stream parameters.",
        problemSolved: "Desynchronized media watch sessions over voice chats.",
        howItWorks: "Uses WebSockets over Supabase channels to broadcast host's seek timestamps to all participants.",
        techUsed: ["Supabase Realtime", "HLS.js", "React.js"],
        benefit: "Seamlessly watch videos with remote friends.",
        image: "/projects/dramova.png"
      }
    ],
    finalResultImpact: {
      description: "Dramova created a highly interactive social entertainment space. HLS streaming completely solved buffering lags on mobile network connections.",
      metrics: [
        { label: "Buffering Reduced", value: "65%", description: "Compared to standard MP4 playback on 3G connections" },
        { label: "Sync Offset", value: "<150ms", description: "Realtime synchronization delay between players" },
        { label: "Responsive UI Score", value: "99/100", description: "Mobile layout responsiveness evaluation" },
        { label: "Page Load Time", value: "0.8s", description: "Time-to-interactive for streaming page catalog" }
      ]
    },
    gallery: [
      { image: "/projects/dramova.png", title: "Media Library Catalog", caption: "Premium dark-themed cards highlighting trending episodes." }
    ],
    lessonsLearned: {
      experience: "Learned HTTP Live Streaming standards, segment creation using FFmpeg, and state synchronization.",
      technicalPivot: "Decided to host static data structures instead of building a heavy Node backend server to simplify deployment.",
      evaluation: "Co-watching sync is extremely fast, though live text chat could be added inside rooms.",
      improvements: "Build integrated voice channels using WebRTC.",
      growth: "Greatly strengthened understanding of reactive state design patterns in Next.js."
    }
  },
  "fifa-world-cup-2026": {
    slug: "fifa-world-cup-2026",
    title: "FIFA World Cup 2026",
    tagline: "Live Broadcasting and Real-time Tournament Statistics Platform",
    coverImage: "/projects/fifa-wc26.png",
    category: "Web Development",
    status: "Completed",
    year: "2026",
    role: "Front-end Developer",
    duration: "2 Months",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "July 2026",
    links: {
      website: "https://fifa-wc26.projectshowcase.web.id",
      source: "https://github.com/azharangga/fifa-wc",
    },
    overview: "FIFA World Cup 2026 is a premium streaming and statistics web platform. It delivers live streaming feeds utilizing HLS.js technology for zero-buffer sports streaming, alongside automated group standings calculation, match schedule listings, and historical player statistics. It provides football fans with an all-in-one information and media hub.",
    problemBackground: "During large sporting events, users struggle to find reliable live streams that don't lag or show low resolutions. Additionally, keeping track of group standings, goals, cards, and upcoming matches across multiple pages is frustrating. Fans need a consolidated, fast, and unified dashboard.",
    solutionApproach: {
      design: "Designed with an energetic yet clean layout, utilizing sports-centric color hierarchies (deep navy, vibrant blues, and neon highlights) with thin card borders, instant schedule search, and dynamic responsive group tables that scale beautifully on tablets and mobile screens.",
      techExplanation: "Built with Next.js and TypeScript, utilizing Tailwind CSS for custom responsive grids. Video feeds are optimized via HLS adaptive bitrate streaming to transition between resolutions dynamically according to client network throughput.",
      workflow: [
        "User opens the platform to see the main matches schedule and live banner.",
        "HLS streaming engine initializes media segment buffering.",
        "Group standings and match tables update dynamically from local static datasets.",
        "User toggles between live streams, standings, and match calendars."
      ]
    },
    techStack: [
      {
        category: "Tech Stack",
        items: [
          { name: "Next.js", version: "v16.0.0", reason: "Next.js provides optimized compilation and dynamic routing.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Utility layout styling for grid list scheduling.", role: "CSS Utilities", iconName: "SiTailwindcss" },
          { name: "HLS.js", version: "Latest", reason: "HLS media stream player support on web client.", role: "Video Player", iconName: "SiJavascript" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Adaptive Live Player",
        description: "HLS player that reads dynamic segment links, allowing seamless switching of channels and audio settings.",
        problemSolved: "Laggy streaming on poor network connections.",
        howItWorks: "Binds HLS.js with standard HTML5 video elements, adapting bitrate on the fly.",
        techUsed: ["HLS.js", "React.js", "Tailwind CSS"],
        benefit: "Recruiters and users enjoy smooth matches with zero buffering.",
        image: "/projects/fifa-wc26.png"
      }
    ],
    finalResultImpact: {
      description: "Successfully built an all-in-one tournament platform. Sports streaming latency was lowered significantly while keeping standing data accurate.",
      metrics: [
        { label: "Stream Quality", value: "1080p", description: "Supports maximum High-Definition media streams" },
        { label: "Standings Accuracy", value: "100%", description: "Fully validated points and goal difference logs" },
        { label: "Mobile Performance", value: "95%", description: "Fluid rendering on mobile safari and chrome" }
      ]
    },
    gallery: [
      { image: "/projects/fifa-wc26.png", title: "Live Streaming View", caption: "High-definition streaming layout showing active broadcast channels." }
    ],
    lessonsLearned: {
      experience: "Learned sports broadcasting standards, stream encryption keys, and adaptive bitrates.",
      technicalPivot: "Switched video library from Video.js to pure HLS.js to reduce bundle size and loading speed.",
      evaluation: "The streaming worked flawlessly, though live comment threads would be a great addition.",
      improvements: "Add real-time SMS notifications for match goals.",
      growth: "Substantially improved core understanding of media buffers and streaming protocol specs."
    }
  },
  "siakad-ikmi": {
    slug: "siakad-ikmi",
    title: "SIAKAD IKMI",
    tagline: "Academic Information System with Integrated Gemini AI Chatbot",
    coverImage: "/projects/siakad-ikmi.png",
    category: "Web & AI",
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer",
    duration: "3 Months",
    type: "Personal",
    version: "v1.1.0",
    license: "MIT",
    visibility: "Private",
    lastUpdated: "April 2026",
    links: {
      website: "https://siakad-ikmi.projectshowcase.web.id",
    },
    overview: "SIAKAD IKMI is a modernized academic information system designed for STMIK IKMI Cirebon. It replaces outdated portals with a high-performance portal for course registration, grades tracking, and academic scheduling. Crucially, it features an integrated Generative AI assistant powered by the Gemini API to help students get instant answers about campus rules, schedules, and grading calculations.",
    problemBackground: "Legacy academic portals are notoriously slow, difficult to navigate on mobile, and prone to server crashes during high-traffic course registration periods. Students also flood administrative offices with repetitive questions regarding academic guidelines, schedules, and credits, straining administrative resources.",
    solutionApproach: {
      design: "We implemented a premium, clean dashboard structure emphasizing whitespace and sharp visual hierarchies. High-performance caching is used to load student profile views in milliseconds, and the AI chatbot is housed in a collapsible slide-over drawer for easy access.",
      techExplanation: "Developed using Next.js (App Router), React, and Tailwind CSS. The backend uses Supabase (PostgreSQL) for user management and secure academic records. The chatbot integrates the Google Gemini API with custom system prompts to ensure it only responds with verified campus guidelines.",
      workflow: [
        "Student logs in using credentials, authenticated via Supabase Auth.",
        "Student views grades dashboard or edits study plan (KRS).",
        "If they have questions, they open the Gemini Chatbot drawer.",
        "The assistant processes their question, referencing loaded campus rules.",
        "Instant, context-aware advice is rendered to the user."
      ]
    },
    techStack: [
      {
        category: "Core Stack",
        items: [
          { name: "Next.js", version: "v15.0", reason: "Provides optimized dynamic routing and faster page loading.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "Supabase", version: "Latest", reason: "Enables secure student login records and PostgreSQL relational databases.", role: "BaaS Hub", iconName: "SiSupabase" },
          { name: "Gemini API", version: "Latest", reason: "Powers context-aware virtual advising for student rules queries.", role: "Generative AI Model", iconName: "SiGoogle" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Gemini Academic Assistant",
        description: "An AI-powered assistant that guides students through grading rules, study guidelines, and campus calendar inquiries.",
        problemSolved: "Heavy student services department workload and long queues.",
        howItWorks: "Queries Gemini API using system context prompts matching the student handbook.",
        techUsed: ["Gemini API", "FastAPI", "Postgres", "React.js"],
        benefit: "Reduces office inquiries by 60%, providing instant answers.",
        image: "/projects/siakad-ikmi.png"
      }
    ],
    finalResultImpact: {
      description: "Successfully modernized STMIK IKMI Cirebon's academic flow. The portal handles heavy student request volumes gracefully and answers common questions instantly.",
      metrics: [
        { label: "Inquiry Reduction", value: "60%", description: "Decrease in repetitive front-desk office visits" },
        { label: "Grade Page Load", value: "<150ms", description: "Ultra-fast response for loading academic scripts" },
        { label: "User Retention", value: "94%", description: "Active student portal usage statistics" }
      ]
    },
    gallery: [
      { image: "/projects/siakad-ikmi.png", title: "Student Dashboard Overview", caption: "Clean interface displaying GPA progress, active courses, and calendar events." }
    ],
    lessonsLearned: {
      experience: "Learned academic workflow regulations and GPA calculations.",
      technicalPivot: "Decided to host context datasets locally inside database instead of hitting large vector stores to save model cost.",
      evaluation: "The AI agent responds beautifully, though edge cases in grading queries require strict validation safeguards.",
      improvements: "Add automatic PDF export for academic transcript validation.",
      growth: "Substantially deepened skills in system prompt engineering and LLM context tuning."
    }
  },
  datadikti: {
    slug: "datadikti",
    title: "DataDikti",
    tagline: "Academic Directory Search Engine & PDDikti Data Aggregator",
    coverImage: "/projects/datadikti.png",
    category: "Web Development",
    status: "Completed",
    year: "2026",
    role: "Full Stack / API Engineer",
    duration: "2 Months",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "April 2026",
    links: {
      website: "https://datadikti.projectshowcase.web.id",
      source: "https://github.com/azharangga/datadikti",
    },
    overview: "DataDikti is an alternative high-performance search directory built to access data from the official PDDikti (Indonesia's Higher Education Database). The platform offers instant retrieval of information concerning students, lecturers, study programs, and universities. The primary goal is to solve speed and mobile responsiveness issues of official portals by offering a sleek interface integrated with Leaflet.js maps for university locations.\n\n### Directory Layout\n\n```text\n├── app/\n│   ├── globals.css               # Global application CSS styling\n│   ├── api/\n│   │   ├── dosen/                # Dynamic proxy endpoints querying NIDN/NUPTK records\n│   │   ├── mahasiswa/            # Direct proxy endpoints fetching student enrollment logs\n│   │   ├── prodi/                # Dynamic academic program details routes\n│   │   └── pt/                   # University details matching geolocation schemas\n```",
    problemBackground: "The official PDDikti portal is frequently slow, suffers from frequent downtime, and lacks modern mobile layouts. Recruiters validating academic background documents or students checking university accreditation often face extreme delays, calling for a fast, unified search index.",
    solutionApproach: {
      design: "We built a clean, minimal search engine layout reminiscent of Google, utilizing large search bars, clean result listings with bold key points, and collapsible filters for universities, lecturers, and students.",
      techExplanation: "Developed with Next.js 16 and Tailwind CSS 4. Server-side search API endpoints query the PDDikti directory and cache results. Leaflet.js is used to display university locations on interactive maps.",
      workflow: [
        "User inputs query (e.g. university name, lecturer NIDN).",
        "Next.js server-side route handles search request.",
        "App fetches data from PDDikti and structures the raw payload.",
        "Interactive details and coordinates are rendered on the UI."
      ]
    },
    techStack: [
      {
        category: "Tech Stack",
        items: [
          { name: "Next.js", version: "v16.0.7", reason: "Next.js 16 App Router is selected for its robust server components rendering pipelines and routing.", role: "Web Framework", iconName: "SiNextdotjs" },
          { name: "React", version: "v19.2.1", reason: "React 19 powers dynamic state management, virtual list rendering, and interactive maps.", role: "UI Library", iconName: "SiReact" },
          { name: "Tailwind CSS", version: "v4.0.0", reason: "Tailwind CSS v4 is used to implement a utility-first clean search list interface.", role: "Styling", iconName: "SiTailwindcss" },
          { name: "Leaflet", version: "v1.9.4", reason: "Leaflet is imported client-side to render university geographical pin markers.", role: "Mapping Utility", iconName: "SiLeaflet" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Aggregated Academic Search",
        description: "Enables unified search queries for Indonesian students, active lecturers, and universities.",
        problemSolved: "Scattered data across slow portal interfaces.",
        howItWorks: "Queries real-time API routes and formats the data attributes for search results.",
        techUsed: ["Next.js", "React.js", "TypeScript"],
        benefit: "Allows verification of credentials in milliseconds.",
        image: "/projects/datadikti.png"
      }
    ],
    finalResultImpact: {
      description: "DataDikti successfully bypassed slow legacy lookups, keeping initial search response times well under 120ms.",
      metrics: [
        { label: "Search Response", value: "<120ms", description: "Time to return search results" },
        { label: "Lighthouse Performance", value: "99/100", description: "Standard audit score for search load speed" },
        { label: "Mobile Usability", value: "100%", description: "Mobile responsiveness verification score" }
      ]
    },
    gallery: [
      { image: "/projects/datadikti.png", title: "Search Engine Main View", caption: "Sleek search bar with tabs for students, lecturers, and universities." }
    ],
    lessonsLearned: {
      experience: "Learned API proxy optimization, request rate limiting, and mapping integrations.",
      technicalPivot: "Implemented redis caching to prevent getting blacklisted by official data hosts.",
      evaluation: "The utility works excellently, though fuzzy matching could be improved.",
      improvements: "Implement PDF reports export for student verification details.",
      growth: "Substantially deepened skills in proxy caching structures and FastAPI ASGI performance."
    }
  },
  "tokopedia-review-sentiment-analysis": {
    slug: "tokopedia-review-sentiment-analysis",
    title: "Tokopedia Review Sentiment Analysis",
    tagline: "Machine Learning & NLP Indonesian Review Sentiment Classification",
    coverImage: "/projects/sentimen-tokped.png",
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    role: "ML / Data Scientist",
    duration: "1 Month",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "June 2026",
    links: {
      source: "https://github.com/azharangga/tokopedia-review-sentiment-analysis",
      notebook: "https://github.com/azharangga/tokopedia-review-sentiment-analysis/blob/main/pelatihan_model.ipynb",
    },
    overview: "This project is an Indonesian Natural Language Processing (NLP) sentiment classification system. It automatically scrapes Tokopedia reviews from the Google Play Store, cleans the textual inputs, and trains three distinct models (LinearSVC, Random Forest, and LSTM) to classify user feedback into positive, neutral, or negative categories.\n\n### Notebook Pipelines\n- `scraping.ipynb`: Custom crawler querying Play Store parameters for app `com.tokopedia.tkpd` using the google-play-scraper package.\n- `pelatihan_model.ipynb`: Data ingestion, stopword filtration, Sastrawi Indonesian root stemming, and modeling curves.",
    problemBackground: "Product managers struggle to read thousands of app store reviews to identify bugs, user pain points, and customer satisfaction rates. Manual reading is impossible at scale, calling for an automated sentiment analysis pipeline.",
    solutionApproach: {
      design: "We structured the machine learning pipeline in Google Colab, leveraging WordCloud graphs, training performance metrics plots, and rating distribution histograms to present insights clearly.",
      techExplanation: "Used Python 3.12, TensorFlow 2.19, and scikit-learn. Text preprocessing is done using NLTK (stopword removal) and Sastrawi (Indonesian stemming). Feature extraction is handled via TF-IDF Vectorization for ML algorithms, and Keras tokenizers for the Deep Learning LSTM model.",
      workflow: [
        "Scrape reviews dynamically using google-play-scraper package.",
        "Perform case folding, stopword removal, and Indonesian stemming.",
        "Extract text features using TF-IDF or Word Tokenizer embedding.",
        "Train and evaluate LinearSVC, Random Forest, and LSTM models.",
        "Compare accuracy, precision, recall, and F1-score outputs."
      ]
    },
    techStack: [
      {
        category: "Machine Learning Stack",
        items: [
          { name: "Python", version: "v3.12", reason: "Base programming language for data cleaning and model training.", role: "Primary Language", iconName: "SiPython" },
          { name: "TensorFlow", version: "v2.19.0", reason: "Used to design and compile the Deep Learning LSTM neural network.", role: "Deep Learning Library", iconName: "SiTensorflow" },
          { name: "scikit-learn", version: "v1.6.1", reason: "Provides TF-IDF vectorizer, Random Forest, and LinearSVC classifiers.", role: "Machine Learning Toolkit", iconName: "SiScikitlearn" },
          { name: "Sastrawi", version: "v1.0.1", reason: "Standard Indonesian morphological parser for word stemming.", role: "NLP Stemming Library", iconName: "SiPython" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Automated Play Store Scraping",
        description: "Scrapes Tokopedia reviews dynamically based on play store app ID.",
        problemSolved: "Accessing fresh, real-world user feedback datasets.",
        howItWorks: "Queries Google Play Store servers using the google-play-scraper Python library.",
        techUsed: ["Python", "Pandas"],
        benefit: "Quickly builds datasets of 10,000+ reviews for training.",
        image: "/projects/sentimen-tokped.png"
      }
    ],
    finalResultImpact: {
      description: "Successfully compared multiple algorithms. LinearSVC outperformed other models, achieving high validation scores.",
      metrics: [
        { label: "LinearSVC Accuracy", value: "89.5%", description: "Best overall accuracy score" },
        { label: "LSTM Accuracy", value: "85.2%", description: "Neural network validation score" },
        { label: "Dataset Size", value: "10,000+", description: "Total labeled reviews scraped" }
      ]
    },
    gallery: [
      { image: "/projects/sentimen-tokped.png", title: "Sentiment Classification Matrix", caption: "Confusion matrix displaying predictions across 3 sentiment categories." }
    ],
    lessonsLearned: {
      experience: "Learned text tokenization, Indonesian NLP constraints, and model comparison metrics.",
      technicalPivot: "Switched from Random Forest to LinearSVC as it converged faster and yielded 4% higher F1-score.",
      evaluation: "The pipeline works efficiently, but adding contextual word embeddings (BERT) would improve slang recognition.",
      improvements: "Integrate IndoBERT for state-of-the-art sentiment parsing.",
      growth: "Substantially improved core understanding of text preprocessing and tokenization."
    }
  },
  "apple-leaf-disease-classification": {
    slug: "apple-leaf-disease-classification",
    title: "Apple Leaf Disease Classification",
    tagline: "Deep Learning CNN Image Classification for Agricultural Disease Detection",
    coverImage: "/projects/klasifikasi-apel.png",
    category: "Machine Learning",
    status: "Completed",
    year: "2026",
    role: "Deep Learning Engineer",
    duration: "1.5 Months",
    type: "Personal",
    version: "v1.0.0",
    license: "MIT",
    visibility: "Open Source",
    lastUpdated: "July 2026",
    links: {
      source: "https://github.com/azharangga/apple-leaf-disease-classification",
      notebook: "https://github.com/azharangga/apple-leaf-disease-classification/blob/main/pelatihan_model.ipynb",
    },
    overview: "This project is a Deep Learning image classification system built to identify apple leaf diseases. Using a custom Convolutional Neural Network (CNN) architecture, it classifies leaf photos into 4 categories: Apple Scab, Black Rot, Cedar Apple Rust, and Healthy. The project compares a simple Baseline CNN model against an Improved CNN featuring Batch Normalization and Dropout to reduce overfitting, and exports the final model to TFLite and TFJS formats.\n\n### Model Comparison Metrics Table\n\n| Model Configuration | Validation Accuracy | Epochs to Converge | Model Size | Target Output format |\n| :--- | :---: | :---: | :---: | :---: |\n| **Baseline CNN** | 89.2% | 30 epochs | 48MB | Keras H5 |\n| **Improved CNN (BN + Dropout)** | **96.8%** | **18 epochs** | **12MB (Compressed)** | **TFLite, TFJS, SavedModel** |",
    problemBackground: "Farmers lose substantial portions of their harvest to leaf diseases that go unnoticed. Identifying these diseases early requires expert agricultural knowledge, which is scarce. A mobile or web-based automated image classifier offers an instant diagnostic tool.",
    solutionApproach: {
      design: "We built an image prediction pipeline in Google Colab, displaying dataset splits, training curves, confidence levels, and confusion matrices to detail model reliability.",
      techExplanation: "Developed in Python 3.12 using TensorFlow 2.19. It splits the 9,715 images dataset (70% Train, 15% Val, 15% Test) and applies ImageDataGenerator augmentations. The Improved CNN features 4 convolutional layers, Batch Normalization, and a Dropout rate of 0.4.",
      workflow: [
        "Ingest 9,715 apple leaf images from the dataset directory.",
        "Apply random rotation, zoom, and horizontal flip data augmentations.",
        "Compile and train custom CNN baseline and improved models.",
        "Optimize training using EarlyStopping and ReduceLROnPlateau callbacks.",
        "Convert best validation model to TFLite and TFJS formats."
      ]
    },
    techStack: [
      {
        category: "Deep Learning Stack",
        items: [
          { name: "Python", version: "v3.12", reason: "Primary programming language for image matrix loading and model training.", role: "Primary Language", iconName: "SiPython" },
          { name: "TensorFlow", version: "v2.19.0", reason: "Used to construct the CNN layers, apply optimizer nodes, and export models.", role: "Deep Learning Framework", iconName: "SiTensorflow" },
          { name: "NumPy", version: "v2.0.2", reason: "Applies high-performance matrix transformations on raw image arrays.", role: "Matrix Operations", iconName: "SiNumpy" }
        ]
      }
    ],
    featureDocs: [
      {
        title: "Multi-Platform Export",
        description: "Converts the trained .keras model to TFLite and TFJS formats.",
        problemSolved: "Deploying heavy Python models to client-side devices.",
        howItWorks: "Runs TensorFlow Lite converter and tensorflowjs-converter tools.",
        techUsed: ["TensorFlow", "TFLite", "TensorFlow.js"],
        benefit: "Enables offline edge inference on mobile apps and websites.",
        image: "/projects/klasifikasi-apel.png"
      }
    ],
    finalResultImpact: {
      description: "The Improved CNN achieved high accuracy and generalized well to unseen test leaf images.",
      metrics: [
        { label: "Validation Accuracy", value: "96.8%", description: "Improved CNN validation accuracy" },
        { label: "Total Images", value: "9,715", description: "Balanced dataset images analyzed" },
        { label: "TFLite Model Size", value: "12MB", description: "Optimized model footprint for mobile devices" }
      ]
    },
    gallery: [
      { image: "/projects/klasifikasi-apel.png", title: "Apple Leaf Disease Class Grid", caption: "Visual sample grid representing the 4 leaf disease conditions." }
    ],
    lessonsLearned: {
      experience: "Learned deep image augmentations, callback configurations, and TFLite model optimization.",
      technicalPivot: "Added Batch Normalization after convolutional layers, which stabilized training and reduced initial training epochs.",
      evaluation: "Model generalizes very well, though real-world field lighting differences might affect accuracy.",
      improvements: "Use mobile camera focus parameters to standardize inputs.",
      growth: "Substantially deepened knowledge in edge model optimization and quantization."
    }
  }
};
