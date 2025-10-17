const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const navRibalta = document.querySelector('.Ribalta');
const navbar = document.querySelector('.navbar');

// Initial states
navRibalta.style.opacity = '0';
navRibalta.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  
  // Calculate progress: 0 (top) → 1 (bottom of viewport)
  const progress = Math.min(scrollY / viewportHeight, 1);
  
  // Shrink hero text from full size (1) to 0.6
  const heroScale = 1 - progress * 0.4;
  heroTitle.style.transform = `scale(${heroScale})`;
  heroSubtitle.style.transform = `scale(${heroScale})`;

  // Navbar Ribalta appears and grows as hero goes out of view
  const heroRect = heroTitle.getBoundingClientRect();
  const navbarHeight = navbar.offsetHeight;
  
  if (heroRect.top < navbarHeight) {
    // Fade in and grow navbar Ribalta
    navRibalta.style.opacity = '1';
    const navScale = 0.8 + progress * 0.2; // starts smaller, grows slightly
    navRibalta.style.transform = `scale(${navScale})`;
  } else {
    // Fade out and shrink navbar Ribalta as hero returns
    navRibalta.style.opacity = '0';
    navRibalta.style.transform = 'scale(0.8)';
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroImage.classList.add('in-view');
        } else {
          heroImage.classList.remove('in-view');
        }
      });
    }, { threshold: 0.3 });
    observer.observe(heroImage);
  });


  const heading = document.querySelector('.bold-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heading.classList.add('in-view');
      } else {
        heading.classList.remove('in-view'); // reset when it leaves the view
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(heading);
  
  const aboutImg = document.querySelector('.about-image img');

const aboutImageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutImg.classList.add('in-view');
    } else {
      aboutImg.classList.remove('in-view');
    }
  });
}, { threshold: 0.3 });

aboutImageObserver.observe(aboutImg);

const piatoSection = document.querySelector('.main-text').parentElement; // or use a specific container class

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      piatoSection.classList.add('in-view');
    } else {
      piatoSection.classList.remove('in-view'); // allows replay
    }
  });
}, { threshold: 0.3 });

imageObserver.observe(piatoSection);


const menuImg = document.querySelector('.menu-image img');

const menuImageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     menuImg.classList.add('in-view');
    } else {
      menuImg.classList.remove('in-view');
    }
  });
}, { threshold: 0.1});

menuImageObserver.observe(menuImg);