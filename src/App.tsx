import React, { useState, useEffect, useMemo } from 'react';
import {
  PenTool,
  Image as ImageIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  Code2,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Search,
  Star,
  Bookmark,
  ExternalLink,
  Plus,
  X,
  Menu,
  Heart,
  Calendar,
  Clock,
  ArrowRightLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Info,
  SlidersHorizontal,
  BookmarkMinus,
  MessageSquare,
  Share2,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from './data/categories';
import { TOOLS } from './data/tools';
import { ARTICLES } from './data/articles';
import { AITool, Category, Article } from './types';
import { ProgressiveImage } from './components/ProgressiveImage';
import { HomeAdBanner, ToolsAdBanner } from './components/AdBanners';

// Dynamic Lucide icon helper
import * as Icons from 'lucide-react';

const LucideIcon = ({ name, className, size = 20 }: { name: string; className?: string; size?: number }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};

type Tab = 'home' | 'directory' | 'compare' | 'best-of-month' | 'articles' | 'favorites' | 'about' | 'privacy' | 'terms' | 'contact' | 'reviewers';

export default function App() {
  // Tabs navigation
  const [activeTab, setActiveTab] = useState<Tab>('home');
  
  // Searching & Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceType, setSelectedPriceType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'alpha'>('popular');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ai_hub_favs');
    return saved ? JSON.parse(saved) : ['chatgpt', 'midjourney', 'elevenlabs', 'cursor'];
  });

  // Modal Detail Tool
  const [activeToolId, setActiveToolId] = useState<string | null>(null);

  // Active Article reader
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  // User Interactive Ratings persisted in localStorage
  const [userRatings, setUserRatings] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('ai_hub_ratings');
    return saved ? JSON.parse(saved) : {};
  });

  // Rated success flash messages
  const [ratedFlash, setRatedFlash] = useState<string | null>(null);

  // Compare Tool selection (IDs)
  const [compareTools, setCompareTools] = useState<string[]>([]);
  const [compareSearch, setCompareSearch] = useState('');
  const [showCompareDropdown, setShowCompareDropdown] = useState(false);

  // State to simulate tool search within comparison
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Notification / Alert message banner
  const [alertVisible, setAlertVisible] = useState(true);

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [suggestToolCheck, setSuggestToolCheck] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState('');

  // Enforce dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.removeItem('ai_hub_theme');
  }, []);

  // Persist Favorites
  useEffect(() => {
    localStorage.setItem('ai_hub_favs', JSON.stringify(favorites));
  }, [favorites]);

  // Persist User Ratings
  useEffect(() => {
    localStorage.setItem('ai_hub_ratings', JSON.stringify(userRatings));
  }, [userRatings]);

  // Find Tool Details
  const activeTool = useMemo(() => {
    if (!activeToolId) return null;
    return TOOLS.find(t => t.id === activeToolId) || null;
  }, [activeToolId]);

  // Find Article Details
  const activeArticle = useMemo(() => {
    if (!activeArticleId) return null;
    return ARTICLES.find(a => a.id === activeArticleId) || null;
  }, [activeArticleId]);

  // Dynamic Technical SEO and Structured Data injection
  useEffect(() => {
    let title = 'AI Tools Hub | دليل أدوات الذكاء الاصطناعي الشامل لعام 2026';
    let description = 'اكتشف أفضل أدوات الذكاء الاصطناعي المجانية والمدفوعة في مكان واحد. دليل شامل يضم تقييمات، مراجعات، ومقارنات حية لأدوات الكتابة والتصميم والبرمجة.';
    let canonicalUrl = 'https://ai-tools-hub.com/';
    let schema: any = null;

    if (activeTool) {
      // Individual Tool Page SEO
      title = `مراجعة شاملة لـ ${activeTool.arabicName} (${activeTool.name}) لعام 2026 | المميزات والعيوب والبدائل`;
      description = `اقرأ مراجعتنا الشاملة لأداة ${activeTool.arabicName} (${activeTool.name}). تعرف على أهم المميزات، الإيجابيات، السلبيات، خطط الأسعار والبدائل المتاحة.`;
      canonicalUrl = `https://ai-tools-hub.com/tool/${activeTool.id}`;
      
      // SoftwareApplication Schema with Review and Ratings
      schema = [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": activeTool.name,
          "alternateName": activeTool.arabicName,
          "applicationCategory": activeTool.category === 'coding' ? 'DeveloperApplication' : 
                                 activeTool.category === 'image' || activeTool.category === 'video' ? 'DesignApplication' : 
                                 activeTool.category === 'writing' ? 'BusinessApplication' : 'MultimediaApplication',
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": activeTool.priceType === 'free' ? "0" : "20",
            "priceCurrency": "USD",
            "description": activeTool.priceDetail
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": activeTool.rating.toString(),
            "reviewCount": (activeTool.reviewsCount + (userRatings[activeTool.id] ? 1 : 0)).toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "م. سليم العتيبي"
            },
            "datePublished": "2026-07-15",
            "reviewBody": activeTool.longDescription,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": activeTool.rating.toString()
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "الرئيسية",
              "item": "https://ai-tools-hub.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "دليل الأدوات",
              "item": "https://ai-tools-hub.com/directory"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": activeTool.arabicName,
              "item": `https://ai-tools-hub.com/tool/${activeTool.id}`
            }
          ]
        }
      ];
    } else if (activeArticle) {
      // Individual Article Page SEO
      title = `${activeArticle.title} | مدونة الذكاء الاصطناعي`;
      description = activeArticle.summary;
      canonicalUrl = `https://ai-tools-hub.com/article/${activeArticle.id}`;

      // Article Schema
      schema = [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": activeArticle.title,
          "description": activeArticle.summary,
          "datePublished": activeArticle.date,
          "dateModified": "2026-07-15",
          "author": {
            "@type": "Person",
            "name": "د. أميرة منصور",
            "jobTitle": "مستشارة وباحثة في الذكاء الاصطناعي",
            "sameAs": "https://ai-tools-hub.com/reviewers"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AI Tools Hub",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ai-tools-hub.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "الرئيسية",
              "item": "https://ai-tools-hub.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "المدونة",
              "item": "https://ai-tools-hub.com/articles"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": activeArticle.title,
              "item": `https://ai-tools-hub.com/article/${activeArticle.id}`
            }
          ]
        }
      ];
    } else {
      // Tab based SEO
      switch (activeTab) {
        case 'directory':
          if (selectedCategory) {
            const catObj = CATEGORIES.find(c => c.id === selectedCategory);
            title = `دليل ${catObj ? catObj.name : 'أدوات الذكاء الاصطناعي'} الشامل لعام 2026`;
            description = `تصفح أفضل أدوات ومواقع ${catObj ? catObj.name : 'الذكاء الاصطناعي'} مع الفرز السريع والتقييم والبحث التلقائي باللغة العربية.`;
            canonicalUrl = `https://ai-tools-hub.com/directory/${selectedCategory}`;
          } else {
            title = 'دليل أدوات الذكاء الاصطناعي الشامل | تصفح أكثر من 50 أداة ذكية';
            description = 'قاعدة بيانات متكاملة ومصنفة لأقوى برمجيات ومواقع الذكاء الاصطناعي العالمية المخصصة لجميع المجالات والمهن.';
            canonicalUrl = 'https://ai-tools-hub.com/directory';
          }
          break;
        case 'compare':
          title = 'مقارنة أدوات الذكاء الاصطناعي حياً | ChatGPT vs Claude vs Gemini';
          description = 'قارن بدقة بين 3 أدوات ذكاء اصطناعي في نفس الوقت. وازن بين الأسعار، المميزات، الإيجابيات، والسلبيات لاتخاذ القرار المناسب.';
          canonicalUrl = 'https://ai-tools-hub.com/compare';
          break;
        case 'best-of-month':
          title = 'أفضل أدوات الذكاء الاصطناعي الموصى بها لهذا الشهر | خيارات حصرية';
          description = 'قائمة متجددة شهرياً تضم أفضل الأدوات الحائزة على تقييمات استثنائية ونمو متسارع في مجالات التصميم والبرمجة والتسويق.';
          canonicalUrl = 'https://ai-tools-hub.com/best-of-month';
          break;
        case 'articles':
          title = 'مدونة الذكاء الاصطناعي | مقالات، مقارنات، وأدلة تعليمية مفصلة';
          description = 'اقرأ أحدث المقالات والمراجعات الفنية حول الذكاء الاصطناعي لرفع كفاءتك والتعرف على مستجدات الثورة التقنية.';
          canonicalUrl = 'https://ai-tools-hub.com/articles';
          break;
        case 'favorites':
          title = 'مجموعتي المفضلة | أدوات الذكاء الاصطناعي الخاصة بي';
          description = 'قائمتك الشخصية المحفوظة من أفضل وأقوى أدوات الذكاء الاصطناعي لسهولة الوصول إليها في أي وقت.';
          canonicalUrl = 'https://ai-tools-hub.com/favorites';
          break;
        case 'about':
          title = 'من نحن | قصة وأهداف منصة AI Tools Hub';
          description = 'تعرف على رسالتنا ورؤيتنا في إثراء المحتوى العربي التقني وتوفير دليل موثوق ومحايد لأدوات الذكاء الاصطناعي.';
          canonicalUrl = 'https://ai-tools-hub.com/about';
          break;
        case 'privacy':
          title = 'سياسة الخصوصية | AI Tools Hub';
          description = 'سياسة خصوصية مستخدمي دليل أدوات الذكاء الاصطناعي وكيفية الحفاظ على سرية وحماية بياناتك الشخصية.';
          canonicalUrl = 'https://ai-tools-hub.com/privacy';
          break;
        case 'terms':
          title = 'شروط وأحكام الاستخدام | AI Tools Hub';
          description = 'الشروط القانونية والتنظيمية الواجب اتباعها عند استخدام موقع دليل أدوات الذكاء الاصطناعي.';
          canonicalUrl = 'https://ai-tools-hub.com/terms';
          break;
        case 'contact':
          title = 'اتصل بنا | تواصل مباشرة مع فريق عمل AI Tools Hub';
          description = 'تواصل معنا لطرح استفساراتك، اقتراح إضافة أداة ذكية جديدة، أو الإعلان على منصتنا الرائدة.';
          canonicalUrl = 'https://ai-tools-hub.com/contact';
          break;
        case 'reviewers':
          title = 'فريق مراجعي الخبراء والـ E-E-A-T | معايير الموثوقية العالية لمراجعاتنا';
          description = 'تعرف على فريق مراجعي ومهندسي الذكاء الاصطناعي المسؤولين عن كتابة وتقييم الأدوات في منصتنا.';
          canonicalUrl = 'https://ai-tools-hub.com/reviewers';
          break;
        default:
          break;
      }
    }

    // Update document title & metadata dynamically
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('seo-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-schema';
    script.type = 'application/ld+json';

    if (!schema) {
      // Default Website, Organization and FAQ schemas for high visibility
      schema = [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AI Tools Hub",
          "url": "https://ai-tools-hub.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ai-tools-hub.com/directory?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AI Tools Hub",
          "url": "https://ai-tools-hub.com/",
          "logo": "https://ai-tools-hub.com/logo.png",
          "description": "الدليل العربي الأكبر والأول لأدوات الذكاء الاصطناعي ومراجعاتها المفصلة.",
          "sameAs": [
            "https://twitter.com/AIToolsHub",
            "https://linkedin.com/company/aitoolshub"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "ما هو موقع AI Tools Hub؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI Tools Hub هو دليل عربي تفاعلي شامل يهدف لتصنيف وتقييم أفضل وأحدث أدوات ومواقع الذكاء الاصطناعي في شتى المجالات مثل الكتابة والتصميم والبرمجة والإنتاجية."
              }
            },
            {
              "@type": "Question",
              "name": "هل استخدام دليل الأدوات مجاني؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "نعم، المنصة مجانية بالكامل للزوار ولا تتطلب تسجيل حساب لتصفح الأدوات أو قراءة المراجعات والمقارنات."
              }
            },
            {
              "@type": "Question",
              "name": "كيف يتم تقييم أدوات الذكاء الاصطناعي في الموقع؟",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "يتم تقييم الأدوات بناءً على تجارب عملية مكثفة من قبل فريق خبراء ومراجعي الموقع، بالإضافة إلى تصويت وتقييمات زوار الموقع الحقيقية."
              }
            }
          ]
        }
      ];
    }

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

  }, [activeTab, activeToolId, activeArticleId, selectedCategory, userRatings]);


  // Toggle favorite
  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // Handle rating submission
  const handleRateTool = (toolId: string, rating: number) => {
    setUserRatings(prev => ({ ...prev, [toolId]: rating }));
    setRatedFlash(toolId);
    setTimeout(() => {
      setRatedFlash(null);
    }, 3000);
  };

  // Quick navigation to category in directory
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setActiveTab('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered Tools for Directory tab
  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.arabicName.includes(searchQuery) ||
        tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.longDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;
      const matchesPrice = selectedPriceType ? tool.priceType === selectedPriceType : true;
      
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'alpha') {
        return a.name.localeCompare(b.name);
      }
      // default: popular
      const scoreA = (a.isPopular ? 10 : 0) + (a.rating * 5);
      const scoreB = (b.isPopular ? 10 : 0) + (b.rating * 5);
      return scoreB - scoreA;
    });
  }, [searchQuery, selectedCategory, selectedPriceType, sortBy]);

  // Popular tools list for Home tab
  const popularTools = useMemo(() => {
    return TOOLS.filter(t => t.isPopular).slice(0, 4);
  }, []);

  // Best Tools of the Month
  const bestToolsOfMonth = useMemo(() => {
    return TOOLS.filter(t => t.isBestOfMonth);
  }, []);

  // Favorites Tools list
  const favoriteToolsList = useMemo(() => {
    return TOOLS.filter(t => favorites.includes(t.id));
  }, [favorites]);

  // Handle Home Search submit
  const handleHomeSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('directory');
  };

  // Add tool to compare list
  const toggleToolCompare = (id: string) => {
    setCompareTools(prev => {
      if (prev.includes(id)) {
        return prev.filter(toolId => toolId !== id);
      }
      if (prev.length >= 3) {
        alert('يمكنك مقارنة 3 أدوات بحد أقصى في نفس الوقت!');
        return prev;
      }
      return [...prev, id];
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div dir="rtl" className="min-h-screen w-full overflow-x-hidden relative transition-colors duration-300 selection:bg-cyan-500 selection:text-black dark bg-zinc-950 text-zinc-100">
      
      {/* Glow Ambient Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />



      {/* MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Sparkles className="text-zinc-950" size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-l from-zinc-100 via-zinc-200 to-cyan-300 bg-clip-text text-transparent">
                AI Tools Hub
              </span>
              <span className="block text-[10px] text-cyan-400 font-bold tracking-widest mt-[-2px]">
                دليل الذكاء الاصطناعي
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'home', label: 'الرئيسية' },
              { id: 'directory', label: 'دليل الأدوات' },
              { id: 'compare', label: 'المقارنات' },
              { id: 'best-of-month', label: 'أفضل أدوات الشهر' },
              { id: 'articles', label: 'المقالات والمدونة' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as Tab);
                  setActiveArticleId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === item.id && !activeArticleId
                    ? 'bg-zinc-900 text-cyan-400 shadow-inner border border-zinc-800'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Left Controls */}
          <div className="flex items-center gap-3">
            {/* Favorites Badge */}
            <button
              onClick={() => {
                setActiveTab('favorites');
                setActiveArticleId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative p-2.5 rounded-xl border transition-all duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-rose-950/40 text-rose-400 border-rose-900/50'
                  : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:text-rose-400 hover:bg-zinc-900'
              }`}
              title="المفضلة"
            >
              <Heart size={18} className={favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-zinc-950">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 md:hidden rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-0 right-0 bg-zinc-950 border-b border-zinc-900 px-4 py-4 flex flex-col gap-2 md:hidden z-50 shadow-2xl"
            >
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'directory', label: 'دليل الأدوات' },
                { id: 'compare', label: 'المقارنات' },
                { id: 'best-of-month', label: 'أفضل أدوات الشهر' },
                { id: 'articles', label: 'المقالات والمدونة' },
                { id: 'favorites', label: 'المفضلة الخاصة بي' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as Tab);
                    setActiveArticleId(null);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-right px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    activeTab === item.id && !activeArticleId
                      ? 'bg-zinc-900 text-cyan-400 border border-zinc-800'
                      : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* VIEWPORT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VIEW 1: HOME PAGE */}
        {activeTab === 'home' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* HERO SECTION */}
            <div className="relative rounded-3xl bg-radial-gradient from-zinc-900 via-zinc-950 to-zinc-950 border border-zinc-800/80 overflow-hidden py-16 px-6 sm:px-12 text-center space-y-8 shadow-2xl">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-cyan-500/10 rounded-full blur-[80px]" />

              <div className="space-y-4 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-semibold">
                  <Sparkles size={12} className="text-violet-400 animate-pulse" />
                  أكبر دليل عربي تفاعلي لأدوات الذكاء الاصطناعي
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  اكتشف أفضل أدوات الذكاء الاصطناعي في مكان واحد
                </h1>
                <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  منصتنا تجمع وتصنف أقوى أدوات ومواقع الذكاء الاصطناعي العالمية المخصصة للكتابة، التصميم، البرمجة، والإنتاجية مع تقييمات واقعية ومقارنات فنية حية.
                </p>
              </div>

              {/* Instant Search Bar */}
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleHomeSearchSubmit} className="relative flex items-center bg-zinc-900 border-2 border-zinc-800 focus-within:border-cyan-500 rounded-2xl p-1.5 transition-all duration-300 shadow-xl shadow-black/50">
                  <div className="flex-1 flex items-center gap-3 px-3">
                    <Search className="text-zinc-500 shrink-0" size={20} />
                    <input
                      type="text"
                      placeholder="ابحث عن: شات جي بي تي، ميدجورني، كيرسر..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent border-none text-zinc-100 focus:outline-none placeholder-zinc-500 text-sm py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-l from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-zinc-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-cyan-500/10 focus:outline-none shrink-0"
                  >
                    استكشف الأدوات
                  </button>
                </form>

                {/* Hot Keywords */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-zinc-500">
                  <span>عمليات بحث شائعة:</span>
                  {['ChatGPT', 'Midjourney', 'Sora', 'ElevenLabs', 'Cursor'].map(kw => (
                    <button
                      key={kw}
                      onClick={() => {
                        setSearchQuery(kw);
                        setActiveTab('directory');
                      }}
                      className="text-zinc-400 hover:text-cyan-400 hover:bg-zinc-900 px-2 py-1 rounded transition-all border border-zinc-800"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-zinc-900">
                {[
                  { value: '80+', label: 'أداة ذكاء اصطناعي' },
                  { value: '8', label: 'تصنيفات رئيسية' },
                  { value: '100%', label: 'تقييمات واقعية' },
                  { value: 'مجاني', label: 'بدون تسجيل مطلوب' }
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-900/50">
                    <span className="block text-2xl font-black bg-gradient-to-l from-cyan-400 to-violet-400 bg-clip-text text-transparent">{stat.value}</span>
                    <span className="text-xs text-zinc-500 mt-1 block">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Dynamic Home Ad Banner */}
            <HomeAdBanner />

            {/* RAPID EXPLORATION BY CATEGORY */}
            <div className="space-y-6">
              <div className="text-center md:text-right space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">تصفح الأدوات حسب الأقسام</h2>
                <p className="text-sm text-zinc-400 max-w-xl">اختر القسم الذي ترغب به واستكشف الأدوات المتخصصة فيه فوراً وبكل سهولة.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat) => {
                  const categoryToolsCount = TOOLS.filter(t => t.category === cat.id).length;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="group cursor-pointer bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800/80 p-6 rounded-2xl transition-all duration-300 relative overflow-hidden shadow-lg shadow-black/20"
                    >
                      {/* Hover subtle glow color */}
                      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="flex items-center justify-between">
                        <div className="h-12 w-12 rounded-xl bg-zinc-800 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                          <LucideIcon name={cat.iconName} className="text-cyan-400 group-hover:text-cyan-300" size={22} />
                        </div>
                        <span className="text-xs text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-900">
                          {categoryToolsCount} أداة
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <h3 className="font-bold text-md text-zinc-200 group-hover:text-cyan-400 transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* POPULAR AI TOOLS */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-right space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2 justify-start">
                    الأدوات الأكثر شعبية هذا الشهر 🔥
                  </h2>
                  <p className="text-sm text-zinc-400">مجموعة من الأدوات ذات الاستخدام الأعلى عالمياً والتقييم الممتاز من مستخدمينا.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setActiveTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold focus:outline-none self-start"
                >
                  مشاهدة كافة الأدوات (50 أداة)
                  <ChevronLeft size={16} />
                </button>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularTools.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => setActiveToolId(tool.id)}
                    className="group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      {/* Logo & Category */}
                      <div className="flex items-start justify-between gap-2">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-black text-lg ${tool.logoColor}`}>
                          {tool.name.slice(0, 2)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-0.5 rounded-full">
                            {CATEGORIES.find(c => c.id === tool.category)?.name.split(' ')[2] || 'أخرى'}
                          </span>
                          <button
                            onClick={(e) => toggleFavorite(tool.id, e)}
                            className="p-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-rose-400 transition-colors"
                          >
                            <Heart size={14} className={favorites.includes(tool.id) ? 'fill-rose-500 text-rose-500' : ''} />
                          </button>
                        </div>
                      </div>

                      {/* Tool Title */}
                      <div className="mt-4 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-md text-zinc-100 group-hover:text-cyan-400 transition-colors">
                            {tool.arabicName}
                          </h3>
                          <span className="text-xs text-zinc-500 font-mono">({tool.name})</span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed min-h-[36px]">
                          {tool.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Ratings and Pricing footer */}
                    <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={14} className="fill-amber-400" />
                        <span className="font-bold text-zinc-300">{tool.rating}</span>
                        <span className="text-[10px] text-zinc-500">({tool.reviewsCount})</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        tool.priceType === 'free' ? 'bg-emerald-500/10 text-emerald-400' :
                        tool.priceType === 'freemium' ? 'bg-blue-500/10 text-blue-400' :
                        'bg-orange-500/10 text-orange-400'
                      }`}>
                        {tool.priceType === 'free' ? 'مجاني' : tool.priceType === 'freemium' ? 'فريميوم' : 'مدفوع'}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* BEST MONTH TEASER BANNER */}
            <div className="relative rounded-3xl bg-gradient-to-l from-violet-950/40 via-zinc-900 to-cyan-950/40 border border-zinc-800 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-500/10 rounded-full blur-[60px]" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px]" />
              
              <div className="space-y-4 text-center md:text-right max-w-xl">
                <span className="bg-violet-500/20 text-violet-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">تغطية خاصة</span>
                <h3 className="text-2xl sm:text-3xl font-black">أفضل أدوات الذكاء الاصطناعي لهذا الشهر 🏆</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  قمنا بتصفية ومراجعة أفضل 7 أدوات برزت بقوة هذا الشهر وحققت أعلى مستويات الأداء لمساعدتك في زيادة فعاليتك في العمل والدراسة.
                </p>
                <button
                  onClick={() => {
                    setActiveTab('best-of-month');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-all shadow-lg focus:outline-none"
                >
                  استكشف الفائزين لشهر {new Intl.DateTimeFormat('ar-EG', { month: 'long' }).format(new Date())}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 max-w-sm">
                {bestToolsOfMonth.slice(0, 3).map(tool => (
                  <div key={tool.id} className="bg-zinc-950/90 border border-zinc-800 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-md">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold ${tool.logoColor}`}>
                      {tool.name.slice(0, 2)}
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-zinc-100">{tool.arabicName}</h5>
                      <span className="text-[9px] text-cyan-400 font-mono">التقييم {tool.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LATEST SEO ARTICLES PORTAL */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-right space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">المدونة المعرفية وأحدث المقالات 📝</h2>
                  <p className="text-sm text-zinc-400">مقالات ومعلومات مفصلة لمساعدتك في الحصول على أقصى استفادة من الذكاء الاصطناعي.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('articles');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold focus:outline-none self-start"
                >
                  مشاهدة كافة المقالات
                  <ChevronLeft size={16} />
                </button>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ARTICLES.slice(0, 2).map((article) => (
                  <div
                    key={article.id}
                    onClick={() => {
                      setActiveArticleId(article.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-900 hover:border-zinc-850 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xl"
                  >
                    <div className="space-y-4">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="bg-zinc-950 px-2.5 py-1 rounded-full text-zinc-400 border border-zinc-900">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Header Box / Visual */}
                      <div className="h-36 rounded-2xl bg-zinc-950 relative overflow-hidden border border-zinc-900/40">
                        {article.imageUrl ? (
                          <ProgressiveImage
                            src={article.imageUrl}
                            alt={article.title}
                            aspectRatio="h-full w-full"
                            className="group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
                            <LucideIcon name={article.image} size={48} className="text-zinc-600 group-hover:text-cyan-400/80 transition-colors duration-300" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                        {/* Overlay Icon */}
                        <div className="absolute top-3 right-3 h-8 w-8 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 transition-colors">
                          <LucideIcon name={article.image} size={16} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-lg sm:text-xl text-zinc-100 group-hover:text-cyan-400 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                      <span>اقرأ المقال بالكامل</span>
                      <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* VIEW 2: AI TOOLS DIRECTORY */}
        {activeTab === 'directory' && !activeArticleId && (
          <div className="space-y-8">
            
            {/* Header description */}
            <div className="text-right space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">دليل أدوات الذكاء الاصطناعي الشامل</h1>
              <p className="text-sm text-zinc-400 max-w-2xl font-light">
                تصفح واكتشف {TOOLS.length} أداة ذكية مصنفة، مع توفر خيارات التصفية السريعة والفرز والبحث الحي لمساعدتك في العثور على الأداة الأمثل لعملك.
              </p>
            </div>

            {/* Dynamic Tools Ad Banner */}
            <ToolsAdBanner />

            {/* Quick search & Filter triggers */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/40 p-4 rounded-2xl border border-zinc-900">
              
              {/* Search input */}
              <div className="relative w-full md:max-w-md flex items-center bg-zinc-950 border border-zinc-850 rounded-xl p-1 focus-within:border-cyan-500 transition-all">
                <Search size={18} className="text-zinc-500 mx-3 shrink-0" />
                <input
                  type="text"
                  placeholder="ابحث بالاسم أو الوصف أو التقنية..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-zinc-100 text-xs sm:text-sm focus:outline-none py-2 px-1 placeholder-zinc-500"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="p-1.5 text-zinc-500 hover:text-zinc-300">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Order and Mobile filter trigger */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                
                {/* Mobile Filter Trigger */}
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-zinc-950 border border-zinc-850 text-xs font-semibold text-zinc-300 px-4 py-2.5 rounded-xl hover:bg-zinc-900"
                >
                  <SlidersHorizontal size={14} />
                  الفلاتر والأقسام
                </button>

                {/* Sort dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 shrink-0">ترتيب حسب:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-zinc-950 border border-zinc-850 rounded-xl text-xs font-semibold py-2 px-3 focus:outline-none text-zinc-200"
                  >
                    <option value="popular">الأكثر شعبية</option>
                    <option value="rating">الأعلى تقييماً</option>
                    <option value="alpha">أبجدياً (A-Z)</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Split layout: Sidebar + Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              
              {/* Left Column (Desktop Sidebar) */}
              <aside className="hidden lg:block space-y-6">
                
                {/* Categories filtering card */}
                <div className="bg-zinc-900/20 border border-zinc-900 rounded-2xl p-5 space-y-4">
                  <h3 className="font-bold text-xs text-zinc-400 uppercase tracking-wider border-b border-zinc-900 pb-2">الأقسام والـتخصصات</h3>
                  <div className="flex flex-col gap-1.5">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-right px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                        selectedCategory === null 
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                      }`}
                    >
                      كافة الأدوات والمجالات ({TOOLS.length})
                    </button>
                    {CATEGORIES.map(cat => {
                      const count = TOOLS.filter(t => t.category === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full text-right px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between transition-all ${
                            selectedCategory === cat.id 
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <LucideIcon name={cat.iconName} size={14} className="text-zinc-500" />
                            {cat.name.split(' ')[1] || cat.name}
                          </span>
                          <span className="text-[10px] text-zinc-600 bg-zinc-950 px-2 py-0.5 rounded">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price filtering card */}
                <div className="bg-zinc-900/20 border border-zinc-900 rounded-2xl p-5 space-y-4">
                  <h3 className="font-bold text-xs text-zinc-400 uppercase tracking-wider border-b border-zinc-900 pb-2">نموذج التسعير</h3>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: null, label: 'كل الأدوات والأسعار' },
                      { id: 'free', label: 'مجاني بالكامل (Free)' },
                      { id: 'freemium', label: 'فريميوم (Freemium)' },
                      { id: 'paid', label: 'مدفوع بالكامل (Paid)' },
                    ].map(price => (
                      <button
                        key={price.label}
                        onClick={() => setSelectedPriceType(price.id)}
                        className={`w-full text-right px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                          selectedPriceType === price.id 
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                        }`}
                      >
                        {price.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Elegant Sidebar Adspot */}
                <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-4 text-center space-y-3 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-cyan-500/20 text-cyan-400 text-[8px] font-bold px-2 py-0.5 rounded-bl-lg">إعلان موصى به</div>
                  <h5 className="font-bold text-xs text-zinc-300 pt-2">هل تصمم واجهات ويب؟</h5>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    استخدم v0 لتوليد شفرات HTML و React فوراً بنقرة واحدة ورفع جودة مشاريعك!
                  </p>
                  <button 
                    onClick={() => setActiveToolId('v0')}
                    className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-cyan-400 px-4 py-2 rounded-lg w-full transition-all focus:outline-none"
                  >
                    استكشف الأداة الآن
                  </button>
                </div>

              </aside>

              {/* Tools Cards Grid Column */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Filter tags header */}
                {(selectedCategory || selectedPriceType || searchQuery) && (
                  <div className="flex flex-wrap items-center gap-2 text-xs bg-zinc-900/10 p-3 rounded-xl border border-zinc-900">
                    <span className="text-zinc-500">الفلاتر النشطة:</span>
                    {selectedCategory && (
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                        القسم: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                        <button onClick={() => setSelectedCategory(null)} className="hover:text-white focus:outline-none">
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {selectedPriceType && (
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                        السعر: {selectedPriceType === 'free' ? 'مجاني' : selectedPriceType === 'freemium' ? 'فريميوم' : 'مدفوع'}
                        <button onClick={() => setSelectedPriceType(null)} className="hover:text-white focus:outline-none">
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                        البحث: "{searchQuery}"
                        <button onClick={() => setSearchQuery('')} className="hover:text-white focus:outline-none">
                          <X size={12} />
                        </button>
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedPriceType(null);
                        setSearchQuery('');
                      }}
                      className="text-zinc-400 hover:text-white font-bold ml-auto"
                    >
                      مسح الكل
                    </button>
                  </div>
                )}

                {/* Results count */}
                <div className="text-xs text-zinc-500 text-right">
                  تم العثور على <span className="font-bold text-zinc-300">{filteredTools.length}</span> أداة ذكاء اصطناعي.
                </div>

                {/* Empty State */}
                {filteredTools.length === 0 && (
                  <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-12 text-center space-y-4">
                    <AlertTriangle className="text-zinc-600 mx-auto" size={48} />
                    <h3 className="font-extrabold text-lg text-zinc-300">لم نجد أي نتائج تطابق بحثك!</h3>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                      حاول تعديل شروط البحث أو مسح فلاتر الفئة أو التسعير لاستكشاف بقية الأدوات المتوفرة بالدليل.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedPriceType(null);
                        setSearchQuery('');
                      }}
                      className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-4 py-2 rounded-xl hover:text-white"
                    >
                      إعادة تعيين كافة الفلاتر
                    </button>
                  </div>
                )}

                {/* Main tools list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => setActiveToolId(tool.id)}
                      className="group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800/80 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        {/* Header block with logo color & similar recommended toggle */}
                        <div className="flex items-start justify-between gap-2">
                          <div className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center font-black text-lg ${tool.logoColor}`}>
                            {tool.name.slice(0, 2)}
                          </div>
                          
                          <div className="flex items-center gap-1.5">
                            {/* Compare Checkbox */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleToolCompare(tool.id);
                              }}
                              className={`p-1 rounded-lg border text-[10px] font-bold flex items-center gap-1 transition-all focus:outline-none ${
                                compareTools.includes(tool.id)
                                  ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
                                  : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-cyan-400'
                              }`}
                              title="إضافة للمقارنة"
                            >
                              <ArrowRightLeft size={10} />
                              {compareTools.includes(tool.id) ? 'مقارنة ✓' : 'قارن'}
                            </button>

                            {/* Favorite Heart */}
                            <button
                              onClick={(e) => toggleFavorite(tool.id, e)}
                              className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-850 text-zinc-400 hover:text-rose-400 transition-colors focus:outline-none"
                            >
                              <Heart size={14} className={favorites.includes(tool.id) ? 'fill-rose-500 text-rose-500' : ''} />
                            </button>
                          </div>
                        </div>

                        {/* Title block */}
                        <div className="mt-4 space-y-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h3 className="font-bold text-sm text-zinc-100 group-hover:text-cyan-400 transition-colors">
                              {tool.arabicName}
                            </h3>
                            <span className="text-[10px] text-zinc-500 font-mono">({tool.name})</span>
                          </div>
                          
                          {/* Small Category label */}
                          <span className="inline-block text-[9px] bg-zinc-950 text-zinc-500 border border-zinc-900 px-2 py-0.5 rounded">
                            {CATEGORIES.find(c => c.id === tool.category)?.name}
                          </span>

                          <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mt-1 min-h-[48px]">
                            {tool.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Footer containing stars rating and price badges */}
                      <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star size={13} className="fill-amber-400" />
                          <span className="font-bold text-zinc-300">{tool.rating}</span>
                          <span className="text-[10px] text-zinc-600">({tool.reviewsCount})</span>
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          tool.priceType === 'free' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' :
                          tool.priceType === 'freemium' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/15' :
                          'bg-orange-500/10 text-orange-400 border border-orange-500/15'
                        }`}>
                          {tool.priceType === 'free' ? 'مجاني' : tool.priceType === 'freemium' ? 'فريميوم' : 'مدفوع'}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* VIEW 3: COMPARE AI TOOLS PAGE */}
        {activeTab === 'compare' && !activeArticleId && (
          <div className="space-y-8">
            
            {/* Header description */}
            <div className="text-right space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">مقارنة فنية حية بين أدوات الذكاء الاصطناعي</h1>
              <p className="text-sm text-zinc-400 max-w-2xl font-light">
                اختر حتى 3 أدوات من القائمة لمقارنة ميزاتهم الرئيسية، عيوبهم، إيجابياتهم، ونظام تسعيرهم مباشرة جنبًا إلى جنب بأسلوب بصرى مذهل.
              </p>
            </div>

            {/* Selection controls */}
            <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-sm text-zinc-300 font-bold">
                  الأدوات المحددة للمقارنة ({compareTools.length} / 3):
                </span>
                
                {compareTools.length > 0 && (
                  <button
                    onClick={() => setCompareTools([])}
                    className="text-xs text-rose-400 hover:text-rose-300 font-bold focus:outline-none"
                  >
                    تفريغ قائمة المقارنة
                  </button>
                )}
              </div>

              {/* Selected List badges */}
              <div className="flex flex-wrap items-center gap-3">
                {compareTools.map(id => {
                  const t = TOOLS.find(tool => tool.id === id);
                  if (!t) return null;
                  return (
                    <div key={id} className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 flex items-center gap-3">
                      <div className={`h-6 w-6 rounded text-[10px] font-bold flex items-center justify-center ${t.logoColor}`}>
                        {t.name.slice(0, 2)}
                      </div>
                      <span className="text-xs font-bold text-zinc-200">{t.arabicName}</span>
                      <button
                        onClick={() => toggleToolCompare(id)}
                        className="text-zinc-500 hover:text-rose-400 focus:outline-none"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}

                {compareTools.length < 3 && (
                  <div className="relative shrink-0">
                    <button
                      onClick={() => setShowCompareDropdown(!showCompareDropdown)}
                      className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/15 border border-cyan-500/20 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 focus:outline-none"
                    >
                      <Plus size={14} />
                      إضافة أداة للمقارنة
                    </button>

                    {/* Dropdown list of searchable tools */}
                    {showCompareDropdown && (
                      <div className="absolute right-0 top-12 z-50 bg-zinc-950 border border-zinc-800 rounded-2xl w-72 max-h-72 overflow-y-auto p-2 shadow-2xl space-y-1">
                        <input
                          type="text"
                          placeholder="ابحث عن أداة بريد..."
                          value={compareSearch}
                          onChange={(e) => setCompareSearch(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg text-xs p-2 focus:outline-none text-zinc-100 placeholder-zinc-500"
                        />
                        <div className="space-y-0.5 pt-1">
                          {TOOLS.filter(t => 
                            !compareTools.includes(t.id) &&
                            (t.arabicName.includes(compareSearch) || t.name.toLowerCase().includes(compareSearch.toLowerCase()))
                          ).slice(0, 8).map(tool => (
                            <button
                              key={tool.id}
                              onClick={() => {
                                toggleToolCompare(tool.id);
                                setShowCompareDropdown(false);
                                setCompareSearch('');
                              }}
                              className="w-full text-right text-xs px-3 py-2 rounded-lg hover:bg-zinc-900 flex items-center gap-2.5 transition-colors"
                            >
                              <div className={`h-5 w-5 rounded text-[9px] font-bold flex items-center justify-center shrink-0 ${tool.logoColor}`}>
                                {tool.name.slice(0, 2)}
                              </div>
                              <span className="text-zinc-300 font-medium">{tool.arabicName}</span>
                              <span className="text-[10px] text-zinc-500 font-mono">({tool.name})</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Comparison Side-by-Side Table Matrix */}
            {compareTools.length === 0 ? (
              <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-16 text-center space-y-4">
                <ArrowRightLeft className="text-zinc-600 mx-auto" size={48} />
                <h3 className="font-extrabold text-lg text-zinc-300">لم تقم بتحديد أي أدوات للمقارنة بعد!</h3>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                  اختر أدواتك المفضلة من الأسفل أو استخدم زر "إضافة أداة" أعلاه لبدء المقارنة الفنية المباشرة فوراً.
                </p>
                
                {/* Showcase 3 popular tools to compare immediately */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <button
                    onClick={() => setCompareTools(['chatgpt', 'claude', 'gemini'])}
                    className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 text-xs text-zinc-300 px-4 py-2.5 rounded-xl transition-all"
                  >
                    مقارنة: نماذج الكتابة (ChatGPT vs Claude vs Gemini)
                  </button>
                  <button
                    onClick={() => setCompareTools(['midjourney', 'dalle3', 'stablediffusion'])}
                    className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 text-xs text-zinc-300 px-4 py-2.5 rounded-xl transition-all"
                  >
                    مقارنة: توليد الصور (Midjourney vs DALL-E 3 vs Stable Diffusion)
                  </button>
                </div>
              </div>
            ) : (
              <div className="border border-zinc-900 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-right border-collapse">
                    <thead>
                      <tr className="bg-zinc-900 border-b border-zinc-850">
                        <th className="p-4 sm:p-5 text-sm font-black text-cyan-400 w-48">المعيار الفني</th>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          if (!t) return null;
                          return (
                            <th key={id} className="p-4 sm:p-5 text-sm font-extrabold text-zinc-100 min-w-[200px] border-r border-zinc-850">
                              <div className="flex items-center gap-3">
                                <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-black text-sm ${t.logoColor}`}>
                                  {t.name.slice(0, 2)}
                                </div>
                                <div>
                                  <span className="block text-sm font-bold text-zinc-200 leading-tight">{t.arabicName}</span>
                                  <span className="block text-[10px] text-zinc-500 font-mono mt-0.5">{t.name}</span>
                                </div>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 text-xs sm:text-sm">
                      
                      {/* 1. Category */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">التصنيف الرئيسي</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 text-zinc-300 border-r border-zinc-900">
                              <span className="bg-zinc-900 px-2.5 py-1 rounded text-xs">
                                {CATEGORIES.find(c => c.id === t?.category)?.name}
                              </span>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 2. Rating */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">تقييم المستخدمين</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 text-zinc-200 border-r border-zinc-900">
                              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                                <Star size={14} className="fill-amber-400" />
                                {t?.rating}
                                <span className="text-[10px] text-zinc-500">({t?.reviewsCount} تقييم)</span>
                              </div>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 3. Pricing */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">طبيعة التسعير</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 border-r border-zinc-900">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                t?.priceType === 'free' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' :
                                t?.priceType === 'freemium' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/15' :
                                'bg-orange-500/10 text-orange-400 border border-orange-500/15'
                              }`}>
                                {t?.priceType === 'free' ? 'مجاني بالكامل' : t?.priceType === 'freemium' ? 'تجربة مجانية / فريميوم' : 'مدفوع'}
                              </span>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 4. Price detail */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">تفاصيل الباقات والاشتراك</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 text-zinc-300 font-medium border-r border-zinc-900 leading-relaxed">
                              {t?.priceDetail}
                            </td>
                          );
                        })}
                      </tr>

                      {/* 5. Key Features */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">أبرز الخصائص الفنية</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 text-zinc-300 border-r border-zinc-900 leading-relaxed">
                              <ul className="list-disc list-inside space-y-1">
                                {t?.features.map((feat, idx) => (
                                  <li key={idx} className="text-xs">{feat}</li>
                                ))}
                              </ul>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 6. Pros */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">الإيجابيات والمميزات</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 border-r border-zinc-900 text-emerald-400 leading-relaxed">
                              <ul className="space-y-1">
                                {t?.pros.map((p, idx) => (
                                  <li key={idx} className="text-xs flex items-center gap-1.5 justify-start">
                                    <Check size={12} className="shrink-0 text-emerald-500" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 7. Cons */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">السلبيات والعيوب</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 border-r border-zinc-900 text-rose-400 leading-relaxed">
                              <ul className="space-y-1">
                                {t?.cons.map((c, idx) => (
                                  <li key={idx} className="text-xs flex items-center gap-1.5 justify-start">
                                    <span className="shrink-0 text-rose-500">•</span>
                                    {c}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          );
                        })}
                      </tr>

                      {/* 8. Links & Actions */}
                      <tr>
                        <td className="p-4 sm:p-5 font-bold text-zinc-400 bg-zinc-900/10">الروابط والإجراءات</td>
                        {compareTools.map(id => {
                          const t = TOOLS.find(tool => tool.id === id);
                          return (
                            <td key={id} className="p-4 sm:p-5 border-r border-zinc-900 space-y-2">
                              <button
                                onClick={() => setActiveToolId(id)}
                                className="w-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:text-cyan-400 font-bold text-xs py-2 rounded-xl transition-all block text-center"
                              >
                                عرض المراجعة الشاملة
                              </button>
                              <a
                                href={t?.websiteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-black text-xs py-2 rounded-xl transition-all block text-center flex items-center justify-center gap-1 focus:outline-none"
                              >
                                زيارة الموقع الرسمي
                                <ExternalLink size={12} />
                              </a>
                            </td>
                          );
                        })}
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

        {/* VIEW 4: BEST TOOLS OF THE MONTH */}
        {activeTab === 'best-of-month' && !activeArticleId && (
          <div className="space-y-8">
            
            {/* Header description */}
            <div className="text-right space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">أفضل أدوات الذكاء الاصطناعي لهذا الشهر 🏆</h1>
              <p className="text-sm text-zinc-400 max-w-2xl font-light">
                قائمة حصرية منسقة ومحدثة شهرياً بأفضل الأدوات الذكية التي أثبتت جدارتها وحققت قفزات نوعية في مجالاتها لزيادة الكفاءة والأداء المهني.
              </p>
            </div>

            {/* Showcase items list with Rank */}
            <div className="space-y-8">
              {bestToolsOfMonth.map((tool, index) => (
                <div
                  key={tool.id}
                  className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start justify-between gap-6 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 bg-violet-600 text-zinc-950 font-black text-sm px-4 py-2.5 rounded-br-2xl tracking-widest uppercase">
                    المركز #{index + 1}
                  </div>

                  <div className="flex-1 space-y-5 text-right pt-4 md:pt-0">
                    
                    {/* Tool Branding Header */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-black text-xl ${tool.logoColor}`}>
                        {tool.name.slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-xl text-zinc-100 group-hover:text-cyan-400 transition-all">
                            {tool.arabicName}
                          </h3>
                          <span className="text-xs text-zinc-500 font-mono">({tool.name})</span>
                        </div>
                        <span className="inline-block text-xs bg-zinc-950 text-cyan-400 px-3 py-0.5 rounded-full mt-1 border border-zinc-900">
                          {CATEGORIES.find(c => c.id === tool.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Why we chose it */}
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider block">لماذا اخترناها كأفضل أداة؟</span>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        تتميز {tool.arabicName} بقدراتها الفائقة في {tool.shortDescription} مع تقديم تجربة مستخدم سلسة خالية من التعقيدات مقارنة بالمنافسين في نفس المجال.
                      </p>
                    </div>

                    {/* Features list bullet */}
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-zinc-400 block">أبرز مواصفاتها:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                        {tool.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 justify-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating & Action buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                        <Star size={16} className="fill-amber-400" />
                        {tool.rating} / 5
                        <span className="text-xs text-zinc-500">({tool.reviewsCount} تقييم)</span>
                      </div>
                      <span className="text-xs text-zinc-400 font-medium">
                        طبيعة السعر: <span className="font-bold text-zinc-200">{tool.priceDetail}</span>
                      </span>
                    </div>

                  </div>

                  {/* Right hand layout for buttons */}
                  <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 self-stretch justify-center md:justify-start">
                    <button
                      onClick={() => setActiveToolId(tool.id)}
                      className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:text-cyan-400 font-bold text-xs py-3 px-6 rounded-xl transition-all text-center focus:outline-none"
                    >
                      عرض المراجعة والعيوب بالتفصيل
                    </button>
                    <a
                      href={tool.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-black text-xs py-3 px-6 rounded-xl transition-all text-center flex items-center justify-center gap-1 focus:outline-none"
                    >
                      زيارة الموقع الرسمي
                      <ExternalLink size={12} />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* VIEW 5: SEO ARTICLES BLOCK & READER */}
        {activeTab === 'articles' && (
          <div className="space-y-8">
            
            {/* If a specific article is selected, render the Article Reader view */}
            {activeArticle ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto space-y-8 bg-zinc-900/10 border border-zinc-900 rounded-3xl p-6 sm:p-10 shadow-2xl text-right relative overflow-hidden"
              >
                {/* Back button */}
                <button
                  onClick={() => setActiveArticleId(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold focus:outline-none mb-4"
                >
                  <ChevronRight size={16} />
                  الرجوع لكافة المقالات
                </button>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <span className="bg-zinc-950 px-3 py-1 rounded-full text-zinc-400 border border-zinc-900">
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    وقت القراءة: {activeArticle.readTime}
                  </span>
                </div>

                {/* Banner illustration */}
                <div className="h-48 sm:h-64 rounded-3xl bg-zinc-950 relative overflow-hidden border border-zinc-900">
                  {activeArticle.imageUrl ? (
                    <ProgressiveImage
                      src={activeArticle.imageUrl}
                      alt={activeArticle.title}
                      aspectRatio="h-full w-full"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
                      <LucideIcon name={activeArticle.image} size={64} className="text-cyan-500/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  {/* Overlay Icon */}
                  <div className="absolute bottom-4 right-4 h-12 w-12 rounded-xl bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-cyan-400 shadow-lg">
                    <LucideIcon name={activeArticle.image} size={24} />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-100 leading-tight">
                  {activeArticle.title}
                </h1>

                {/* Body Content with Cairo line height friendliness */}
                <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6 font-light">
                  {activeArticle.content.split('\n\n').map((paragraph, i) => {
                    // Check if paragraph is heading
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={i} className="text-lg sm:text-xl font-bold text-cyan-400 pt-4 border-r-2 border-cyan-500 pr-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={i} className="list-disc list-inside space-y-2 pr-4 text-zinc-400">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <li key={liIdx} className="text-xs sm:text-sm">
                              {li.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={i} className="whitespace-pre-line text-zinc-300 font-light">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Share bar at the bottom */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                  <span>تم النشر بواسطة فريق عمل AI Tools Hub</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('تم نسخ رابط المقال للمشاركة!');
                    }}
                    className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-xl flex items-center gap-1.5 focus:outline-none transition-all"
                  >
                    <Share2 size={12} />
                    نسخ رابط المقال
                  </button>
                </div>

              </motion.div>
            ) : (
              <div className="space-y-8">
                
                {/* Header description */}
                <div className="text-right space-y-2">
                  <h1 className="text-3xl font-extrabold tracking-tight">المدونة المعرفية وأحدث المقالات 📝</h1>
                  <p className="text-sm text-zinc-400 max-w-2xl font-light">
                    نقدم لك شروحات عميقة وأدلة سيو متخصصة لمساعدتك في فهم الذكاء الاصطناعي، ومقارنات موضوعية لاختيار الأداة الأفضل لمشروعك.
                  </p>
                </div>

                {/* Articles Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {ARTICLES.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => {
                        setActiveArticleId(article.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-900 hover:border-zinc-850 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xl"
                    >
                      <div className="space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-zinc-500">
                          <span className="bg-zinc-950 px-2.5 py-1 rounded-full text-zinc-400 border border-zinc-900">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Banner graphic */}
                        <div className="h-36 rounded-2xl bg-zinc-950 relative overflow-hidden border border-zinc-900/40">
                          {article.imageUrl ? (
                            <ProgressiveImage
                              src={article.imageUrl}
                              alt={article.title}
                              aspectRatio="h-full w-full"
                              className="group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
                              <LucideIcon name={article.image} size={48} className="text-zinc-600 group-hover:text-cyan-400/80 transition-colors duration-300" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                          {/* Overlay Icon */}
                          <div className="absolute top-3 right-3 h-8 w-8 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 transition-colors">
                            <LucideIcon name={article.image} size={16} />
                          </div>
                        </div>

                        {/* Content text */}
                        <h3 className="font-extrabold text-lg sm:text-xl text-zinc-100 group-hover:text-cyan-400 transition-colors leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                          {article.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                        <span>اقرأ المقال كاملاً</span>
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        )}

        {/* VIEW 6: FAVORITES PAGE */}
        {activeTab === 'favorites' && !activeArticleId && (
          <div className="space-y-8">
            
            {/* Header description */}
            <div className="text-right space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">أدواتي المفضلة والمحفوظة ❤️</h1>
              <p className="text-sm text-zinc-400 max-w-2xl font-light">
                هنا تجد كافة أدوات الذكاء الاصطناعي التي قمت بالإعجاب بها وحفظها للوصول السريع إليها أثناء جلسات العمل والمذاكرة اليومية.
              </p>
            </div>

            {/* If list is empty */}
            {favoriteToolsList.length === 0 ? (
              <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-16 text-center space-y-5">
                <Heart className="text-zinc-700 mx-auto animate-pulse" size={56} />
                <h3 className="font-extrabold text-lg text-zinc-300">قائمة المفضلة فارغة حالياً!</h3>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                  استكشف دليل الأدوات الذكية المتاحة بالمنصة، واضغط على أيقونة القلب على أي أداة لحفظها وعرضها في هذه الصفحة فوراً.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setActiveTab('directory');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg focus:outline-none transition-all"
                >
                  استكشف دليل الأدوات الآن
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteToolsList.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => setActiveToolId(tool.id)}
                    className="group cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      {/* Logo and header favorite button */}
                      <div className="flex items-start justify-between gap-2">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-black text-lg ${tool.logoColor}`}>
                          {tool.name.slice(0, 2)}
                        </div>
                        <button
                          onClick={(e) => toggleFavorite(tool.id, e)}
                          className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-rose-500 transition-colors focus:outline-none"
                        >
                          <BookmarkMinus size={14} className="text-rose-500" />
                        </button>
                      </div>

                      {/* Info Title */}
                      <div className="mt-4 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-sm text-zinc-100 group-hover:text-cyan-400 transition-all">
                            {tool.arabicName}
                          </h3>
                          <span className="text-[10px] text-zinc-500 font-mono">({tool.name})</span>
                        </div>
                        <span className="inline-block text-[9px] bg-zinc-950 text-zinc-500 border border-zinc-900 px-2.5 py-0.5 rounded">
                          {CATEGORIES.find(c => c.id === tool.category)?.name}
                        </span>
                        <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mt-1 min-h-[48px]">
                          {tool.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Pricing footer */}
                    <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={13} className="fill-amber-400" />
                        <span className="font-bold text-zinc-300">{tool.rating}</span>
                      </div>
                      <span className="text-[10px] font-bold text-cyan-400">{tool.priceDetail}</span>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* VIEW: ABOUT US (من نحن) */}
        {activeTab === 'about' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-4xl mx-auto text-right"
          >
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-l from-zinc-100 to-cyan-300 bg-clip-text text-transparent">من نحن - AI Tools Hub</h1>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                مرحباً بكم في منصة AI Tools Hub، الوجهة العربية الأولى والدليل الشامل لأدوات ومواقع الذكاء الاصطناعي.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl space-y-3">
                <h3 className="font-bold text-md text-cyan-400 flex items-center gap-2 justify-start">
                  <Sparkles size={18} />
                  رؤيتنا
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  نسعى لتمكين الأفراد، الشركات، والمطورين في العالم العربي من الاستفادة القصوى من تطبيقات الذكاء الاصطناعي من خلال توفير مراجعات دقيقة، ومقارنات موضوعية، وتسهيل الوصول للأدوات الأنسب لمهامهم اليومية.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl space-y-3">
                <h3 className="font-bold text-md text-cyan-400 flex items-center gap-2 justify-start">
                  <Check size={18} />
                  رسالتنا
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  سد فجوة المحتوى العربي في مجالات التقنيات الناشئة والذكاء الاصطناعي التوليدي عبر تقديم دليل موثوق ومحايد يخضع لعمليات تقييم وفحص بشري دقيق من قبل خبراء وممارسين فعليين.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-2xl space-y-4">
              <h3 className="font-bold text-lg text-zinc-200">قيمنا الأساسية</h3>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-light">
                <p><strong className="text-zinc-200">• الحيادية والموثوقية:</strong> لا نروج لأي أداة بشكل مدفوع دون فحص حقيقي؛ مصلحة المستخدم ومصداقية التقييم هي أولويتنا الكبرى.</p>
                <p><strong className="text-zinc-200">• الجودة العالية:</strong> نسعى لتوفير أعلى مستوى من الشروح والتفاصيل الفنية لمساعدة الزائر على الفهم العميق دون الحاجة لقراءة توثيقات طويلة.</p>
                <p><strong className="text-zinc-200">• التطوير المستمر:</strong> نحدث قاعدة بياناتنا ومقارناتنا على مدار الساعة لمواكبة التغيرات الهائلة والمستمرة في عالم الذكاء الاصطناعي.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: REVIEWERS (فريق المراجعين والـ E-E-A-T) */}
        {activeTab === 'reviewers' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-4xl mx-auto text-right"
          >
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-l from-zinc-100 to-cyan-300 bg-clip-text text-transparent">فريق الخبراء والمراجعين 👥</h1>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                في AI Tools Hub، نلتزم بأعلى معايير الـ E-E-A-T (الخبرة، التجربة، الموثوقية، والمصداقية). تتم كتابة جميع مراجعات الأدوات ومقالاتنا ومقارناتنا وفحصها بدقة بواسطة فريق من مهندسي ومستشاري الذكاء الاصطناعي المختصين.
              </p>
            </div>

            {/* Author Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'م. سليم العتيبي',
                  title: 'مستشار ذكاء اصطناعي ومهندس برمجيات',
                  desc: 'خبرة تزيد عن 10 سنوات في البرمجة وتطوير النظم. متخصص في تقييم أدوات البرمجة والأتمتة وكفاءة نماذج الأكواد والإنتاجية.',
                  rating: 'خبير أدوات البرمجة والأتمتة'
                },
                {
                  name: 'د. أميرة منصور',
                  title: 'أستاذة علوم البيانات واللغويات الحاسوبية',
                  desc: 'باحثة أكاديمية متخصصة في نماذج معالجة اللغة الطبيعية (NLP). تشرف على تقييم روبوتات الدردشة، الفهم السياقي، وأدوات الكتابة باللغة العربية.',
                  rating: 'خبيرة النماذج اللغوية وصناعة المحتوى'
                },
                {
                  name: 'أ. رامي فواز',
                  title: 'مخرج ومصمم واجهات إبداعي',
                  desc: 'أكثر من 8 سنوات في التصميم والمونتاج السينمائي. متخصص في اختبار أدوات توليد الصور، الميديا الرقمية، الرسم الفني، وتطبيقات الفيديو بالذكاء الاصطناعي.',
                  rating: 'خبير أدوات التصميم والفنون الرقمية'
                }
              ].map((author, index) => (
                <div key={index} className="bg-zinc-900/40 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                  <div className="space-y-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-zinc-950 text-lg">
                      {author.name.split(' ')[1]?.slice(0, 1) || 'أ'}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-md text-zinc-100 group-hover:text-cyan-400 transition-colors">{author.name}</h3>
                      <span className="text-[10px] text-zinc-500 block mt-0.5">{author.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {author.desc}
                    </p>
                  </div>
                  <span className="inline-block text-[10px] bg-zinc-950 text-cyan-400 border border-zinc-900 px-3 py-1 rounded-full text-center mt-5 font-semibold">
                    {author.rating}
                  </span>
                </div>
              ))}
            </div>

            {/* Our review workflow */}
            <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-2xl space-y-4">
              <h3 className="font-bold text-lg text-zinc-200">منهجية المراجعة والاختبار لدينا (Review Workflow)</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                قبل إدراج أي أداة أو كتابة مراجعة لها في دليلنا، نلتزم بالخطوات الصارمة التالية لضمان الحصول على جودة معلومات استثنائية:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-light">
                <p><strong className="text-cyan-400">1. تجربة عملية فعلية:</strong> نقوم بشراء أو الاشتراك في النسخة المدفوعة وتجربة الأداة لمدة لا تقل عن 15 ساعة عمل حقيقية في مشاريع فعلية.</p>
                <p><strong className="text-cyan-400">2. اختبار توافق اللغة العربية:</strong> نقوم باختبار الأداة بالكامل في معالجة وفهم وإنتاج المحتوى باللغة العربية وتحديد مستويات الفهم السياقي والترجمة بدقة.</p>
                <p><strong className="text-cyan-400">3. مقارنة كفاءة السعر:</strong> نوازن بين المزايا الفعلية التي تقدمها الأداة وسعر الاشتراك الشهري لمعرفة ما إذا كانت تستحق الاستثمار مقارنة بالبدائل المجانية والمفتوحة المصدر.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: CONTACT US (اتصل بنا) */}
        {activeTab === 'contact' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-2xl mx-auto text-right"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-l from-zinc-100 to-cyan-300 bg-clip-text text-transparent">اتصل بنا ✉️</h1>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                لديك استفسار، اقتراح لإضافة أداة ذكاء اصطناعي جديدة، أو رغبة في التعاون الإعلاني؟ يسعدنا تواصلك المباشر معنا!
              </p>
            </div>

            {contactSuccess ? (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-emerald-500/10 border-2 border-emerald-500/20 rounded-3xl p-8 text-center space-y-4"
              >
                <span className="text-4xl">✓</span>
                <h3 className="font-extrabold text-xl text-emerald-400">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                  شكراً جزيلاً لتواصلك مع AI Tools Hub. لقد تسلمنا رسالتك وسيقوم أحد ممثلي فريق الدعم أو المراجعين بالرد عليك عبر بريدك الإلكتروني خلال 24 ساعة كحد أقصى.
                </p>
                <button
                  onClick={() => {
                    setContactSuccess(false);
                    setContactName('');
                    setContactEmail('');
                    setContactSubject('');
                    setContactMessage('');
                    setSuggestToolCheck(false);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs px-6 py-2.5 rounded-xl transition-all"
                >
                  إرسال رسالة جديدة
                </button>
              </motion.div>
            ) : (
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!contactName || !contactEmail || !contactMessage) {
                    alert('يرجى ملء كافة الحقول الأساسية قبل الإرسال!');
                    return;
                  }

                  setContactLoading(true);
                  setContactError('');

                  try {
                    const response = await fetch('https://formsubmit.co/ajax/1000shabel@gmail.com', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                        name: contactName,
                        email: contactEmail,
                        subject: contactSubject || 'رسالة جديدة من دليل أدوات الذكاء الاصطناعي',
                        message: contactMessage,
                        suggest_tool: suggestToolCheck ? 'نعم (اقتراح أداة)' : 'لا (استفسار عام)',
                        _honey: '', // Honeypot field for spam prevention
                        _subject: contactSubject || 'رسالة جديدة من دليل أدوات الذكاء الاصطناعي'
                      })
                    });

                    if (response.ok) {
                      const data = await response.json();
                      if (data.success === 'true' || data.success === true) {
                        setContactSuccess(true);
                      } else {
                        throw new Error(data.message || 'فشل الخادم في معالجة طلبك.');
                      }
                    } else {
                      throw new Error('فشل الاتصال بالخادم، يرجى المحاولة لاحقاً.');
                    }
                  } catch (err: any) {
                    console.error('Error submitting form:', err);
                    const errMsg = err?.message || '';
                    if (errMsg.includes('Activation') || errMsg.includes('Activate') || errMsg.includes('active')) {
                      setContactError(
                        'تم إرسال رابط تفعيل النموذج إلى بريدك الإلكتروني (1000shabel@gmail.com). يرجى فتح البريد والضغط على رابط "Activate Form" لتفعيل استقبال الرسائل بنجاح!'
                      );
                    } else {
                      setContactError(
                        'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مجدداً أو إرسال بريد إلكتروني مباشر إلى: 1000shabel@gmail.com'
                      );
                    }
                  } finally {
                    setContactLoading(false);
                  }
                }}
                className="bg-zinc-900/40 border border-zinc-900 p-6 sm:p-8 rounded-3xl space-y-5 shadow-2xl"
              >
                {contactError && (
                  <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs p-4 rounded-xl leading-relaxed text-right">
                    ⚠️ {contactError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-400">الاسم الكامل <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      required
                      disabled={contactLoading}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="أدخل اسمك الكريم..."
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 disabled:opacity-50 rounded-xl p-3 text-xs text-zinc-100 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-400">البريد الإلكتروني <span className="text-rose-500">*</span></label>
                    <input
                      type="email"
                      required
                      disabled={contactLoading}
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 disabled:opacity-50 rounded-xl p-3 text-xs text-zinc-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-400">الموضوع / عنوان الرسالة</label>
                  <input
                    type="text"
                    disabled={contactLoading}
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="ما هو موضوع استفسارك؟..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 disabled:opacity-50 rounded-xl p-3 text-xs text-zinc-100 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-400">نص الرسالة أو تفاصيل الأداة المقترحة <span className="text-rose-500">*</span></label>
                  <textarea
                    required
                    rows={5}
                    disabled={contactLoading}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="اكتب هنا تفاصيل استفسارك أو اسم الأداة الذكية ورابطها ومميزاتها لكي نقوم بمراجعتها..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 disabled:opacity-50 rounded-xl p-3 text-xs text-zinc-100 focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Suggested tool checkbox */}
                <div className="flex items-center gap-2 justify-start cursor-pointer">
                  <input
                    id="suggest-tool"
                    type="checkbox"
                    disabled={contactLoading}
                    checked={suggestToolCheck}
                    onChange={(e) => setSuggestToolCheck(e.target.checked)}
                    className="h-4 w-4 bg-zinc-950 border-zinc-800 rounded text-cyan-500 disabled:opacity-50 focus:ring-0 focus:ring-offset-0"
                  />
                  <label htmlFor="suggest-tool" className="text-xs text-zinc-400 font-light select-none">هذه الرسالة تهدف لاقتراح أداة ذكاء اصطناعي جديدة لإدراجها بالدليل.</label>
                </div>

                <button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full bg-gradient-to-l from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-zinc-950 font-black text-sm py-3.5 rounded-xl transition-all shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {contactLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </>
                  ) : (
                    'إرسال الرسالة الآن'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}

        {/* VIEW: PRIVACY POLICY (سياسة الخصوصية) */}
        {activeTab === 'privacy' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-3xl mx-auto text-right font-light text-zinc-300 leading-relaxed"
          >
            <div className="space-y-2 border-b border-zinc-900 pb-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100">سياسة الخصوصية 🔒</h1>
              <p className="text-xs text-zinc-500">آخر تحديث: 15 يوليو 2026</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm">
              <p>
                نقدر في منصة <strong>AI Tools Hub</strong> مخاوفكم واهتمامكم بشأن خصوصية وسرية بياناتكم على الإنترنت. لقد تم إعداد هذه السياسة لمساعدتكم في فهم طبيعة البيانات التي نقوم بتجميعها عند زيارتكم لموقعنا وكيفية تعاملنا مع هذه البيانات الشخصية.
              </p>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">1. تصفح الموقع وسرية المعلومات</h3>
                <p>
                  لم نقم بتصميم هذا الموقع من أجل تجميع بياناتكم الشخصية من جهاز الكمبيوتر الخاص بكم أو هاتفك أثناء تصفحكم للموقع، وإنما سيتم فقط استخدام البيانات المقدمة من قبلكم بمعرفتكم ومحض إرادتكم (مثل تعبئة نموذج الاتصال أو إرسال تقييمات للأدوات).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">2. ملفات تعريف الارتباط والذاكرة المحلية (LocalStorage & Cookies)</h3>
                <p>
                  يستخدم الموقع تقنية الذاكرة المحلية بمتصفحكم <code>localStorage</code> لحفظ تفضيلاتكم الشخصية (مثل الأدوات التي أضفتموها للمفضلة، والتقييمات والتصويتات التي شاركتم فيها للأدوات). هذه البيانات مخزنة بالكامل على جهازكم الشخصي ولا يتم رفعها أو تداولها على أي خوادم خارجية لضمان أعلى مستويات الأمان والخصوصية المطلقة.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">3. الروابط الخارجية للمواقع والأدوات</h3>
                <p>
                  يحتوي موقعنا على روابط لمواقع إلكترونية وأدوات خارجية (مثل مواقع ChatGPT, Midjourney, Cursor وغيرها). يرجى العلم بأننا لسنا مسؤولين عن سياسة الخصوصية أو المحتوى الخاص بتلك المواقع الخارجية. ننصحكم بقراءة سياسات الخصوصية الخاصة بتلك المواقع عند زيارتها.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">4. تعديلات سياسة الخصوصية</h3>
                <p>
                  نحتفظ بالحق في تعديل بنود وشروط سياسة الخصوصية هذه في أي وقت إذا لزم الأمر. سيتم نشر التحديثات هنا على هذه الصفحة لكي تكونوا على دراية مستمرة بالبيانات التي نجمعها وكيف نستخدمها.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: TERMS OF USE (شروط الاستخدام) */}
        {activeTab === 'terms' && !activeArticleId && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 max-w-3xl mx-auto text-right font-light text-zinc-300 leading-relaxed"
          >
            <div className="space-y-2 border-b border-zinc-900 pb-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100">شروط وأحكام الاستخدام ⚖️</h1>
              <p className="text-xs text-zinc-500">آخر تحديث: 15 يوليو 2026</p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm">
              <p>
                مرحباً بكم في موقع <strong>AI Tools Hub</strong>. يرجى قراءة شروط الاستخدام هذه بعناية قبل البدء في تصفح الموقع أو الاستفادة من مراجعات ومقارنات الأدوات المدرجة به. إن استخدامكم للموقع يعني موافقتكم الضمنية على الالتزام بهذه الشروط والأحكام.
              </p>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">1. استخدام محتوى الموقع</h3>
                <p>
                  كافة النصوص، المقالات، المراجعات، الرسوم التوضيحية، وتنسيقات المقارنات المدرجة بالمنصة هي ملك فكري حصري لمنصة AI Tools Hub ويحميها قانون الملكية الفكرية. يُمنع منعاً باتاً نسخ أو إعادة نشر المقالات أو أجزاء منها في مواقع أخرى دون الحصول على إذن كتابي مسبق أو الإشارة المباشرة والصريحة للمصدر برابط تتبع (Hyperlink).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">2. إخلاء المسؤولية عن أداء الأدوات</h3>
                <p>
                  إن المراجعات والتقييمات والمعلومات الفنية والأسعار المنشورة تعبر عن رأي المراجعين وتجربتهم الشخصية للأدوات في تاريخ المراجعة. نحن لا نضمن بقاء الأسعار أو الميزات مطابقة لما هو منشور نظراً للتحديثات اليومية التي تجريها الشركات المالكة للأدوات. يجب على المستخدم التحقق من شروط وأسعار الأداة بزيارة موقعها الرسمي قبل إتمام عمليات الشراء أو الاشتراك.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-md text-cyan-400">3. السلوك والاستخدام المقبول</h3>
                <p>
                  يجب على زوار المنصة الامتناع عن محاولة اختراق الموقع أو التلاعب بنظام التصويت والتقييمات للأدوات بأي شكل من الأشكال. نحتفظ بالحق في اتخاذ التدابير التقنية المناسبة لمنع أي تلاعب أو استخدام يضر بسلامة خوادم المنصة أو صحة البيانات المنشورة عليها.
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-900/80 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          
          {/* Quick grid links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: Intro */}
            <div className="space-y-4 text-right">
              <div className="flex items-center gap-3 justify-start">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center">
                  <Sparkles size={16} className="text-zinc-950" />
                </div>
                <span className="text-md font-bold text-zinc-100">AI Tools Hub</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                دليل عربي شامل ومتجاوب يهدف لنشر الوعي التقني وجمع أفضل وأحدث برامج وتطبيقات وأدوات الذكاء الاصطناعي في شتى المجالات والمهن.
              </p>
            </div>

            {/* Column 2: Categories */}
            <div className="space-y-3">
              <h5 className="font-bold text-xs text-zinc-400 uppercase tracking-wider">الأقسام الأكثر تصفحاً</h5>
              <div className="flex flex-col gap-1.5 text-xs text-zinc-500">
                {CATEGORIES.slice(0, 4).map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="hover:text-cyan-400 text-right focus:outline-none"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Navigation quick links */}
            <div className="space-y-3">
              <h5 className="font-bold text-xs text-zinc-400 uppercase tracking-wider">وصلات سريعة</h5>
              <div className="flex flex-col gap-1.5 text-xs text-zinc-500">
                <button onClick={() => { setActiveTab('home'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">الرئيسية</button>
                <button onClick={() => { setActiveTab('directory'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">دليل الأدوات</button>
                <button onClick={() => { setActiveTab('compare'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">مقارنة الأدوات</button>
                <button onClick={() => { setActiveTab('best-of-month'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">أفضل أدوات الشهر</button>
                <button onClick={() => { setActiveTab('about'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">من نحن</button>
                <button onClick={() => { setActiveTab('reviewers'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">فريق الخبراء (E-E-A-T)</button>
                <button onClick={() => { setActiveTab('contact'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 text-right focus:outline-none">اتصل بنا</button>
              </div>
            </div>

          </div>

          {/* Copyright notice and credits */}
          <div className="pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <span>جميع الحقوق محفوظة © {currentYear} لمنصة AI Tools Hub</span>
            <div className="flex items-center gap-4">
              <button onClick={() => { setActiveTab('privacy'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-400 text-right focus:outline-none">سياسة الخصوصية</button>
              <button onClick={() => { setActiveTab('terms'); setActiveArticleId(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-400 text-right focus:outline-none">شروط الاستخدام</button>
            </div>
          </div>

        </div>
      </footer>

      {/* DETAILED TOOL MODAL */}
      <AnimatePresence>
        {activeTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveToolId(null);
                  setRatedFlash(null);
                }}
                className="absolute top-4 left-4 p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors border border-zinc-900 z-10 focus:outline-none"
              >
                <X size={16} />
              </button>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 text-right">
                
                {/* Right/Top section: Logo, Name, Meta info */}
                <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-zinc-800 lg:pl-6">
                  
                  <div className="text-center space-y-3 pt-6 lg:pt-0">
                    {/* Big stylized logo icon */}
                    <div className={`h-20 w-20 mx-auto rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl ${activeTool.logoColor}`}>
                      {activeTool.name.slice(0, 2)}
                    </div>
                    
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-zinc-100">{activeTool.arabicName}</h2>
                      <span className="text-xs text-zinc-500 font-mono block">({activeTool.name})</span>
                    </div>

                    <span className="inline-block text-xs bg-zinc-950 text-cyan-400 px-3 py-1 rounded-full border border-zinc-900 font-medium">
                      {CATEGORIES.find(c => c.id === activeTool.category)?.name}
                    </span>
                  </div>

                  {/* Pricing metrics */}
                  <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-900 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">نظام الأسعار:</span>
                      <span className={`font-bold uppercase ${
                        activeTool.priceType === 'free' ? 'text-emerald-400' :
                        activeTool.priceType === 'freemium' ? 'text-blue-400' :
                        'text-orange-400'
                      }`}>
                        {activeTool.priceType === 'free' ? 'مجاني بالكامل' : activeTool.priceType === 'freemium' ? 'فريميوم / تجربة' : 'مدفوع'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">التفاصيل المالية:</span>
                      <span className="font-semibold text-zinc-300">{activeTool.priceDetail}</span>
                    </div>
                  </div>

                  {/* Ratings stats */}
                  <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-900 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">تقييم الأداة العام:</span>
                      <span className="font-extrabold text-amber-400 flex items-center gap-1">
                        <Star size={14} className="fill-amber-400" />
                        {activeTool.rating} / 5
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">عدد المصوتين:</span>
                      <span className="font-semibold text-zinc-300">{activeTool.reviewsCount + (userRatings[activeTool.id] ? 1 : 0)} تصويت</span>
                    </div>
                  </div>

                  {/* Primary Call to Action buttons */}
                  <div className="space-y-2.5">
                    <a
                      href={activeTool.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-black text-sm py-3 px-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 w-full shadow-lg focus:outline-none"
                    >
                      زيارة الموقع الرسمي للأداة
                      <ExternalLink size={16} />
                    </a>
                    
                    <button
                      onClick={() => toggleFavorite(activeTool.id)}
                      className={`w-full font-bold text-xs py-3 px-4 rounded-xl border transition-all flex items-center justify-center gap-1.5 focus:outline-none ${
                        favorites.includes(activeTool.id)
                          ? 'bg-rose-950/30 text-rose-400 border-rose-900/50 hover:bg-zinc-950'
                          : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border-zinc-900'
                      }`}
                    >
                      <Heart size={14} className={favorites.includes(activeTool.id) ? 'fill-rose-500 text-rose-500' : ''} />
                      {favorites.includes(activeTool.id) ? 'إزالة من مفضلتي' : 'إضافة لأدواتي المفضلة'}
                    </button>
                  </div>

                </div>

                {/* Left section: Features, pros/cons, rating system, recommendations */}
                <div className="lg:col-span-8 space-y-6 pt-4 lg:pt-0">
                  
                  {/* Detailed review description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-md text-zinc-200 border-b border-zinc-900 pb-2">نظرة عامة ومراجعة شاملة</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed whitespace-pre-line">
                      {activeTool.longDescription}
                    </p>
                  </div>

                  {/* Checklist of features */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs text-zinc-400 uppercase tracking-wider">أبرز الوظائف والمميزات</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeTool.features.map((feat, index) => (
                        <div key={index} className="bg-zinc-950/40 p-3 rounded-xl border border-zinc-900/50 flex items-center gap-2 justify-start">
                          <Check className="text-cyan-400 shrink-0" size={14} />
                          <span className="text-xs text-zinc-300 leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros and Cons Split cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Pros card */}
                    <div className="bg-emerald-950/10 border border-emerald-900/20 rounded-2xl p-4 space-y-2 text-right">
                      <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5 justify-start">
                        <ThumbsUp size={14} />
                        الإيجابيات والمميزات
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-400 leading-normal font-light">
                        {activeTool.pros.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-1 justify-start">
                            <span className="text-emerald-500">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons card */}
                    <div className="bg-rose-950/10 border border-rose-900/20 rounded-2xl p-4 space-y-2 text-right">
                      <span className="text-xs font-black text-rose-400 flex items-center gap-1.5 justify-start">
                        <ThumbsDown size={14} />
                        السلبيات والعيوب
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-400 leading-normal font-light">
                        {activeTool.cons.map((c, idx) => (
                          <li key={idx} className="flex items-start gap-1 justify-start">
                            <span className="text-rose-500">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Star Rating persistence box */}
                  <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-900 space-y-3">
                    <span className="text-xs font-bold text-zinc-400 block">قم بتقييم هذه الأداة والمشاركة برأيك:</span>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(starNum => {
                          const isHoveredOrActive = (userRatings[activeTool.id] || 0) >= starNum;
                          return (
                            <button
                              key={starNum}
                              onClick={() => handleRateTool(activeTool.id, starNum)}
                              className="text-zinc-600 hover:text-amber-400 focus:outline-none transition-colors"
                            >
                              <Star
                                size={22}
                                className={isHoveredOrActive ? 'fill-amber-400 text-amber-400' : 'text-zinc-700'}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {userRatings[activeTool.id] ? (
                        <span className="text-xs text-emerald-400 font-bold">لقد قمت بتقييم الأداة بـ {userRatings[activeTool.id]} نجوم ✓</span>
                      ) : (
                        <span className="text-xs text-zinc-500 font-light">انقر لتحديد عدد النجوم المفضلة لديك للأداة.</span>
                      )}
                    </div>

                    {ratedFlash === activeTool.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold p-2.5 rounded-xl text-center"
                      >
                        شكراً جزيلاً لتقييمك ومشاركتك الفعالة! تم دمج تقييمك محلياً بنجاح وتحديث التصويت.
                      </motion.div>
                    )}

                  </div>

                  {/* Similar Recommended Tools */}
                  {activeTool.similarTools && activeTool.similarTools.length > 0 && (
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-zinc-400 block">أدوات مشابهة موصى بها:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeTool.similarTools.map(simId => {
                          const simTool = TOOLS.find(t => t.id === simId);
                          if (!simTool) return null;
                          return (
                            <div
                              key={simId}
                              onClick={() => {
                                setActiveToolId(simId);
                                setRatedFlash(null);
                              }}
                              className="bg-zinc-950 hover:bg-zinc-900/50 border border-zinc-900 rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold ${simTool.logoColor}`}>
                                  {simTool.name.slice(0, 2)}
                                </div>
                                <div className="text-right">
                                  <h5 className="font-bold text-xs text-zinc-200">{simTool.arabicName}</h5>
                                  <span className="text-[10px] text-zinc-500 font-mono">({simTool.name})</span>
                                </div>
                              </div>
                              <span className="text-[9px] bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded">
                                {simTool.priceType === 'free' ? 'مجاني' : 'فريميوم'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE BOTTOM FILTER MODAL DRAW FOR DIRECTORY */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm lg:hidden flex items-end"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border-t border-zinc-800 rounded-t-3xl w-full p-6 space-y-6 text-right max-h-[80vh] overflow-y-auto"
            >
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-lg text-zinc-100">فلاتر وأقسام البحث</h3>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-950 text-zinc-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">الأقسام والـتخصصات</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setIsSidebarOpen(false);
                    }}
                    className={`text-right p-2.5 rounded-xl text-xs font-medium transition-all ${
                      selectedCategory === null 
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                        : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    كل الأدوات ({TOOLS.length})
                  </button>
                  {CATEGORIES.map(cat => {
                    const count = TOOLS.filter(t => t.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`text-right p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                          selectedCategory === cat.id 
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                            : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <span className="truncate">{cat.name.split(' ')[1] || cat.name}</span>
                        <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1 rounded">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pricing models */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-zinc-400 block">نموذج التسعير</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: null, label: 'كل الأسعار' },
                    { id: 'free', label: 'مجاني بالكامل' },
                    { id: 'freemium', label: 'فريميوم / تجربة' },
                    { id: 'paid', label: 'مدفوع بالكامل' },
                  ].map(price => (
                    <button
                      key={price.label}
                      onClick={() => {
                        setSelectedPriceType(price.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`text-right p-2.5 rounded-xl text-xs font-medium transition-all ${
                        selectedPriceType === price.id 
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                          : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
