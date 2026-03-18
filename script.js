// Fragrances Data
const fragrances = [
  {
    id: 'vainilla-mose',
    name: 'Vainilla Mose',
    description: 'Una oda a la feminidad clásica, donde la calidez de la vainilla se entrelaza con la sofisticación moderna.',
    notes: {
      top: 'Flor de Vainilla, Orquídea Blanca',
      heart: 'Ámbar Cálido, Caramelo Suave',
      base: 'Almizcle Blanco, Sándalo'
    },
    colorCode: '#8B5E3C',
    bgLightCode: '#FDF5E6',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mango-bloom',
    name: 'Mango Bloom',
    description: 'La energía vibrante del trópico capturada en un frasco. Un despertar sensorial lleno de luz y alegría.',
    notes: {
      top: 'Mango Madurado al Sol, Papaya',
      heart: 'Flor de Loto, Hibisco',
      base: 'Coco Fresco, Vetiver'
    },
    colorCode: '#E67E22',
    bgLightCode: '#FFF5E6',
    image: 'MangoBloom.jpg'
  },
  {
    id: 'euforia',
    name: 'Euforia',
    description: 'Para la mujer que camina con seguridad. Una fragancia intensa que deja una estela de misterio y poder.',
    notes: {
      top: 'Pimienta Rosa, Bergamota',
      heart: 'Rosa de Damasco, Jazmín Nocturno',
      base: 'Pachulí, Cuero Fino'
    },
    colorCode: '#6C3483',
    bgLightCode: '#F4ECF7',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aura',
    name: 'Aura',
    description: 'La serenidad de un amanecer. Un aroma equilibrado que refleja la paz interior y la autenticidad pura.',
    notes: {
      top: 'Té Blanco, Lavanda',
      heart: 'Lirio de los Valles, Salvia',
      base: 'Cedro, Musgo de Roble'
    },
    colorCode: '#2E86C1',
    bgLightCode: '#EBF5FB',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800'
  }
];

let activeFragrance = 0;

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

const fragranceList = document.getElementById('fragrance-list');
const fragranceImg = document.getElementById('fragrance-img');
const fragranceBg = document.getElementById('fragrance-bg');
const noteTop = document.getElementById('note-top');
const noteBase = document.getElementById('note-base');

// Mobile Menu Logic
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu?.classList.contains('translate-x-full');
    if (isOpen) {
        mobileMenu?.classList.add('translate-x-full');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
    } else {
        mobileMenu?.classList.remove('translate-x-full');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
    }
    });
}

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('translate-x-full');
    menuIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
  });
});

// Fragrance Showcase Logic
function updateFragrance(index) {
  activeFragrance = index;
  const frag = fragrances[index];

  // Update Image and Background with fade effect
  if (fragranceImg) {
    fragranceImg.style.opacity = '0';
    setTimeout(() => {
      fragranceImg.src = frag.image;
      fragranceImg.alt = frag.name;
      fragranceImg.style.opacity = '1';
    }, 300);
  }

  if (fragranceBg) {
    fragranceBg.style.backgroundColor = frag.bgLightCode;
  }

  if (noteTop) noteTop.textContent = frag.notes.top;
  if (noteBase) noteBase.textContent = frag.notes.base;

  renderFragranceList();
}

function renderFragranceList() {
  if (!fragranceList) return;
  fragranceList.innerHTML = '';

  fragrances.forEach((frag, index) => {
    const isActive = activeFragrance === index;
    const item = document.createElement('div');
    item.className = `group text-left relative py-6 border-b border-brand-ink/5 cursor-pointer`;
    
    item.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <span class="font-serif text-2xl transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}">
            0${index + 1}
          </span>
          <h3 class="text-4xl font-serif transition-all duration-500 ${isActive ? 'translate-x-4' : 'group-hover:translate-x-2'}">
            ${frag.name}
          </h3>
        </div>
        ${isActive ? `<div class="w-3 h-3 rounded-full" style="background-color: ${frag.colorCode};"></div>` : ''}
      </div>
      
      <div class="transition-all duration-500 overflow-hidden ${isActive ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}">
        <div class="pb-4 space-y-6">
          <p class="text-lg text-brand-ink/60 leading-relaxed">
            ${frag.description}
          </p>
          
          <div class="grid grid-cols-1 gap-4">
            <div class="p-6 rounded-2xl bg-white/50 border border-brand-ink/5">
              <div class="flex items-center gap-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-gold"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                <span class="text-[10px] uppercase tracking-widest font-bold">Corazón de la Fragancia</span>
              </div>
              <p class="font-serif italic text-xl">${frag.notes.heart}</p>
            </div>
          </div>

          <button class="flex items-center gap-3 text-brand-ink font-bold text-xs uppercase tracking-widest group/btn">
            Explorar Kit Completo 
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-500 group-hover/btn:scale-110" style="background-color: ${frag.colorCode};">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
          </button>
        </div>
      </div>
    `;

    item.addEventListener('click', () => updateFragrance(index));
    fragranceList.appendChild(item);
  });
}

// Reveal on Scroll Logic
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Parallax Hero Logic
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Initial Render
renderFragranceList();
updateFragrance(0);
