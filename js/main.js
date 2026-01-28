// Translations
const translations = {
    en: {
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Crafting Digital Excellence',
        'hero.subtitle': 'We are a professional web development team, creating unique online presence for your brand',
        'hero.cta': 'Start Project',
        'hero.portfolio': 'View Portfolio',
        'services.title': 'Our Services',
        'services.design.title': 'UI/UX Design',
        'services.design.desc': 'User-centered design philosophy, creating beautiful and intuitive interfaces',
        'services.web.title': 'Web Development',
        'services.web.desc': 'Responsive website development, ensuring perfect display on all devices',
        'services.ecommerce.title': 'E-Commerce Solutions',
        'services.ecommerce.desc': 'Full-featured online stores to help grow your business',
        'services.seo.title': 'SEO Optimization',
        'services.seo.desc': 'Search engine optimization services to increase visibility and traffic',
        'portfolio.title': 'Featured Works',
        'portfolio.tech.title': 'Tech Company Website',
        'portfolio.tech.cat': 'Corporate Website',
        'portfolio.fashion.title': 'Fashion E-Commerce',
        'portfolio.fashion.cat': 'E-Commerce',
        'portfolio.fnb.title': 'F&B Brand Website',
        'portfolio.fnb.cat': 'Brand Showcase',
        'portfolio.edu.title': 'Education Platform',
        'portfolio.edu.cat': 'Online Education',
        'about.title': 'About Us',
        'about.desc': 'Ruby Media was established in 2020, a creative studio specializing in website design and development. We believe great design brings value to brands, committed to creating unique digital experiences for every client.',
        'about.projects': 'Projects',
        'about.clients': 'Clients',
        'about.years': 'Years',
        'contact.title': 'Contact Us',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.address': 'Address',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Project Requirements',
        'contact.form.submit': 'Send Message',
        'footer.tagline': 'Crafting Digital Excellence',
        'form.success': 'Thank you for your message! We will contact you soon.'
    },
    zh: {
        'nav.services': '服务',
        'nav.portfolio': '案例',
        'nav.about': '关于',
        'nav.contact': '联系',
        'hero.title': '打造卓越数字体验',
        'hero.subtitle': '我们是专业的网站建设团队，为您的品牌创造独特的线上形象',
        'hero.cta': '开始项目',
        'hero.portfolio': '查看案例',
        'services.title': '我们的服务',
        'services.design.title': 'UI/UX 设计',
        'services.design.desc': '以用户为中心的设计理念，打造美观且易用的界面体验',
        'services.web.title': '网站开发',
        'services.web.desc': '响应式网站开发，确保在所有设备上完美呈现',
        'services.ecommerce.title': '电商解决方案',
        'services.ecommerce.desc': '功能完善的在线商城，助力您的业务增长',
        'services.seo.title': 'SEO 优化',
        'services.seo.desc': '搜索引擎优化服务，提升网站曝光度和流量',
        'portfolio.title': '精选案例',
        'portfolio.tech.title': '科技公司官网',
        'portfolio.tech.cat': '企业官网',
        'portfolio.fashion.title': '时尚电商平台',
        'portfolio.fashion.cat': '电子商务',
        'portfolio.fnb.title': '餐饮品牌网站',
        'portfolio.fnb.cat': '品牌展示',
        'portfolio.edu.title': '教育平台',
        'portfolio.edu.cat': '在线教育',
        'about.title': '关于我们',
        'about.desc': 'Ruby Media 成立于 2020 年，是一家专注于网站设计与开发的创意工作室。我们相信优秀的设计能够为品牌带来价值，致力于为每一位客户打造独一无二的数字体验。',
        'about.projects': '完成项目',
        'about.clients': '合作客户',
        'about.years': '年经验',
        'contact.title': '联系我们',
        'contact.email': '邮箱',
        'contact.phone': '电话',
        'contact.address': '地址',
        'contact.form.name': '您的姓名',
        'contact.form.email': '您的邮箱',
        'contact.form.message': '项目需求描述',
        'contact.form.submit': '发送消息',
        'footer.tagline': '打造卓越数字体验',
        'form.success': '感谢您的留言！我们会尽快与您联系。'
    },
    ms: {
        'nav.services': 'Perkhidmatan',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'Tentang Kami',
        'nav.contact': 'Hubungi',
        'hero.title': 'Mencipta Kecemerlangan Digital',
        'hero.subtitle': 'Kami adalah pasukan pembangunan web profesional, mencipta kehadiran dalam talian yang unik untuk jenama anda',
        'hero.cta': 'Mulakan Projek',
        'hero.portfolio': 'Lihat Portfolio',
        'services.title': 'Perkhidmatan Kami',
        'services.design.title': 'Reka Bentuk UI/UX',
        'services.design.desc': 'Falsafah reka bentuk berpusatkan pengguna, mencipta antara muka yang cantik dan intuitif',
        'services.web.title': 'Pembangunan Web',
        'services.web.desc': 'Pembangunan laman web responsif, memastikan paparan sempurna pada semua peranti',
        'services.ecommerce.title': 'Penyelesaian E-Dagang',
        'services.ecommerce.desc': 'Kedai dalam talian dengan ciri lengkap untuk membantu mengembangkan perniagaan anda',
        'services.seo.title': 'Pengoptimuman SEO',
        'services.seo.desc': 'Perkhidmatan pengoptimuman enjin carian untuk meningkatkan keterlihatan dan trafik',
        'portfolio.title': 'Karya Terpilih',
        'portfolio.tech.title': 'Laman Web Syarikat Teknologi',
        'portfolio.tech.cat': 'Laman Web Korporat',
        'portfolio.fashion.title': 'E-Dagang Fesyen',
        'portfolio.fashion.cat': 'E-Dagang',
        'portfolio.fnb.title': 'Laman Web Jenama F&B',
        'portfolio.fnb.cat': 'Pameran Jenama',
        'portfolio.edu.title': 'Platform Pendidikan',
        'portfolio.edu.cat': 'Pendidikan Dalam Talian',
        'about.title': 'Tentang Kami',
        'about.desc': 'Ruby Media ditubuhkan pada tahun 2020, sebuah studio kreatif yang mengkhusus dalam reka bentuk dan pembangunan laman web. Kami percaya reka bentuk yang hebat membawa nilai kepada jenama, komited untuk mencipta pengalaman digital yang unik untuk setiap pelanggan.',
        'about.projects': 'Projek',
        'about.clients': 'Pelanggan',
        'about.years': 'Tahun',
        'contact.title': 'Hubungi Kami',
        'contact.email': 'E-mel',
        'contact.phone': 'Telefon',
        'contact.address': 'Alamat',
        'contact.form.name': 'Nama Anda',
        'contact.form.email': 'E-mel Anda',
        'contact.form.message': 'Keperluan Projek',
        'contact.form.submit': 'Hantar Mesej',
        'footer.tagline': 'Mencipta Kecemerlangan Digital',
        'form.success': 'Terima kasih atas mesej anda! Kami akan menghubungi anda tidak lama lagi.'
    },
    ta: {
        'nav.services': 'சேவைகள்',
        'nav.portfolio': 'படைப்புகள்',
        'nav.about': 'எங்களைப் பற்றி',
        'nav.contact': 'தொடர்பு',
        'hero.title': 'டிஜிட்டல் சிறப்பை உருவாக்குதல்',
        'hero.subtitle': 'நாங்கள் ஒரு தொழில்முறை வலை மேம்பாட்டுக் குழு, உங்கள் பிராண்டிற்கு தனித்துவமான ஆன்லைன் இருப்பை உருவாக்குகிறோம்',
        'hero.cta': 'திட்டத்தைத் தொடங்கு',
        'hero.portfolio': 'படைப்புகளைக் காண்',
        'services.title': 'எங்கள் சேவைகள்',
        'services.design.title': 'UI/UX வடிவமைப்பு',
        'services.design.desc': 'பயனர் மையமான வடிவமைப்பு தத்துவம், அழகான மற்றும் உள்ளுணர்வு இடைமுகங்களை உருவாக்குதல்',
        'services.web.title': 'வலை மேம்பாடு',
        'services.web.desc': 'பதிலளிக்கக்கூடிய வலைத்தள மேம்பாடு, அனைத்து சாதனங்களிலும் சரியான காட்சியை உறுதி செய்தல்',
        'services.ecommerce.title': 'இ-வணிக தீர்வுகள்',
        'services.ecommerce.desc': 'உங்கள் வணிகத்தை வளர்க்க உதவும் முழு அம்சமான ஆன்லைன் கடைகள்',
        'services.seo.title': 'SEO மேம்படுத்தல்',
        'services.seo.desc': 'தெரிவுநிலை மற்றும் போக்குவரத்தை அதிகரிக்க தேடுபொறி மேம்படுத்தல் சேவைகள்',
        'portfolio.title': 'சிறந்த படைப்புகள்',
        'portfolio.tech.title': 'தொழில்நுட்ப நிறுவன வலைத்தளம்',
        'portfolio.tech.cat': 'கார்ப்பரேட் வலைத்தளம்',
        'portfolio.fashion.title': 'பேஷன் இ-வணிகம்',
        'portfolio.fashion.cat': 'இ-வணிகம்',
        'portfolio.fnb.title': 'உணவு பிராண்ட் வலைத்தளம்',
        'portfolio.fnb.cat': 'பிராண்ட் காட்சி',
        'portfolio.edu.title': 'கல்வி தளம்',
        'portfolio.edu.cat': 'ஆன்லைன் கல்வி',
        'about.title': 'எங்களைப் பற்றி',
        'about.desc': 'Ruby Media 2020 இல் நிறுவப்பட்டது, வலைத்தள வடிவமைப்பு மற்றும் மேம்பாட்டில் நிபுணத்துவம் பெற்ற ஒரு படைப்பாற்றல் ஸ்டுடியோ. சிறந்த வடிவமைப்பு பிராண்டுகளுக்கு மதிப்பைக் கொண்டுவருகிறது என்று நாங்கள் நம்புகிறோம்.',
        'about.projects': 'திட்டங்கள்',
        'about.clients': 'வாடிக்கையாளர்கள்',
        'about.years': 'ஆண்டுகள்',
        'contact.title': 'எங்களைத் தொடர்புகொள்ளுங்கள்',
        'contact.email': 'மின்னஞ்சல்',
        'contact.phone': 'தொலைபேசி',
        'contact.address': 'முகவரி',
        'contact.form.name': 'உங்கள் பெயர்',
        'contact.form.email': 'உங்கள் மின்னஞ்சல்',
        'contact.form.message': 'திட்ட தேவைகள்',
        'contact.form.submit': 'செய்தி அனுப்பு',
        'footer.tagline': 'டிஜிட்டல் சிறப்பை உருவாக்குதல்',
        'form.success': 'உங்கள் செய்திக்கு நன்றி! நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்.'
    }
};

let currentLang = 'en';

// Language switcher
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ms' ? 'ms-MY' : lang === 'ta' ? 'ta-SG' : 'en';
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// Load saved language preference
const savedLang = localStorage.getItem('preferredLang');
if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    alert(translations[currentLang]['form.success']);
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
