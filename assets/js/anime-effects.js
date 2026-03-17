// تأثير نجوم متحركة (أو بتلات كرز)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'anime-particle';
    particle.innerHTML = '🌸'; // يمكن تغييرها إلى ✨ أو 🌟
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 5 + 's';
    particle.style.fontSize = Math.random() * 20 + 15 + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.body.appendChild(particle);
    
    // حذف العنصر بعد انتهاء الحركة
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// إنشاء جسيم كل ثانيتين
setInterval(createParticle, 2000);
