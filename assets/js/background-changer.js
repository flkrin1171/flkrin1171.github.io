// مصفوفة مسارات صور الخلفيات
const backgrounds = [
    '/assets/images/backgrounds/anime-bg1.jpg',
    '/assets/images/backgrounds/anime-bg2.jpg',
    '/assets/images/backgrounds/anime-bg3.jpg',
    '/assets/images/backgrounds/anime-bg4.jpg',
    '/assets/images/backgrounds/anime-bg5.jpg',
    '/assets/images/backgrounds/anime-bg6.jpg',
    '/assets/images/backgrounds/anime-bg7.jpg',
    '/assets/images/backgrounds/anime-bg8.jpg',
    '/assets/images/backgrounds/anime-bg9.jpg',
    '/assets/images/backgrounds/anime-bg10.jpg'
];

let currentIndex = 0;

// دالة تغيير الخلفية
function changeBackground() {
    // تغيير إلى الصورة التالية
    currentIndex = (currentIndex + 1) % backgrounds.length;
    
    // تأثير التلاشي
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    
    console.log('تم تغيير الخلفية إلى:', backgrounds[currentIndex]); // للتصحيح
}

// تغيير الخلفية كل 10 ثواني
setInterval(changeBackground, 10000);

// تعيين خلفية أولى عشوائية عند تحميل الصفحة
window.onload = function() {
    // اختيار صورة عشوائية في البداية
    currentIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
};
