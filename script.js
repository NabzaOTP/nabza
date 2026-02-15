
/**
 * Nabda OTP - Language Switching & Interactive Features
 * =====================================================
 * Handles dynamic translation, RTL support, and UI interactions
 */

// ============================================
// Translation Data
// ============================================
const translations = {
    en: {
        // Meta
        "meta.title": "Nabda OTP – The Cheapest WhatsApp API & Best OTP Service in Iraq",
        "meta.description": "Send unlimited WhatsApp OTPs with the first Arab WhatsApp Gateway. The most affordable API solution for Arab developers. Start for just $10/month.",
        
        // Navigation
        "nav.features": "Features",
        "nav.pricing": "Pricing",
        "nav.docs": "Docs",
        "nav.login": "Login",
        "nav.lang": "العربية",
        
        // Hero Section
        "hero.badge": "🚀 The most reliable WhatsApp verification platform",
        "hero.title": "The Cheapest & First WhatsApp Gateway in Iraq, Syria & MENA Region.",
        "hero.subtitle": "Send unlimited OTPs through our cloud gateway. The cheapest, most reliable API solution for developers. Direct integration with the most affordable pricing.",
        "hero.cta.primary": "Start Free Trial",
        "hero.cta.secondary": "View Documentation",
        "hero.price": "Starting at just <strong>$10/month</strong> — No per-message fees",
        
        // Code Terminal
        "code.comment1": "// Sending OTP via Nabda Gateway",
        "code.message": '"Your code is: 847291"',
        "code.comment2": "// ✓ Delivered instantly",
        
        // Stats
        "stats.businesses": "Businesses Trust Us",
        "stats.messages": "Messages Sent",
        "stats.uptime": "Uptime Guaranteed",
        "stats.reliable": "Most Reliable in MENA",
        
        // Features
        "features.title": "Why choose Nabda OTP ?",
        "features.subtitle": "The most affordable WhatsApp API with the best reliability. Built by Arab developers, for Arab developers🤍.",
        
        "features.cheapest.title": "Cheapest in Market",
        "features.cheapest.desc": "While others charge per message, we offer a flat monthly fee. Send unlimited WhatsApp messages for just $10/month — the most affordable API solution available.",
        "features.cheapest.highlight": "Save up to 90% compared to competitors",
        
        "features.local.title": "Local & Proud",
        "features.local.desc": "A local platform built specifically for Arab developers. We understand the local market and provide Arabic support with direct integration capabilities.",
        
        "features.developer.title": "Developer First",
        "features.developer.desc": "Clean RESTful API, comprehensive documentation, and SDKs for all major languages. Integrate our cloud gateway in minutes, not days.",
        
        "features.secure.title": "Enterprise Security",
        "features.secure.desc": "End-to-end encryption, secure authentication, and full compliance. Your data stays protected with our enterprise-grade infrastructure.",
        
        "features.fast.title": "Lightning Fast",
        "features.fast.desc": "Messages delivered in milliseconds. Our optimized cloud gateway ensures your OTPs reach users instantly, every single time.",
        
        "features.analytics.title": "Real-time Analytics",
        "features.analytics.desc": "Track delivery rates, monitor usage, and get insights with our comprehensive dashboard. Full visibility into your messaging operations.",
        
        // Pricing
        "pricing.title": "Simple, Transparent Pricing",
        "pricing.subtitle": "No hidden fees. No per-message charges. The best value WhatsApp API in Iraq.",
        "pricing.badge": "Best Value",
        "pricing.period": "/month",
        "pricing.tagline": "Everything you need to send unlimited messages",
        "pricing.feature1": "Unlimited WhatsApp Messages",
        "pricing.feature2": "No Per-Message Fee",
        "pricing.feature3": "10-Day Free Trial",
        "pricing.feature4": "RESTful API Access",
        "pricing.feature5": "Priority Support",
        "pricing.feature6": "Cancel Anytime",
        "pricing.cta": "Start Your Free Trial",
        "pricing.note": "No credit card required • Setup in 2 minutes",
        
        // CTA
        "cta.title": "Ready to send your first message?",
        "cta.subtitle": "Join 65+ Arab businesses using the cheapest WhatsApp API. Start your 10-day free trial today.",
        "cta.button": "Get Started Free",
        
        // Payment Methods
        "payment.title": "Accepted Payment Methods",
        "payment.soon": "Coming Soon",
        
        // WhatsApp
        "whatsapp.help": "Hello, how we can help you?",
        
        // Footer
        "footer.desc": "The first and best WhatsApp API solution for Iraq and the MENA region. Cloud gateway with direct integration for developers.",
        "footer.product": "Product",
        "footer.features": "Features",
        "footer.pricing": "Pricing",
        "footer.docs": "Documentation",
        "footer.status": "API Status",
        "footer.company": "Company",
        "footer.about": "About",
        "footer.contact": "Contact",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.copyright": "© 2026 Nabda OTP. All rights reserved. Nabda OTP is a product owned and operated by We Pioners Ltd",
        "footer.seo": "Cheapest WhatsApp API $10/mo Unlimited • Best Twilio Alternative • UltraMsg Alternative • SendGrid Alternative • WhatsApp OTP Iraq • WhatsApp API Syria • MENA WhatsApp Gateway • First Arab WhatsApp API • أرخص واتساب API • بديل تويليو • خدمة OTP العراق"
    },
    
    ar: {
        // Meta
        "meta.title": "نبضة OTP – أرخص خدمة واتساب API وأفضل بوابة OTP في العراق",
        "meta.description": "أرسل رسائل OTP واتساب غير محدودة عبر أول بوابة عربية. أرخص حل API للمطورين العرب. ابدأ بـ 10 دولار/شهرياً فقط.",
        
        // Navigation
        "nav.features": "المميزات",
        "nav.pricing": "الأسعار",
        "nav.docs": "التوثيق",
        "nav.login": "تسجيل الدخول",
        "nav.lang": "English",
        
        // Hero Section
        "hero.badge": "🚀 المنصة الأكثر موثوقية للتحقق عبر واتساب",
        "hero.title": "أرخص وأول بوابة واتساب في العراق وسوريا ومنطقة الشرق الأوسط.",
        "hero.subtitle": "أرسل رسائل OTP غير محدودة عبر بوابتنا السحابية. الحل الأرخص والأكثر موثوقية للمطورين. تكامل مباشر بأفضل الأسعار.",
        "hero.cta.primary": "ابدأ التجربة المجانية",
        "hero.cta.secondary": "عرض التوثيق",
        "hero.price": "ابتداءً من <strong>10$/شهرياً</strong> فقط — بدون رسوم لكل رسالة",
        
        // Code Terminal
        "code.comment1": "// جاري إرسال الرمز عبر بوابة نبضة",
        "code.message": '"رمز التحقق: 847291"',
        "code.comment2": "// ✓ تم التوصيل فوراً",
        
        // Stats
        "stats.businesses": "شركات تثق بنا",
        "stats.messages": "رسالة تم إرسالها",
        "stats.uptime": "وقت تشغيل مضمون",
        "stats.reliable": "الأكثر موثوقية في الشرق الأوسط",
        
        // Features
        "features.title": "لماذا تختار نبضة OTP ؟",
        "features.subtitle": "أرخص خدمة واتساب API مع أفضل موثوقية. صُممت بواسطة مطورين عرب، للمطورين العرب🤍.",
        
        "features.cheapest.title": "الأرخص في السوق",
        "features.cheapest.desc": "بينما يفرض الآخرون رسوماً لكل رسالة، نحن نقدم رسوماً شهرية ثابتة. أرسل رسائل واتساب غير محدودة مقابل 10 دولار/شهرياً فقط — أرخص حل API متاح.",
        "features.cheapest.highlight": "وفّر حتى 90% مقارنة بالمنافسين",
        
        "features.local.title": "محلي وبفخر",
        "features.local.desc": "منصة محلية صُممت خصيصاً للمطورين العرب. نفهم السوق المحلي ونقدم دعماً بالعربية مع إمكانيات تكامل مباشر.",
        
        "features.developer.title": "المطور أولاً",
        "features.developer.desc": "واجهة RESTful API نظيفة، توثيق شامل، وحزم تطوير لجميع اللغات الرئيسية. ادمج بوابتنا السحابية في دقائق، وليس أيام.",
        
        "features.secure.title": "أمان المؤسسات",
        "features.secure.desc": "تشفير من طرف إلى طرف، مصادقة آمنة، والتزام كامل. بياناتك محمية ببنيتنا التحتية المتطورة.",
        
        "features.fast.title": "سرعة البرق",
        "features.fast.desc": "الرسائل تُوصّل بالميلي ثانية. بوابتنا السحابية المُحسّنة تضمن وصول رموز OTP للمستخدمين فوراً، في كل مرة.",
        
        "features.analytics.title": "تحليلات فورية",
        "features.analytics.desc": "تتبع معدلات التوصيل، راقب الاستخدام، واحصل على رؤى عبر لوحة التحكم الشاملة. رؤية كاملة لعمليات الرسائل.",
        
        // Pricing
        "pricing.title": "تسعير بسيط وشفاف",
        "pricing.subtitle": "بدون رسوم خفية. بدون رسوم لكل رسالة. أفضل قيمة لـ WhatsApp API في العراق.",
        "pricing.badge": "أفضل قيمة",
        "pricing.period": "/شهرياً",
        "pricing.tagline": "كل ما تحتاجه لإرسال رسائل غير محدودة",
        "pricing.feature1": "رسائل واتساب غير محدودة",
        "pricing.feature2": "بدون رسوم لكل رسالة",
        "pricing.feature3": "تجربة مجانية 10 أيام",
        "pricing.feature4": "الوصول لـ RESTful API",
        "pricing.feature5": "دعم أولوية",
        "pricing.feature6": "إلغاء في أي وقت",
        "pricing.cta": "ابدأ تجربتك المجانية",
        "pricing.note": "لا حاجة لبطاقة ائتمان • الإعداد في دقيقتين",
        
        // CTA
        "cta.title": "مستعد لإرسال رسالتك الأولى؟",
        "cta.subtitle": "انضم إلى أكثر من 65 شركة عربية تستخدم أرخص WhatsApp API. ابدأ تجربتك المجانية لمدة 10 أيام اليوم.",
        "cta.button": "ابدأ مجاناً",
        
        // Payment Methods
        "payment.title": "طرق الدفع المقبولة",
        "payment.soon": "قريباً",
        
        // WhatsApp
        "whatsapp.help": "مرحباً، كيف يمكننا مساعدتك؟",
        
        // Footer
        "footer.desc": "أول وأفضل حل WhatsApp API للعراق ومنطقة الشرق الأوسط. بوابة سحابية مع تكامل مباشر للمطورين.",
        "footer.product": "المنتج",
        "footer.features": "المميزات",
        "footer.pricing": "الأسعار",
        "footer.docs": "التوثيق",
        "footer.status": "حالة API",
        "footer.company": "الشركة",
        "footer.about": "من نحن",
        "footer.contact": "اتصل بنا",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.copyright": "© 2026 نبضة OTP. جميع الحقوق محفوظة. نبضة OTP منتج مملوك ومُدار من قبل We Pioners Ltd",
        "footer.seo": "أرخص واتساب API 10$ شهرياً غير محدود • بديل تويليو • بديل الترامسج • بديل سيندغريد • خدمة OTP العراق • واتساب API سوريا • بوابة واتساب الشرق الأوسط • أول واتساب API عربي"
    }
};

// ============================================
// State Management
// ============================================
let currentLang = 'en';

// ============================================
// Language Switching
// ============================================
function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    
    // Update dir and lang attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            // Check if translation contains HTML (like <strong>)
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update meta tags
    updateMetaTags(lang);
    
    // Save preference
    localStorage.setItem('nabza-lang', lang);
    
    // Trigger custom event for other scripts
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
}

function updateMetaTags(lang) {
    const t = translations[lang];
    
    // Update title
    document.title = t['meta.title'];
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t['meta.description']);
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    
    if (ogTitle) ogTitle.setAttribute('content', t['meta.title']);
    if (ogDesc) ogDesc.setAttribute('content', t['meta.description']);
    if (twitterTitle) twitterTitle.setAttribute('content', t['meta.title']);
    if (twitterDesc) twitterDesc.setAttribute('content', t['meta.description']);
    
    // Update OG locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'ar' ? 'ar_IQ' : 'en_US');
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

// ============================================
// Mobile Navigation
// ============================================
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.querySelector('.nav');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active')) {
                if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    nav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });
        
        // Prevent menu clicks from closing
        if (mobileMenu) {
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
}

// ============================================
// Smooth Scrolling
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Stats Counter Animation
// ============================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'));
                animateNumber(element, target);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        // Format number
        if (target >= 1000000) {
            element.textContent = (current / 1000000).toFixed(current < target ? 1 : 0) + 'M+';
        } else if (target >= 1000) {
            element.textContent = Math.floor(current / 1000) + 'K+';
        } else {
            element.textContent = current + '+';
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .pricing-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// Header Scroll Effect
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================
// Keyboard Navigation
// ============================================
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape') {
            const nav = document.querySelector('.nav');
            const mobileToggle = document.getElementById('mobileToggle');
            if (nav && mobileToggle) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
}

// ============================================
// Terminal Typing Effect (Optional Enhancement)
// ============================================
function initTerminalEffect() {
    const terminal = document.querySelector('.terminal-body');
    if (terminal) {
        terminal.addEventListener('mouseenter', () => {
            terminal.style.transform = 'scale(1.02)';
        });
        terminal.addEventListener('mouseleave', () => {
            terminal.style.transform = 'scale(1)';
        });
    }
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('nabza-lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        setLanguage(savedLang);
    }
    
    // Initialize language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Initialize all features
    initMobileNav();
    initSmoothScroll();
    animateStats();
    initScrollAnimations();
    initHeaderScroll();
    initKeyboardNav();
    initTerminalEffect();
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// ============================================
// Export for potential external use
// ============================================
window.NabzaOTP = {
    setLanguage,
    toggleLanguage,
    getCurrentLang: () => currentLang
};

