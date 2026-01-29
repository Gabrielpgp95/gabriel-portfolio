// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const isMobile = window.innerWidth <= 768;
        const headerOffset = isMobile ? 120 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle contact button
function handleContact() {
    window.location.href = 'mail.html';
}

// Navigation scroll handler (wrapped in DOMContentLoaded to ensure elements exist)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navLinks.length) return;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            if (targetId === 'home') {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                scrollToSection(targetId);
            }
        });
    });
}

// Offer Modal Functions
const offers = {
    0: {
        title: 'Pachet Instalare CCTV',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: '199€ - 649€',
        description: 'Sistem complet de supraveghere video HD/4K',
        features: [
            '✓ 2-8 Camere HD/4K de Securitate',
            '✓ DVR/NVR cu Stocare 1-2TB',
            '✓ Instalare Profesională Certificată',
            '✓ Configurare Acces Remote (Mobil & PC)',
            '✓ Cablare Completă Inclusă',
            '✓ Garanție 2 Ani & Suport Tehnic',
            '✓ Consultanță Gratuită la Locație'
        ]
    },
    1: {
        title: 'Sistem Uși Automate Inteligente',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: 'Contactează-mă pentru ofertă',
        description: 'Uși automate profesionale cu control acces',
        features: [
            '✓ Motor Industrial de Calitate Superioară',
            '✓ Sistem Control Acces (Card/PIN/Amprentă)',
            '✓ Senzori de Siguranță & Protecție',
            '✓ Telecomandă & Acces Mobil',
            '✓ Montaj & Programare Completă',
            '✓ Garanție 1 An & Suport Tehnic',
            '✓ Prima Revizie Gratuită'
        ]
    },
    2: {
        title: 'Sistem Inteligent Parcare',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: 'Contactează-mă pentru ofertă',
        description: 'Management automat parcare cu LPR',
        features: [
            '✓ Barieră Automată Premium',
            '✓ Cameră LPR Recunoaștere Număr',
            '✓ Software Management Parcare',
            '✓ Plăți Automate (Opțional)',
            '✓ Raportare & Statistici Detaliate',
            '✓ Integrare Sistem Existent',
            '✓ Training Complet & Suport 24/7'
        ]
    },
    3: {
        title: 'Poartă Automată Rezidențială',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: '499€ - 899€',
        description: 'Automatizare poartă culisantă/batantă',
        features: [
            '✓ Motor Premium (Culisantă/Batantă)',
            '✓ 2 Telecomenzi Incluse',
            '✓ Fotocele & Senzori Siguranță',
            '✓ Deschidere Manuală la Pană Curent',
            '✓ Lampă Semnalizare & Sonerie',
            '✓ Garanție Extinsă 2 Ani 1An persoane juridice',
            '✓ Prima Revizie Gratuită'
        ]
    },
    4: {
        title: 'Contract Mentenanță Sisteme',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: '99€ - 199€/an',
        description: 'Întreținere preventivă profesională',
        features: [
            '✓ Inspecții Anuale sau Semestriale Programate',
            '✓ Curățare & Calibrare Echipamente',
            '✓ Actualizări Software & Firmware',
            '✓ Intervenții de Urgență Prioritare',
            '✓ Reducere 30% la Reparații',
            '✓ Raport Tehnic Detaliat',
            '✓ Suport Telefonic Dedicat',
            '✓ Preturi Speciale pentru eventualele reparații'
        ]
    },
    5: {
        title: 'Sistem Alarmă & Securitate',
        subtitle: 'Prețurile sunt orientative și pot varia în funcție de specificațiile proiectului.',
        price: 'Contactează-mă pentru ofertă',
        description: 'Protecție completă antiefracție',
        features: [
            '✓ Centrală Alarmă Wireless/Cablată',
            '✓ 5-10 Senzori Mișcare & Uși/Ferestre',
            '✓ Sirenă Interioară & Exterioară',
            '✓ Notificări Instant pe Mobil',
            '✓ Integrare CCTV (Opțional)',
            '✓ Instalare Profesională',
            '✓ Garanție 2 Ani'
        ]
    }
};

function showOffer(projectIndex) {
    const modal = document.getElementById('offerModal');
    if (!modal) return;
    
    const offer = offers[projectIndex] || offers[0];
    
    const titleEl = document.getElementById('offerTitle');
    const subtitleEl = document.getElementById('offerSubtitle');
    const priceEl = document.getElementById('offerPrice');
    const descEl = document.getElementById('offerDescription');
    const featuresList = document.getElementById('offerFeatures');
    const offerBtn = document.getElementById('getOfferBtn');
    
    if (titleEl) titleEl.textContent = offer.title;
    if (subtitleEl) {
        if (offer.subtitle) {
            subtitleEl.textContent = offer.subtitle;
            subtitleEl.style.display = 'block';
        } else {
            subtitleEl.style.display = 'none';
        }
    }
    if (priceEl) priceEl.textContent = offer.price;
    if (descEl) descEl.textContent = offer.description;
    
    if (featuresList) {
        featuresList.innerHTML = '';
        offer.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    // Update button to pass project type to mail form
    if (offerBtn) {
        offerBtn.onclick = function() {
            window.location.href = 'mail.html?project=' + projectIndex;
        };
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOffer() {
    const modal = document.getElementById('offerModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll Reveal Animation with throttling
let isScrolling = false;
let isMobile = window.innerWidth <= 768;

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    
    const windowHeight = window.innerHeight;
    const elementVisible = isMobile ? 50 : 150;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Debounce resize for mobile check
let resizeTimer;
function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        isMobile = window.innerWidth <= 768;
    }, 250);
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Setup reveal elements
    const sections = document.querySelectorAll('.section, .project-card');
    
    sections.forEach((section, index) => {
        section.classList.add('reveal');
        if (!isMobile) {
            section.style.transitionDelay = `${index * 0.1}s`;
        }
    });
    
    // Initial reveal check
    reveal();
    
    // Add parallax effect to hero (desktop only)
    let parallaxHero;
    if (!isMobile) {
        parallaxHero = document.querySelector('.hero');
        if (parallaxHero) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                if (parallaxHero) {
                    parallaxHero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            }, { passive: true });
        }
    }

    // Setup project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            showOffer(index);
        });
    });
    
    // Close modal when clicking outside
    const modal = document.getElementById('offerModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeOffer();
            }
        });
    }
    
    // Setup phone button - toggle phone info display
    const phoneButton = document.getElementById('phoneButton');
    const phoneInfo = document.getElementById('phoneInfo');
    
    if (phoneButton && phoneInfo) {
        phoneButton.addEventListener('click', function(e) {
            // On mobile, let the tel: link work naturally
            if (window.innerWidth > 768) {
                // On desktop, prevent default and show info instead
                e.preventDefault();
                if (phoneInfo.style.display === 'none' || phoneInfo.style.display === '') {
                    phoneInfo.style.display = 'block';
                    phoneInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    phoneInfo.style.display = 'none';
                }
            }
            // On mobile (<=768px), the tel: link will work automatically
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't add ripple if navigating away
            if (this.getAttribute('onclick') || this.getAttribute('href')) {
                return;
            }
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Scroll event with requestAnimationFrame throttling
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        window.requestAnimationFrame(function() {
            reveal();
            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

// Resize handler
window.addEventListener('resize', handleResize, { passive: true });

