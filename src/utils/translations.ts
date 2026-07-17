import { AITool, Category } from '../types';

export const UI_TRANSLATIONS = {
  ar: {
    logo_title: "AI Tools Hub",
    logo_sub: "دليل الذكاء الاصطناعي الأكبر والأشمل لعام 2026",
    search_placeholder: "ابحث عن أداة ذكاء اصطناعي...",
    nav_home: "الرئيسية",
    nav_directory: "دليل الأدوات",
    nav_compare: "المقارنة الحية",
    nav_best_month: "أفضل أدوات الشهر",
    nav_blog: "المدونة",
    nav_favorites: "المفضلة",
    nav_about: "من نحن",
    nav_reviewers: "المراجعون",
    nav_contact: "اتصل بنا",
    nav_privacy: "سياسة الخصوصية",
    nav_terms: "الشروط والأحكام",
    filter_all_prices: "كل الأسعار",
    filter_free: "مجاني",
    filter_paid: "مدفوع",
    filter_freemium: "فريميوم",
    sort_by_label: "ترتيب حسب:",
    sort_popular: "الأكثر شعبية",
    sort_rating: "التقييم",
    sort_alpha: "أبجدي",
    alert_text: "🔥 جديد: تم تحديث المقارنات الذكية وإضافة أدوات توليد الفيديوهات لعام 2026!",
    sidebar_categories: "التصنيفات",
    pros_label: "الإيجابيات",
    cons_label: "السلبيات",
    features_label: "المميزات الرئيسية",
    visit_website: "زيارة الموقع",
    add_to_compare: "إضافة للمقارنة",
    remove_from_compare: "حذف من المقارنة",
    category_label: "التصنيف",
    price_label: "السعر",
    rating_label: "التقييم",
    similar_tools: "أدوات مشابهة",
    share_tool: "شارك الأداة",
    your_rating: "تقييمك للأداة",
    success_rating: "شكراً لتقييمك! تم حفظ التقييم بنجاح.",
    no_favorites_title: "لا توجد أدوات في المفضلة بعد",
    no_favorites_desc: "تصفح دليل الأدوات واضغط على أيقونة القلب لحفظ أدواتك المفضلة هنا.",
    about_title: "من نحن",
    about_desc: "AI Tools Hub هو دليل عربي عالمي ومحايد يهدف إلى تمكين الأفراد والشركات من تصفح وفحص واختيار أفضل أدوات الذكاء الاصطناعي لرفع الكفاءة والإنتاجية.",
    about_mission: "رسالتنا",
    about_mission_text: "إثراء المحتوى التقني وتقديم أدلة احترافية ومعايير تقييم صارمة ومراجعات موثوقة لمواقع وتطبيقات الذكاء الاصطناعي.",
    about_vision: "رؤيتنا",
    about_vision_text: "أن نكون المرجع الأول والموثوق لكافة المهتمين بتقنيات الذكاء الاصطناعي في الشرق الأوسط والعالم.",
    about_why_us: "لماذا نحن؟",
    about_why_us_text: "جميع مراجعاتنا وتقييماتنا تتم على أيدي مهندسين وخبراء متخصصين وفق معايير الجودة والدقة والموثوقية العالية (E-E-A-T) الصارمة.",
    contact_title: "اتصل بنا",
    contact_desc: "لديك اقتراح، استفسار، أو ترغب في الإعلان معنا؟ أرسل لنا رسالة وسنقوم بالرد عليك في أقرب وقت ممكن.",
    contact_success: "تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.",
    contact_loading: "جاري الإرسال...",
    contact_error: "حدث خطأ ما، يرجى المحاولة لاحقاً.",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_subject: "الموضوع",
    contact_message: "نص الرسالة",
    contact_suggest_tool: "أرغب في اقتراح أداة ذكاء اصطناعي جديدة لإضافتها للدليل",
    contact_send: "إرسال الرسالة",
    reviewers_title: "فريق المراجعين والخبراء",
    reviewers_desc: "نحن نلتزم بأعلى معايير المصداقية والموثوقية (E-E-A-T) في مراجعاتنا وتقييماتنا. يتم فحص كل أداة بشكل يدوي وموضوعي من قبل فريق المهندسين والخبراء لدينا.",
    reviewer_1_name: "م. سليم العتيبي",
    reviewer_1_title: "مهندس ذكاء اصطناعي أول ومطور حلول سحابية",
    reviewer_1_bio: "خبرة 10 سنوات في تصميم وتطوير نماذج تعلم الآلة وحلول الذكاء الاصطناعي للمؤسسات والشركات التقنية.",
    reviewer_2_name: "د. أميرة منصور",
    reviewer_2_title: "مستشارة وباحثة في معالجة اللغة الطبيعية والذكاء الاصطناعي",
    reviewer_2_bio: "أستاذة جامعية وباحثة رائدة في مجالات فهم النصوص والترجمة الآلية بالذكاء الاصطناعي، ولديها عدة أبحاث علمية منشورة عالمياً.",
    privacy_title: "سياسة الخصوصية",
    terms_title: "شروط وأحكام الاستخدام",
    featured_tools_home: "أدوات ممتازة وموصى بها",
    featured_tools_sub: "نخبة من أقوى وأحدث التقنيات المختارة بعناية لرفع مستوى أعمالك وإبداعك.",
    latest_articles_home: "آخر المقالات والأدلة التعليمية",
    latest_articles_sub: "تابع أحدث الشروحات والمقارنات المهنية الحية للبقاء في صدارة الثورة الرقمية.",
    view_all_tools: "تصفح كافة الأدوات",
    view_all_articles: "تصفح كافة المقالات",
    read_more: "اقرأ المقال كاملاً",
    read_time: "وقت القراءة",
    minutes: "دقائق",
    back_to_blog: "العودة للمدونة",
    close: "إغلاق",
    no_results: "لم يتم العثور على نتائج تطابق بحثك",
    no_results_sub: "جرب استخدام كلمات مفتاحية أخرى أو تغيير الفلاتر المحددة.",
    popular_badge: "شائع",
    best_of_month_badge: "الأفضل هذا الشهر",
    review_count: "تقييم",
    copied_link: "تم نسخ الرابط بنجاح!",
    toc_title: "فهرس المحتوى",
    compare_title: "قارن بين أدوات الذكاء الاصطناعي",
    compare_subtitle: "قارن بدقة بين أدوات الذكاء الاصطناعي في نفس الوقت. وازن بين الأسعار، المميزات، الإيجابيات، والسلبيات لاتخاذ القرار المناسب.",
    compare_select_placeholder: "اختر أداة للمقارنة...",
    compare_add_btn: "إضافة أداة",
    compare_max_alert: "يمكنك مقارنة 3 أدوات كحد أقصى في نفس الوقت.",
    compare_empty_state: "الرجاء اختيار أداة واحدة على الأقل لبدء المقارنة السريعة.",
    similar_none: "لا توجد أدوات مشابهة مضافة حالياً.",
    ad_label: "إعـلان مـمـول / SPONSORED AD",
    pricing_model: "نظام الأسعار:",
    financial_details: "التفاصيل المالية:",
    overall_rating: "تقييم الأداة العام:",
    voters_count: "عدد المصوتين:",
    vote: "تصويت",
    visit_tool_website: "زيارة الموقع الرسمي للأداة",
    remove_favorites: "إزالة من مفضلتي",
    add_favorites: "إضافة لأدواتي المفضلة",
    overview_review: "نظرة عامة ومراجعة شاملة",
    functions_features: "أبرز الوظائف والمميزات",
    filters_categories: "فلاتر وأقسام البحث",
    categories_specialties: "الأقسام والـتخصصات",
    all_tools: "كل الأدوات",
    why_choose_it: "لماذا اخترناها كأفضل أداة؟",
    best_ai_tools_month: "أفضل أدوات الذكاء الاصطناعي لهذا الشهر 🏆",
    best_ai_tools_month_desc: "قائمة حصرية منسقة ومحدثة شهرياً بأفضل الأدوات الذكية التي أثبتت جدارتها وحققت قفزات نوعية في مجالاتها لزيادة الكفاءة والأداء المهني.",
    rank: "المركز",
    key_specifications: "أبرز مواصفاتها:",
    view_review_cons: "عرض المراجعة والعيوب بالتفصيل",
    rating_stars_desc: "انقر لتحديد عدد النجوم المفضلة لديك للأداة.",
    rating_success_desc: "شكراً جزيلاً لتقييمك ومشاركتك الفعالة! تم دمج تقييمك محلياً بنجاح وتحديث التصويت.",
    similar_recommended: "أدوات مشابهة موصى بها:",
    rate_tool_box: "قم بتقييم هذه الأداة والمشاركة برأيك:",
    rated_stars_num: "لقد قمت بتقييم الأداة بـ",
    rated_stars_suffix: "نجوم ✓"
  },
  en: {
    logo_title: "AI Tools Hub",
    logo_sub: "The Largest & Most Comprehensive AI Directory of 2026",
    search_placeholder: "Search for an AI tool...",
    nav_home: "Home",
    nav_directory: "Directory",
    nav_compare: "Live Compare",
    nav_best_month: "Best of Month",
    nav_blog: "Blog",
    nav_favorites: "Favorites",
    nav_about: "About Us",
    nav_reviewers: "Reviewers",
    nav_contact: "Contact Us",
    nav_privacy: "Privacy Policy",
    nav_terms: "Terms of Use",
    filter_all_prices: "All Prices",
    filter_free: "Free",
    filter_paid: "Paid",
    filter_freemium: "Freemium",
    sort_by_label: "Sort By:",
    sort_popular: "Most Popular",
    sort_rating: "Rating",
    sort_alpha: "Alphabetical",
    alert_text: "🔥 New: Smart comparisons updated and video generation tools added for 2026!",
    sidebar_categories: "Categories",
    pros_label: "Pros",
    cons_label: "Cons",
    features_label: "Key Features",
    visit_website: "Visit Website",
    add_to_compare: "Add to Compare",
    remove_from_compare: "Remove Compare",
    category_label: "Category",
    price_label: "Price",
    rating_label: "Rating",
    similar_tools: "Similar Tools",
    share_tool: "Share Tool",
    your_rating: "Your Rating",
    success_rating: "Thank you! Your rating has been saved successfully.",
    no_favorites_title: "No favorite tools yet",
    no_favorites_desc: "Browse the directory and click the heart icon to save your favorite tools here.",
    about_title: "About Us",
    about_desc: "AI Tools Hub is an independent global directory designed to empower individuals and businesses to browse, analyze, and select the best AI tools to boost efficiency and productivity.",
    about_mission: "Our Mission",
    about_mission_text: "To enrich tech content and deliver professional guides, rigorous evaluation criteria, and honest reviews for AI websites and applications.",
    about_vision: "Our Vision",
    about_vision_text: "To be the ultimate and most trusted reference for AI technologies globally.",
    about_why_us: "Why Choose Us?",
    about_why_us_text: "All our reviews and ratings are conducted by specialized engineers and experts in compliance with strict high-quality credibility guidelines (E-E-A-T).",
    contact_title: "Contact Us",
    contact_desc: "Have a suggestion, question, or want to advertise with us? Send us a message and we'll reply as soon as possible.",
    contact_success: "Your message has been sent successfully! We will get back to you shortly.",
    contact_loading: "Sending...",
    contact_error: "Something went wrong, please try again later.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_subject: "Subject",
    contact_message: "Your Message",
    contact_suggest_tool: "I want to suggest a new AI tool to be added to the directory",
    contact_send: "Send Message",
    reviewers_title: "Our Expert Reviewers",
    reviewers_desc: "We adhere to the highest standards of credibility and trust (E-E-A-T). Every tool is manually and objectively analyzed by our team of expert engineers.",
    reviewer_1_name: "Eng. Saleem Al-Otaibi",
    reviewer_1_title: "Senior AI Engineer & Cloud Solutions Architect",
    reviewer_1_bio: "10+ years of experience in designing and developing machine learning models and enterprise AI solutions for tech companies.",
    reviewer_2_name: "Dr. Amira Mansour",
    reviewer_2_title: "NLP & AI Consultant and Researcher",
    reviewer_2_bio: "University professor and leading researcher in Natural Language Processing and AI-powered machine translation, with multiple published papers.",
    privacy_title: "Privacy Policy",
    terms_title: "Terms of Service",
    featured_tools_home: "Featured & Recommended Tools",
    featured_tools_sub: "A selected elite of the most powerful and latest technologies carefully chosen to boost your work and creativity.",
    latest_articles_home: "Latest Articles & Educational Guides",
    latest_articles_sub: "Follow our latest technical tutorials and live comparisons to stay at the forefront of the digital revolution.",
    view_all_tools: "Browse All Tools",
    view_all_articles: "Browse All Articles",
    read_more: "Read Full Article",
    read_time: "Read Time",
    minutes: "mins",
    back_to_blog: "Back to Blog",
    close: "Close",
    no_results: "No results found matching your search",
    no_results_sub: "Try using other keywords or clearing the active filters.",
    popular_badge: "Popular",
    best_of_month_badge: "Best of Month",
    review_count: "reviews",
    copied_link: "Link copied successfully!",
    toc_title: "Table of Contents",
    compare_title: "Compare AI Tools",
    compare_subtitle: "Compare up to 3 AI tools side-by-side. Analyze pricing, features, pros, and cons to make the best decision.",
    compare_select_placeholder: "Choose a tool to compare...",
    compare_add_btn: "Add Tool",
    compare_max_alert: "You can compare up to 3 tools at the same time.",
    compare_empty_state: "Please select at least one tool to start the comparison.",
    similar_none: "No similar tools found.",
    ad_label: "SPONSORED AD",
    pricing_model: "Pricing Model:",
    financial_details: "Pricing Details:",
    overall_rating: "Overall Rating:",
    voters_count: "Reviews Count:",
    vote: "votes",
    visit_tool_website: "Visit Official Website",
    remove_favorites: "Remove from Favorites",
    add_favorites: "Add to Favorites",
    overview_review: "Overview & Full Review",
    functions_features: "Key Features & Functions",
    filters_categories: "Filters & Categories",
    categories_specialties: "Categories & Specialties",
    all_tools: "All Tools",
    why_choose_it: "Why We Chose It?",
    best_ai_tools_month: "Best AI Tools of the Month 🏆",
    best_ai_tools_month_desc: "A monthly curated, exclusive list of top smart tools that have proven their mettle and achieved breakthroughs to drive efficiency and professional performance.",
    rank: "Rank",
    key_specifications: "Key Specifications:",
    view_review_cons: "View Full Review & Cons",
    rating_stars_desc: "Click to select your rating for this tool.",
    rating_success_desc: "Thank you so much for your rating! Your vote has been successfully updated.",
    similar_recommended: "Recommended Similar Tools:",
    rate_tool_box: "Rate this tool & share your feedback:",
    rated_stars_num: "You rated this tool ",
    rated_stars_suffix: " stars ✓"
  }
};

export const CATEGORY_TRANSLATIONS: Record<string, { name: string; description: string }> = {
  writing: {
    name: "Writing & Content Creation",
    description: "Content generation, article writing, email crafting, and copy editing."
  },
  image: {
    name: "AI Image Generation",
    description: "Text-to-image conversion, photo editing, digital painting, and artistic design."
  },
  video: {
    name: "AI Video Creation",
    description: "Text-to-video tools, video editing, avatars, and cinematic rendering."
  },
  audio: {
    name: "Audio, Voice & Music",
    description: "Music generation, realistic text-to-speech, voice editing, and noise removal."
  },
  coding: {
    name: "Coding & Development",
    description: "Code generation, debugging, technical explanations, and autocompletion."
  },
  marketing: {
    name: "Marketing & SEO",
    description: "Data analytics, social media scheduling, SEO optimization, and ad copy."
  },
  education: {
    name: "Education & Research",
    description: "Summarizing books, research helpers, and generating mind maps."
  },
  productivity: {
    name: "Productivity & Workflow",
    description: "Smart note-taking, workflow automation, calendars, and team collaboration."
  }
};

export const TOOL_TRANSLATIONS: Record<string, Partial<AITool>> = {
  chatgpt: {
    shortDescription: "The leading AI assistant from OpenAI for content generation, coding, and brainstorming.",
    longDescription: "The world's most famous interactive AI for conversational search, text generation, translation, coding, and dynamic assistance across professional and academic domains.",
    features: ["Conversational dialogue and text generation", "Instant coding, debugging, and translations", "Advanced data analysis and image generation via DALL-E 3"],
    pros: ["Excellent multilingual understanding", "Deep context holding capabilities", "Vast ecosystem of custom GPTs"],
    cons: ["Occasional hallucinations or inaccurate statements", "Free tier can have rate limits during peak hours"],
    priceDetail: "Free / $20 monthly for Plus"
  },
  claude: {
    shortDescription: "Anthropic's advanced AI assistant praised for natural writing, logical analysis, and safety.",
    longDescription: "An incredibly capable large language model that excels at high-quality writing, analytical reasoning, and reading massive documents with a human-like tone.",
    features: ["Analysis of large PDFs and documents", "Highly natural and creative essay/article writing", "Excellent coding and technical explanations"],
    pros: ["Human-like, clean, and elegant writing style", "Massive context window to upload complete books"],
    cons: ["Low message limits on the free tier", "Does not natively generate images"],
    priceDetail: "Free / $20 monthly for Pro"
  },
  gemini: {
    shortDescription: "Google's advanced multimodal model integrated with search and Workspace.",
    longDescription: "Google's powerful AI assistant with live internet access and deep integration with Gmail, Google Docs, Drive, and real-time Search.",
    features: ["Live web search for real-time information", "Seamless integration with Google Workspace", "Multimodal inputs (text, images, files, and voice)"],
    pros: ["Perfect sync with your Google account", "Fast and accurate real-time queries", "Huge 2M token context on Advanced tier"],
    cons: ["Slightly less creative for long-form writing than Claude", "Interface can sometimes load slowly"],
    priceDetail: "Free / $20 monthly for Advanced"
  },
  midjourney: {
    shortDescription: "The gold standard for generating highly artistic, photorealistic, and cinematic images.",
    longDescription: "A legendary generative AI tool that produces stunning digital artwork, photorealistic photos, and cinematic concept designs from simple textual prompts.",
    features: ["High-fidelity photorealistic rendering", "Vast stylistic controls and aspect ratio tuning", "Strong community and style referencing"],
    pros: ["Unbeatable artistic quality and detailing", "Highly responsive to aesthetic prompts"],
    cons: ["No free tier available", "Requires Discord to use, which may be complex for beginners"],
    priceDetail: "Starts from $10/month"
  },
  dalle3: {
    shortDescription: "OpenAI's image generator, fully integrated with ChatGPT for unparalleled prompt understanding.",
    longDescription: "The latest image generation model from OpenAI, built into ChatGPT. It understands subtle nuances in prompts and renders clean text within images.",
    features: ["Exceptional rendering of complex prompts", "Correct text spelling inside generated images", "Direct editing within the ChatGPT interface"],
    pros: ["Included with ChatGPT Plus", "Extremely easy to prompt using natural conversation", "Handles human hands and texts well"],
    cons: ["Strict safety filters on creative content", "Slightly less 'artistic' or 'cinematic' than Midjourney"],
    priceDetail: "Included in ChatGPT Plus ($20/mo) or free on Bing"
  },
  stablediffusion: {
    shortDescription: "Open-source, highly customizable image generator for developers and professional artists.",
    longDescription: "A powerful, open-source text-to-image model that can be run locally or via API, giving creators total control over generation parameters and structures.",
    features: ["Can be run completely locally on your hardware", "Incredibly advanced extensions like ControlNet and IP-Adapter", "Unrestricted fine-tuning with custom models (LoRAs)"],
    pros: ["100% free if run locally", "Infinite customization and no strict censorship filters", "Large community-built models library (Civitai)"],
    cons: ["Steep learning curve", "Requires powerful dedicated GPU hardware"],
    priceDetail: "Free open-source / Cloud APIs vary"
  },
  notion: {
    shortDescription: "Smart assistant embedded directly inside your Notion workspace for writing, summarizing, and task management.",
    longDescription: "An integrated suite of AI tools within Notion, allowing users to automatically summarize notes, write drafts, extract action items, and query databases.",
    features: ["Summarize full pages and meeting notes instantly", "Rewrite text with customizable tone and fix grammar", "Ask questions directly to your entire Notion workspace"],
    pros: ["Seamless workflow without copying/pasting", "Speeds up document and knowledge management"],
    cons: ["Not free (requires paid add-on)", "Can struggle with massive databases or tables"],
    priceDetail: "Free trial / $8 monthly add-on"
  },
  elevenlabs: {
    shortDescription: "The world's most realistic AI text-to-speech, voice cloning, and audio generator.",
    longDescription: "The leading generative voice platform, producing ultra-realistic speech, voice clones, sound effects, and multilingual dubbing.",
    features: ["Hyper-realistic text-to-speech with emotional inflections", "High-fidelity instant and professional voice cloning", "Multilingual voice dubbing that retains the original speaker's voice"],
    pros: ["Best-in-class natural sound and pacing", "Generous free tier with plenty of voice options", "Excellent Arabic text-to-speech accuracy"],
    cons: ["Voice cloning can be misused", "Advanced voice clones require paid subscription"],
    priceDetail: "Free / Paid plans start at $5/month"
  },
  suno: {
    shortDescription: "Create full, radio-ready songs with lyrics, vocals, and instrumentation from simple text prompts.",
    longDescription: "An incredible generative music platform that lets anyone compose high-quality songs in any genre, complete with custom vocals, lyrics, and instrumentals.",
    features: ["Generate vocal and instrumental songs in seconds", "Write custom lyrics or let AI generate them", "Support for various music genres, from pop to metal and traditional Arabic"],
    pros: ["Unbelievably realistic vocals and compositions", "Excellent support for various languages including Arabic", "Easy and highly addictive to use"],
    cons: ["Low audio resolution on free plans", "Can sometimes produce metallic compression artifacts"],
    priceDetail: "Free (50 credits/day) / Pro from $8/mo"
  },
  cursor: {
    shortDescription: "An AI-first code editor fork of VS Code designed for lightning-fast development.",
    longDescription: "A cutting-edge code editor based on VS Code that embeds powerful AI assistants like Claude 3.5 Sonnet to write, edit, and understand codebase structures instantly.",
    features: ["Full codebase context chat (Ctrl+K and Ctrl+L)", "Composer for making multi-file edits simultaneously", "Auto-debugging from terminal errors"],
    pros: ["Familiar VS Code interface and support for all extensions", "Massively boosts programming speed", "Exceptional multi-file code editing capabilities"],
    cons: ["Paid plan is required for heavy usage", "Requires internet connection for most AI features"],
    priceDetail: "Free tier / Pro tier $20/month"
  },
  copilot: {
    shortDescription: "The most famous AI coding companion integrated inside development environments to complete and explain code.",
    longDescription: "A revolutionary developer assistant from Microsoft and GitHub, built into popular editors like VS Code to write full functions and complete code from simple comments.",
    features: [
      "Smart autocomplete for code lines and functions based on your programming context",
      "Integrated coding chat to instantly explain code and resolve programming errors"
    ],
    pros: [
      "Boosts developer coding productivity and speed by over 50%",
      "Deeply understands project context to suggest fast, accurate solutions"
    ],
    cons: [
      "No permanent free tier available (limited free trial then paid subscription)",
      "Can occasionally suggest code containing security vulnerabilities requiring review"
    ],
    priceDetail: "Starts from $10/month"
  },
  heygen: {
    shortDescription: "Generate professional studio-quality video presentations with AI avatars and voice cloning.",
    longDescription: "An advanced AI video generation platform designed for businesses, educators, and content creators to build talking avatar videos from script in minutes.",
    features: ["100+ highly realistic video avatars", "Text-to-speech with natural lip-syncing", "Translate videos into multiple languages with perfect voice cloning"],
    pros: ["Incredibly realistic avatars and mouth movements", "High-quality video templates and assets", "Massively cuts down video production costs"],
    cons: ["Can be very expensive for small creators", "No real-time editing features"],
    priceDetail: "Free trial / Paid plans from $24/month"
  },
  sora: {
    shortDescription: "OpenAI's text-to-video model producing hyper-realistic scenes up to 60 seconds.",
    longDescription: "A revolutionary model from OpenAI that generates complex, realistic cinematic clips from textual descriptions, adhering closely to physical world physics.",
    features: ["Cinematic video generation up to 60 seconds", "Maintains deep context and characters styling", "Dynamic camera movements and lighting"],
    pros: ["Exceptional photorealism and details", "Fascinating understanding of 3D physical spaces"],
    cons: ["Currently in limited-access preview", "Sometimes mixes up left and right or physical causes"],
    priceDetail: "Developer Access / Premium"
  },
  runway: {
    shortDescription: "A leading creative suite for generative video tools and video-to-video style transfers.",
    longDescription: "Creative suite with Gen-2 and Gen-3 models generating breathtaking videos from text, images, or raw clips with professional-level custom controls.",
    features: ["Advanced text-to-video and image-to-video generation", "Video green screen and background object removal", "Brush-guided selective motion tracking"],
    pros: ["Highly creative and fast cinematic rendering", "Massive array of secondary video tools"],
    cons: ["Free tier contains watermarks", "High subscription cost for small teams"],
    priceDetail: "Free trial / Starts from $12/month"
  },
  pika: {
    shortDescription: "An easy-to-use AI video generator ideal for adding animations and special effects.",
    longDescription: "An interactive video platform that allows anyone to animate elements, edit specific regions with AI, and add custom cinematic effects to drawings or photos.",
    features: ["Animate objects or still photos from prompts", "Regional inpainting video editor", "Realistic sound effects and lip-syncing"],
    pros: ["Extremely intuitive and simple UI", "Fun and addictive options for creators", "Inpainting saves hours of recreating footage"],
    cons: ["Free video output resolution is moderate", "Slightly cartoonish physics on long clips"],
    priceDetail: "Free plan / Paid plans from $8/month"
  },
  perplexity: {
    shortDescription: "An AI-powered conversational search engine providing direct answers with reliable citations.",
    longDescription: "A revolutionary alternative to traditional search engines. Perplexity answers questions with natural text, backed by cited real-time web references and source links.",
    features: ["Live web search with inline citations", "Pro search mode for advanced multi-step logical research", "Upload files and PDFs to summarize"],
    pros: ["Highly accurate factual data and zero-clutter search", "Brilliant for academic study", "Lists source links clearly"],
    cons: ["Free tier limit on Pro queries", "Factual summaries can occasionally conflict"],
    priceDetail: "Free / Pro tier $20/month"
  },
  jasper: {
    shortDescription: "Enterprise AI content platform for copywriting, blogs, and SEO optimization.",
    longDescription: "An all-in-one copywriting assistant tailored for marketing teams and business owners to draft articles, social posts, and copy aligned with custom brand voice.",
    features: ["50+ copywriting templates and blueprints", "Custom brand voice memory and multi-channel campaigns", "Factual blog writer with integrated SEO checklist"],
    pros: ["Substantially speeds up copy production", "Great integrations and built-in plagiarism check"],
    cons: ["Relatively costly subscription", "No permanent free plan available"],
    priceDetail: "Starts from $39/month (Free Trial)"
  },
  quizziz: {
    shortDescription: "Generate gamified interactive quizzes and school exams in seconds from notes.",
    longDescription: "A wonderful tool for schools and teachers to auto-generate gamified quizzes, flashcards, and interactive evaluations from raw text notes or uploads.",
    features: ["AI quiz generator from textbooks and documents", "Live game mode with student tracking reports", "Interactive game themes and team challenges"],
    pros: ["Extremely fun and engaging for students", "Saves hours of preparation time for teachers", "Excellent Arabic language support"],
    cons: ["Free tier has participant limits per game", "Advanced tracking reports require school license"],
    priceDetail: "Free / Premium starts from $8/month"
  },
  surferseo: {
    shortDescription: "Advanced SEO analyzer to optimize blogs and articles to rank on Google.",
    longDescription: "Professional SEO suite that parses top Google results to draft a clear blueprint of keywords, word-counts, and headings to rank your articles.",
    features: ["Content Score guide using NLP terms", "Content planner to bundle keywords", "AI article outline generator"],
    pros: ["Highly reliable for SEO ranking", "Perfect editor guiding copywriters step-by-step"],
    cons: ["Quite expensive for solo bloggers", "No free plan available"],
    priceDetail: "Starts from $59/month"
  },
  grammarly: {
    shortDescription: "An AI-powered writing assistant for correcting grammar, spelling, and tone.",
    longDescription: "The gold-standard writing assistant that checks spelling, punctuation, clarity, and style as you write in your browser or desktop applications.",
    features: ["Real-time spelling and advanced grammar check", "Clarity suggestions and sentence rewrites", "Tone adjustments and auto-draft replies"],
    pros: ["Works flawlessly across all websites and apps", "Vastly improves business communication professionalism"],
    cons: ["Advanced features require premium plan", "Requires active internet connection"],
    priceDetail: "Free / Premium from $12/month"
  }
};

export const ARTICLE_TRANSLATIONS: Record<string, { title: string; summary: string; content: string; category: string; readTime: string }> = {
  'how-to-choose-writing-ai': {
    title: "How to Choose the Right AI Content Writing Tool for You",
    summary: "A detailed guide comparing ChatGPT, Claude, Gemini, and specialized marketing tools based on your business needs.",
    category: "Writing & Content",
    readTime: "5 mins",
    content: `Welcome to the age of smart content creation! With the rapid rise of generative AI tools, it has become challenging for creators and marketers to pick the absolute best tool for their daily workflow.

In this practical guide, we break down the core differences to help you make the right choice:

### 1. ChatGPT: The All-Rounder Assistant
If you are looking for a versatile tool that does everything very well, ChatGPT by OpenAI is your default choice. It is excellent for:
- Brainstorming and writing full content outlines.
- Drafting quick initial articles and emails.
- General interactive problem solving.

### 2. Claude: The King of Nuanced Writing and Context
If your work requires sophisticated prose, human-sounding articles, or reading massive PDF documents, Anthropic's Claude is superior. Its key advantages include:
- A beautiful, natural language style that mimics professional human authors.
- A massive context window, allowing it to process entire books or folders of data in seconds.

### 3. Gemini: The Connected and Real-time Option
If you need real-time data, current events analysis, or deep integration with Gmail, Google Docs, and Drive, Google's Gemini is the clear winner due to its direct link to live Google Search.

### How to Make Your Final Decision?
- **Choose ChatGPT** if you want an all-in-one programming, thinking, and creative workspace.
- **Choose Claude** if you are a writer, academic, or researcher looking for the absolute highest literary output quality.
- **Choose specialized tools like Jasper or Copy.ai** if you run an e-commerce store and want quick, sales-optimized ad copy.`
  },
  'chatgpt-vs-gemini': {
    title: "Battle of the Giants: ChatGPT vs Gemini - Which is Best for You in 2026?",
    summary: "A comprehensive comparison between OpenAI's and Google's flagship models, focusing on understanding, features, coding, and language support.",
    category: "Tech Comparisons",
    readTime: "8 mins",
    content: `The AI world is witnessing an intense rivalry between OpenAI (developers of ChatGPT) and Google (developers of Gemini). In 2026, with ultra-fast models, choosing between them requires an accurate understanding of their core capabilities.

In this comprehensive guide, we compare their strengths and weaknesses:

### 1. Natural Language Processing & Search Integration
- **ChatGPT**: Delivers exceptional comprehension of idioms and complex syntax with smooth, natural transitions.
- **Gemini**: Excels at live web searches and sourcing immediate news, thanks to its integration with the Google Search engine.

### 2. Ecosystem & Workflow Integrations
- **ChatGPT**: Features custom GPTs, a built-in Advanced Voice Mode, and robust sandboxed code execution environments.
- **Gemini**: Integrates flawlessly with Google Workspace. It can edit Google Docs, write emails in Gmail, and access files in your Google Drive directly.

### 3. Coding & Technical Performance
- **ChatGPT**: The preferred choice for developers due to its clean code generations, logical problem-solving, and smart debugging.
- **Gemini**: Powered by Gemini 1.5 Pro/2.0 Flash, it boasts a massive context window of up to 2 million tokens, making it perfect for ingestion of entire large-scale project codebases at once.

### Summary & Verdict
- **Use ChatGPT** if your work revolves around coding, highly refined prose, or interactive voice capabilities.
- **Use Gemini** if you are fully immersed in the Google ecosystem, or need live internet search capabilities with citation links.`
  },
  'midjourney-vs-competitors': {
    title: "AI Art: Midjourney vs DALL-E 3 vs Stable Diffusion in 2026",
    summary: "Which AI tool reigns supreme for high-fidelity photorealistic and artistic images? We compare quality, safety, customization, and cost.",
    category: "Design & Arts",
    readTime: "6 mins",
    content: `Generative AI has completely revolutionized the digital art and graphic design industries. Today, you can create cinematic, high-resolution masterpieces in seconds from a simple text prompt.

But which tool is worth your time and budget? Here is an objective comparison:

### 1. Midjourney: Cinematic Mastery
Midjourney remains the absolute gold standard for artistic and photorealistic image quality. It features:
- Stunning cinematic lighting, textures, and rich atmospheric detail.
- Perfect for concept artists, game designers, and high-end visualizers.
- **Drawback**: No free tier, and operates primarily via Discord.

### 2. DALL-E 3: Superb Understanding & Prompt Matching
Developed by OpenAI and integrated with ChatGPT:
- Exceptional prompt adherence, matching exactly what you describe.
- Correctly renders readable text inside images without gibberish.
- Included with ChatGPT Plus for easy conversational adjustments.

### 3. Stable Diffusion: Absolute Freedom
The choice for developers and professional modelers:
- Open-source and can be run completely locally on your hardware for free.
- Fully customizable with LoRAs, ControlNet, and unlimited extensions.

### Verdict & Recommendation
For breathtaking visual art and aesthetics, subscribe to **Midjourney**. For easy prompting and correct text rendering, use **DALL-E 3**. For absolute customization, open-source freedom, and zero censorship, learn **Stable Diffusion**.`
  },
  'midjourney-vs-dalle': {
    title: "Midjourney vs DALL-E 3: Which Image Generator is Right for You?",
    summary: "Deep tech analysis of the differences between Midjourney and DALL-E 3, with practical prompt engineering tips for jaw-dropping visual art.",
    category: "Tech Comparisons",
    readTime: "7 mins",
    content: `AI image generation has evolved from a fun experiment into a vital pillar of graphic design, digital marketing, and advertising. Today, the battle for supremacy features two giants: Midjourney with its mesmerizing cinematic artistry, and DALL-E 3 with its legendary understanding of complex textual prompts.

### 1. Aesthetic Quality and Photorealism
- **Midjourney**: The undisputed king of photorealism and artistic textures. It handles lighting, atmospheric fog, skin textures, and cinematic depth-of-field beautifully.
- **DALL-E 3**: Offers clean, vibrant illustrations and excellent 3D renders, but photorealistic generations can sometimes appear slightly oversaturated or plasticky compared to Midjourney's organic feel.

### 2. Prompt Adherence and Text Rendering
- **DALL-E 3**: Excels spectacularly. Because it is directly integrated with ChatGPT's linguistic understanding, it captures intricate prompt details and spatial relationships with high fidelity. It also renders readable text and spelling inside images without distorted gibberish.
- **Midjourney**: Often requires a steep learning curve and specific tags. It might overlook secondary background details if your prompt is too long.

### Final Verdict:
- **Choose Midjourney** if you are a game designer, concept artist, or professional creative looking for breathtaking visual quality.
- **Choose DALL-E 3** if you want seamless prompt engineering, direct text spelling inside designs, or need a conversational design workflow within ChatGPT.`
  },
  'future-of-coding-ai': {
    title: "The Future of Coding: Will AI Replace Actual Software Engineers?",
    summary: "An objective study on the performance of tools like GitHub Copilot and Cursor, and how they are transforming the developer's role from writing boilerplate to engineering robust solutions.",
    category: "Coding & Development",
    readTime: "7 mins",
    content: `With the rise of autonomous agents like Replit Agent and Cursor, many students and junior developers are asking: Is the era of human programming over? Will companies stop hiring software engineers?

The short and accurate answer is: **No. However, developers who use AI will certainly replace developers who do not.**

### How the Developer's Role is Evolving
Thanks to AI assistants, programmers are freed from writing repetitive boilerplate, looking up documentation, and setting up environments. Instead, they can focus their creative and analytical energy on:
1. **Software Architecture**: Designing how services, APIs, and databases communicate efficiently and securely.
2. **Debugging Critical Failures**: Resolving complex logical errors and race conditions that language models overlook.
3. **Information Security and UX**: Auditing code quality and verifying that application states remain robust and secure.`
  },
  'coding-with-cursor-guide': {
    title: "Developer's Guide: Ship Entire Apps at Lightning Speed with Cursor and Copilot",
    summary: "Learn advanced prompt engineering and workspace setup techniques to generate bug-free code and resolve complex architectural problems in seconds.",
    category: "Coding & Development",
    readTime: "9 mins",
    content: `AI-first editors like Cursor and GitHub Copilot are no longer just optional autocomplete extensions; they have become the primary engines of development speed at leading tech companies in 2026.

Here is your comprehensive guide to mastering workspace contexts and prompt engineering for clean, bug-free software:

### 1. Leverage Your Workspace Context
The quality of AI-generated code depends entirely on the information you provide. Always use the '@' symbol in Cursor to reference specific files, folders, or active terminal outputs, or even link to official documentation APIs.

### 2. Master Composer Mode for Multi-File Edits
Composer Mode is a game-changer. It allows you to generate and edit multiple files concurrently with a single prompt. For example, you can ask: "Create a product detail page, wire it up to CSS files, and define an API route to handle it in the server."

### 3. Use Incremental Prompting
Instead of asking for a massive, fully-fledged app in one vague prompt, break your request into small, logical steps. This keeps the AI's attention focused and eliminates half-written placeholders or logical gaps in your code.`
  },
  'ai-productivity-methods-2026': {
    title: "Top 10 Ways to Skyrocket Your Productivity with AI in 2026",
    summary: "A practical guide containing proven strategies to organize your calendar, automate repetitive tasks, and write reports in minutes.",
    category: "Productivity & Automation",
    readTime: "6 mins",
    content: `Time is our most valuable asset. In today's fast-paced world, automating repetitive office work is no longer a luxury—it is a necessity for freelancers, creators, and business leaders.

Here are proven strategies to optimize your productivity today:

### 1. Smart Inbox Automation
Stop spending hours reading and replying to emails. Use AI email plugins to automatically categorize incoming messages, summarize long threads into three bullet points, and generate draft responses matching your preferred tone.

### 2. Auto-Scribing and Meeting Summarization
Endless meetings drain focus and time. Use whisper transcribers to record meetings, extract actionable items, and distribute clear, formatted summary notes to your team instantly.

### 3. Integrated Notes and Knowledge Bases
Tools like Notion AI can organize your scattered ideas brilliantly. Upload raw, unformatted brainstorm notes and ask the AI to compile them into structured tables with deadlines.`
  },
  'best-free-ai-for-students': {
    title: "Best Free AI Tools for Students and Academic Research in 2026",
    summary: "A comprehensive guide to cutting-edge scientific tools to summarize massive textbooks, analyze papers, and study smarter.",
    category: "Education & Study",
    readTime: "4 mins",
    content: `Studying with last century's methods is an unnecessary drain on your time and energy. Today, AI provides free, personalized 24/7 academic assistants to help you learn, summarize, and conduct research.

### 1. Perplexity AI: Your Trusted Research Engine
A perfect alternative to traditional web search for essays and reports. Perplexity answers questions with clear, cited text and lists precise links to academic papers.

### 2. Consensus: The Smart Academic Search
Connected to a database of over 200 million peer-reviewed papers. Consensus crawls the papers, summarizes their findings, and tells you the percentage of scientific consensus on the topic.

### 3. Humata AI: Chat with Textbooks and PDFs
Have a massive textbook? Upload it to Humata and chat directly with it! Ask it to explain complex concepts or summarize chapters, and it will provide answers with direct page references.`
  }
};

/**
 * Helper to get fallback short description for any tool in English
 */
export function getFallbackShortDesc(id: string, category: string): string {
  const custom: Record<string, string> = {
    chatgpt: "Leading conversational AI assistant by OpenAI for writing and research.",
    claude: "Advanced language model by Anthropic with a natural human-like voice and tone.",
    gemini: "Google's smart multimodal AI assistant integrated with search and Workspace.",
    rytr: "Smart, cost-effective writing assistant for blogs and marketing copy.",
    wordtune: "Professional sentence rewriter and writing enhancer tool.",
    copyai: "AI copywriting assistant for social media posts and product ads.",
    writesonic: "SEO-friendly content writer and blog article generator.",
    quillbot: "Advanced paraphrasing, summarization, and grammar checker tool.",
    leonardoai: "Creative AI platform for generating assets, art, and 3D textures.",
    adobefirefly: "Adobe's safe-for-commercial-use creative generative AI suite.",
    canvaai: "AI graphic design suite for presentations, posts, and vectors.",
    photoroom: "AI-powered studio for background removal and product photos.",
    clipdrop: "Creative suite for editing, relighting, and upscaling images.",
    playgroundai: "Versatile canvas-based AI image editor and generator.",
    lexica: "High-quality stable diffusion art search engine and generator.",
    synthesia: "AI video platform to generate talking avatar presentations.",
    invideo: "Generate publish-ready marketing videos with text scripts.",
    kaiber: "Creative AI video generator using styling and animation loops.",
    luma_dream: "Create realistic 3D videos and scenes from prompts.",
    kling: "High-fidelity cinematic text-to-video generator.",
    fliki: "Turn blog articles and scripts into realistic voiceover videos.",
    udio: "Advanced AI music model for generating songs and instrumentals.",
    murfai: "Studio-quality AI voice generator and text-to-speech engine.",
    resemble: "Real-time voice cloning and synthetic voice platform.",
    speechify: "Smart audio reader and text-to-speech for books and PDFs.",
    lalalai: "AI vocal remover and stem splitter for music files.",
    adobepodcast: "AI-powered audio cleanup and enhancement studio.",
    voicemod: "Real-time voice changer and soundboard for gaming and chat.",
    aiva: "Creative AI music composer for custom soundtracks.",
    copilot: "GitHub's AI programmer providing inline code suggestions.",
    tabnine: "AI code autocomplete extension for professional developers.",
    codeium: "Free, ultra-fast AI autocomplete and chat for IDEs.",
    replit_agent: "Autonomous AI developer that builds and deploys web apps.",
    v0: "Vercel's generative UI assistant for React and Tailwind CSS.",
    amazon_q: "AWS enterprise conversational assistant and coding helper.",
    cody: "Sourcegraph's AI coding assistant for searching codebases.",
    blackbox: "Super-fast AI autocomplete and code search browser extension.",
    anima: "Design-to-code converter for Figma, Adobe XD, and Sketch.",
    hubspot: "All-in-one CRM and marketing automation suite.",
    adcreative: "Generate high-converting ad banners and creative designs.",
    beautifulai: "Smart, auto-formatting presentation designer with AI.",
    sproutsocial: "AI social media management and scheduling platform.",
    mutiny: "AI-powered website personalization and conversion optimizer.",
    lately: "Turn blogs and videos into social media campaigns with AI.",
    yotpo: "E-commerce marketing and custom review aggregator.",
    flick: "AI social media helper for caption writing and hashtags.",
    smartly: "Automate social advertising and creative scaling.",
    consensus: "Academic research engine sourcing 200M+ peer-reviewed papers.",
    grammarly_edu: "Student edition of Grammarly for academic prose and essays.",
    wolfram: "Computational search engine for mathematics and science.",
    duolingo: "Gamified AI language learning and vocabulary practice.",
    eli5: "Explain complex scientific concepts in extremely simple terms.",
    elicit: "Automate research tasks like literature reviews and summaries.",
    socratic: "Google's smart homework solver and visual study guide.",
    chatpdf_edu: "Upload textbooks and chat directly with your academic PDFs.",
    ankipro: "AI flashcards and spaced-repetition study manager.",
    otter: "AI meeting transcript scribe and note taker.",
    motion_app: "Intelligent calendar and auto-scheduling task manager.",
    zapier: "Connect and automate workflows across thousands of apps.",
    superhuman: "Blazing fast email client with built-in AI writing.",
    fathom: "Free Zoom, Teams, and Meet recording and transcription.",
    tome: "AI presentation and storytelling canvas for builders.",
    taskade: "Collaborative workspace with custom AI agents and workflows.",
    mindmeister: "AI mind mapping and brainstorming visual planner.",
    grammarly_kbd: "Smart typing keyboard with real-time spelling correction."
  };

  if (custom[id]) return custom[id];

  // Category fallback
  switch (category) {
    case 'writing': return "Smart AI-powered assistant for writing, rewriting, and copywriting.";
    case 'image': return "Generative AI tool for digital art, design, and graphics.";
    case 'video': return "Innovative AI video creator and cinematic animation platform.";
    case 'audio': return "High-fidelity AI voice generator and audio editing software.";
    case 'coding': return "Cutting-edge AI programming helper and autocomplete editor.";
    case 'marketing': return "Automated marketing assistant and content optimizer.";
    case 'education': return "Smart academic research and interactive study assistant.";
    case 'productivity': return "Intelligent task assistant and workflow automator.";
    default: return "Advanced AI-powered software designed to boost efficiency.";
  }
}

/**
 * Helper to get fallback long description for any tool in English
 */
export function getFallbackLongDesc(id: string, category: string, arabicName: string, name: string): string {
  const custom: Record<string, string> = {
    chatgpt: "The world's most famous and widely used interactive AI conversational model, assisting with text generation, brainstorming, problem-solving, and writing.",
    claude: "Anthropic's safety-oriented language model excels at advanced reasoning, technical writing, professional copywriting, and analyzing massive documents.",
    gemini: "Google's premier multimodal assistant, connected to search engines for live facts and integrated deeply with Docs, Gmail, and Google Drive.",
    rytr: "Rytr is an AI writing assistant that helps you create high-quality content, emails, articles, and copy in just a few seconds at an affordable price.",
    wordtune: "Wordtune is a professional text editor and sentence rewriter that uses language models to help you express yourself clearly and authentically.",
    copyai: "Copy.ai is a leading copywriting platform designed for marketing teams and merchants to generate high-converting ads, captions, and product descriptions.",
    writesonic: "Writesonic is an advanced AI writer tailored for bloggers and content creators, generating SEO-optimized articles and providing direct web-search integration.",
    quillbot: "QuillBot is an interactive writing assistant that helps millions of students rewrite, summarize, and correct their English essays and academic papers.",
    leonardoai: "Leonardo.ai is a production-grade generative platform for artists and game developers, allowing fine-grained control over character assets and textures.",
    adobefirefly: "Adobe Firefly brings generative AI tools directly into Photoshop and Illustrator, providing creators with safe-for-commercial-use graphics and effects.",
    canvaai: "Canva AI incorporates state-of-the-art generative tools into Canva's visual editor, simplifying professional-level graphic design for everyone.",
    photoroom: "PhotoRoom is an AI editing app designed for business owners to remove backgrounds, edit templates, and showcase products in stunning studio styles.",
    clipdrop: "Clipdrop is an ultimate ecosystem of editing utilities, allowing you to instantly swap backgrounds, clean up objects, and upscale resolutions.",
    playgroundai: "Playground AI provides a powerful canvas interface to combine images, write prompts, and paint custom objects with complete creative control.",
    lexica: "Lexica is a curated directory and text-to-image generator that allows users to search millions of stable diffusion artworks and prompt patterns.",
    synthesia: "Synthesia is the leading AI video creation platform that enables companies to generate professional presenter videos in multiple languages from plain scripts.",
    invideo: "InVideo AI turns text prompts or full scripts into complete, ready-to-publish marketing videos with matching media assets and voiceovers.",
    kaiber: "Kaiber is a creative video generator that uses advanced AI algorithms to transform photos, music, or prompts into stylistic animations and loops.",
    luma_dream: "Luma Dream Machine is a rapid-rendering video generation model designed to animate static frames or prompts into hyper-realistic 3D clips.",
    kling: "Kling AI is a state-of-the-art cinematic video generator that delivers long, cohesive video sequences with realistic lighting and physical simulations.",
    fliki: "Fliki allows you to create social media videos, reels, and voiceovers from plain text, integrating realistic text-to-speech in over 75 languages.",
    udio: "Udio is a revolutionary music creation engine that allows music lovers to compose, produce, and fine-tune original songs of any style in seconds.",
    murfai: "Murf.ai is a studio-grade text-to-speech platform that converts text scripts into professional voiceovers for podcasts, advertisements, and presentations.",
    resemble: "Resemble AI builds dynamic, realistic custom voices and clones that capture emotional nuances, ideal for gaming and customer support.",
    speechify: "Speechify is the world's most popular screen reader, transforming web pages, PDFs, and books into natural, flowing audio to listen on the go.",
    lalalai: "LALAL.AI is an accurate voice and instrumental splitter that extracts clean vocals, backing tracks, and separate stems from any audio file.",
    adobepodcast: "Adobe Podcast is a cloud-based suite of audio editing tools that uses AI to eliminate noise, match mic levels, and polish recordings to studio grade.",
    voicemod: "Voicemod is a real-time voice changer and virtual soundboard that integrates with Discord, gaming clients, and streaming setups for interactive fun.",
    aiva: "AIVA is an AI composer that writes original emotional soundtracks for movies, games, and commercials, allowing full MIDI export and royalty-free rights.",
    copilot: "GitHub Copilot is your AI pair programmer that provides real-time autocomplete suggestions and full-function coding directly inside your editor.",
    tabnine: "Tabnine is a secure, private AI coding assistant that autocomplete code lines and functions in over 30 languages, adapting to your project styles.",
    codeium: "Codeium is a free, lightning-fast developer assistant providing powerful in-IDE search, chat, and autocomplete features for major software languages.",
    replit_agent: "Replit Agent is an autonomous programming tool that helps users scaffold, build, and deploy web applications directly from plain language ideas.",
    v0: "v0 is a generative UI system by Vercel that converts design descriptions into production-ready React and Tailwind CSS components in seconds.",
    amazon_q: "Amazon Q is a secure generative AI assistant for work that helps answer business questions, write reports, and manage AWS cloud configurations.",
    cody: "Cody is a comprehensive coding assistant that deeply index your repository to explain codebases, write unit tests, and resolve bugs directly.",
    blackbox: "Blackbox AI is a super-fast autocomplete extension that allows developers to copy code from videos, search programming solutions, and code faster.",
    anima: "Anima translates static designs from Figma or Adobe XD into fully functional, responsive HTML, CSS, and React code, saving developer hours.",
    hubspot: "HubSpot AI embeds advanced smart assistants across your CRM to draft sales emails, summarize client conversations, and generate marketing campaigns.",
    adcreative: "AdCreative.ai generates high-converting ad designs, banners, and social posts, utilizing AI models to maximize click-through rates.",
    beautifulai: "Beautiful.ai is an automated presentation creator that formats your slides as you type, keeping font weights and layout structures perfect.",
    sproutsocial: "Sprout Social integrates powerful AI listening and categorization tools to analyze social sentiment, draft posts, and schedule messages.",
    mutiny: "Mutiny is a conversion platform that personalizes your landing pages in real-time for different target audiences to drive sign-ups.",
    lately: "Lately AI analyzes social media performance to extract high-performing snippets from your blogs and webinars, turning them into campaigns.",
    yotpo: "Yotpo AI helps e-commerce stores collect and showcase reviews, utilizing smart summaries and product tags to increase user trust.",
    flick: "Flick's AI Social Media Assistant simplifies brainstorming, writing captions, and picking relevant hashtags to grow your social presence.",
    smartly: "Smartly.io automates digital advertising across social networks, adjusting layouts and targeting parameters in real-time.",
    consensus: "Consensus is an academic research engine that analyzes over 200 million peer-reviewed articles to provide direct answers backed by science.",
    grammarly_edu: "Grammarly for Education provides students with real-time feedback on writing style, clarity, citation formats, and academic grammar.",
    wolfram: "Wolfram Alpha uses computational intelligence and curated algorithms to solve complex scientific equations and analytical queries.",
    duolingo: "Duolingo uses smart adaptive algorithms and gamification features to teach languages, adjusting course difficulty to your personal progress.",
    eli5: "Explain Like I'm 5 uses generative models to break down complex physics, finance, or history topics into extremely simple and friendly stories.",
    elicit: "Elicit is a research assistant that automates literature review workflows, finding relevant papers and summarizing key arguments.",
    socratic: "Socratic by Google is an education app that helps students solve homework questions visually with detailed step-by-step math and science guides.",
    chatpdf_edu: "ChatPDF lets students and researchers upload massive academic PDFs and chat with them, extracting quotes and summaries with direct page references.",
    ankipro: "AnkiPro uses spaced-repetition algorithms and custom flashcards to help you memorize vocabulary, study for exams, and retain knowledge.",
    otter: "Otter.ai records and transcribes meetings in real-time, generating structured notes, extracted action items, and shareable summaries for your team.",
    motion_app: "Motion uses intelligent scheduling algorithms to plan your day, auto-arranging tasks, meetings, and project deadlines to maximize focus.",
    zapier: "Zapier connects thousands of web applications, enabling automated multi-step workflows triggered by specific events without coding.",
    superhuman: "Superhuman is a premium email client that uses AI triage, template drafting, and follow-up reminders to save hours of email management daily.",
    fathom: "Fathom is a free meeting scribe that automatically records, transcribes, and highlights key moments in Zoom and Teams calls.",
    tome: "Tome is a visual storytelling workspace that helps creators and builders build beautiful, interactive slide decks and narratives in seconds.",
    taskade: "Taskade combines project management with custom AI agents and collaborative boards to keep remote teams productive and aligned.",
    mindmeister: "MindMeister is a collaborative mind-mapping tool that lets you visualize, organize, and expand ideas with AI-powered brainstorming helpers.",
    grammarly_kbd: "Grammarly Keyboard brings professional proofreading directly to your phone, correcting spelling and adjusting writing tone in any app."
  };

  if (custom[id]) return custom[id];

  // Category fallback
  return `An advanced, professional-grade ${category} assistant designed to deliver high-quality results, streamline workflows, and maximize efficiency.`;
}

// Professional category-specific fallbacks to guarantee fluent English for all 80 tools
const CATEGORY_FALLBACKS: Record<string, { features: string[]; pros: string[]; cons: string[] }> = {
  writing: {
    features: [
      "Advanced AI-powered content and article generation",
      "Smart tone adjustment, paraphrasing, and formatting tools"
    ],
    pros: [
      "Saves hours of drafting and writing content",
      "Generates highly readable and fluent prose in seconds"
    ],
    cons: [
      "May require manual proofreading for factual accuracy",
      "Full features require a paid subscription plan"
    ]
  },
  image: {
    features: [
      "High-quality generative image and digital art creation",
      "Custom resolution, aspect ratio, and styling controls"
    ],
    pros: [
      "Creates stunning visual art without design experience",
      "Highly responsive to subtle textual descriptions"
    ],
    cons: [
      "May sometimes struggle with extremely complex prompt structures",
      "High-resolution renders can consume a lot of credits"
    ]
  },
  video: {
    features: [
      "AI text-to-video and image animation generation",
      "Professional camera motion controls and style presets"
    ],
    pros: [
      "Generates cinematic scenes and animations in minutes",
      "Significantly lowers the cost of professional video production"
    ],
    cons: [
      "Generating high-quality videos is highly resource-intensive",
      "May have occasional physical motion inconsistencies"
    ]
  },
  audio: {
    features: [
      "Natural text-to-speech voiceovers and custom synthesis",
      "High-fidelity audio cleaning, editing, and voice cloning"
    ],
    pros: [
      "Produces studio-grade natural human-like voiceovers",
      "Extremely fast and easy to generate clean audio files"
    ],
    cons: [
      "Advanced features and premium voices require subscription",
      "Free plans often have strict character limit constraints"
    ]
  },
  coding: {
    features: [
      "Intelligent code autocomplete and line completions",
      "Context-aware explanations, chat, and error debugging"
    ],
    pros: [
      "Vastly boosts programming productivity and speed",
      "Helps developers learn and debug complex codebases"
    ],
    cons: [
      "Can occasionally suggest non-optimal or deprecated code",
      "Requires active internet connection for real-time model suggestions"
    ]
  },
  marketing: {
    features: [
      "Automated ad copywriting and creative graphic designs",
      "Advanced audience sentiment and search engine optimization"
    ],
    pros: [
      "Significantly boosts click-through and sales conversion rates",
      "Saves thousands of dollars on external marketing agencies"
    ],
    cons: [
      "Needs active tracking and continuous data input",
      "Pricing plans are geared toward agency budgets"
    ]
  },
  education: {
    features: [
      "Smart summaries of textbooks, PDFs, and scientific papers",
      "Interactive learning guides and step-by-step problem solvers"
    ],
    pros: [
      "Explains complex academic topics in friendly, simple terms",
      "Saves students and researchers hours of reading time"
    ],
    cons: [
      "Information accuracy should be double-checked against sources",
      "Free tiers often restrict daily uploads or query counts"
    ]
  },
  productivity: {
    features: [
      "Intelligent task prioritization and automatic calendar scheduling",
      "Seamless integration with popular work and messaging tools"
    ],
    pros: [
      "Eliminates cognitive fatigue of planning daily tasks",
      "Greatly improves team project alignment and delivery speed"
    ],
    cons: [
      "Requires complete adoption and commitment for maximum benefits",
      "Subscription plans can be expensive for personal use"
    ]
  }
};

/**
 * Full English pricing details dictionary map for all 80 tools
 */
const PRICE_DETAIL_MAP: Record<string, string> = {
  'تبدأ الباقات من $21 شهرياً (فترة تجريبية مجانية للتقييم الأولي)': 'Plans start from $21/mo (free trial available for initial evaluation)',
  'تبدأ الباقات من $249 شهرياً (فترة تجريبية مجانية للتقييم والتجربة)': 'Plans start from $249/mo (free trial available for evaluation)',
  'تبدأ الباقات من $24 شهرياً مع دقائق توليد محدودة': 'Plans start from $24/mo with limited generation minutes',
  'تبدأ الباقات من $29 شهرياً (فترة تجريبية مجانية متوفرة للأفراد)': 'Plans start from $29/mo (free trial available for individuals)',
  'تبدأ الباقات من $59 شهرياً للوصول للمحرر وأدوات التحليل بموقعك': 'Plans start from $59/mo for editor access and site analytics',
  'تبدأ الباقات من $5 شهرياً مع نقاط توليد محدودة': 'Plans start from $5/mo with limited generation credits',
  'تبدأ من $10 شهرياً': 'Starts from $10/mo',
  'تبدأ من $10 شهرياً للأفراد المطورين والمستقلين': 'Starts from $10/mo for developers and freelancers',
  'تبدأ من $19 شهرياً للأفراد (فترة تجريبية مجانية متوفرة للتجربة والتقييم)': 'Starts from $19/mo for individuals (free trial available for evaluation)',
  'تبدأ من $22 شهرياً مع نقاط دقائق محددة': 'Starts from $22/mo with specific minute credits',
  'تبدأ من $30 شهرياً للمستخدم (فترة تجريبية مجانية متوفرة للتجربة والتقييم)': 'Starts from $30/mo per user (free trial available for evaluation)',
  'تبدأ من $39 شهرياً (فترة تجريبية مجانية)': 'Starts from $39/mo (free trial available)',
  'تجربة مجانية محدودة / $8 شهرياً كإضافة ذكية للحساب المطور': 'Limited free trial / $8/mo as a smart add-on for developer accounts',
  'تجربة مجانية محدودة / باقات تبدأ من $19 شهرياً': 'Limited free trial / Plans start from $19/mo',
  'متاح ضمن اشتراك Replit Core ($15 شهرياً) مع رسوم بسيطة لكل بناء': 'Available via Replit Core subscription ($15/mo) with minor fees per build',
  'مجاني / $12 شهرياً للـ Premium': 'Free / $12/mo for Premium',
  'مجاني / $16 شهرياً للـ Individual': 'Free / $16/mo for Individual',
  'مجاني / $20 شهرياً للـ Advanced': 'Free / $20/mo for Advanced',
  'مجاني / $20 شهرياً للـ Plus': 'Free / $20/mo for Plus',
  'مجاني / $20 شهرياً للـ Pro': 'Free / $20/mo for Pro',
  'مجاني / $36 شهرياً للـ Pro': 'Free / $36/mo for Pro',
  'مجاني / $9.95 شهرياً للـ Premium': 'Free / $9.95/mo for Premium',
  'مجاني / $9.99 شهرياً للـ Plus': 'Free / $9.99/mo for Plus',
  'مجاني / $9 شهرياً للـ Unlimited': 'Free / $9/mo for Unlimited',
  'مجاني (10,000 حرف شهرياً) / باقات تبدأ من $5 شهرياً': 'Free (10,000 characters/mo) / Plans start from $5/mo',
  'مجاني (300 دقيقة شهرياً) / باقات تبدأ من $10 شهرياً للوصول الكامل للمزايا': 'Free (300 mins/mo) / Plans start from $10/mo for full features',
  'مجاني (30 عملية توليد شهرياً) / باقات تبدأ من $9.99': 'Free (30 generations/mo) / Plans start from $9.99',
  'مجاني (50 صورة يومياً) / باقات تبدأ من $12 شهرياً': 'Free (50 images daily) / Plans start from $12/mo',
  'مجاني (50 نقطة يومياً) / باقات تبدأ من $8 شهرياً': 'Free (50 credits daily) / Plans start from $8/mo',
  'مجاني بأسئلة أساسية / باقة Premium بـ $8.99 شهرياً للوصول الكامل للبيانات': 'Free with basic questions / Premium plan at $8.99/mo for full data access',
  'مجاني بالكامل للأفراد / باقات للشركات والمجموعات': '100% Free for individuals / Corporate and team plans available',
  'مجاني بالكامل للأفراد / باقات مدفوعة للشركات بميزات إضافية وتأمين للبيانات': '100% Free for individuals / Paid business plans with extra features and data security',
  'مجاني بالكامل للاستخدام الفوري ومتاح للجميع': '100% Free for immediate use and available to everyone',
  'مجاني بالكامل (مفتوح المصدر للتشغيل المحلي)': '100% Free (Open source for local deployment)',
  'مجاني بالكامل ومتاح للتحميل من متاجر التطبيقات لهواتف الطلاب': '100% Free and available for download on student mobile app stores',
  'مجاني بالكامل ومتاح للتحميل من متاجر التطبيقات لهواتف المستخدمين': '100% Free and available for download on user mobile app stores',
  'مجاني بحدود أساسية يومياً / باقة Pro بـ $4.99 شهرياً للوصول الكامل للبطاقات': 'Free with daily basic limits / Pro plan at $4.99/mo for full card access',
  'مجاني بميزات أساسية / $20 شهرياً للـ Pro': 'Free with basic features / $20/mo for Pro',
  'مجاني بميزات أساسية / $9 شهرياً للـ Pro': 'Free with basic features / $9/mo for Pro',
  'مجاني بميزات أساسية / اشتراك Pro بـ $12 سنوياً أو شراء دائم': 'Free with basic features / Pro subscription at $12/year or lifetime purchase',
  'مجاني بميزات أساسية / باقات المدرسين تبدأ من $8 شهرياً للمزايا الكاملة': 'Free with basic features / Teacher plans start from $8/mo for full features',
  'مجاني بميزات أساسية / باقات برو تبدأ من $9.99 شهرياً للطلاب': 'Free with basic features / Pro plans start from $9.99/mo for students',
  'مجاني بميزات أساسية / باقات تبدأ من $4.99 شهرياً للميزات المتقدمة والربط': 'Free with basic features / Plans start from $4.99/mo for advanced features and integrations',
  'مجاني بميزات محدودة / $139 سنوياً للـ Premium': 'Free with limited features / $139/year for Premium',
  'مجاني بميزات محدودة / باقات احترافية تبدأ من $39 شهرياً للمصممين': 'Free with limited features / Pro plans start from $39/mo for designers',
  'مجاني بنقاط تجريبية / باقات تبدأ من $8 شهرياً للوصول الكامل والتصدير': 'Free with trial credits / Plans start from $8/mo for full access and export',
  'مجاني بنقاط محدودة / باقات الباحثين تبدأ من $12 شهرياً للأفراد': 'Free with limited credits / Research plans start from $12/mo for individuals',
  'مجاني بنقاط محدودة / باقات تبدأ من $20 شهرياً مع مزايا كاملة': 'Free with limited credits / Plans start from $20/mo with full features',
  'مجاني بنقاط محدودة / مدمج مع اشتراك Adobe Cloud': 'Free with limited credits / Bundled with Adobe Cloud subscription',
  'مجاني كحدود أساسية / $12 شهرياً للـ Pro': 'Free within basic limits / $12/mo for Pro',
  'مجاني لـ 3 خرائط / باقات احترافية تبدأ من $6 شهرياً للخرائط المفتوحة': 'Free for 3 maps / Pro plans start from $6/mo for unlimited maps',
  'مجاني للأفراد بميزات أساسية / باقات تبدأ من $9 شهرياً للـ Pro': 'Free for individuals with basic features / Plans start from $9/mo for Pro',
  'مجاني للاستخدام الشخصي / باقات تجارية تبدأ من $11 شهرياً': 'Free for personal use / Commercial plans start from $11/mo',
  'مجاني للتجربة الأولية / باقات تبدأ من $11 شهرياً للمزايا والتحليلات': 'Free for initial trial / Plans start from $11/mo for features and analytics',
  'مجاني للتجربة المحدودة / باقات تبدأ من $10 شهرياً': 'Free for limited trial / Plans start from $10/mo',
  'مجاني للتجربة المحدودة / باقات تبدأ من $12 شهرياً للأفراد المطورين': 'Free for limited trial / Plans start from $12/mo for individual developers',
  'مجاني للتجربة المحدودة / باقات تبدأ من $8 شهرياً': 'Free for limited trial / Plans start from $8/mo',
  'مجاني للتجربة / باقات تبدأ من $21 شهرياً للنسخة الاحترافية': 'Free trial / Plans start from $21/mo for Pro version',
  'مجاني للتدقيق الأساسي / باقات الطلاب تبدأ من $12 شهرياً للمزايا كاملة': 'Free for basic proofreading / Student plans start from $12/mo for full features',
  'مجاني للحلول الفورية / باقة الطلاب تبدأ من $5 شهرياً للوصول للخطوات': 'Free for instant solutions / Student plan starts from $5/mo for step-by-step access',
  'مجاني للعمليات الأساسية / باقات برو تبدأ من $19.99 شهرياً للميزات كاملة': 'Free for basic operations / Pro plans start from $19.99/mo for full features',
  'مجاني للعينات المحدودة / باقات تبدأ من $15 لدقائق محددة': 'Free for limited samples / Plans start from $15 for specific minutes',
  'مجاني لمستندات محددة يومياً / باقة Pro بـ $5.99 شهرياً للوصول المفتوح': 'Free for limited documents daily / Pro plan at $5.99/mo for unlimited access',
  'مجاني مع علامات مائية / باقات تبدأ من $20 شهرياً': 'Free with watermarks / Plans start from $20/mo',
  'مجاني مع علامة مائية / باقة Pro بـ $9.99 شهرياً': 'Free with watermark / Pro plan at $9.99/mo',
  'مجاني (نقاط ترحيبية) / باقات تبدأ من $12 شهرياً': 'Free with welcome credits / Plans start from $12/mo',
  'مجاني (نقاط متجددة يومياً) / باقات تبدأ من $8 شهرياً': 'Free with daily renewing credits / Plans start from $8/mo',
  'مجاني يومياً / باقات تبدأ من $10 شهرياً': 'Free daily / Plans start from $10/mo',
  'مجاني يومياً للملفات الأساسية / باقة Premium بـ $9.99 شهرياً': 'Free daily for basic files / Premium plan at $9.99/mo',
  'محدود مجاناً / $12.99 شهرياً للـ Pro': 'Limited free / $12.99/mo for Pro',
  'مدمج مع ChatGPT Plus أو مجاني عبر Bing Creator': 'Integrated with ChatGPT Plus or free via Bing Creator',
  'ميزات مجانية أساسية / باقات احترافية للمؤسسات ترتفع حسب المزايا': 'Basic free features / Professional enterprise plans scaled by requirements',
  'وصول خاص للمحترفين والمطورين حالياً للتقييم والتجربة': 'Exclusive developer and pro access for evaluation and testing',
  'يبدأ من $29 شهرياً مع رسوم استخدام إضافية': 'Starts from $29/mo with extra usage fees',
  'باقة مجانية للمتاجر الناشئة / باقات مدفوعة تبدأ من $15 شهرياً للمزايا': 'Free plan for startup stores / Paid plans start from $15/mo for advanced features',
  'أسعار مخصصة للشركات وتعتمد على عمولة بسيطة من حجم الصرف الإعلاني': 'Custom enterprise pricing based on a minor commission of ad spend',
  'أسعار مخصصة للشركات وتعتمد على حجم الزوار والربط المطلوب بالأنظمة': 'Custom enterprise pricing based on visitor volume and integration needs'
};

/**
 * Helper to translate a tool's dynamic fields
 */
export function getTranslatedTool(tool: AITool, lang: 'ar' | 'en'): AITool {
  if (lang === 'ar') return tool;

  const translation = TOOL_TRANSLATIONS[tool.id];
  
  // 1. Check dictionary map for priceDetail translation
  let priceDetail = PRICE_DETAIL_MAP[tool.priceDetail];
  
  // 2. If not found in dictionary, apply highly robust regex fallback
  if (!priceDetail) {
    priceDetail = tool.priceDetail
      .replace(/مجاني بالكامل للأفراد/g, '100% Free for individuals')
      .replace(/مجاني بالكامل للاستخدام الفوري ومتاح للجميع/g, '100% Free for immediate use')
      .replace(/مجاني بالكامل ومتاح للتحميل من متاجر التطبيقات/g, '100% Free on mobile app stores')
      .replace(/مجاني/g, 'Free')
      .replace(/مجاناً/g, 'Free')
      .replace(/محدود/g, 'Limited')
      .replace(/باقة/g, 'plan')
      .replace(/باقات/g, 'plans')
      .replace(/اشتراك/g, 'subscription')
      .replace(/للـ Pro/gi, 'for Pro')
      .replace(/للـ Plus/gi, 'for Plus')
      .replace(/للـ Premium/gi, 'for Premium')
      .replace(/للـ Advanced/gi, 'for Advanced')
      .replace(/للـ Individual/gi, 'for Individual')
      .replace(/للـ Unlimited/gi, 'for Unlimited')
      .replace(/للطلاب/g, 'for students')
      .replace(/للمطورين/g, 'for developers')
      .replace(/للمصممين/g, 'for designers')
      .replace(/للمستخدمين/g, 'for users')
      .replace(/شهرياً/g, '/mo')
      .replace(/شهريا/g, '/mo')
      .replace(/سنوياً/g, '/yr')
      .replace(/سنويا/g, '/yr')
      .replace(/تبدأ من/g, 'Starts from')
      .replace(/يبدأ من/g, 'Starts from')
      .replace(/تبدأ الباقات من/g, 'Plans start from')
      .replace(/مع علامة مائية/g, 'with watermark')
      .replace(/مع علامات مائية/g, 'with watermarks')
      .replace(/بميزات أساسية/g, 'with basic features')
      .replace(/بميزات محدودة/g, 'with limited features')
      .replace(/للتجربة المحدودة/g, 'for limited trial')
      .replace(/للتجربة/g, 'for trial')
      .replace(/فترة تجريبية مجانية متوفرة/g, 'free trial available')
      .replace(/فترة تجريبية مجانية/g, 'free trial available')
      .replace(/للأفراد/g, 'for individuals')
      .replace(/يومياً/g, 'daily')
      .replace(/أسبوعياً/g, 'weekly')
      .replace(/نقاط ترحيبية/g, 'welcome credits')
      .replace(/نقاط متجددة يومياً/g, 'daily renewing credits')
      .replace(/نقاط/g, 'credits')
      .replace(/دقائق/g, 'minutes')
      .replace(/صورة/g, 'images')
      .replace(/حرف/g, 'characters')
      .replace(/أو/g, 'or')
      .replace(/عبر/g, 'via')
      .replace(/بـ/g, 'at');
  }

  // Translating common features, pros, cons if not hand-translated
  const translateArray = (arr: string[], type: 'features' | 'pros' | 'cons'): string[] => {
    return arr.map((item, idx) => {
      const text = item.toLowerCase();
      
      // 1. Negative conditions (Cons) first to prevent false positives on positive matches (like 'free/مجاني')
      if (text.includes('لا توفر باقة') || text.includes('لا تتوفر باقة') || text.includes('لا يوجد خيار مجاني') || text.includes('لا تتوفر تجربة مجانية') || text.includes('لا تتوفر نسخة مجانية') || text.includes('لا يوجد إصدار مجاني') || text.includes('لا توجد باقة مجانية') || text.includes('باقة مجانية حرة') || text.includes('ليس مجاني')) {
        return 'No permanent free plan available (free trial only)';
      }
      if (text.includes('سعر الاشتراك مرتفع') || text.includes('سعر مرتفع') || text.includes('الاشتراك يعتبر مرتفع') || text.includes('مكلفة نسبيا') || text.includes('باهظ الثمن')) {
        return 'Subscription cost is relatively high';
      }
      if (text.includes('محدود') || text.includes('محدودة') || text.includes('قيود على الاستخدام') || text.includes('تتطلب الترقية')) {
        return 'Usage limits or rate caps on the free tier';
      }
      if (text.includes('تتطلب اشتراك') || text.includes('تحتاج لاشتراك') || text.includes('يتطلب الدفع') || text.includes('باقات مدفوعة')) {
        return 'Requires a paid subscription for full features';
      }
      if (text.includes('تعود كامل') || text.includes('صعوبة في التعلم') || text.includes('منحنى تعلم')) {
        return 'Requires some time to adapt and fully integrate into your workflow';
      }
      if (text.includes('تحتاج اتصال') || text.includes('تتطلب إنترنت') || text.includes('اتصال بالإنترنت')) {
        return 'Requires an active internet connection to function';
      }

      // 2. Positive / Feature mappings
      if (text.includes('مجاني بالكامل') || text.includes('مجاني 100%')) {
        return '100% free to use with no hidden fees';
      }
      if (text.includes('باقة مجانية') || text.includes('نسخة مجانية') || text.includes('إصدار مجاني') || text.includes('تجربة مجانية') || text.includes('تتوفر باقة مجانية')) {
        return 'Generous free tier or trial available';
      }
      if (text.includes('سهل الاستخدام') || text.includes('سهلة ومريحة') || text.includes('واجهة بسيطة') || text.includes('سهولة بالغة') || text.includes('بمنتهى السهولة')) {
        return 'Extremely user-friendly and simple interface';
      }
      if (text.includes('سرعة فائقة') || text.includes('سرعة هائلة') || text.includes('سرعة استجابة') || text.includes('سريع جداً')) {
        return 'Ultra-fast generation and processing speeds';
      }
      if (text.includes('دقة عالية') || text.includes('دقة فائقة') || text.includes('جودة عالية') || text.includes('جودة فائقة')) {
        return 'Produces hyper-realistic high-fidelity outputs';
      }
      if (text.includes('دعم ممتاز للغة العربية') || text.includes('دعم اللغة العربية') || text.includes('يدعم العربية') || text.includes('باللغة العربية')) {
        return 'Outstanding Arabic language comprehension and support';
      }
      if (text.includes('توليد الصور') || text.includes('إنشاء صور') || text.includes('تصميم صور')) {
        return 'State-of-the-art AI image generation';
      }
      if (text.includes('توليد النصوص') || text.includes('كتابة محتوى') || text.includes('كتابة المقالات') || text.includes('صياغة نصوص')) {
        return 'Professional AI-assisted text and content copywriting';
      }
      if (text.includes('توليد فيديوهات') || text.includes('إنشاء فيديو') || text.includes('صناعة فيديو') || text.includes('تحويل النص إلى فيديو')) {
        return 'Cinematic generative video creations';
      }
      if (text.includes('توليد الأصوات') || text.includes('تحويل النص إلى كلام') || text.includes('توليد صوت')) {
        return 'Hyper-realistic natural-sounding text-to-speech voiceovers';
      }
      if (text.includes('تحليل البيانات') || text.includes('تحليل محتوى') || text.includes('أدوات تحليل') || text.includes('تلخيص')) {
        return 'Advanced content analysis, summarization, and reporting tools';
      }
      if (text.includes('إكمال تلقائي') || text.includes('مساعد برمج') || text.includes('توليد الأكواد') || text.includes('شرح الشفرات')) {
        return 'Smart code autocompletion and assistant utilities';
      }

      // 3. Fallback translation replacements
      let fallbackText = item
        .replace(/أداة ذكاء اصطناعي/gi, 'AI tool')
        .replace(/توليد/gi, 'Generating')
        .replace(/تحليل/gi, 'Analyzing')
        .replace(/تصميم/gi, 'Designing')
        .replace(/تعديل/gi, 'Editing')
        .replace(/موقع/gi, 'Website')
        .replace(/منصة/gi, 'Platform')
        .replace(/تطبيق/gi, 'Application')
        .replace(/سهل/gi, 'Easy')
        .replace(/سريع/gi, 'Fast')
        .replace(/رائع/gi, 'Excellent')
        .replace(/ممتاز/gi, 'Outstanding')
        .replace(/للطلاب/gi, 'for students')
        .replace(/للمطورين/gi, 'for developers')
        .replace(/للمصممين/gi, 'for designers')
        .replace(/للمسوقين/gi, 'for marketers');

      // 4. Ultimate Anti-Leak Check: If there are still any Arabic characters, replace with category fallback!
      const hasArabic = /[\u0600-\u06FF]/.test(fallbackText);
      if (hasArabic) {
        const cat = tool.category || 'productivity';
        const fallbacks = CATEGORY_FALLBACKS[cat] || CATEGORY_FALLBACKS.productivity;
        const list = fallbacks[type];
        // Select fallback item based on index, wrapped around if necessary
        return list[idx % list.length];
      }

      return fallbackText;
    });
  };

  return {
    ...tool,
    name: tool.name,
    arabicName: tool.arabicName,
    shortDescription: translation?.shortDescription || getFallbackShortDesc(tool.id, tool.category),
    longDescription: translation?.longDescription || getFallbackLongDesc(tool.id, tool.category, tool.arabicName, tool.name),
    features: translation?.features || translateArray(tool.features, 'features'),
    pros: translation?.pros || translateArray(tool.pros, 'pros'),
    cons: translation?.cons || translateArray(tool.cons, 'cons'),
    priceDetail: translation?.priceDetail || priceDetail,
  };
}
