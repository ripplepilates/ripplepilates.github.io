  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mobileNav.classList.remove('open'));
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); }
    });
  }, { threshold:0.15 });
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));