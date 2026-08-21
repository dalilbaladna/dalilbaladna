/* ============================================
   دليل بلدنا - Dalil Baladna
   Main JavaScript - Translations, Dark Mode & Social Icons
   ============================================ */

// ---------- Translations Object ----------
const translations = {
    ar: {
        'nav.logo': 'دليل بلدنا',
        'nav.home': 'الرئيسية',
        'nav.features': 'المميزات',
        'nav.how': 'كيف يعمل؟',
        'nav.professionals': 'للمهنيين',
        'nav.download': 'تنزيل التطبيق',
        'nav.downloadBtn': 'تنزيل',
        'nav.privacy': 'سياسة الخصوصية',
        'hero.badge': 'تطبيق محلي رائد',
        'hero.title': 'دليل بلدنا',
        'hero.subtitle': 'كل ما تحتاجه، أقرب إليك',
        'hero.text': 'اكتشف الخدمات والمحلات والمهنيين القريبين منك بسهولة، وابحث عن المكان المناسب بسرعة.',
        'hero.downloadBtn': 'تنزيل التطبيق الآن',
        'hero.apkLabel': 'Android APK',
        'social.instagram': 'انستغرام',
        'social.facebook': 'فيسبوك',
        'social.telegram': 'تيليغرام',
        'phone.appName': 'دليل بلدنا',
        'phone.searchPlaceholder': 'ابحث عن خدمة أو مكان...',
        'phone.nearby1': 'سوبر ماركت',
        'phone.nearby2': 'مقهى',
        'phone.nearby3': 'صيدلية',
        'features.badge': 'مميزات التطبيق',
        'features.title': 'كل شيء قريب منك',
        'features.desc': 'أدوات بسيطة تساعدك في الوصول إلى الخدمة التي تبحث عنها بأقل وقت ممكن.',
        'features.f1.title': 'البحث الذكي',
        'features.f1.desc': 'ابحث عن الخدمات والأنشطة والمهنيين بسهولة.',
        'features.f2.title': 'الأقرب إليك',
        'features.f2.desc': 'اعثر على النتائج القريبة ورتبها حسب المسافة.',
        'features.f3.title': 'الصفحات المهنية',
        'features.f3.desc': 'أنشئ صفحة مهنية لعرض خدماتك ومعلومات التواصل.',
        'features.f4.title': 'الحساب الشخصي',
        'features.f4.desc': 'أدر حسابك وصفحاتك وخدماتك من مكان واحد.',
        'features.f5.title': 'التواصل المباشر',
        'features.f5.desc': 'تواصل مع أصحاب الصفحات والخدمات المتاحة.',
        'features.f6.title': 'الإشعارات',
        'features.f6.desc': 'تابع الحجوزات والتحديثات والتنبيهات المهمة.',
        'nearby.badge': 'البحث القريب',
        'nearby.title': 'ابحث عن كل ما تحتاجه بالقرب منك',
        'nearby.text': 'يعرض لك دليل بلدنا الخدمات والمهنيين والأماكن القريبة منك، مع إمكانية معرفة المسافة وترتيب النتائج من الأقرب إلى الأبعد.',
        'nearby.stat1': 'خدمة قريبة',
        'nearby.stat2': 'أقرب مسافة',
        'nearby.stat3': 'متاح دائمًا',
        'how.badge': 'خطوات بسيطة',
        'how.title': 'كيف يعمل دليل بلدنا؟',
        'how.step1.title': 'نزّل التطبيق',
        'how.step1.desc': 'اضغط زر التنزيل وثبّت التطبيق على جهازك.',
        'how.step2.title': 'ابحث',
        'how.step2.desc': 'اختر القسم أو اكتب ما تبحث عنه.',
        'how.step3.title': 'اختر الأقرب',
        'how.step3.desc': 'قارن النتائج والمسافات واختر الخدمة المناسبة.',
        'pro.badge': 'للمهنيين',
        'pro.title': 'هل لديك مهنة أو نشاط؟',
        'pro.text': 'اجعل عملك أقرب إلى الناس. أنشئ صفحة مهنية وعرّف الناس بخدماتك وموقعك وطرق التواصل معك.',
        'pro.downloadBtn': 'تنزيل التطبيق الآن',
        'pro.cardTitle': 'صفحة مهنية',
        'pro.cardText': 'اعرض خدماتك، موقعك، وطرق التواصل.',
        'pro.cardTitle2': 'وصول أوسع',
        'pro.cardText2': 'اجعل عملاءك يجدونك بسهولة.',
        'download.title': 'حمّل دليل بلدنا الآن',
        'download.text': 'اضغط الزر بالأسفل ليبدأ تنزيل ملف التطبيق مباشرة.',
        'download.btn': 'تنزيل التطبيق APK',
        'download.note': 'التنزيل متاح لأجهزة Android.',
        'footer.tagline': 'كل ما تحتاجه، أقرب إليك.',
        'footer.linksTitle': 'روابط سريعة',
        'footer.downloadTitle': 'تنزيل التطبيق',
        'footer.downloadText': 'حمّل التطبيق مجانًا لأجهزة Android.',
        'footer.downloadBtn': 'تنزيل APK',
        'footer.rights': 'جميع الحقوق محفوظة',
    },
    en: {
        'nav.logo': 'Dalil Baladna',
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.how': 'How it Works',
        'nav.professionals': 'For Professionals',
        'nav.download': 'Download',
        'nav.downloadBtn': 'Download',
        'nav.privacy': 'Privacy Policy',
        'hero.badge': 'Leading Local App',
        'hero.title': 'Dalil Baladna',
        'hero.subtitle': 'Everything you need, closer to you',
        'hero.text': 'Discover services, shops, and professionals near you easily. Search for the right place quickly.',
        'hero.downloadBtn': 'Download Now',
        'hero.apkLabel': 'Android APK',
        'social.instagram': 'Instagram',
        'social.facebook': 'Facebook',
        'social.telegram': 'Telegram',
        'phone.appName': 'Dalil Baladna',
        'phone.searchPlaceholder': 'Search for a service or place...',
        'phone.nearby1': 'Supermarket',
        'phone.nearby2': 'Café',
        'phone.nearby3': 'Pharmacy',
        'features.badge': 'App Features',
        'features.title': 'Everything is near you',
        'features.desc': 'Simple tools that help you reach the service you need in the shortest time possible.',
        'features.f1.title': 'Smart Search',
        'features.f1.desc': 'Easily search for services, activities, and professionals.',
        'features.f2.title': 'Closest to You',
        'features.f2.desc': 'Find nearby results and sort them by distance.',
        'features.f3.title': 'Professional Pages',
        'features.f3.desc': 'Create a professional page to showcase your services and contact info.',
        'features.f4.title': 'Personal Account',
        'features.f4.desc': 'Manage your account, pages, and services from one place.',
        'features.f5.title': 'Direct Contact',
        'features.f5.desc': 'Contact owners of available pages and services.',
        'features.f6.title': 'Notifications',
        'features.f6.desc': 'Follow bookings, updates, and important alerts.',
        'nearby.badge': 'Nearby Search',
        'nearby.title': 'Find everything you need near you',
        'nearby.text': 'Dalil Baladna shows you nearby services, professionals, and places, with distance info and results sorted from nearest to farthest.',
        'nearby.stat1': 'Nearby Services',
        'nearby.stat2': 'Closest Distance',
        'nearby.stat3': 'Always Available',
        'how.badge': 'Simple Steps',
        'how.title': 'How does Dalil Baladna work?',
        'how.step1.title': 'Download the app',
        'how.step1.desc': 'Click download and install the app on your device.',
        'how.step2.title': 'Search',
        'how.step2.desc': 'Choose a category or type what you are looking for.',
        'how.step3.title': 'Choose the nearest',
        'how.step3.desc': 'Compare results and distances and choose the right service.',
        'pro.badge': 'For Professionals',
        'pro.title': 'Do you have a profession or business?',
        'pro.text': 'Make your work closer to people. Create a professional page and introduce people to your services, location, and contact methods.',
        'pro.downloadBtn': 'Download Now',
        'pro.cardTitle': 'Professional Page',
        'pro.cardText': 'Showcase your services, location, and contact methods.',
        'pro.cardTitle2': 'Wider Reach',
        'pro.cardText2': 'Let your customers find you easily.',
        'download.title': 'Download Dalil Baladna Now',
        'download.text': 'Click the button below to start downloading the app file directly.',
        'download.btn': 'Download APK',
        'download.note': 'Available for Android devices.',
        'footer.tagline': 'Everything you need, closer to you.',
        'footer.linksTitle': 'Quick Links',
        'footer.downloadTitle': 'Download App',
        'footer.downloadText': 'Download the app free for Android devices.',
        'footer.downloadBtn': 'Download APK',
        'footer.rights': 'All rights reserved',
    }
};

// ---------- State ----------
let currentLang = localStorage.getItem('dalil_baladna_lang') || 'ar';
let currentTheme = localStorage.getItem('dalil_baladna_theme') || 'light';
let isMenuOpen = false;

// ---------- DOM Elements ----------
const html = document.documentElement;
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
const header = document.getElementById('siteHeader');

// ---------- Language Functions ----------
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dalil_baladna_lang', lang);
    applyTranslations();
    updateDirection();
    updateLangToggle();
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    // Update privacy link text
    const privacyLink = document.getElementById('privacyLink');
    if (privacyLink) {
        if (currentLang === 'ar') {
            privacyLink.href = 'privacy-policy.html';
        } else {
            privacyLink.href = 'privacy-policy-en.html';
        }
    }
}

function updateDirection() {
    if (currentLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
}

function updateLangToggle() {
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
}

// ---------- Theme Functions ----------
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('dalil_baladna_theme', theme);
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ---------- Mobile Menu ----------
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    hamburger.classList.toggle('active', isMenuOpen);
    mobileMenu.classList.toggle('active', isMenuOpen);
    hamburger.setAttribute('aria-expanded', isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

function closeMenu() {
    if (isMenuOpen) {
        isMenuOpen = false;
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// ---------- Header Scroll Effect ----------
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ---------- Scroll Animations ----------
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ---------- Active Nav Link on Scroll ----------
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        if (section.id) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
}

// ---------- Smooth Scroll for Anchor Links ----------
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                closeMenu();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ---------- Counter Animation for Stats ----------
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (!el.classList.contains('counted')) {
                    el.classList.add('counted');
                    animateCounter(el);
                }
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const text = el.textContent;
    const hasPlus = text.includes('+');
    const hasM = text.includes('m');
    const hasSlash = text.includes('/');
    const numStr = text.replace(/[^0-9]/g, '');
    if (!numStr) return;
    
    const target = parseInt(numStr);
    const duration = 1500;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easedProgress * target);
        
        let displayText = currentValue.toString();
        if (hasPlus) displayText += '+';
        if (hasM && text.endsWith('m')) displayText += 'm';
        if (hasSlash) displayText = '24/7';
        
        el.textContent = displayText;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            el.textContent = text;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ---------- Event Listeners ----------
langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});

themeToggle.addEventListener('click', toggleTheme);

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close mobile menu on window resize (if desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
    }
});

// Scroll events
window.addEventListener('scroll', () => {
    handleScroll();
    updateActiveNavLink();
});

// ---------- Initialize ----------
function init() {
    setLanguage(currentLang);
    setTheme(currentTheme);
    initScrollAnimations();
    initSmoothScroll();
    initCounters();
    handleScroll();
    updateActiveNavLink();
    console.log('Dalil Baladna website initialized successfully');
    console.log('Instagram: @dalil_baladna | Facebook: Dalil Baladna | Telegram: @dalilbaladna');
}

document.addEventListener('DOMContentLoaded', init);
